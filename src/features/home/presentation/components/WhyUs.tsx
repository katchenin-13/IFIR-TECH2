// features/home/presentation/components/WhyUs.tsx
'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Users, Wrench, FileCheck, Headphones, Briefcase } from 'lucide-react'

const whyUsItems = [
  {
    title: 'Formation 100% Pratique',
    description: 'Vous touchez les outils dès le premier jour',
    icon: GraduationCap,
  },
  {
    title: 'Encadrement par des Experts',
    description: 'Formateurs issus du terrain, pas des salles de classe',
    icon: Users,
  },
  {
    title: 'Cas Réels de Réparation',
    description: 'Appareils réels, pannes réelles, solutions concrètes',
    icon: Wrench,
  },
  {
    title: 'Attestation Officielle',
    description: 'Certificat IFIR Tech reconnu sur le marché',
    icon: FileCheck,
  },
  {
    title: 'Accompagnement Personnalisé',
    description: 'Suivi avant, pendant et après votre formation',
    icon: Headphones,
  },
  {
    title: 'Insertion Professionnelle',
    description: 'Aide à l\'emploi, au stage et à l\'entrepreneuriat',
    icon: Briefcase,
  },
]

export function WhyUs() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header with lines */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="h-[2px] w-12 sm:w-24 bg-accent"></div>
          <h2 className="text-2xl sm:text-4xl font-black text-[#001B6E] uppercase tracking-tight text-center">
            POURQUOI NOUS CHOISIR ?
          </h2>
          <div className="h-[2px] w-12 sm:w-24 bg-accent"></div>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
          {whyUsItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-100 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-all group"
            >
              <div className="flex justify-center mb-6">
                <item.icon className="w-12 h-12 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              
              <h3 className="text-[#001B6E] font-black text-sm sm:text-base leading-tight mb-3 uppercase">
                {item.title}
              </h3>
              
              <p className="text-gray-500 text-[10px] sm:text-xs font-medium">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
