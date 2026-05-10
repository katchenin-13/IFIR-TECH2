// features/blog/presentation/components/BlogSidebarShare.tsx
'use client'

import { useState } from 'react'
import { Facebook, Twitter, Linkedin, Link2, Check } from 'lucide-react'

interface BlogSidebarShareProps {
  postTitle: string
  postSlug: string
}

export function BlogSidebarShare({ postTitle, postSlug }: BlogSidebarShareProps) {
  const [copied, setCopied] = useState(false)

  const pageUrl = typeof window !== 'undefined'
    ? window.location.href
    : `https://ifirtech.ci/blog/${postSlug}`

  const handleShare = (platform: 'facebook' | 'twitter' | 'linkedin') => {
    const encodedUrl = encodeURIComponent(pageUrl)
    const encodedTitle = encodeURIComponent(postTitle)
    const urls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    }
    window.open(urls[platform], '_blank', 'width=600,height=400')
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(pageUrl)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <div className="space-y-3">
      <div className="flex justify-center gap-3">
        <button
          onClick={() => handleShare('facebook')}
          title="Partager sur Facebook"
          className="w-10 h-10 bg-white border border-gray-100 rounded-xl flex items-center justify-center text-gray-400 hover:text-[#1877F2] hover:border-[#1877F2]/30 hover:bg-blue-50 transition-all"
        >
          <Facebook className="w-4 h-4" />
        </button>
        <button
          onClick={() => handleShare('twitter')}
          title="Partager sur Twitter"
          className="w-10 h-10 bg-white border border-gray-100 rounded-xl flex items-center justify-center text-gray-400 hover:text-sky-500 hover:border-sky-300 hover:bg-sky-50 transition-all"
        >
          <Twitter className="w-4 h-4" />
        </button>
        <button
          onClick={() => handleShare('linkedin')}
          title="Partager sur LinkedIn"
          className="w-10 h-10 bg-white border border-gray-100 rounded-xl flex items-center justify-center text-gray-400 hover:text-[#0A66C2] hover:border-blue-300 hover:bg-blue-50 transition-all"
        >
          <Linkedin className="w-4 h-4" />
        </button>
      </div>

      <button
        onClick={handleCopy}
        className={`w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all border ${
          copied
            ? 'bg-green-50 border-green-200 text-green-600'
            : 'bg-white border-gray-100 text-gray-400 hover:border-primary hover:text-primary'
        }`}
      >
        {copied ? <Check className="w-3.5 h-3.5" /> : <Link2 className="w-3.5 h-3.5" />}
        {copied ? 'Lien copié !' : 'Copier le lien'}
      </button>
    </div>
  )
}
