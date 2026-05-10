// features/services/presentation/components/ServicesSection.tsx
'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Smartphone, Laptop, Zap, Unlock, Monitor, Wrench, Plus, ChevronRight } from 'lucide-react'
import { Service } from '../../domain/entities/service.entity'
import { ServiceRepositoryImpl } from '../../data/repositories/service.repository.impl'

const serviceRepository = new ServiceRepositoryImpl()

const serviceIcons: Record<string, React.ElementType> = {
  'reparation-telephone': Smartphone,
  'reparation-ordinateur': Laptop,
  'micro-soudure': Zap,
  'deblocage': Unlock,
  'installation-windows': Monitor,
  'maintenance-informatique': Wrench,
}

const programme = [
  { label: 'Bases de l\'électronique',             duration: '1 à 2 semaines' },
  { label: 'Outils & environnement de travail',    duration: '2 semaines' },
  { label: 'Architecture des téléphones',          duration: '1 à 2 semaines' },
  { label: 'Diagnostic & recherche de panne',      duration: '2 semaines' },
  { label: 'Module 5 : Micro-soudure (pratique)',  duration: '3 semaines' },
  { label: 'Réparation avancée',                   duration: '3 semaines' },
  { label: 'Logiciel & déblocage',                 duration: '2 semaines' },
  { label: 'Création site web',                    duration: '4 semaines' },
]

export function ServicesSection() {
  const [services, setServices] = useState<Service[]>([])

  useEffect(() => {
    serviceRepository.findAll().then(setServices)
  }, [])

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">

          {/* ── LEFT: NOS SERVICES ── */}
          <div className="flex flex-col h-full">
            <h2 className="text-3xl font-black uppercase mb-8">
              NOS <span className="text-accent">SERVICES</span>
            </h2>

            <div className="grid grid-cols-2 gap-4 flex-grow content-start">
              {services.slice(0, 4).map((service) => {
                const Icon = serviceIcons[service.slug] ?? Wrench
                return (
                  <motion.div
                    key={service.id}
                    whileHover={{ y: -6, scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-xl hover:border-primary/60 transition-shadow duration-300 flex flex-col gap-3 cursor-pointer"
                  >
                    {/* Icon circle */}
                    <div className="w-12 h-12 rounded-full bg-primary/10 group-hover:bg-primary flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-black text-gray-900 text-sm mb-1">{service.title}</h3>
                      <p className="text-gray-500 text-xs leading-relaxed">{service.description}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* CTA */}
            <div className="mt-8">
              <Link
                href="/services"
                className="inline-block bg-primary text-white font-black uppercase px-8 py-3 rounded-lg text-sm tracking-wider hover:bg-primary-dark transition-colors"
              >
                Voir tous nos services
              </Link>
            </div>
          </div>

          {/* ── RIGHT: NOTRE PROGRAMME ── */}
          <div className="bg-[#001D3D] rounded-2xl p-8 text-white flex flex-col h-full">
            <h2 className="text-3xl font-black uppercase mb-8">
              NOTRE <span className="text-accent">PROGRAMME</span>
            </h2>

            <div className="divide-y divide-white/10 flex-grow">
              {programme.slice(0, 5).map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 6, backgroundColor: 'rgba(255,255,255,0.05)' }}
                  transition={{ type: 'tween', duration: 0.2 }}
                  className="flex items-center justify-between py-4 group rounded-lg px-2 cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    {/* Numbered badge */}
                    <motion.span
                      whileHover={{ scale: 1.2 }}
                      className="w-7 h-7 rounded-full bg-white/10 group-hover:bg-accent text-white text-xs font-black flex items-center justify-center flex-shrink-0 transition-colors duration-200"
                    >
                      {i + 1}
                    </motion.span>
                    <div>
                      <p className="text-sm font-semibold text-white/90 group-hover:text-white leading-tight transition-colors duration-200">
                        Module {i + 1} : {item.label}
                      </p>
                      <p className="text-accent text-xs font-medium mt-0.5">{item.duration}</p>
                    </div>
                  </div>
                  <Plus className="w-5 h-5 text-white/30 group-hover:text-accent group-hover:rotate-45 transition-all duration-300 flex-shrink-0" />
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8">
              <Link
                href="/formations"
                className="inline-block border-2 border-white text-white font-black uppercase px-8 py-3 rounded-lg text-sm tracking-wider hover:bg-white hover:text-primary transition-colors"
              >
                Voir tout le programme
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
