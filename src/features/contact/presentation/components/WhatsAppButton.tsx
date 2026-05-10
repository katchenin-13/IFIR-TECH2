// features/contact/presentation/components/WhatsAppButton.tsx
'use client'

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import Link from 'next/link'

export function WhatsAppButton() {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: 'spring' }}
      className="fixed bottom-6 right-6 z-50"
    >
      <Link href="https://wa.me/2250748222841" target="_blank" className="block">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-gradient-to-r from-green-500 to-green-600 p-4 rounded-full shadow-2xl shadow-green-500/50 hover:shadow-green-600/50 transition-all duration-300"
        >
          <MessageCircle className="w-6 h-6 text-white" />
        </motion.div>
      </Link>
    </motion.div>
  )
}