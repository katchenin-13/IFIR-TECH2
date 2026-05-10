// features/formations/presentation/components/FormationsSection.tsx
'use client'

import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2, ArrowRight } from 'lucide-react'

const mainFormations = [
  {
    id: 'reparation',
    title: 'RÉPARATION MOBILE & ORDINATEUR',
    image: '/images/formation-reparation.jpg',
    slug: 'reparation-mobile-ordinateur',
    points: [
      'Micro-soudure',
      'Diagnostic panne',
      'Flash téléphone',
      'Déblocage',
      'Réparation carte mère',
      'Maintenance & entretien',
    ]
  },
  {
    id: 'web',
    title: 'CRÉATION SITE WEB & TUNNEL DE VENTE',
    image: '/images/formation-web.jpg',
    slug: 'creation-site-web-tunnel-de-vente',
    points: [
      'Site vitrine & e-commerce',
      'Tunnel de vente',
      'Design professionnel',
      'Marketing digital',
      'Stratégie de conversion',
      'Monétisation',
    ]
  }
]

export function FormationsSection() {
  return (
    <section className="py-20 bg-[#F9FAFB]">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* New Header with lines */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="h-[2px] w-12 sm:w-24 bg-accent"></div>
          <h2 className="text-2xl sm:text-4xl font-black text-[#001B6E] uppercase tracking-tight text-center">
            NOS FORMATIONS
          </h2>
          <div className="h-[2px] w-12 sm:w-24 bg-accent"></div>
        </div>

        {/* Large Cards Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {mainFormations.map((formation) => (
            <div 
              key={formation.id}
              className="bg-white rounded-[40px] border border-gray-100 shadow-xl overflow-hidden flex flex-col md:flex-row p-6 sm:p-8 hover:shadow-2xl transition-all duration-300"
            >
              {/* Image Column */}
              <div className="w-full md:w-[45%] h-64 md:h-auto relative rounded-[30px] overflow-hidden mb-6 md:mb-0">
                <Image
                  src={formation.image}
                  alt={formation.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content Column */}
              <div className="w-full md:w-[55%] md:pl-8 flex flex-col">
                <h3 className="text-xl sm:text-2xl font-black text-[#001B6E] leading-tight mb-6 uppercase">
                  {formation.title}
                </h3>

                <ul className="space-y-3 mb-8 flex-grow">
                  {formation.points.map((point, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="bg-blue-50 p-0.5 rounded-full">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-gray-800 font-bold text-sm sm:text-base">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/formations/${formation.slug}`}
                  className="inline-flex items-center justify-between bg-accent hover:bg-accent-dark text-black font-black py-4 px-6 rounded-xl transition-colors group w-full sm:w-fit min-w-[200px]"
                >
                  <span className="text-sm uppercase tracking-wider">Voir le programme</span>
                  <div className="bg-black rounded-full p-1 ml-4 group-hover:translate-x-1 transition-transform">
                    <ArrowRight className="w-4 h-4 text-accent" />
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
