// design-system/components/Button/Button.tsx
import { forwardRef } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cn } from '@/shared/utils/cn'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'accent'
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
  asChild?: boolean
}

const variants = {
  primary: 'bg-primary text-white hover:bg-primary-dark font-bold',
  secondary: 'bg-white text-primary-dark hover:bg-gray-100 font-bold shadow-md',
  accent: 'bg-accent text-primary-dark hover:bg-accent-dark font-bold shadow-lg shadow-accent/20',
  outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
  ghost: 'text-primary hover:bg-primary/5',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', fullWidth = false, asChild = false, className, children, ...props }, ref) => {
    const classes = cn(
      'inline-flex items-center justify-center rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent/50 disabled:opacity-50 disabled:cursor-not-allowed',
      variants[variant],
      sizes[size],
      fullWidth && 'w-full',
      className
    )

    if (asChild) {
      return (
        <Slot ref={ref} className={classes} {...props}>
          {children}
        </Slot>
      )
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
