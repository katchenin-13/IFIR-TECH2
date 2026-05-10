// features/navigation/presentation/components/Footer.tsx
'use client'

import Link from 'next/link'
import * as Icons from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/design-system/components/Button/Button'

const quickLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/formations', label: 'Formations' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'À propos' },
  { href: '/contact', label: 'Contact' },
]

const socials = [
  { icon: Icons.Facebook, href: '#', label: 'Facebook' },
  { icon: Icons.Twitter, href: '#', label: 'Twitter' },
  { icon: Icons.Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Icons.Instagram, href: '#', label: 'Instagram' },
]

export function Footer() {
  const [email, setEmail] = useState('')
  const [subscriptionStatus, setSubscriptionStatus] = useState<string | null>(null)

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    
    // Simulation d'inscription
    setSubscriptionStatus('Inscription réussie !')
    setEmail('')
    setTimeout(() => setSubscriptionStatus(null), 3000)
  }

  return (
    <footer className="bg-primary-dark pt-16 pb-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-accent/5 to-transparent"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <div className="mb-4">
              <span className="text-white font-display font-bold text-2xl">
                IFIR <span className="text-accent">TECH</span>
              </span>
              <p className="text-gray-400 text-sm mt-2">
                Institut de Formation Ivoire Réparation
              </p>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Formation professionnelle en réparation mobile, ordinateur, micro-soudure et création de sites web.
            </p>
            <div className="flex space-x-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-2 bg-white/5 rounded-lg hover:bg-accent/20 transition-colors group"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 text-gray-400 group-hover:text-accent transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Nous contacter</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Icons.MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  Korhogo – Immeuble SILUE<br />
                  En face de la station PÉTRO IVOIRE
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Icons.Phone className="w-5 h-5 text-accent" />
                <a href="tel:+2250748222841" className="text-gray-400 hover:text-accent transition-colors text-sm">
                  +225 07 48 22 28 41
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Icons.Mail className="w-5 h-5 text-accent" />
                <a href="mailto:contact@ifirtech.ci" className="text-gray-400 hover:text-accent transition-colors text-sm">
                  contact@ifirtech.ci
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">
              Recevez nos actualités et offres spéciales
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Votre email"
                className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-gray-400 focus:outline-none focus:border-accent"
                required
              />
              <Button type="submit" size="sm" fullWidth>
                <Icons.Send className="w-4 h-4 mr-2" />
                S&apos;inscrire
              </Button>
            </form>
            {subscriptionStatus && (
              <p className="text-green-400 text-sm mt-2">{subscriptionStatus}</p>
            )}
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-white/10">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} IFIR TECH. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}