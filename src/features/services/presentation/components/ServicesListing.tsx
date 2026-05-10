// features/services/presentation/components/ServicesListing.tsx
'use client'

import Image from 'next/image'
import Link from 'next/link'
import * as LucideIcons from 'lucide-react'

const servicesData = [
  {
    title: 'Tablets & iPad Repair',
    description: 'There are many variations of the passages orem psum available but the majority have suffered to the alteration in some.',
    image: '/images/service-phone.jpg',
    icon: 'Tablet',
    slug: 'reparation-telephone'
  },
  {
    title: 'Smart Phone Repair',
    description: 'There are many variations of the passages orem psum available but the majority have suffered to the alteration in some.',
    image: '/images/service-phone.jpg',
    icon: 'Smartphone',
    slug: 'reparation-telephone'
  },
  {
    title: 'Gadget Repair',
    description: 'There are many variations of the passages orem psum available but the majority have suffered to the alteration in some.',
    image: '/images/service-microsoudure.jpg',
    icon: 'Cpu',
    slug: 'micro-soudure'
  },
  {
    title: 'Computer Repair',
    description: 'There are many variations of the passages orem psum available but the majority have suffered to the alteration in some.',
    image: '/images/formation-reparation.jpg',
    icon: 'Laptop',
    slug: 'reparation-ordinateur'
  },
  {
    title: 'Data Recovery',
    description: 'There are many variations of the passages orem psum available but the majority have suffered to the alteration in some.',
    image: '/images/hero-technician.jpg',
    icon: 'HardDrive',
    slug: 'maintenance-informatique'
  },
  {
    title: 'Hardware Update',
    description: 'There are many variations of the passages orem psum available but the majority have suffered to the alteration in some.',
    image: '/images/formation-web.jpg',
    icon: 'Settings',
    slug: 'reparation-avancee'
  }
]

export function ServicesListing() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {servicesData.map((service, index) => {
            const IconComponent = (LucideIcons as any)[service.icon] || LucideIcons.Settings
            return (
              <div 
                key={index} 
                className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 group flex flex-col items-center text-center p-6"
              >
                {/* Image with overlapping icon */}
                <div className="relative w-full aspect-[4/3] mb-12">
                  <div className="absolute inset-0 rounded-2xl overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  
                  {/* Overlapping Icon Circle */}
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-20 h-20 bg-secondary rounded-full border-4 border-white flex items-center justify-center text-white shadow-lg z-10">
                    <IconComponent className="w-10 h-10" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col items-center">
                  <h3 className="text-xl font-black text-primary mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-xs">
                    {service.description}
                  </p>
                  
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center justify-between bg-accent hover:bg-accent-dark text-black font-black py-4 px-6 rounded-xl transition-all group/btn w-full shadow-lg hover:shadow-accent/30"
                  >
                    <span className="text-xs uppercase tracking-wider">En savoir plus</span>
                    <div className="bg-black rounded-full p-1 ml-4 group-hover/btn:translate-x-1 transition-transform">
                      <LucideIcons.ArrowRight className="w-3 h-3 text-accent" />
                    </div>
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
