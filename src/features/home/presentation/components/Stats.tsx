// features/home/presentation/components/Stats.tsx
'use client'

import { useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import * as Icons from 'lucide-react'
import { mockStatistics } from '../../data/repositories/hero.repository.impl'
import { Card } from '@/design-system/components/Card/Card'

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      let start = 0
      const duration = 2000
      const increment = value / (duration / 16)
      
      const timer = setInterval(() => {
        start += increment
        if (start >= value) {
          setCount(value)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)
      
      return () => clearInterval(timer)
    }
  }, [isInView, value])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

export function Stats() {
  const getIcon = (iconName: string) => {
    const IconComponent = Icons[iconName as keyof typeof Icons] as React.ElementType
    return IconComponent ? <IconComponent className="w-8 h-8 text-accent" /> : null
  }

  return (
    <section className="py-20 bg-gradient-to-br from-primary-dark to-primary relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {mockStatistics.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card variant="glass" className="text-center p-8">
                <div className="inline-flex p-4 bg-accent/10 rounded-full mb-4">
                  {getIcon(stat.icon)}
                </div>
                <div className="text-4xl sm:text-5xl font-display font-bold text-white mb-2">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}