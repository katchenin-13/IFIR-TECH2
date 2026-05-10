// features/home/presentation/components/TeamSection.tsx
'use client'

import Image from 'next/image'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

const team = [
  {
    name: 'M. Silué',
    role: 'Fondateur & Expert Chef',
    image: '/images/avatar1.jpg',
    socials: [Facebook, Twitter, Instagram, Linkedin]
  },
  {
    name: 'Jean Koffi',
    role: 'Instructeur Micro-soudure',
    image: '/images/avatar2.jpg',
    socials: [Facebook, Twitter, Instagram]
  },
  {
    name: 'Sarah Koné',
    role: 'Responsable Formation Web',
    image: '/images/avatar1.jpg',
    socials: [Facebook, Linkedin]
  },
  {
    name: 'Alain Touré',
    role: 'Technicien Senior',
    image: '/images/avatar2.jpg',
    socials: [Facebook, Instagram]
  },
]

export function TeamSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[2px] w-12 bg-accent"></div>
            <span className="text-accent font-black uppercase tracking-widest text-sm">Notre Équipe</span>
            <div className="h-[2px] w-12 bg-accent"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#001B6E] uppercase">Les Experts IFIR TECH</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <div key={i} className="group flex flex-col items-center">
              <div className="relative w-full aspect-[4/5] rounded-[40px] overflow-hidden mb-6 shadow-lg">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8">
                  <div className="flex gap-3">
                    {member.socials.map((Icon, idx) => (
                      <a key={idx} href="#" className="w-10 h-10 bg-accent text-primary rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg">
                        <Icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-black text-[#001B6E] uppercase mb-1">{member.name}</h3>
              <p className="text-accent font-bold text-xs uppercase tracking-widest">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
