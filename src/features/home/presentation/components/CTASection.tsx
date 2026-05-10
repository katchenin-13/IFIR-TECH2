// features/home/presentation/components/CTASection.tsx
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'
import { Button } from '@/design-system/components/Button/Button'

export function CTASection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-accent to-accent-dark opacity-90"></div>
      <div className="absolute inset-0 bg-[url('/images/tech-pattern.png')] opacity-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-primary-dark mb-6">
            APPRENDS AUJOURD&apos;HUI,
            <br />
            RÉUSSIS DEMAIN !
          </h2>
          <p className="text-primary-dark/80 text-lg mb-8 max-w-2xl mx-auto">
            Rejoignez IFIR TECH et transformez votre passion en métier. 
            Des formations pratiques, des experts dédiés et une garantie de réussite.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">
                Commencer maintenant
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button asChild size="lg">
              <Link href="https://wa.me/2250748222841" target="_blank">
                <Phone className="w-5 h-5 mr-2" />
                WhatsApp
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}