// features/navigation/presentation/components/Footer.tsx
'use client'

import Link from 'next/link'
import Image from 'next/image'
import * as Icons from 'lucide-react'
import { cn } from '@/shared/utils/cn'

const socialLinks = [
  { icon: Icons.Facebook, href: '#', label: 'Facebook' },
  { icon: (props: any) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  ), href: '#', label: 'TikTok' },
  { icon: Icons.Youtube, href: '#', label: 'YouTube' },
  { icon: (props: any) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-7.6 8.38 8.38 0 0 1 3.8.9L21 4.5z" />
    </svg>
  ), href: '#', label: 'WhatsApp' },
]

const quickLinks = [
  { label: 'Accueil', href: '/' },
  { label: 'Témoignages', href: '/#testimonials' },
  { label: 'Formations', href: '/formations' },
  { label: 'Blog', href: '/blog' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
  { label: 'À propos', href: '/about' },
  { label: 'Prendre RDV', href: 'tel:0748222841' },
]

export function Footer() {
  return (
    <footer className="bg-[#001B6E] text-white pt-16 pb-8 border-t border-white/5">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          
          {/* Column 1: Brand */}
          <div className="flex flex-col items-start pr-8">
            <Link href="/" className="mb-6 block">
              <Image 
                src="/images/logo/logo-blan.png" 
                alt="iFIR TECH Logo" 
                width={200} 
                height={80} 
                className="h-20 w-auto object-contain -ml-2"
                priority
              />
            </Link>
            <p className="text-white/80 text-xs font-bold leading-relaxed mb-8 max-w-[200px]">
              L&apos;expertise d&apos;aujourd&apos;hui,<br />
              la réussite de demain !
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-[#001B6E] transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links (with internal grid) */}
          <div className="lg:border-l lg:border-white/10 lg:pl-8">
            <h3 className="text-white font-black uppercase text-sm mb-8 tracking-widest">Liens rapides</h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
              {quickLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-white/70 hover:text-white transition-colors text-xs font-bold"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: Contact */}
          <div className="lg:border-l lg:border-white/10 lg:pl-8">
            <h3 className="text-white font-black uppercase text-sm mb-8 tracking-widest">Contactez-nous</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <Icons.MapPin className="w-5 h-5 text-white" />
                </div>
                <span className="text-white/80 text-[11px] font-bold leading-relaxed">
                  Sis à Korhogo, Immeuble SILUE<br />
                  en face de la station Pétro Ivoire
                </span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center flex-shrink-0">
                  <Icons.Phone className="w-5 h-5 text-white" />
                </div>
                <span className="text-white/80 text-[11px] font-bold tracking-wider">+225 07 48 22 28 41</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center flex-shrink-0">
                  <Icons.Mail className="w-5 h-5 text-white" />
                </div>
                <span className="text-white/80 text-[11px] font-bold tracking-wider">contact@ifirtech.ci</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Opening Hours */}
          <div className="lg:border-l lg:border-white/10 lg:pl-8">
            <h3 className="text-white font-black uppercase text-sm mb-8 tracking-widest">Horaires d&apos;ouverture</h3>
            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center text-[11px] font-bold">
                <span className="text-white/60 uppercase">Lun - Ven :</span>
                <span>08H00 - 17H00</span>
              </div>
              <div className="flex justify-between items-center text-[11px] font-bold">
                <span className="text-white/60 uppercase">Samedi :</span>
                <span>08H00 - 14H00</span>
              </div>
            </div>
            
            <a 
              href="https://wa.me/2250748222841"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 w-full bg-accent hover:bg-accent-dark text-[#001B6E] font-black py-4 px-6 rounded-xl transition-all shadow-lg shadow-accent/10 group"
            >
              <Icons.MessageCircle className="w-5 h-5 fill-current" />
              <span className="uppercase tracking-widest text-[11px]">WhatsApp</span>
              <Icons.ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-white/50 font-bold uppercase tracking-widest">
          <div className="flex flex-col gap-2">
            <p className="text-center md:text-left">
              © 2024 IFIR TECH - Institut de Formation Ivoire Réparation. Tous droits réservés.
            </p>
            <p className="text-center md:text-left text-white/30 lowercase tracking-normal font-medium">
              Conçu et développé par <span className="text-accent font-black uppercase tracking-widest">Soro Katchenin Moise</span>
            </p>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/mentions-legales" className="hover:text-white transition-colors">Mentions légales</Link>
            <span className="w-px h-3 bg-white/20"></span>
            <Link href="/confidentialite" className="hover:text-white transition-colors">Confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}