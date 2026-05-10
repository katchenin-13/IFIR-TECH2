// features/services/presentation/components/ServicesSection.tsx
'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import * as Icons from 'lucide-react'
import { Service } from '../../domain/entities/service.entity'
import { ServiceRepositoryImpl } from '../../data/repositories/service.repository.impl'
import { Card } from '@/design-system/components/Card/Card'
import { Button } from '@/design-system/components/Button/Button'
import Link from 'next/link'

const serviceRepository = new ServiceRepositoryImpl()

export function ServicesSection() {
  const [services, setServices] = useState<Service[]>([])

  useEffect(() => {
    serviceRepository.findAll().then(setServices)
  }, [])

  const getIcon = (iconName: string) => {
    const IconComponent = Icons[iconName as keyof typeof Icons] as React.ElementType
    return IconComponent ? <IconComponent className="w-10 h-10 text-accent" /> : null
  }

  return (
    <section className="py-28 bg-gradient-to-br from-primary to-primary-dark overflow-hidden">
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
            <span className="gradient-text">Services</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Des prestations de qualité pour tous vos appareils
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card variant="glass" hover className="p-6 h-full flex flex-col">
                <div className="mb-4 inline-flex p-3 bg-accent/10 rounded-xl w-fit">
                  {getIcon(service.icon)}
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm mb-4 flex-grow">{service.description}</p>
                <div className="space-y-2 mb-6">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Icons.CheckCircle className="w-4 h-4 text-accent" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button variant="outline" size="sm" fullWidth asChild>
                  <Link href={`/services/${service.slug}`}>En savoir plus</Link>
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
