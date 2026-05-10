// shared/components/admin/BlogForm.tsx
'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Save, ArrowLeft, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'
import { BlogPost } from '@/features/blog/domain/entities/blog-post.entity'
import { mockBlogPosts } from '@/features/blog/data/repositories/blog.repository.impl'
import { getStorageData, setStorageData } from '@/shared/hooks/useAdmin'

interface BlogFormProps {
  initial?: BlogPost
}

const CATEGORIES: BlogPost['category'][] = ['Réparation', 'Actualités', 'Tutoriel', 'Entrepreneuriat']

export function BlogForm({ initial }: BlogFormProps) {
  const router = useRouter()
  const [saved, setSaved] = useState(false)
  const [form, setForm] = useState<Partial<BlogPost>>(initial || {
    title: '', slug: '', excerpt: '', content: '',
    image: '/images/hero-technician.jpg', category: 'Actualités',
    date: new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }),
    readTime: '5 min',
    author: { name: 'Soro Katchenin Moise', role: 'Directeur Technique', avatar: '/images/hero-technician.jpg' }
  })

  const generateSlug = (title: string) =>
    title.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

  const handleChange = (field: string, value: string) => {
    setForm(prev => {
      const updated = { ...prev, [field]: value }
      if (field === 'title' && !initial) updated.slug = generateSlug(value)
      return updated
    })
  }

  const handleSave = () => {
    if (!form.title || !form.content || !form.excerpt) {
      alert('Veuillez remplir tous les champs obligatoires.')
      return
    }
    const posts = getStorageData('blog', mockBlogPosts)
    if (initial) {
      const updated = posts.map(p => p.id === initial.id ? { ...p, ...form } as BlogPost : p)
      setStorageData('blog', updated)
    } else {
      const newPost: BlogPost = {
        id: Date.now().toString(),
        slug: form.slug || generateSlug(form.title || ''),
        title: form.title || '',
        excerpt: form.excerpt || '',
        content: form.content || '',
        image: form.image || '/images/hero-technician.jpg',
        category: form.category as BlogPost['category'] || 'Actualités',
        date: form.date || new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }),
        readTime: form.readTime || '5 min',
        author: form.author || { name: 'Soro Katchenin Moise', role: 'Directeur Technique', avatar: '/images/hero-technician.jpg' }
      }
      setStorageData('blog', [newPost, ...posts])
    }
    setSaved(true)
    setTimeout(() => { router.push('/admin/blog') }, 1500)
  }

  const inputClass = "w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 px-6 outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary transition-all font-bold text-sm"

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Link href="/admin/blog" className="w-10 h-10 bg-white rounded-2xl border border-gray-100 flex items-center justify-center hover:border-primary transition-all">
            <ArrowLeft className="w-4 h-4 text-gray-500" />
          </Link>
          <div>
            <h1 className="text-2xl font-black text-[#001B6E] uppercase tracking-tight">
              {initial ? 'Modifier l\'article' : 'Nouvel Article'}
            </h1>
            <p className="text-gray-400 font-bold text-[10px] uppercase tracking-widest mt-0.5">Blog IFIR TECH</p>
          </div>
        </div>
        <button
          onClick={handleSave}
          disabled={saved}
          className="flex items-center gap-3 bg-[#001B6E] text-white font-black py-4 px-8 rounded-2xl uppercase tracking-widest text-xs shadow-lg disabled:opacity-70 hover:bg-primary-dark transition-all"
        >
          {saved ? <CheckCircle2 className="w-4 h-4 text-green-400" /> : <Save className="w-4 h-4" />}
          {saved ? 'Sauvegardé !' : 'Sauvegarder'}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main form */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-[28px] border border-gray-100 p-8 space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-primary uppercase tracking-widest ml-1">Titre *</label>
              <input type="text" value={form.title || ''} onChange={e => handleChange('title', e.target.value)} placeholder="Titre de l'article" className={inputClass} />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-primary uppercase tracking-widest ml-1">Extrait *</label>
              <textarea value={form.excerpt || ''} onChange={e => handleChange('excerpt', e.target.value)} placeholder="Courte description de l'article..." rows={3} className={`${inputClass} resize-none`} />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-primary uppercase tracking-widest ml-1">Contenu *</label>
              <textarea value={form.content || ''} onChange={e => handleChange('content', e.target.value)} placeholder="Rédigez votre article ici..." rows={12} className={`${inputClass} resize-none`} />
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="bg-white rounded-[28px] border border-gray-100 p-6 space-y-4">
            <h3 className="font-black text-xs text-[#001B6E] uppercase tracking-widest border-b border-gray-50 pb-4">Paramètres</h3>

            <div className="space-y-2">
              <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Catégorie</label>
              <select value={form.category || ''} onChange={e => handleChange('category', e.target.value)} className={inputClass}>
                {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Temps de lecture</label>
              <input type="text" value={form.readTime || ''} onChange={e => handleChange('readTime', e.target.value)} placeholder="Ex: 5 min" className={inputClass} />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Slug (URL)</label>
              <input type="text" value={form.slug || ''} onChange={e => handleChange('slug', e.target.value)} placeholder="mon-article" className={inputClass} />
              <p className="text-[9px] text-gray-400 font-bold ml-1">/blog/{form.slug || 'mon-article'}</p>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Chemin de l&apos;image</label>
              <input type="text" value={form.image || ''} onChange={e => handleChange('image', e.target.value)} placeholder="/images/..." className={inputClass} />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Auteur</label>
              <input type="text" value={form.author?.name || ''} onChange={e => handleChange('author', JSON.stringify({ ...form.author, name: e.target.value }))} placeholder="Nom de l'auteur" className={inputClass} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
