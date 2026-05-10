// features/home/presentation/components/AboutHero.tsx
'use client'

import Image from 'next/image'
import Link from 'next/link'

export function AboutHero() {
  return (
    <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-technician.jpg"
          alt="About Us Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#001B6E]/90 backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tight uppercase">
          À Propos de Nous
        </h1>
        <nav className="flex items-center justify-center gap-2 text-white/50 font-bold text-xs uppercase tracking-widest">
          <Link href="/" className="hover:text-accent transition-colors">Home</Link>
          <span className="text-accent">»</span>
          <span className="text-white">À Propos</span>
        </nav>
      </div>
    </section>
  )
}
