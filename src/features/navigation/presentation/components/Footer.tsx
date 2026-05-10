// features/navigation/presentation/components/Footer.tsx
'use client'

import Link from 'next/link'
import Image from 'next/image'
import * as Icons from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/design-system/components/Button/Button'

const quickLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/about', label: 'À propos' },
  { href: '/formations', label: 'Formations' },
  { href: '/services', label: 'Services' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

const formationsLinks = [
  { href: '#', label: 'Réparation Mobile & Ordinateur' },
  { href: '#', label: 'Micro-soudure' },
  { href: '#', label: 'Architecture Téléphones' },
  { href: '#', label: 'Réparation Avancée' },
  { href: '#', label: 'Création Web & Tunnel de Vente' },
]

const socialLinks = [
  { icon: Icons.Facebook, href: '#' },
  { icon: (props: any) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  ), href: '#' },
  { icon: Icons.Youtube, href: '#' },
]

export function Footer() {
  return (
    <footer className="bg-[#001D3D] text-white pt-20 pb-8 relative overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="flex flex-col">
            <div className="mb-6">
              <Image 
                src="/images/logo/logo-blan.png" 
                alt="iFIR TECH Logo" 
                width={320} 
                height={120} 
                className="h-32 w-auto object-contain -ml-4"
                priority
              />
            </div>
            <p className="text-white/80 text-sm leading-relaxed max-w-[280px]">
              L&apos;expertise d&apos;aujourd&apos;hui, la réussite de demain.
              Formations professionnelles et services techniques à Korhogo.
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-white font-bold uppercase text-base mb-8">Liens rapides</h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Formations Column */}
          <div>
            <h3 className="text-white font-bold uppercase text-base mb-8">Formations</h3>
            <ul className="space-y-4">
              {formationsLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-white font-bold uppercase text-base mb-8">Contactez-nous</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <Icons.MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-white/80 text-sm leading-relaxed">
                  SIS à Korhogo, Immeuble SILUE<br />
                  en face de la station Pétro Ivoire
                </span>
              </li>
              <li className="flex items-center gap-4">
                <Icons.Phone className="w-5 h-5 text-accent" />
                <span className="text-white/80 text-sm">0748222841</span>
              </li>
              <li className="flex items-center gap-4">
                <Icons.Mail className="w-5 h-5 text-accent" />
                <span className="text-white/80 text-sm">contact@ifirtech.ci</span>
              </li>
              <li className="flex items-center gap-4">
                <Icons.Clock className="w-5 h-5 text-accent" />
                <span className="text-white/80 text-sm">Lun - Sam: 8h00 - 18h00</span>
              </li>
            </ul>
            
            {/* Social Icons */}
            <div className="flex gap-4 mt-10">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#001D3D] hover:bg-accent transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/60">
          <p>© 2025 iFIR TECH – Institut de Formation Ivoire Réparation. Tous droits réservés.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white transition-colors">Mentions légales</Link>
            <Link href="#" className="hover:text-white transition-colors">Politique de confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}