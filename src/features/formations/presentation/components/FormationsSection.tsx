// features/formations/presentation/components/FormationsSection.tsx
'use client'

import { motion } from 'framer-motion'
import { FormationCard } from './FormationCard'
import { useFormations } from '../hooks/useFormations'

export function FormationsSection() {
  const { formations, loading } = useFormations()

  return (
    <section className="py-28 bg-gradient-to-br from-primary-dark to-primary overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
            Nos{' '}
            <span className="gradient-text">Formations</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Des formations professionnelles conçues pour vous rendre opérationnel rapidement
          </p>
        </motion.div>

        {loading ? (
          <div className="text-center text-gray-400">Chargement...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {formations.map((formation, index) => (
              <FormationCard key={formation.id} formation={formation} index={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
