// shared/components/LoadingScreen.tsx
'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Hide loader after a short delay (simulating page load ready)
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-[#001B6E] flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Background Decorative Circles */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1] 
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-[600px] h-[600px] bg-white rounded-full blur-[120px]"
          />
          
          <div className="relative z-10 flex flex-col items-center">
            {/* Logo Animation */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                duration: 1, 
                ease: "easeOut",
                scale: {
                  type: "spring",
                  damping: 12,
                  stiffness: 100,
                  repeat: Infinity,
                  repeatType: "reverse",
                  repeatDelay: 0.5
                }
              }}
              className="mb-12 bg-white p-10 rounded-[40px] shadow-2xl"
            >
              <Image
                src="/images/logo/logo-blue.png"
                alt="IFIR TECH Logo"
                width={250}
                height={80}
                className="h-20 w-auto object-contain"
                priority
              />
            </motion.div>

            {/* Text & Progress */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-center"
            >
              <h2 className="text-white font-black text-xs uppercase tracking-[0.4em] mb-6">
                Chargement de l&apos;excellence
              </h2>
              
              {/* Progress Bar Container */}
              <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden relative">
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className="absolute inset-0 bg-accent w-full h-full rounded-full"
                />
              </div>
            </motion.div>
          </div>

          {/* Slogan at bottom */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-12 text-white text-[10px] font-bold uppercase tracking-[0.2em]"
          >
            Institut de Formation Ivoire Réparation
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
