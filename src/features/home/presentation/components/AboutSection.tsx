// features/home/presentation/components/AboutSection.tsx
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import * as Icons from 'lucide-react'
import { Button } from '@/design-system/components/Button/Button'
import { fadeInLeft, fadeInRight } from '@/shared/lib/animations'

export function AboutSection() {
  const features = [
    {
      title: 'Our Affordable Price',
      description: 'There are many variations of passage majority have suffered some form injected humour.',
      icon: Icons.CircleDollarSign
    },
    {
      title: 'Trusted Repair Service',
      description: 'There are many variations of passage majority have suffered some form injected humour.',
      icon: Icons.ShieldCheck
    }
  ]

  return (
    <section className="pt-64 pb-24 bg-white overflow-hidden relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left Side: Image Composition */}
          <div className="w-full lg:w-1/2 relative">
            <motion.div 
              variants={fadeInLeft}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="relative flex items-center justify-center"
            >
              {/* Decorative background shape */}
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary/5 rounded-[3rem] -z-10"></div>
              
              {/* Main Image Container */}
              <div className="relative w-full max-w-[450px]">
                <div className="relative rounded-[3rem] overflow-hidden aspect-[4/5] shadow-2xl border-8 border-white">
                  <Image
                    src="/images/hero-technician.jpg"
                    alt="Technician working"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Overlapping Pill Image */}
                <div className="absolute -bottom-6 -right-6 w-1/2 aspect-[3/4] rounded-full overflow-hidden border-8 border-white shadow-2xl z-20">
                  <Image
                    src="/images/service-phone.jpg"
                    alt="Repair detail"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Experience Badge */}
                <div className="absolute top-12 -left-8 sm:-left-12 bg-accent px-6 py-4 rounded-full text-primary shadow-xl z-30 flex items-center gap-3 border-2 border-dashed border-white/50">
                  <span className="text-4xl font-black">25+</span>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase font-bold tracking-wider leading-none">Years Of</span>
                    <span className="text-[10px] uppercase font-bold tracking-wider leading-none">Experience</span>
                  </div>
                </div>

                {/* Decorative Dots */}
                <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-[radial-gradient(#CBD5E1_2px,transparent_2px)] [background-size:12px_12px] -z-10"></div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Content */}
          <div className="w-full lg:w-1/2">
            <motion.div
              variants={fadeInRight}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <Icons.MessageSquareText className="w-5 h-5 text-accent" />
                </div>
                <span className="text-accent font-bold tracking-widest uppercase text-sm">
                  About Us
                </span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-black text-primary mb-6 leading-[1.1]">
                We Provide Quality <br />
                <span className="text-accent">Repair</span> Services
              </h2>

              <p className="text-gray-500 mb-8 leading-relaxed max-w-xl">
                There are many variations of passages available randomised words which the majority have suffered alteration in some form, by injected humour look page when looking at its layout even slightly believable.
              </p>

              <div className="space-y-4 mb-10">
                {features.map((feature, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center gap-5 p-5 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="flex-shrink-0 w-14 h-14 bg-accent rounded-full flex items-center justify-center text-primary shadow-lg shadow-accent/20">
                      <feature.icon className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-gray-500 text-xs leading-relaxed max-w-xs">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <Button variant="accent" size="lg" className="rounded-full px-10 py-6 h-auto group text-base font-bold shadow-lg shadow-accent/20">
                Discover More
                <Icons.ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
