// features/formations/presentation/components/FormationsSection.tsx
'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight, Clock, Phone } from 'lucide-react'
import { useFormations } from '../hooks/useFormations'

const categories = [
  { id: 'reparation-mobile', label: 'RÉPARATION MOBILE & ORDINATEUR' },
  { id: 'web', label: 'CRÉATION WEB & TUNNEL DE VENTE' },
]

const stats = [
  { value: '500+', label: 'Élèves formés', icon: '🎓' },
  { value: '10+', label: 'Formations\ndisponibles', icon: '🏅' },
  { value: '074822841', label: 'Pour plus d\'informations', isPhone: true },
  { value: '95%', label: 'Taux de réussite', icon: '⚙️' },
  { value: '100%', label: 'Satisfaction', icon: '✅' },
]

// Formation images mapping (use placeholder images)
const formationImages: Record<string, string> = {
  'reparation-mobile-ordinateur': 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=200&fit=crop&q=80',
  'architecture-telephones-ordinateurs': 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=200&fit=crop&q=80',
  'micro-soudure-pratique': 'https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?w=400&h=200&fit=crop&q=80',
  'reparation-avancee': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=200&fit=crop&q=80',
  'creation-site-web-tunnel-de-vente': 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&h=200&fit=crop&q=80',
}

export function FormationsSection() {
  const { formations, loading } = useFormations()
  const [activeCategory, setActiveCategory] = useState('reparation-mobile')

  const filtered = formations.filter(f => (f as any).category === activeCategory)

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-5 mb-10">
          <h2 className="text-3xl font-black uppercase">
            NOS <span className="text-accent">FORMATIONS</span>
          </h2>
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2 rounded-full text-xs font-black uppercase tracking-wider border-2 transition-all duration-200 ${
                  activeCategory === cat.id
                    ? 'bg-accent border-accent text-white shadow-lg'
                    : 'border-gray-300 text-gray-500 hover:border-primary hover:text-primary'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Cards Grid */}
        {loading ? (
          <div className="text-center py-12 text-gray-400">Chargement...</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 mb-10">
            {filtered.map((formation) => {
              const imgSrc = formationImages[formation.slug] || 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=200&fit=crop&q=80'
              return (
                <div
                  key={formation.id}
                  className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col"
                >
                  {/* Image with duration badge */}
                  <div className="relative h-36 w-full">
                    <Image
                      src={imgSrc}
                      alt={formation.title}
                      fill
                      className="object-cover"
                    />
                    {/* Duration badge */}
                    <span className="absolute top-2 right-2 bg-black/70 text-white text-[10px] font-bold px-2 py-1 rounded-full">
                      {formation.duration}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-4 flex flex-col flex-grow">
                    <h3 className="font-black text-gray-900 text-sm mb-3 leading-tight">
                      {formation.title}
                    </h3>

                    {/* Objectives list */}
                    <ul className="space-y-1 mb-4 flex-grow">
                      {formation.objectives.slice(0, 4).map((obj, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-gray-600">
                          <ChevronRight className="w-3 h-3 text-accent flex-shrink-0 mt-0.5" />
                          <span>{obj}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Details button */}
                    <Link
                      href={`/formations/${formation.slug}`}
                      className="mt-auto block text-center border-2 border-gray-300 text-gray-700 text-xs font-black uppercase py-2 rounded hover:border-primary hover:text-primary transition-colors"
                    >
                      DÉTAILS
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        )}

        {/* CTA Button */}
        <div className="flex justify-center mb-12">
          <Link
            href="/formations"
            className="bg-primary text-white font-black uppercase px-10 py-3 rounded-lg text-sm tracking-wider hover:bg-primary-dark transition-colors"
          >
            VOIR TOUTES LES FORMATIONS
          </Link>
        </div>

        {/* Stats Bar */}
        <div className="bg-[#001D3D] rounded-2xl px-6 py-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 items-center">
            {stats.map((stat, i) =>
              stat.isPhone ? (
                <div
                  key={i}
                  className="bg-accent rounded-xl px-4 py-4 flex items-center gap-3 col-span-2 md:col-span-1"
                >
                  <Phone className="w-8 h-8 text-white flex-shrink-0" />
                  <div>
                    <p className="text-xs text-white/80 font-medium">CONTACTEZ-NOUS</p>
                    <p className="text-white font-black text-lg leading-tight">{stat.value}</p>
                    <p className="text-xs text-white/80">{stat.label}</p>
                  </div>
                </div>
              ) : (
                <div key={i} className="flex flex-col items-center text-center gap-1">
                  <span className="text-2xl">{stat.icon}</span>
                  <span className="text-white font-black text-2xl">{stat.value}</span>
                  <span className="text-white/70 text-xs whitespace-pre-line">{stat.label}</span>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
