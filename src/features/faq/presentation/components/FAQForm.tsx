// features/faq/presentation/components/FAQForm.tsx
'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, CheckCircle2, MessageCircle, User, Mail, HelpCircle } from 'lucide-react'
import { Button } from '@/design-system/components/Button/Button'

export function FAQForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simulate API call
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1500)
  }

  if (submitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-[40px] p-12 text-center shadow-2xl border border-gray-100 max-w-2xl mx-auto"
      >
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h2 className="text-3xl font-black text-[#001B6E] uppercase tracking-tight mb-4">Message Envoyé !</h2>
        <p className="text-gray-500 font-bold mb-10 leading-relaxed uppercase tracking-wider text-sm">
          Merci pour votre question. Notre équipe pédagogique vous répondra par email dans les plus brefs délais.
        </p>
        <Button onClick={() => setSubmitted(false)} variant="primary" size="lg" className="rounded-2xl px-12">
          POSER UNE AUTRE QUESTION
        </Button>
      </motion.div>
    )
  }

  return (
    <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden border border-gray-100 max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row">
        {/* Left Info Panel */}
        <div className="bg-[#001B6E] p-12 text-white md:w-1/3 flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 bg-accent rounded-2xl flex items-center justify-center text-black mb-8 shadow-lg shadow-accent/20">
              <MessageCircle className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-black uppercase tracking-tight mb-6 leading-tight">Nous sommes <br /> à votre écoute</h3>
            <p className="text-white/60 text-xs font-bold leading-relaxed uppercase tracking-widest">
              Posez votre question et recevez une réponse personnalisée de nos experts.
            </p>
          </div>
          
          <div className="pt-12 border-t border-white/10">
            <div className="flex items-center gap-4 text-accent">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">Réponse sous 24h</span>
            </div>
          </div>
        </div>

        {/* Form Panel */}
        <div className="p-12 md:w-2/3">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Name */}
              <div className="space-y-2">
                <label className="text-[10px] font-black text-primary uppercase tracking-widest ml-1">Nom Complet</label>
                <div className="relative group">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-primary transition-colors" />
                  <input 
                    required
                    type="text" 
                    placeholder="Votre nom"
                    className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 pl-12 pr-4 focus:bg-white focus:ring-2 focus:ring-primary/10 focus:border-primary outline-none transition-all font-bold text-sm"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="text-[10px] font-black text-primary uppercase tracking-widest ml-1">Email</label>
                <div className="relative group">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-primary transition-colors" />
                  <input 
                    required
                    type="email" 
                    placeholder="votre@email.com"
                    className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 pl-12 pr-4 focus:bg-white focus:ring-2 focus:ring-primary/10 focus:border-primary outline-none transition-all font-bold text-sm"
                  />
                </div>
              </div>
            </div>

            {/* Category selection */}
            <div className="space-y-2">
              <label className="text-[10px] font-black text-primary uppercase tracking-widest ml-1">Sujet de la question</label>
              <div className="relative group">
                <HelpCircle className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-primary transition-colors" />
                <select className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 pl-12 pr-4 focus:bg-white focus:ring-2 focus:ring-primary/10 focus:border-primary outline-none transition-all font-bold text-sm appearance-none">
                  <option>Informations sur les formations</option>
                  <option>Paiements et financement</option>
                  <option>Matériel et outils</option>
                  <option>Certifications</option>
                  <option>Autre</option>
                </select>
              </div>
            </div>

            {/* Question Message */}
            <div className="space-y-2">
              <label className="text-[10px] font-black text-primary uppercase tracking-widest ml-1">Votre Question</label>
              <textarea 
                required
                rows={4}
                placeholder="Comment pouvons-nous vous aider ?"
                className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 px-6 focus:bg-white focus:ring-2 focus:ring-primary/10 focus:border-primary outline-none transition-all font-bold text-sm resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              disabled={loading}
              className="w-full bg-[#001B6E] hover:bg-primary-dark text-white font-black py-5 px-8 rounded-2xl transition-all group flex items-center justify-center gap-3 shadow-xl shadow-primary/20 disabled:opacity-50 disabled:cursor-not-wait"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : (
                <>
                  <span className="uppercase tracking-[0.2em] text-xs">Envoyer ma question</span>
                  <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
