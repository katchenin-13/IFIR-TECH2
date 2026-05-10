// app/admin/services/page.tsx
'use client'

import { useState, useEffect } from 'react'
import { Plus, Pencil, Trash2, Eye, Wrench, Search, Save, X } from 'lucide-react'
import Link from 'next/link'
import { getStorageData, setStorageData } from '@/shared/hooks/useAdmin'
import { ServiceRepositoryImpl } from '@/features/services/data/repositories/service.repository.impl'
import { Service } from '@/features/services/domain/entities/service.entity'

const repo = new ServiceRepositoryImpl()

export default function AdminServicesPage() {
  const [services, setServices] = useState<Service[]>([])
  const [search, setSearch] = useState('')
  const [editing, setEditing] = useState<Service | null>(null)

  useEffect(() => {
    repo.findAll().then(data => {
      const stored = getStorageData('services', data)
      setServices(stored.length > 0 ? stored : data)
    })
  }, [])

  const handleDelete = (id: string) => {
    if (!confirm('Supprimer ce service ?')) return
    const updated = services.filter(s => s.id !== id)
    setServices(updated)
    setStorageData('services', updated)
  }

  const handleUpdate = () => {
    if (!editing) return
    const updated = services.map(s => s.id === editing.id ? editing : s)
    setServices(updated)
    setStorageData('services', updated)
    setEditing(null)
  }

  const filtered = services.filter(s =>
    s.title.toLowerCase().includes(search.toLowerCase())
  )

  const inputClass = "w-full bg-gray-50 border border-gray-100 rounded-xl py-3 px-4 outline-none focus:ring-2 focus:ring-primary/10 focus:border-primary transition-all font-bold text-sm"

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-[#001B6E] uppercase tracking-tight">Services</h1>
          <p className="text-gray-400 font-bold text-xs uppercase tracking-widest mt-1">{services.length} service(s)</p>
        </div>
      </div>

      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder="Rechercher un service..." className="w-full bg-white border border-gray-100 rounded-2xl py-4 pl-12 pr-6 outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary transition-all font-bold text-sm shadow-sm" />
      </div>

      <div className="space-y-3">
        {filtered.length === 0 && (
          <div className="bg-white rounded-[28px] border border-gray-100 py-20 flex flex-col items-center gap-4">
            <Wrench className="w-12 h-12 text-gray-200" />
            <p className="font-black text-sm text-gray-400 uppercase tracking-widest">Aucun service trouvé</p>
          </div>
        )}
        {filtered.map((service, i) => (
          <div key={service.id} className="bg-white rounded-[24px] border border-gray-100 overflow-hidden">
            {editing?.id === service.id ? (
              <div className="p-6 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1 md:col-span-2">
                    <label className="text-[9px] font-black text-primary uppercase tracking-widest">Titre</label>
                    <input value={editing.title} onChange={e => setEditing(p => p ? { ...p, title: e.target.value } : p)} className={inputClass} />
                  </div>
                  <div className="space-y-1 md:col-span-2">
                    <label className="text-[9px] font-black text-primary uppercase tracking-widest">Description</label>
                    <textarea value={editing.description} onChange={e => setEditing(p => p ? { ...p, description: e.target.value } : p)} rows={3} className={`${inputClass} resize-none`} />
                  </div>
                  {editing.price !== undefined && (
                    <div className="space-y-1">
                      <label className="text-[9px] font-black text-primary uppercase tracking-widest">Prix</label>
                      <input value={editing.price} onChange={e => setEditing(p => p ? { ...p, price: e.target.value } : p)} className={inputClass} />
                    </div>
                  )}
                </div>
                <div className="flex gap-3">
                  <button onClick={handleUpdate} className="flex items-center gap-2 bg-[#001B6E] text-white font-black py-3 px-6 rounded-xl text-xs uppercase tracking-widest hover:bg-primary-dark transition-all">
                    <Save className="w-4 h-4" /> Sauvegarder
                  </button>
                  <button onClick={() => setEditing(null)} className="flex items-center gap-2 bg-gray-100 text-gray-600 font-black py-3 px-6 rounded-xl text-xs uppercase tracking-widest hover:bg-gray-200 transition-all">
                    <X className="w-4 h-4" /> Annuler
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-start justify-between p-5 gap-4">
                <div className="flex-1 min-w-0">
                  <p className="font-black text-sm text-[#001B6E] uppercase tracking-tight mb-1">{service.title}</p>
                  <p className="text-gray-500 text-xs font-medium line-clamp-2">{service.description}</p>
                  {service.price && <p className="text-accent font-black text-[10px] uppercase tracking-widest mt-2">{service.price}</p>}
                </div>
                <div className="flex gap-2 flex-shrink-0">
                  <Link href={`/services/${service.slug}`} target="_blank" className="w-9 h-9 rounded-xl bg-gray-50 hover:bg-primary hover:text-white flex items-center justify-center text-gray-400 transition-all">
                    <Eye className="w-4 h-4" />
                  </Link>
                  <button onClick={() => setEditing(service)} className="w-9 h-9 rounded-xl bg-gray-50 hover:bg-primary hover:text-white flex items-center justify-center text-gray-400 transition-all">
                    <Pencil className="w-4 h-4" />
                  </button>
                  <button onClick={() => handleDelete(service.id)} className="w-9 h-9 rounded-xl bg-gray-50 hover:bg-red-500 hover:text-white flex items-center justify-center text-gray-400 transition-all">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
