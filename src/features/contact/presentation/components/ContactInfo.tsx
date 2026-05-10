// features/contact/presentation/components/ContactInfo.tsx
'use client'

import * as Icons from 'lucide-react'
import { mockContactInfo, mockSocialLinks } from '../../data/repositories/contact.repository.impl'
import { Card } from '@/design-system/components/Card/Card'

export function ContactInfo() {
  return (
    <Card variant="glass" className="p-8">
      <h3 className="text-2xl font-display font-bold text-white mb-6">
        Nos coordonnées
      </h3>
      
      <div className="space-y-5 mb-8">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-accent/10 rounded-lg">
            <Icons.MapPin className="w-5 h-5 text-accent" />
          </div>
          <div>
            <h4 className="text-white font-semibold mb-1">Adresse</h4>
            <p className="text-gray-400 text-sm">{mockContactInfo.address}</p>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="p-3 bg-accent/10 rounded-lg">
            <Icons.Phone className="w-5 h-5 text-accent" />
          </div>
          <div>
            <h4 className="text-white font-semibold mb-1">Téléphone</h4>
            <a href={`tel:${mockContactInfo.phone}`} className="text-gray-400 text-sm hover:text-accent transition-colors">
              {mockContactInfo.phone}
            </a>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="p-3 bg-accent/10 rounded-lg">
            <Icons.Mail className="w-5 h-5 text-accent" />
          </div>
          <div>
            <h4 className="text-white font-semibold mb-1">Email</h4>
            <a href={`mailto:${mockContactInfo.email}`} className="text-gray-400 text-sm hover:text-accent transition-colors">
              {mockContactInfo.email}
            </a>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="p-3 bg-accent/10 rounded-lg">
            <Icons.Clock className="w-5 h-5 text-accent" />
          </div>
          <div>
            <h4 className="text-white font-semibold mb-1">Horaires</h4>
            <p className="text-gray-400 text-sm">{mockContactInfo.hours}</p>
          </div>
        </div>
      </div>
      
      <div>
        <h4 className="text-white font-semibold mb-4">Suivez-nous</h4>
        <div className="flex gap-3">
          {mockSocialLinks.map((social) => {
            const IconComponent = Icons[social.icon as keyof typeof Icons] as React.ElementType
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 rounded-lg hover:bg-accent/20 transition-colors group"
              >
                {IconComponent && <IconComponent className="w-5 h-5 text-gray-400 group-hover:text-accent transition-colors" />}
              </a>
            )
          })}
        </div>
      </div>
    </Card>
  )
}