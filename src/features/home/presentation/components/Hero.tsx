// features/home/presentation/components/Hero.tsx
'use client'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Shield } from 'lucide-react'
import { Button } from '@/design-system/components/Button/Button'
import { fadeInLeft, fadeInRight, staggerContainer } from '@/shared/lib/animations'
import { HeroRepositoryImpl } from '../../data/repositories/hero.repository.impl'
import { GetHeroContentUseCase } from '../../use-cases/get-hero-content.use-case'

const heroRepository = new HeroRepositoryImpl()
const getHeroContent = new GetHeroContentUseCase(heroRepository)

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
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-primary">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-light/20 rounded-full blur-3xl animate-float animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-radial from-transparent to-primary/50"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div variants={staggerContainer} initial="initial" animate="animate">
            <motion.div variants={fadeInLeft} className="mb-6">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Shield className="w-4 h-4 text-accent" />
                <span className="text-white text-sm">{content.badge}</span>
              </div>
            </motion.div>

            <motion.h1
              variants={fadeInLeft}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-white mb-6 leading-tight"
            >
              {content.title.split('RÉPARATION')[0]}
              <span className="text-accent block">
                RÉPARATION{content.title.split('RÉPARATION')[1]}
              </span>
            </motion.h1>

            <motion.p variants={fadeInLeft} className="text-gray-300 text-lg mb-8 leading-relaxed">
              {content.subtitle}
            </motion.p>

            <motion.div variants={fadeInLeft} className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button asChild size="lg">
                <Link href="/formations">
                  {content.ctaPrimary}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="https://wa.me/2250748222841" target="_blank">
                  {content.ctaSecondary}
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div variants={fadeInRight} initial="initial" animate="animate" className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-30 z-10"></div>
              {content.image && (
                <Image
                  src={content.image}
                  alt="Technicien en réparation"
                  width={600}
                  height={700}
                  className="w-full h-auto object-cover"
                  priority
                />
              )}
            </div>
            
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-10 -right-10 bg-gradient-to-r from-accent to-accent-dark rounded-2xl p-4 shadow-xl"
            >
              <div className="text-primary-dark font-bold">100% Pratique</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}