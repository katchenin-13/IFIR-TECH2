// features/testimonials/presentation/components/TestimonialsSection.tsx
'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { Testimonial } from '../../domain/entities/testimonial.entity'
import { TestimonialRepositoryImpl } from '../../data/repositories/testimonial.repository.impl'
import { Card } from '@/design-system/components/Card/Card'

const testimonialRepository = new TestimonialRepositoryImpl()

export function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])

  useEffect(() => {
    testimonialRepository.findAll().then(setTestimonials)
  }, [])

  return (
    <section className="py-28 bg-primary overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
            Ils nous font{' '}
            <span className="gradient-text">confiance</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Découvrez les témoignages de nos anciens étudiants
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card variant="glass" className="p-6 h-full flex flex-col">
                <div className="flex mb-3">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-gray-300 text-sm mb-4 flex-grow">&ldquo;{testimonial.content}&rdquo;</p>
                <div>
                  <p className="text-white font-bold">{testimonial.name}</p>
                  <p className="text-gray-400 text-xs">{testimonial.role}</p>
                  <p className="text-accent text-xs mt-1">{testimonial.formation}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
