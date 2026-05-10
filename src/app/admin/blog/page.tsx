// app/admin/blog/page.tsx
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Plus, Pencil, Trash2, Eye, Search, FileText } from 'lucide-react'
import { BlogPost } from '@/features/blog/domain/entities/blog-post.entity'
import { mockBlogPosts } from '@/features/blog/data/repositories/blog.repository.impl'
import { getStorageData, setStorageData } from '@/shared/hooks/useAdmin'

export default function AdminBlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    setPosts(getStorageData('blog', mockBlogPosts))
  }, [])

  const handleDelete = (id: string) => {
    if (!confirm('Supprimer cet article définitivement ?')) return
    const updated = posts.filter(p => p.id !== id)
    setPosts(updated)
    setStorageData('blog', updated)
  }

  const filtered = posts.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase()) ||
    p.category.toLowerCase().includes(search.toLowerCase())
  )

  const categoryColors: Record<string, string> = {
    'Tutoriel': 'bg-blue-50 text-blue-600',
    'Actualités': 'bg-green-50 text-green-600',
    'Entrepreneuriat': 'bg-yellow-50 text-yellow-700',
    'Réparation': 'bg-purple-50 text-purple-600',
  }

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-[#001B6E] uppercase tracking-tight">Blog</h1>
          <p className="text-gray-400 font-bold text-xs uppercase tracking-widest mt-1">{posts.length} article(s) publié(s)</p>
        </div>
        <Link
          href="/admin/blog/nouveau"
          className="flex items-center gap-2 bg-[#001B6E] text-white font-black py-4 px-8 rounded-2xl uppercase tracking-widest text-xs shadow-lg shadow-primary/20 hover:bg-primary-dark transition-all"
        >
          <Plus className="w-4 h-4" />
          Nouvel Article
        </Link>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Rechercher un article..."
          className="w-full bg-white border border-gray-100 rounded-2xl py-4 pl-12 pr-6 outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary transition-all font-bold text-sm shadow-sm"
        />
      </div>

      {/* Table */}
      <div className="bg-white rounded-[28px] border border-gray-100 overflow-hidden shadow-sm">
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <FileText className="w-12 h-12 text-gray-200 mb-4" />
            <p className="font-black text-sm text-gray-400 uppercase tracking-widest">Aucun article trouvé</p>
          </div>
        ) : (
          filtered.map((post, i) => (
            <div
              key={post.id}
              className={`flex flex-col sm:flex-row items-start sm:items-center justify-between p-5 gap-4 hover:bg-gray-50 transition-colors ${i !== 0 ? 'border-t border-gray-50' : ''}`}
            >
              <div className="flex items-center gap-4 flex-1 min-w-0">
                <span className={`${categoryColors[post.category] || 'bg-gray-50 text-gray-500'} text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full flex-shrink-0`}>
                  {post.category}
                </span>
                <div className="min-w-0">
                  <p className="font-black text-sm text-[#001B6E] uppercase tracking-tight truncate">{post.title}</p>
                  <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">{post.date} · {post.readTime}</p>
                </div>
              </div>

              <div className="flex items-center gap-2 flex-shrink-0">
                <Link
                  href={`/blog/${post.slug}`}
                  target="_blank"
                  className="w-9 h-9 rounded-xl bg-gray-50 hover:bg-primary hover:text-white flex items-center justify-center text-gray-400 transition-all"
                  title="Voir l'article"
                >
                  <Eye className="w-4 h-4" />
                </Link>
                <Link
                  href={`/admin/blog/${post.id}`}
                  className="w-9 h-9 rounded-xl bg-gray-50 hover:bg-primary hover:text-white flex items-center justify-center text-gray-400 transition-all"
                  title="Modifier"
                >
                  <Pencil className="w-4 h-4" />
                </Link>
                <button
                  onClick={() => handleDelete(post.id)}
                  className="w-9 h-9 rounded-xl bg-gray-50 hover:bg-red-500 hover:text-white flex items-center justify-center text-gray-400 transition-all"
                  title="Supprimer"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
