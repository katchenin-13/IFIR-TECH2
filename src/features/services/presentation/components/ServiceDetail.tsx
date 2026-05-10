// features/services/presentation/components/ServiceDetail.tsx
'use client'

import { Service } from '../../domain/entities/service.entity'
import * as LucideIcons from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export function ServiceDetail({ service }: { service: Service }) {
  const IconComponent = (LucideIcons as any)[service.icon] || LucideIcons.Settings

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[450px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#001B6E]/90"></div>
        </div>

        <div className="container mx-auto px-4 max-w-7xl relative z-10 text-center">
          <div className="inline-flex p-4 bg-accent/20 rounded-3xl border border-accent/30 mb-6">
            <IconComponent className="w-12 h-12 text-accent" />
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-white leading-tight mb-6 uppercase tracking-tight">
            {service.title}
          </h1>
          <nav className="flex items-center justify-center gap-2 text-white/50 font-bold text-xs uppercase tracking-widest">
            <Link href="/" className="hover:text-accent">Home</Link>
            <span className="text-accent">»</span>
            <Link href="/services" className="hover:text-accent">Services</Link>
            <span className="text-accent">»</span>
            <span className="text-white">{service.title}</span>
          </nav>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Left Column: Image with accent decoration */}
            <div className="relative order-2 lg:order-1">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
              <div className="relative rounded-[40px] overflow-hidden shadow-2xl border-8 border-gray-50 aspect-square">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl border border-gray-100 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-xl">
                    <LucideIcons.ShieldCheck className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-black text-primary uppercase">Garantie Qualité</p>
                    <p className="text-gray-500 text-[10px]">Satisfaction certifiée</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Text & Features */}
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-black text-[#001B6E] mb-8 uppercase leading-tight">
                Description de notre prestation de <span className="text-accent underline decoration-primary/10">{service.title}</span>
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-12">
                {service.description}. Nous mettons tout notre savoir-faire au service de vos appareils pour vous garantir un résultat impeccable et durable.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <LucideIcons.Check className="w-5 h-5 text-accent" />
                    </div>
                    <span className="text-gray-800 font-bold text-sm uppercase tracking-wider">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-6">
                <button className="inline-flex items-center justify-between bg-accent hover:bg-accent-dark text-black font-black py-5 px-10 rounded-2xl transition-all group shadow-lg shadow-accent/20">
                  <span className="uppercase tracking-widest text-sm">Demander un devis</span>
                  <div className="bg-black rounded-full p-1 ml-4 group-hover:translate-x-1 transition-transform">
                    <LucideIcons.ArrowRight className="w-4 h-4 text-accent" />
                  </div>
                </button>
                <button className="inline-flex items-center justify-center gap-3 bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white font-black py-5 px-10 rounded-2xl transition-all uppercase tracking-widest text-sm">
                  <LucideIcons.Phone className="w-5 h-5" />
                  Nous Appeler
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <LucideIcons.Quote className="w-12 h-12 text-accent mx-auto mb-6 opacity-30" />
          <h3 className="text-2xl font-black text-[#001B6E] mb-6">
            Votre satisfaction est notre priorité absolue. Nous traitons chaque appareil comme si c&apos;était le nôtre.
          </h3>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-1 bg-accent"></div>
            <p className="font-bold uppercase tracking-widest text-primary text-sm">L&apos;équipe IFIR TECH</p>
            <div className="w-12 h-1 bg-accent"></div>
          </div>
        </div>
      </section>
    </main>
  )
}
