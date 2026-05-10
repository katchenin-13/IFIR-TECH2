// features/formations/presentation/components/FormationsListing.tsx
'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Star } from 'lucide-react'

const formationsListing = [
  {
    id: '1',
    title: 'Réparation Mobile & Ordinateur',
    slug: 'reparation-mobile-ordinateur',
    image: '/images/formation-reparation.jpg',
    category: 'Réparation',
    instructor: 'IFIR TECH',
    rating: 4.9,
    reviews: 124,
    price: 'Sur devis',
    level: 'Tous niveaux'
  },
  {
    id: '2',
    title: 'Architecture des Téléphones',
    slug: 'architecture-telephones-ordinateurs',
    image: '/images/service-phone.jpg',
    category: 'Architecture',
    instructor: 'IFIR TECH',
    rating: 4.8,
    reviews: 85,
    price: 'Sur devis',
    level: 'Intermédiaire'
  },
  {
    id: '3',
    title: 'Micro-soudure (Pratique)',
    slug: 'micro-soudure-pratique',
    image: '/images/service-microsoudure.jpg',
    category: 'Électronique',
    instructor: 'IFIR TECH',
    rating: 5.0,
    reviews: 56,
    price: 'Sur devis',
    level: 'Avancé'
  },
  {
    id: '4',
    title: 'Réparation Avancée',
    slug: 'reparation-avancee',
    image: '/images/formation-reparation.jpg',
    category: 'Réparation',
    instructor: 'IFIR TECH',
    rating: 4.9,
    reviews: 42,
    price: 'Sur devis',
    level: 'Expert'
  },
  {
    id: '5',
    title: 'Création de Site Web',
    slug: 'creation-site-web-tunnel-de-vente',
    image: '/images/formation-web.jpg',
    category: 'Web Design',
    instructor: 'IFIR TECH',
    rating: 4.7,
    reviews: 93,
    price: 'Sur devis',
    level: 'Débutant'
  }
]

export function FormationsListing() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {formationsListing.map((course) => (
            <Link 
              href={`/formations/${course.slug}`} 
              key={course.id}
              className="group bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Image with badge */}
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-blue-600 text-white text-[10px] font-bold px-2 py-1 rounded">
                  {course.level}
                </span>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-grow">
                <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-2">
                  {course.category}
                </p>
                <h3 className="text-gray-900 font-black text-base leading-tight mb-3 line-clamp-2 h-10">
                  {course.title}
                </h3>
                
                <p className="text-gray-500 text-xs mb-4">
                  By <span className="text-gray-800 font-bold">{course.instructor}</span>
                </p>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-3 h-3 ${i < Math.floor(course.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200'}`} />
                  ))}
                  <span className="text-xs font-bold text-gray-800 ml-1">{course.rating}</span>
                </div>

                {/* Footer */}
                <div className="mt-auto pt-4 border-t border-gray-50">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-400 text-xs font-bold">Prix</span>
                    <span className="text-primary font-black text-base">
                      {course.price}
                    </span>
                  </div>
                  
                  <div className="inline-flex items-center justify-between bg-accent group-hover:bg-accent-dark text-black font-black py-3 px-4 rounded-xl transition-all w-full shadow-md">
                    <span className="text-[10px] uppercase tracking-wider">Voir le programme</span>
                    <div className="bg-black rounded-full p-1 ml-2">
                      <Star className="w-3 h-3 fill-accent text-accent" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
