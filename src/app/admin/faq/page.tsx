// app/admin/faq/page.tsx
'use client'

import { useState, useEffect } from 'react'
import { Plus, Pencil, Trash2, ChevronDown, ChevronUp, Save, X, HelpCircle } from 'lucide-react'
import { getStorageData, setStorageData } from '@/shared/hooks/useAdmin'

interface FAQItem {
  id: string
  question: string
  answer: string
  category: string
}

const defaultFAQ: FAQItem[] = [
  { id: '1', question: 'Quelles formations proposez-vous ?', answer: 'Nous proposons des formations en réparation de téléphones, ordinateurs, micro-soudure et développement web.', category: 'Formations' },
  { id: '2', question: 'Quelle est la durée des formations ?', answer: 'Nos formations durent entre 4 et 12 semaines selon le programme choisi.', category: 'Formations' },
  { id: '3', question: 'Comment s\'inscrire ?', answer: 'Appelez-nous au 0748222841 pour fixer un rendez-vous et discuter de votre projet de formation.', category: 'Inscription' },
  { id: '4', question: 'Y a-t-il une attestation à la fin ?', answer: 'Oui, chaque apprenant reçoit un certificat IFIR TECH à la fin de sa formation.', category: 'Formations' },
  { id: '5', question: 'Proposez-vous un service de réparation à domicile ?', answer: 'Nous proposons principalement des réparations en atelier pour garantir la qualité du travail.', category: 'Services' },
]

export default function AdminFAQPage() {
  const [items, setItems] = useState<FAQItem[]>([])
  const [editing, setEditing] = useState<FAQItem | null>(null)
  const [creating, setCreating] = useState(false)
  const [newItem, setNewItem] = useState({ question: '', answer: '', category: 'Général' })

  useEffect(() => {
    setItems(getStorageData('faq', defaultFAQ))
  }, [])

  const save = (updated: FAQItem[]) => {
    setItems(updated)
    setStorageData('faq', updated)
  }

  const handleDelete = (id: string) => {
    if (!confirm('Supprimer cette question ?')) return
    save(items.filter(i => i.id !== id))
  }

  const handleUpdate = () => {
    if (!editing) return
    save(items.map(i => i.id === editing.id ? editing : i))
    setEditing(null)
  }

  const handleCreate = () => {
    if (!newItem.question || !newItem.answer) return alert('Question et réponse obligatoires.')
    const item: FAQItem = { id: Date.now().toString(), ...newItem }
    save([...items, item])
    setNewItem({ question: '', answer: '', category: 'Général' })
    setCreating(false)
  }

  const inputClass = "w-full bg-gray-50 border border-gray-100 rounded-xl py-3 px-4 outline-none focus:ring-2 focus:ring-primary/10 focus:border-primary transition-all font-bold text-sm"

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-black text-[#001B6E] uppercase tracking-tight">FAQ</h1>
          <p className="text-gray-400 font-bold text-xs uppercase tracking-widest mt-1">{items.length} question(s)</p>
        </div>
        <button onClick={() => setCreating(true)} className="flex items-center gap-2 bg-[#001B6E] text-white font-black py-4 px-8 rounded-2xl uppercase tracking-widest text-xs shadow-lg hover:bg-primary-dark transition-all">
          <Plus className="w-4 h-4" /> Nouvelle Question
        </button>
      </div>

      {/* Create Form */}
      {creating && (
        <div className="bg-white rounded-[28px] border-2 border-primary/20 p-8 space-y-4 shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-black text-sm text-[#001B6E] uppercase tracking-widest">Nouvelle Question</h3>
            <button onClick={() => setCreating(false)} className="w-8 h-8 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 hover:text-red-500"><X className="w-4 h-4" /></button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1 md:col-span-2">
              <label className="text-[9px] font-black text-primary uppercase tracking-widest">Question *</label>
              <input value={newItem.question} onChange={e => setNewItem(p => ({ ...p, question: e.target.value }))} placeholder="La question..." className={inputClass} />
            </div>
            <div className="space-y-1 md:col-span-2">
              <label className="text-[9px] font-black text-primary uppercase tracking-widest">Réponse *</label>
              <textarea value={newItem.answer} onChange={e => setNewItem(p => ({ ...p, answer: e.target.value }))} rows={3} placeholder="La réponse détaillée..." className={`${inputClass} resize-none`} />
            </div>
            <div className="space-y-1">
              <label className="text-[9px] font-black text-primary uppercase tracking-widest">Catégorie</label>
              <input value={newItem.category} onChange={e => setNewItem(p => ({ ...p, category: e.target.value }))} placeholder="Formations, Services..." className={inputClass} />
            </div>
          </div>
          <button onClick={handleCreate} className="flex items-center gap-2 bg-[#001B6E] text-white font-black py-3 px-8 rounded-xl uppercase tracking-widest text-xs hover:bg-primary-dark transition-all">
            <Save className="w-4 h-4" /> Ajouter
          </button>
        </div>
      )}

      {/* List */}
      <div className="space-y-3">
        {items.length === 0 && (
          <div className="bg-white rounded-[28px] border border-gray-100 py-20 flex flex-col items-center gap-4">
            <HelpCircle className="w-12 h-12 text-gray-200" />
            <p className="font-black text-sm text-gray-400 uppercase tracking-widest">Aucune question</p>
          </div>
        )}
        {items.map(item => (
          <div key={item.id} className="bg-white rounded-[24px] border border-gray-100 overflow-hidden">
            {editing?.id === item.id ? (
              <div className="p-6 space-y-4">
                <div className="space-y-1">
                  <label className="text-[9px] font-black text-primary uppercase tracking-widest">Question</label>
                  <input value={editing.question} onChange={e => setEditing(p => p ? { ...p, question: e.target.value } : p)} className={inputClass} />
                </div>
                <div className="space-y-1">
                  <label className="text-[9px] font-black text-primary uppercase tracking-widest">Réponse</label>
                  <textarea value={editing.answer} onChange={e => setEditing(p => p ? { ...p, answer: e.target.value } : p)} rows={3} className={`${inputClass} resize-none`} />
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
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-accent/10 text-primary text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full">{item.category}</span>
                  </div>
                  <p className="font-black text-sm text-[#001B6E] mb-1">{item.question}</p>
                  <p className="text-gray-500 text-xs font-medium line-clamp-2">{item.answer}</p>
                </div>
                <div className="flex gap-2 flex-shrink-0">
                  <button onClick={() => setEditing(item)} className="w-9 h-9 rounded-xl bg-gray-50 hover:bg-primary hover:text-white flex items-center justify-center text-gray-400 transition-all">
                    <Pencil className="w-4 h-4" />
                  </button>
                  <button onClick={() => handleDelete(item.id)} className="w-9 h-9 rounded-xl bg-gray-50 hover:bg-red-500 hover:text-white flex items-center justify-center text-gray-400 transition-all">
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
