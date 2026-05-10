// features/navigation/presentation/components/Navbar.tsx
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import * as Icons from 'lucide-react'
import { Button } from '@/design-system/components/Button/Button'

const navLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/formations', label: 'Formations' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'À propos' },
  { href: '/gallery', label: 'Galerie' },
  { href: '/testimonials', label: 'Témoignages' },
  { href: '/contact', label: 'Contact' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-primary-dark/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative">
                <div className="absolute inset-0 bg-accent blur-xl opacity-50 animate-pulse"></div>
                <Icons.Smartphone className="w-8 h-8 text-accent relative z-10" />
              </div>
              <div>
                <span className="text-white font-display font-bold text-xl">
                  IFIR <span className="text-accent">TECH</span>
                </span>
                <p className="text-xs text-gray-300 hidden sm:block">
                  Institut de Formation Ivoire Réparation
                </p>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-white/80 hover:text-accent transition-colors duration-300 font-medium ${
                    pathname === link.href ? 'text-accent' : ''
                  }`}
                >
                  {link.label}
                  {pathname === link.href && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-2 left-0 right-0 h-0.5 bg-accent"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button asChild>
                <Link href="/contact">S&apos;inscrire maintenant</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              {isOpen ? <Icons.X className="w-6 h-6" /> : <Icons.Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-primary-dark/95 backdrop-blur-md lg:hidden pt-24"
          >
            <div className="container mx-auto px-4">
              <div className="flex flex-col space-y-4">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className={`block py-3 text-white/80 hover:text-accent transition-colors text-lg font-medium ${
                        pathname === link.href ? 'text-accent' : ''
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <Button asChild fullWidth>
                    <Link href="/contact">S&apos;inscrire maintenant</Link>
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}