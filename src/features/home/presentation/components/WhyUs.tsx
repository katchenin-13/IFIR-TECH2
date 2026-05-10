// features/home/presentation/components/WhyUs.tsx
'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'
import { WhyUsItem } from '../../domain/entities/hero.entity'
import { HeroRepositoryImpl } from '../../data/repositories/hero.repository.impl'
import { Card } from '@/design-system/components/Card/Card'

const heroRepository = new HeroRepositoryImpl()

export function WhyUs() {
  const [items, setItems] = useState<WhyUsItem[]>([])

  useEffect(() => {
    heroRepository.getWhyUsItems().then(setItems)
  }, [])

  const getIcon = (iconName: string) => {
    const IconComponent = Icons[iconName as keyof typeof Icons] as React.ElementType
    return IconComponent ? <IconComponent className="w-8 h-8 text-accent" /> : null
  }

  return (
    <section className="py-28 bg-primary-dark overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
            Pourquoi{' '}
            <span className="gradient-text">nous choisir ?</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            IFIR TECH, c&apos;est bien plus qu&apos;une école — c&apos;est un tremplin vers votre réussite
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card variant="glass" className="p-6 text-center h-full">
                <div className="inline-flex p-4 bg-accent/10 rounded-full mb-4">
                  {getIcon(item.icon)}
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
