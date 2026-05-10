// design-system/components/Card/Card.tsx
'use client'

import { motion, HTMLMotionProps } from 'framer-motion'
import { forwardRef } from 'react'
import { cn } from '@/shared/lib/utils'

interface CardProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode
  variant?: 'default' | 'glass' | 'gradient'
  hover?: boolean
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ children, variant = 'default', hover = true, className, ...props }, ref) => {
    const variants = {
      default: 'bg-white/5 border border-white/10 rounded-2xl',
      glass: 'bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl',
      gradient: 'bg-gradient-to-br from-primary-light/20 to-accent/20 border border-white/10 rounded-2xl',
    }

    return (
      <motion.div
        ref={ref}
        whileHover={hover ? { y: -10 } : undefined}
        className={cn(variants[variant], className)}
        {...props}
      >
        {children}
      </motion.div>
    )
  }
)

Card.displayName = 'Card'