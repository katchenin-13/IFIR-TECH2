// features/navigation/presentation/components/Navbar.tsx
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import * as Icons from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/design-system/components/Button/Button'
import { cn } from '@/shared/utils/cn'

const navLinks = [
  { href: '/', label: 'ACCUEIL' },
  { href: '/about', label: 'À PROPOS' },
  { href: '/formations', label: 'FORMATIONS' },
  { href: '/services', label: 'SERVICES' },
  { href: '/galerie', label: 'GALERIE' },
  { href: '/blog', label: 'BLOG' },
  { href: '/contact', label: 'CONTACT' },
]
const socialLinks = [
  { icon: Icons.Facebook, href: '#', label: 'Facebook' },
  { icon: (props: any) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  ), href: '#', label: 'TikTok' },
  { icon: Icons.Youtube, href: '#', label: 'YouTube' },
]

function TopBar() {
  return (
    <div className="bg-primary-dark text-white py-2 hidden lg:block border-b border-white/5">
      <div className="container mx-auto px-4 flex justify-between items-center text-[10px] font-bold uppercase tracking-wider">
        <div className="flex items-center gap-2">
          <Icons.MapPin className="w-4 h-4 text-accent fill-accent/20" />
          <span>SIS À KORHOGO, IMMEUBLE SILUE EN FACE DE LA STATION PÉTRO IVOIRE</span>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Icons.Phone className="w-4 h-4 text-accent fill-accent/20" />
            <span>0748222841</span>
          </div>
          <div className="w-px h-3 bg-white/20"></div>
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="hover:text-accent transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

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
    <header className="fixed top-0 left-0 right-0 z-50">
      <TopBar />
      <nav
        className={cn(
          "transition-all duration-300",
          scrolled ? "bg-white/95 backdrop-blur-md shadow-md py-1" : "bg-white py-2"
        )}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <Link href="/" className="flex items-center gap-4 group">
               <div className="flex items-center gap-4">
                 <Image 
                   src="/images/logo/logo-blue.png" 
                   alt="IFIR TECH Logo" 
                   width={300} 
                   height={100} 
                   className="h-24 w-auto object-contain"
                   priority
                 />
                 <div className="h-16 w-px bg-primary/20 hidden md:block"></div>
                 <div className="hidden md:flex flex-col justify-center">
                   <span className="text-sm font-black uppercase tracking-widest text-primary leading-tight">
                     Institut de Formation<br />Ivoire Réparation
                   </span>
                 </div>
               </div>
            </Link>

            {/* Desktop Navigation - Centered */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-xs font-black transition-colors hover:text-accent tracking-widest",
                    pathname === link.href ? "text-accent" : "text-primary"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right Section: CTA */}
            <div className="hidden lg:flex items-center">
              <Link href="tel:0748222841">
                <Button 
                  variant="accent" 
                  size="md" 
                  className="px-8 py-2.5 rounded-xl text-xs font-black tracking-widest flex items-center gap-2 group shadow-lg shadow-accent/20"
                >
                  <Icons.Phone className="w-4 h-4 group-hover:animate-bounce" />
                  PRENDRE RDV
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-primary"
              aria-label="Toggle menu"
            >
              {isOpen ? <Icons.X className="w-8 h-8" /> : <Icons.Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="lg:hidden fixed inset-0 z-50 bg-white"
          >
            <div className="container mx-auto px-4 py-6">
              <div className="flex justify-between items-center mb-8">
                <Link href="/" className="flex items-center gap-3">
                  <Image 
                    src="/images/logo/logo-blue.png" 
                    alt="IFIR TECH Logo" 
                    width={200} 
                    height={64} 
                    className="h-20 w-auto object-contain"
                  />
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black uppercase text-primary leading-tight">
                      Institut de Formation<br />Ivoire Réparation
                    </span>
                  </div>
                </Link>
                <button onClick={() => setIsOpen(false)} className="p-2">
                  <Icons.X className="w-8 h-8" />
                </button>
              </div>
              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "text-2xl font-bold transition-colors",
                      pathname === link.href ? "text-secondary" : "text-primary"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
                <Button variant="accent" fullWidth size="lg">
                  Let&apos;s Talk
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}