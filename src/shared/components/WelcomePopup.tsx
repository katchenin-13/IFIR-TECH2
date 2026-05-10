// shared/components/WelcomePopup.tsx
'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Sparkles, ArrowRight, Phone } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export function WelcomePopup() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Check if already shown in this session
    const hasShown = sessionStorage.getItem('welcome-popup-shown')
    
    if (!hasShown) {
      const timer = setTimeout(() => {
        setIsOpen(true)
        sessionStorage.setItem('welcome-popup-shown', 'true')
      }, 3000) // 3 seconds delay

      return () => clearTimeout(timer)
    }
  }, [])

  const closePopup = () => setIsOpen(false)

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePopup}
            className="fixed inset-0 z-[100] bg-primary/40 backdrop-blur-sm"
          />

          {/* Popup Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden max-w-lg w-full pointer-events-auto relative border border-gray-100">
              {/* Header Image/Background */}
              <div className="relative h-48 bg-[#001B6E]">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent via-transparent to-transparent"></div>
                </div>
                <button 
                  onClick={closePopup}
                  className="absolute top-6 right-6 z-10 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors backdrop-blur-md"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white p-6 rounded-3xl shadow-xl">
                    <Image
                      src="/images/logo/logo-blue.png"
                      alt="IFIR TECH"
                      width={150}
                      height={50}
                      className="h-10 w-auto object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="p-8 md:p-10 text-center">
                <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
                  <Sparkles className="w-3 h-3" />
                  Bienvenue chez l&apos;Expert
                </div>
                
                <h3 className="text-2xl md:text-3xl font-black text-[#001B6E] uppercase tracking-tight mb-4 leading-tight">
                  Prêt à devenir un <br />
                  <span className="text-accent underline decoration-primary/10">Professionnel de la Tech ?</span>
                </h3>
                
                <p className="text-gray-500 font-bold text-sm mb-10 leading-relaxed max-w-sm mx-auto">
                  Découvrez nos formations certifiantes en réparation mobile, informatique et micro-soudure. Rejoignez plus de 150 étudiants déjà formés !
                </p>

                <div className="flex flex-col gap-4">
                  <Link 
                    href="/formations"
                    onClick={closePopup}
                    className="inline-flex items-center justify-between bg-[#001B6E] hover:bg-primary-dark text-white font-black py-5 px-8 rounded-2xl transition-all group shadow-xl shadow-primary/20"
                  >
                    <span className="uppercase tracking-widest text-xs">Découvrir les formations</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  
                  <a 
                    href="tel:0748222841"
                    className="flex items-center justify-center gap-2 text-[10px] font-black text-gray-400 hover:text-primary uppercase tracking-widest transition-colors py-2"
                  >
                    <Phone className="w-3 h-3" />
                    Parler à un conseiller
                  </a>
                </div>
              </div>

              {/* Bottom Decorative Element */}
              <div className="h-2 bg-gradient-to-r from-primary via-accent to-primary"></div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
