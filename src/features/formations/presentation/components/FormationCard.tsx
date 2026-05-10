// features/formations/presentation/components/FormationCard.tsx
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { CheckCircle, ArrowRight, Clock, Award } from 'lucide-react'
import { Formation } from '../../domain/entities/formation.entity'
import { glassCard } from '@/shared/lib/animations'

interface FormationCardProps {
  formation: Formation
  index: number
}

export function FormationCard({ formation, index }: FormationCardProps) {
  return (
    <motion.div
      variants={glassCard}
      initial="initial"
      whileInView="animate"
      whileHover="hover"
      viewport={{ once: true }}
      custom={index}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary-light to-accent rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="relative bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-accent/50 transition-all duration-300">
        <div className="flex items-start justify-between mb-6">
          <div className="p-4 bg-gradient-to-br from-accent/20 to-accent-light/20 rounded-xl">
            <Award className="w-10 h-10 text-accent" />
          </div>
          <div className="text-right">
            <div className="flex items-center gap-2 text-accent font-bold text-sm mb-1">
              <Clock className="w-4 h-4" />
              {formation.duration}
            </div>
            <div className="text-white font-bold text-2xl">
              {new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'XAF' }).format(Number(formation.price))}
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-display font-bold text-white mb-3">
          {formation.title}
        </h3>
        <p className="text-gray-300 mb-6">{formation.description}</p>

        <div className="space-y-3 mb-8">
          {formation.objectives.slice(0, 3).map((objective, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
              <span className="text-gray-300 text-sm">{objective}</span>
            </div>
          ))}
        </div>

        <Link
          href={`/formations/${formation.slug}`}
          className="inline-flex items-center gap-2 text-accent hover:text-accent-light font-bold transition-colors group/btn"
        >
          En savoir plus
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  )
}