// features/gallery/presentation/components/GalleryMasonry.tsx
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const images = [
  { src: '/images/gallery1.jpg', span: 'col-span-2 row-span-2' },
  { src: '/images/service-microsoudure.jpg', span: 'col-span-1 row-span-1' },
  { src: '/images/hero-technician.jpg', span: 'col-span-1 row-span-1' },
  { src: '/images/service-phone.jpg', span: 'col-span-1 row-span-1' },
  { src: '/images/gallery2.jpg', span: 'col-span-1 row-span-1' },
  { src: '/images/formation-reparation.jpg', span: 'col-span-1 row-span-2' },
  { src: '/images/formation-web.jpg', span: 'col-span-1 row-span-1' },
]

export function GalleryMasonry() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-[#001B6E] uppercase">Explore Popular Services 2025</h2>
          <div className="h-1 w-20 bg-accent mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`relative rounded-3xl overflow-hidden shadow-lg group ${img.span}`}
            >
              <Image
                src={img.src}
                alt={`Gallery ${i}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
              <div className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black text-white uppercase tracking-widest border border-white/20">
                IFIR TECH
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
