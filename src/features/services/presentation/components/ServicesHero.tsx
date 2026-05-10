// features/services/presentation/components/ServicesHero.tsx
'use client'

import Image from 'next/image'

export function ServicesHero() {
  return (
    <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-technician.jpg"
          alt="Services Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#001B6E]/80 backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tight">
          Services
        </h1>
        <nav className="flex items-center justify-center gap-2 text-white/80 font-bold text-sm">
          <span className="hover:text-accent transition-colors cursor-pointer">Home</span>
          <span className="text-accent">»</span>
          <span className="text-accent">Services</span>
        </nav>
      </div>
    </section>
  )
}
