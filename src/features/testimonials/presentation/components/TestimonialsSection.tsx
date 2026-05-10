// features/testimonials/presentation/components/TestimonialsSection.tsx
'use client'

import { motion } from 'framer-motion'
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

const testimonials = [
  {
    id: 1,
    name: 'Adama K.',
    role: 'Technicien Réparateur',
    content: "Grâce à IFIR Tech, j'ai appris un vrai métier. Aujourd'hui j'ai mon propre atelier de réparation et je vis de ma passion.",
    image: '/images/avatar1.jpg'
  },
  {
    id: 2,
    name: 'Awa D.',
    role: 'Développeuse Web',
    content: "La formation est 100% pratique et les formateurs sont toujours disponibles. Je recommande à 100% !",
    image: '/images/avatar2.jpg'
  },
  {
    id: 3,
    name: 'Yao J.',
    role: 'Entrepreneur',
    content: "Meilleure décision de ma vie ! En 3 mois j'ai acquis des compétences solides en réparation mobile.",
    image: '/images/avatar1.jpg'
  }
]

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header with lines */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="h-[2px] w-12 sm:w-24 bg-accent"></div>
          <h2 className="text-2xl sm:text-4xl font-black text-[#001B6E] uppercase tracking-tight text-center">
            TÉMOIGNAGES
          </h2>
          <div className="h-[2px] w-12 sm:w-24 bg-accent"></div>
        </div>

        <div className="relative group">
          {/* Grid for desktop / simple layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-100 rounded-[30px] p-8 shadow-sm hover:shadow-md transition-shadow relative"
              >
                <div className="flex items-start gap-4 mb-6">
                  <Quote className="w-10 h-10 text-[#001B6E] opacity-20 flex-shrink-0 rotate-180" />
                  <p className="text-gray-500 text-sm leading-relaxed italic">
                    {testimonial.content}
                  </p>
                </div>
                
                <div className="flex items-center gap-4 mt-8">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-gray-50">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-black text-[#001B6E] uppercase text-sm">{testimonial.name}</h4>
                    <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Arrows (Visual only for now based on image) */}
          <div className="absolute top-1/2 -left-4 -translate-y-1/2 hidden lg:block">
            <button className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-[#001B6E] hover:bg-accent transition-colors shadow-sm">
              <ChevronLeft className="w-6 h-6" />
            </button>
          </div>
          <div className="absolute top-1/2 -right-4 -translate-y-1/2 hidden lg:block">
            <button className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-[#001B6E] hover:bg-accent transition-colors shadow-sm">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-12">
          <div className="w-2 h-2 rounded-full bg-[#001B6E]"></div>
          <div className="w-2 h-2 rounded-full bg-gray-200"></div>
          <div className="w-2 h-2 rounded-full bg-gray-200"></div>
        </div>
      </div>
    </section>
  )
}
