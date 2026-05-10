// features/gallery/presentation/components/Gallery.tsx
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const galleryImages = [
  { id: 1, src: '/images/gallery1.jpg', title: 'Atelier 1' },
  { id: 2, src: '/images/service-microsoudure.jpg', title: 'Atelier 2' },
  { id: 3, src: '/images/hero-technician.jpg', title: 'Atelier 3' },
  { id: 4, src: '/images/service-phone.jpg', title: 'Atelier 4' },
  { id: 5, src: '/images/gallery2.jpg', title: 'Atelier 5' },
]

export function Gallery() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header with lines */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="h-[2px] w-12 sm:w-24 bg-accent"></div>
          <h2 className="text-2xl sm:text-4xl font-black text-[#001B6E] uppercase tracking-tight text-center">
            GALERIE ATELIER
          </h2>
          <div className="h-[2px] w-12 sm:w-24 bg-accent"></div>
        </div>

        {/* 5 Images Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md group cursor-pointer"
            >
              <Image
                src={image.src}
                alt={image.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300"></div>
            </motion.div>
          ))}
        </div>

        {/* Voir plus button */}
        <div className="flex justify-center">
          <Link
            href="/galerie"
            className="inline-flex items-center justify-between bg-accent hover:bg-accent-dark text-black font-black py-4 px-10 rounded-full transition-all group shadow-lg hover:shadow-accent/30 min-w-[250px]"
          >
            <span className="uppercase tracking-wider text-sm">Voir plus de photos</span>
            <div className="bg-black rounded-full p-1 ml-4 group-hover:translate-x-1 transition-transform">
              <ArrowRight className="w-4 h-4 text-accent" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}