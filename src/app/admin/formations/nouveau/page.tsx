// app/admin/formations/nouveau/page.tsx
'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Save, CheckCircle2 } from 'lucide-react'
import { getStorageData, setStorageData } from '@/shared/hooks/useAdmin'
import { FormationRepositoryImpl } from '@/features/formations/data/repositories/formation.repository.impl'
import { Formation } from '@/features/formations/domain/entities/formation.entity'

const repo = new FormationRepositoryImpl()

export default function NewFormationPage() {
  const router = useRouter()
  const [saved, setSaved] = useState(false)
  const [form, setForm] = useState({
    title: '', slug: '', description: '', excerpt: '',
    duration: '', price: 'Sur devis', level: 'Débutant',
    image: '/images/hero-technician.jpg', category: 'Réparation',
  })

  const generateSlug = (title: string) =>
    title.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

  const handleChange = (field: string, value: string) => {
    setForm(prev => {
      const updated = { ...prev, [field]: value }
      if (field === 'title') updated.slug = generateSlug(value)
      return updated
    })
  }

  const handleSave = async () => {
    if (!form.title || !form.description) return alert('Titre et description obligatoires.')
    const existing = await repo.findAll()
    const all = getStorageData('formations', existing)
    const newF: Formation = {
      id: Date.now().toString(),
      slug: form.slug || generateSlug(form.title),
      title: form.title,
      description: form.excerpt || form.description.slice(0, 100),
      longDescription: form.description,
      duration: form.duration,
      price: form.price,
      image: form.image,
      category: form.category,
      modules: [],
      objectives: [],
      prerequisites: [],
      certification: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    setStorageData('formations', [newF, ...all])
    setSaved(true)
    setTimeout(() => router.push('/admin/formations'), 1500)
  }

  const inputClass = "w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 px-6 outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary transition-all font-bold text-sm"

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Link href="/admin/formations" className="w-10 h-10 bg-white rounded-2xl border border-gray-100 flex items-center justify-center hover:border-primary transition-all">
            <ArrowLeft className="w-4 h-4 text-gray-500" />
          </Link>
          <div>
            <h1 className="text-2xl font-black text-[#001B6E] uppercase tracking-tight">Nouvelle Formation</h1>
            <p className="text-gray-400 font-bold text-[10px] uppercase tracking-widest mt-0.5">Formations IFIR TECH</p>
          </div>
        </div>
        <button onClick={handleSave} disabled={saved} className="flex items-center gap-3 bg-[#001B6E] text-white font-black py-4 px-8 rounded-2xl uppercase tracking-widest text-xs shadow-lg disabled:opacity-70 hover:bg-primary-dark transition-all">
          {saved ? <CheckCircle2 className="w-4 h-4 text-green-400" /> : <Save className="w-4 h-4" />}
          {saved ? 'Sauvegardé !' : 'Sauvegarder'}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white rounded-[28px] border border-gray-100 p-8 space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] font-black text-primary uppercase tracking-widest">Titre *</label>
            <input value={form.title} onChange={e => handleChange('title', e.target.value)} placeholder="Ex: Réparation Smartphone Avancée" className={inputClass} />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black text-primary uppercase tracking-widest">Description *</label>
            <textarea value={form.description} onChange={e => handleChange('description', e.target.value)} rows={6} placeholder="Description complète de la formation..." className={`${inputClass} resize-none`} />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black text-primary uppercase tracking-widest">Extrait (court)</label>
            <textarea value={form.excerpt} onChange={e => handleChange('excerpt', e.target.value)} rows={2} placeholder="Courte présentation pour les listes..." className={`${inputClass} resize-none`} />
          </div>
        </div>

        <div className="bg-white rounded-[28px] border border-gray-100 p-6 space-y-4 h-fit">
          <h3 className="font-black text-xs text-[#001B6E] uppercase tracking-widest border-b border-gray-50 pb-4">Paramètres</h3>
          {[
            { label: 'Niveau', field: 'level', options: ['Débutant', 'Intermédiaire', 'Avancé'] },
          ].map(({ label, field, options }) => (
            <div key={field} className="space-y-2">
              <label className="text-[9px] font-black text-gray-500 uppercase tracking-widest">{label}</label>
              <select value={(form as Record<string, string>)[field]} onChange={e => handleChange(field, e.target.value)} className={inputClass}>
                {options.map(o => <option key={o} value={o}>{o}</option>)}
              </select>
            </div>
          ))}
          {[
            { label: 'Durée', field: 'duration', placeholder: 'Ex: 4 semaines' },
            { label: 'Prix', field: 'price', placeholder: 'Ex: Sur devis' },
            { label: 'Catégorie', field: 'category', placeholder: 'Ex: Réparation' },
            { label: 'Slug (URL)', field: 'slug', placeholder: 'ex: reparation-avancee' },
          ].map(({ label, field, placeholder }) => (
            <div key={field} className="space-y-2">
              <label className="text-[9px] font-black text-gray-500 uppercase tracking-widest">{label}</label>
              <input value={(form as Record<string, string>)[field]} onChange={e => handleChange(field, e.target.value)} placeholder={placeholder} className={inputClass} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
