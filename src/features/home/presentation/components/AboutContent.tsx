// features/home/presentation/components/AboutContent.tsx
'use client'

import Image from 'next/image'
import { CheckCircle2, Target, Eye, Heart } from 'lucide-react'

export function AboutContent() {
  const values = [
    { title: 'Excellence', description: 'Nous visons la perfection dans chaque réparation et chaque module de formation.', icon: Target },
    { title: 'Innovation', description: 'Toujours à la pointe des nouvelles technologies de micro-soudure et de réparation.', icon: Eye },
    { title: 'Passion', description: 'Transmettre notre savoir avec enthousiasme et dévouement à nos élèves.', icon: Heart },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl"></div>
            <div className="relative rounded-[40px] overflow-hidden shadow-2xl border-8 border-gray-50 aspect-square md:aspect-video lg:aspect-square">
              <Image
                src="/images/gallery1.jpg"
                alt="IFIR TECH Workshop"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-primary p-8 rounded-3xl text-white shadow-xl hidden md:block">
              <p className="text-4xl font-black text-accent mb-1">10+</p>
              <p className="text-xs font-bold uppercase tracking-widest">Années d&apos;Expérience</p>
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-black text-[#001B6E] mb-6 uppercase leading-tight">
              L&apos;Institut de Formation <br />
              <span className="text-accent">Ivoire Réparation</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              IFIR TECH est bien plus qu&apos;un simple centre de réparation. C&apos;est un institut dédié à l&apos;excellence technique et à la transmission du savoir-faire en micro-électronique et informatique.
            </p>
            <div className="space-y-4 mb-10">
              {[
                "Formation 100% pratique sur des cas réels.",
                "Experts certifiés avec une expérience internationale.",
                "Accompagnement après formation pour l'insertion professionnelle.",
                "Équipements de pointe en micro-soudure."
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent" />
                  <span className="text-gray-800 font-bold text-sm uppercase tracking-wider">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, i) => (
            <div key={i} className="bg-gray-50 p-10 rounded-[30px] border border-gray-100 hover:shadow-xl transition-all duration-500 group">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                <value.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-black text-[#001B6E] mb-4 uppercase">{value.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
