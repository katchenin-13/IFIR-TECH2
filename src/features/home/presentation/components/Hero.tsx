// features/home/presentation/components/Hero.tsx
'use client'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import * as Icons from 'lucide-react'
import { Button } from '@/design-system/components/Button/Button'
import { fadeInLeft, fadeInRight, staggerContainer } from '@/shared/lib/animations'
import { HeroRepositoryImpl } from '../../data/repositories/hero.repository.impl'
import { GetHeroContentUseCase } from '../../use-cases/get-hero-content.use-case'

const heroRepository = new HeroRepositoryImpl()
const getHeroContent = new GetHeroContentUseCase(heroRepository)

const featureCards = [
  {
    id: '01',
    title: 'Maîtrisez les bases de l\'électronique',
    description: 'Diagnostiquer une panne, remplacer un composant, sauver un appareil — vous apprenez à le faire avec vos propres mains.',
    icon: Icons.Cpu
  },
  {
    id: '02',
    title: 'Encadrement humain et personnalisé',
    description: 'Ici, vous n\'êtes pas un numéro. Nos formateurs vous connaissent par votre nom et suivent votre progression.',
    icon: Icons.Users
  },
  {
    id: '03',
    title: 'Votre avenir commence en salle de formation',
    description: 'Chaque heure passée chez IFIR Tech est un investissement direct dans votre indépendance financière.',
    icon: Icons.ShieldCheck
  }
]

export function Hero() {
  const [content, setContent] = useState({
    title: '',
    subtitle: '',
    badge: '',
    ctaPrimary: '',
    ctaSecondary: '',
    image: '',
  })

  useEffect(() => {
    getHeroContent.execute().then(setContent)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={content.image || '/images/hero-technician.jpg'}
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-primary-dark/70 backdrop-blur-[2px]"></div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-32 pb-48 text-center">
        {/* Navigation Arrows */}
        <div className="absolute top-1/2 left-4 -translate-y-1/2 z-30 hidden md:block">
          <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-secondary hover:border-secondary transition-all">
            <Icons.ChevronLeft className="w-6 h-6" />
          </button>
        </div>
        <div className="absolute top-1/2 right-4 -translate-y-1/2 z-30 hidden md:block">
          <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-secondary hover:border-secondary transition-all">
            <Icons.ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <motion.div variants={staggerContainer} initial="initial" animate="animate" className="max-w-4xl mx-auto ">
          <motion.div variants={fadeInLeft} className="mb-4">
             <span className="text-accent font-bold tracking-[0.2em] uppercase text-sm">
                {content.subtitle || 'YOUR TRUSTED PARTNER'}
             </span>
          </motion.div>

          <motion.h1
            variants={fadeInLeft}
            className="text-4xl sm:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight"
          >
            {content.title ? content.title.split('Repair').map((part, index, array) => (
              <span key={index}>
                {part}
                {index < array.length - 1 && <span className="text-accent">Repair</span>}
              </span>
            )) : (
              <>
                Computer & Mobile<br />
                <span className="text-accent">Repair</span> Services
              </>
            )}
          </motion.h1>

          <motion.p variants={fadeInLeft} className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Plus de 500 jeunes ont transformé leur passion pour la tech en un vrai métier grâce à IFIR Tech. C&apos;est votre tour de rejoindre ceux qui ont choisi de ne plus attendre.
          </motion.p>

          <motion.div variants={fadeInLeft} className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="tel:0748222841" className="w-full sm:w-auto">
              <Button variant="accent" size="lg" className="group px-10 py-4 rounded-full w-full">
                <Icons.Phone className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                APPELER POUR RDV
              </Button>
            </Link>
            <Link href="/formations" className="w-full sm:w-auto">
              <Button variant="secondary" size="lg" className="group px-10 py-4 rounded-full w-full">
                NOS FORMATIONS
                <Icons.ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Feature Cards Overlapping */}
      <div className="absolute bottom-0 left-0 right-0 z-20 translate-y-1/2">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featureCards.map((card, index) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="bg-[#002B5B] p-8 rounded-xl border border-white/5 shadow-2xl relative overflow-hidden group"
              >
                <div className="relative z-10 flex gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent transition-all duration-500">
                    <card.icon className="w-8 h-8 text-accent group-hover:text-primary transition-colors duration-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-secondary transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
                {/* Large background number */}
                <span className="absolute -bottom-4 -left-4 text-8xl font-black text-white/5 select-none transition-all duration-500 group-hover:text-white/10 group-hover:-translate-y-4">
                  {card.id}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
