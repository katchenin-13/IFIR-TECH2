// features/home/presentation/components/PartnersCarousel.tsx
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const partners = [
  { name: 'Samsung', logo: '/images/partners/samsung.svg' },
  { name: 'Apple', logo: '/images/partners/apple.svg' },
  { name: 'Huawei', logo: '/images/partners/huawei.svg' },
  { name: 'MTN', logo: '/images/partners/mtn-momo.svg' },
  { name: 'HP', logo: '/images/partners/hp.svg' },
  { name: 'Dell', logo: '/images/partners/dell.svg' },
  { name: 'Oppo', logo: '/images/partners/oppo.svg' },
]

export function PartnersCarousel() {
  // Double the array for seamless looping
  const duplicatedPartners = [...partners, ...partners]

  return (
    <section className="py-12 bg-gray-50 border-y border-gray-100 overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <p className="text-center text-gray-400 text-[10px] font-black uppercase tracking-[0.3em]">
          Marques & Partenaires
        </p>
      </div>

      <div className="flex relative">
        <motion.div
          className="flex gap-16 items-center whitespace-nowrap"
          animate={{
            x: ['0%', '-50%'],
          }}
          transition={{
            duration: 30,
            ease: 'linear',
            repeat: Infinity,
          }}
        >
          {duplicatedPartners.map((partner, i) => (
            <div
              key={i}
              className="relative w-32 h-12 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
