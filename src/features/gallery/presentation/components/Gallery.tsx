// features/gallery/presentation/components/Gallery.tsx
'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import * as Icons from 'lucide-react'
import { GalleryImage } from '../../domain/entities/gallery.entity'
import { GalleryRepositoryImpl } from '../../data/repositories/gallery.repository.impl'
import { Card } from '@/design-system/components/Card/Card'

const galleryRepository = new GalleryRepositoryImpl()

export function Gallery() {
  const [images, setImages] = useState<GalleryImage[]>([])
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
  const [activeCategory, setActiveCategory] = useState<GalleryImage['category'] | 'all'>('all')

  useEffect(() => {
    galleryRepository.findAll().then(setImages)
  }, [])

  const categories = [
    { id: 'all', label: 'Tous', icon: Icons.Grid },
    { id: 'formation', label: 'Formations', icon: Icons.GraduationCap },
    { id: 'web', label: 'Web', icon: Icons.Globe },
    { id: 'event', label: 'Événements', icon: Icons.Calendar },
  ]

  const filteredImages = activeCategory === 'all' 
    ? images 
    : images.filter(img => img.category === activeCategory)

  return (
    <>
      <section className="py-28 bg-primary overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
              Notre{' '}
              <span className="gradient-text">Galerie</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Découvrez nos ateliers et la vie de notre institut
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

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="relative group cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <Card variant="glass" className="overflow-hidden p-0">
                  <div className="relative aspect-square bg-white/5">
                    {image.src && (
                      <Image
                        src={image.src}
                        alt={image.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    )}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full">
                      <h3 className="text-white font-bold">{image.title}</h3>
                      <p className="text-gray-300 text-sm capitalize">{image.category}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white p-2 hover:text-accent transition-colors z-10"
              onClick={() => setSelectedImage(null)}
            >
              <Icons.X className="w-8 h-8" />
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-video bg-white/5">
                {selectedImage.src && (
                  <Image
                    src={selectedImage.src}
                    alt={selectedImage.title}
                    fill
                    className="object-contain"
                  />
                )}
              </div>
              <h3 className="text-white text-center mt-4 text-xl font-bold">
                {selectedImage.title}
              </h3>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}