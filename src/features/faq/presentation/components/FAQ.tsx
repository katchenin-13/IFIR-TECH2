// features/faq/presentation/components/FAQ.tsx
'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import * as Icons from 'lucide-react'
import { FAQ as FAQType } from '../../domain/entities/faq.entity'
import { FAQRepositoryImpl } from '../../data/repositories/faq.repository.impl'
import { Card } from '@/design-system/components/Card/Card'

const faqRepository = new FAQRepositoryImpl()

export function FAQ() {
  const [faqs, setFaqs] = useState<FAQType[]>([])
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [activeCategory, setActiveCategory] = useState<FAQType['category'] | 'all'>('all')

  useEffect(() => {
    faqRepository.findAll().then(setFaqs)
  }, [])

  const categories = [
    { id: 'all', label: 'Tous', icon: Icons.MessageCircle },
    { id: 'general', label: 'Général', icon: Icons.HelpCircle },
    { id: 'formation', label: 'Formation', icon: Icons.GraduationCap },
    { id: 'payment', label: 'Paiement', icon: Icons.CreditCard },
    { id: 'career', label: 'Carrière', icon: Icons.Briefcase },
  ]

  const filteredFaqs = activeCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory)

  return (
    <section className="py-28 bg-gradient-to-br from-primary to-primary-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
            Questions{' '}
            <span className="gradient-text">fréquentes</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Tout ce que vous devez savoir avant de rejoindre IFIR TECH
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id as any)}
              className={`flex items-center gap-2 px-5 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-accent text-primary-dark font-bold'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <category.icon className="w-4 h-4" />
              {category.label}
            </button>
          ))}
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {filteredFaqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card variant="glass" className="overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left transition-colors hover:bg-white/10"
                >
                  <span className="text-white font-semibold">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icons.ChevronDown className="w-5 h-5 text-accent" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4 text-gray-300 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}