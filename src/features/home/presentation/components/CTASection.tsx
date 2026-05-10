// features/home/presentation/components/CTASection.tsx
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import * as Icons from 'lucide-react'

export function CTASection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative bg-[#001B6E] rounded-[40px] overflow-hidden p-8 md:p-12 shadow-2xl"
        >
          {/* Background Pattern/Image Decoration */}
          <div className="absolute right-0 top-0 bottom-0 w-full md:w-1/2 z-0 opacity-40">
            <Image 
              src="/images/hero-technician.jpg" 
              alt="CTA Background" 
              fill 
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#001B6E] via-[#001B6E]/80 to-transparent"></div>
          </div>

          {/* Circuits/Dots decoration (visual fluff) */}
          <div className="absolute left-4 top-4 w-20 h-20 opacity-10 pointer-events-none">
            <svg viewBox="0 0 100 100" fill="white">
              <circle cx="10" cy="10" r="2" />
              <circle cx="30" cy="10" r="2" />
              <circle cx="50" cy="10" r="2" />
              <circle cx="10" cy="30" r="2" />
              <circle cx="10" cy="50" r="2" />
              <line x1="10" y1="10" x2="50" y2="10" stroke="white" strokeWidth="0.5" />
              <line x1="10" y1="10" x2="10" y2="50" stroke="white" strokeWidth="0.5" />
            </svg>
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-left max-w-2xl">
              <h2 className="text-2xl md:text-4xl font-black text-white leading-tight uppercase mb-4 tracking-tight">
                Votre vie change en <br className="hidden md:block" />
                <span className="text-accent italic">un seul appel.</span>
              </h2>
              <p className="text-white/70 text-sm md:text-lg font-bold tracking-wide">
                Des centaines d&apos;apprenants ont dit oui à leur avenir. La place suivante est pour vous — elle ne restera pas libre longtemps.
              </p>
            </div>

            <div className="flex-shrink-0">
              <Link
                href="tel:0748222841"
                className="inline-flex items-center justify-between bg-accent hover:bg-accent-dark text-black font-black py-5 px-10 rounded-2xl transition-all group shadow-xl hover:shadow-accent/30 min-w-[260px]"
              >
                <span className="uppercase tracking-widest text-sm">Prendre RDV</span>
                <div className="bg-black rounded-full p-1.5 ml-4 group-hover:animate-bounce transition-transform">
                  <Icons.Phone className="w-5 h-5 text-accent" />
                </div>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}