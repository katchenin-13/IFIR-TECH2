// features/blog/presentation/components/BlogInteractions.tsx
'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageSquare, Share2, CheckCircle2, Send, Facebook, Twitter, Linkedin, Link2, X } from 'lucide-react'

interface BlogInteractionsProps {
  postTitle: string
  postSlug: string
}

export function BlogInteractions({ postTitle, postSlug }: BlogInteractionsProps) {
  const [copied, setCopied] = useState(false)
  const [showShareMenu, setShowShareMenu] = useState(false)
  const [showCommentForm, setShowCommentForm] = useState(false)
  const [commentSubmitted, setCommentSubmitted] = useState(false)
  const commentRef = useRef<HTMLDivElement>(null)

  const pageUrl = typeof window !== 'undefined' ? window.location.href : `https://ifirtech.ci/blog/${postSlug}`

  const handleCopyLink = () => {
    navigator.clipboard.writeText(pageUrl)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
    setShowShareMenu(false)
  }

  const handleShare = (platform: 'facebook' | 'twitter' | 'linkedin') => {
    const encodedUrl = encodeURIComponent(pageUrl)
    const encodedTitle = encodeURIComponent(postTitle)
    const urls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`
    }
    window.open(urls[platform], '_blank', 'width=600,height=400')
    setShowShareMenu(false)
  }

  const handleCommentClick = () => {
    setShowCommentForm(true)
    setTimeout(() => {
      commentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 100)
  }

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setCommentSubmitted(true)
  }

  return (
    <>
      {/* Action Buttons */}
      <div className="mt-20 pt-12 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
        <div className="flex items-center gap-4">
          {/* Commenter button */}
          <button
            onClick={handleCommentClick}
            className="flex items-center gap-3 bg-[#001B6E] text-white border-2 border-[#001B6E] hover:bg-white hover:text-[#001B6E] px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-lg shadow-primary/20 group"
          >
            <MessageSquare className="w-5 h-5" />
            Commenter
          </button>

          {/* Partager button */}
          <div className="relative">
            <button
              onClick={() => setShowShareMenu(!showShareMenu)}
              className="flex items-center gap-3 bg-accent text-black border-2 border-accent hover:bg-white hover:border-[#001B6E] hover:text-[#001B6E] px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-lg shadow-accent/20"
            >
              {copied ? <CheckCircle2 className="w-5 h-5 text-green-600" /> : <Share2 className="w-5 h-5" />}
              {copied ? 'Copié !' : 'Partager'}
            </button>

            <AnimatePresence>
              {showShareMenu && (
                <>
                  <div className="fixed inset-0 z-10" onClick={() => setShowShareMenu(false)} />
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute bottom-full mb-3 left-0 bg-white rounded-[20px] shadow-2xl border border-gray-100 p-4 z-20 min-w-[220px]"
                  >
                    <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-4 px-2">Partager via</p>
                    <div className="space-y-1">
                      <button onClick={() => handleShare('facebook')} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-blue-50 text-[#1877F2] transition-all text-left">
                        <Facebook className="w-4 h-4" />
                        <span className="font-black text-[10px] uppercase tracking-widest">Facebook</span>
                      </button>
                      <button onClick={() => handleShare('twitter')} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-sky-50 text-sky-500 transition-all text-left">
                        <Twitter className="w-4 h-4" />
                        <span className="font-black text-[10px] uppercase tracking-widest">Twitter / X</span>
                      </button>
                      <button onClick={() => handleShare('linkedin')} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-blue-50 text-[#0A66C2] transition-all text-left">
                        <Linkedin className="w-4 h-4" />
                        <span className="font-black text-[10px] uppercase tracking-widest">LinkedIn</span>
                      </button>
                      <div className="h-px bg-gray-100 my-2" />
                      <button onClick={handleCopyLink} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-50 text-gray-600 transition-all text-left">
                        <Link2 className="w-4 h-4" />
                        <span className="font-black text-[10px] uppercase tracking-widest">Copier le lien</span>
                      </button>
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Comment Section */}
      <AnimatePresence>
        {showCommentForm && (
          <motion.div
            ref={commentRef}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="mt-16 bg-gray-50 rounded-[40px] p-10 border border-gray-100"
          >
            <div className="flex items-center justify-between mb-10">
              <div>
                <h3 className="text-2xl font-black text-[#001B6E] uppercase tracking-tight">Laisser un commentaire</h3>
                <p className="text-gray-400 font-bold text-[10px] uppercase tracking-widest mt-1">Votre avis nous intéresse</p>
              </div>
              <button onClick={() => setShowCommentForm(false)} className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 transition-colors border border-gray-100">
                <X className="w-5 h-5" />
              </button>
            </div>

            <AnimatePresence mode="wait">
              {commentSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-black text-[#001B6E] uppercase mb-3">Commentaire envoyé !</h4>
                  <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">Merci pour votre contribution.</p>
                  <button onClick={() => { setCommentSubmitted(false); setShowCommentForm(false) }} className="mt-8 text-primary font-black text-[10px] uppercase tracking-[0.2em] hover:text-accent transition-colors">
                    Fermer →
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleCommentSubmit}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-primary uppercase tracking-widest ml-1">Nom</label>
                      <input required type="text" placeholder="Votre nom" className="w-full bg-white border border-gray-100 rounded-2xl py-4 px-6 outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary transition-all font-bold text-sm" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-primary uppercase tracking-widest ml-1">Email</label>
                      <input required type="email" placeholder="votre@email.com" className="w-full bg-white border border-gray-100 rounded-2xl py-4 px-6 outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary transition-all font-bold text-sm" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-primary uppercase tracking-widest ml-1">Commentaire</label>
                    <textarea required rows={4} placeholder="Partagez votre avis ou posez une question..." className="w-full bg-white border border-gray-100 rounded-2xl py-4 px-6 outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary transition-all font-bold text-sm resize-none" />
                  </div>
                  <button type="submit" className="flex items-center gap-3 bg-[#001B6E] text-white font-black py-5 px-10 rounded-2xl uppercase tracking-widest text-xs shadow-xl shadow-primary/20 hover:bg-primary-dark transition-all">
                    <Send className="w-4 h-4" />
                    Publier le commentaire
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
