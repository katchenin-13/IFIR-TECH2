// features/contact/presentation/components/ContactInfo.tsx
'use client'

import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin, ExternalLink } from 'lucide-react'
import { mockContactInfo } from '../../data/repositories/contact.repository.impl'

export function ContactInfo() {
  const contactItems = [
    {
      icon: MapPin,
      label: 'Notre Adresse',
      value: mockContactInfo.address,
      subValue: 'Korhogo, Côte d\'Ivoire',
      color: 'bg-blue-50 text-blue-600'
    },
    {
      icon: Phone,
      label: 'Téléphone',
      value: mockContactInfo.phone,
      subValue: 'Lun - Ven, 08:00 - 18:00',
      color: 'bg-accent/10 text-primary',
      link: `tel:${mockContactInfo.phone}`
    },
    {
      icon: Mail,
      label: 'Email Support',
      value: mockContactInfo.email,
      subValue: 'Réponse sous 24h',
      color: 'bg-purple-50 text-purple-600',
      link: `mailto:${mockContactInfo.email}`
    },
    {
      icon: Clock,
      label: 'Horaires',
      value: mockContactInfo.hours,
      subValue: 'Fermé les weekends',
      color: 'bg-green-50 text-green-600'
    }
  ]

  return (
    <div className="space-y-8">
      {/* Contact Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {contactItems.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-[28px] border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
            <div className={`w-12 h-12 ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
              <item.icon className="w-6 h-6" />
            </div>
            <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-2">{item.label}</h4>
            {item.link ? (
              <a href={item.link} className="text-sm font-black text-[#001B6E] uppercase tracking-tight hover:text-primary transition-colors block mb-1">
                {item.value}
              </a>
            ) : (
              <p className="text-sm font-black text-[#001B6E] uppercase tracking-tight mb-1">{item.value}</p>
            )}
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{item.subValue}</p>
          </div>
        ))}
      </div>

      {/* Social & Direct Call Card */}
      <div className="bg-[#001B6E] rounded-[32px] p-10 text-white relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
        
        <div className="relative z-10">
          <h3 className="text-2xl font-black uppercase tracking-tight mb-6">Rejoignez notre communauté</h3>
          <p className="text-white/60 text-xs font-bold uppercase tracking-widest leading-relaxed mb-10 max-w-xs">
            Suivez-nous sur les réseaux sociaux pour ne rien rater de nos formations et actualités.
          </p>

          <div className="flex gap-4 mb-12">
            {[
              { icon: Facebook, href: '#' },
              { icon: Instagram, href: '#' },
              { icon: Linkedin, href: '#' }
            ].map((social, i) => (
              <a key={i} href={social.href} className="w-12 h-12 bg-white/10 hover:bg-accent hover:text-black rounded-2xl flex items-center justify-center transition-all">
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          <a 
            href="https://wa.me/2250748222841"
            target="_blank"
            className="flex items-center justify-between bg-accent text-black font-black py-5 px-8 rounded-2xl transition-all hover:bg-white group"
          >
            <span className="uppercase tracking-widest text-xs">WhatsApp Direct</span>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  )
}