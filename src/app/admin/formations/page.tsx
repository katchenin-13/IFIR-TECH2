// app/admin/formations/page.tsx
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Plus, Pencil, Trash2, Eye, GraduationCap, Search } from 'lucide-react'
import { getStorageData, setStorageData } from '@/shared/hooks/useAdmin'
import { Formation } from '@/features/formations/domain/entities/formation.entity'
import { FormationRepositoryImpl } from '@/features/formations/data/repositories/formation.repository.impl'

const repo = new FormationRepositoryImpl()

export default function AdminFormationsPage() {
  const [formations, setFormations] = useState<Formation[]>([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    repo.findAll().then(data => {
      const stored = getStorageData('formations', data)
      setFormations(stored.length > 0 ? stored : data)
    })
  }, [])

  const handleDelete = (id: string) => {
    if (!confirm('Supprimer cette formation ?')) return
    const updated = formations.filter(f => f.id !== id)
    setFormations(updated)
    setStorageData('formations', updated)
  }

  const filtered = formations.filter(f =>
    f.title.toLowerCase().includes(search.toLowerCase())
  )

  const levelColors: Record<string, string> = {
    'Débutant': 'bg-green-50 text-green-600',
    'Intermédiaire': 'bg-blue-50 text-blue-600',
    'Avancé': 'bg-purple-50 text-purple-600',
  }

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-[#001B6E] uppercase tracking-tight">Formations</h1>
          <p className="text-gray-400 font-bold text-xs uppercase tracking-widest mt-1">{formations.length} formation(s) disponible(s)</p>
        </div>
        <Link href="/admin/formations/nouveau" className="flex items-center gap-2 bg-[#001B6E] text-white font-black py-4 px-8 rounded-2xl uppercase tracking-widest text-xs shadow-lg hover:bg-primary-dark transition-all">
          <Plus className="w-4 h-4" /> Nouvelle Formation
        </Link>
      </div>

      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder="Rechercher une formation..." className="w-full bg-white border border-gray-100 rounded-2xl py-4 pl-12 pr-6 outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary transition-all font-bold text-sm shadow-sm" />
      </div>

      <div className="bg-white rounded-[28px] border border-gray-100 overflow-hidden shadow-sm">
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24">
            <GraduationCap className="w-12 h-12 text-gray-200 mb-4" />
            <p className="font-black text-sm text-gray-400 uppercase tracking-widest">Aucune formation trouvée</p>
          </div>
        ) : (
          filtered.map((f, i) => (
            <div key={f.id} className={`flex flex-col sm:flex-row items-start sm:items-center justify-between p-5 gap-4 hover:bg-gray-50 transition-colors ${i !== 0 ? 'border-t border-gray-50' : ''}`}>
              <div className="flex items-center gap-4 flex-1 min-w-0">
                <span className="bg-gray-50 text-gray-500 text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full flex-shrink-0">
                  {f.category || 'Formation'}
                </span>
                <div className="min-w-0">
                  <p className="font-black text-sm text-[#001B6E] uppercase tracking-tight truncate">{f.title}</p>
                  <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">{f.duration} · {f.price}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <Link href={`/formations/${f.slug}`} target="_blank" className="w-9 h-9 rounded-xl bg-gray-50 hover:bg-primary hover:text-white flex items-center justify-center text-gray-400 transition-all" title="Voir">
                  <Eye className="w-4 h-4" />
                </Link>
                <Link href={`/admin/formations/${f.id}`} className="w-9 h-9 rounded-xl bg-gray-50 hover:bg-primary hover:text-white flex items-center justify-center text-gray-400 transition-all" title="Modifier">
                  <Pencil className="w-4 h-4" />
                </Link>
                <button onClick={() => handleDelete(f.id)} className="w-9 h-9 rounded-xl bg-gray-50 hover:bg-red-500 hover:text-white flex items-center justify-center text-gray-400 transition-all" title="Supprimer">
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
