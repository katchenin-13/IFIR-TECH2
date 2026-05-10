// features/contact/data/repositories/contact.repository.impl.ts
import { ContactFormData, ContactInfo, SocialLink } from '../../domain/entities/contact.entity'
import type { ContactRepository } from '../../domain/use-cases/send-contact.use-case'

export const mockContactInfo: ContactInfo = {
  address: 'Korhogo – Immeuble SILUE, En face de la station PÉTRO IVOIRE',
  phone: '+225 07 48 22 28 41',
  email: 'contact@ifirtech.ci',
  hours: 'Lundi - Samedi: 8h00 - 18h00',
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3882.5!2d-5.65!3d9.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMjcnMDAuMCJOIDXCsDM5JzAwLjAiVw!5e0!3m2!1sfr!2sci!4v1234567890!5m2!1sfr!2sci',
}

export const mockSocialLinks: SocialLink[] = [
  { name: 'Facebook', url: 'https://facebook.com/ifirtech', icon: 'Facebook' },
  { name: 'Twitter', url: 'https://twitter.com/ifirtech', icon: 'Twitter' },
  { name: 'LinkedIn', url: 'https://linkedin.com/company/ifirtech', icon: 'Linkedin' },
  { name: 'Instagram', url: 'https://instagram.com/ifirtech', icon: 'Instagram' },
  { name: 'WhatsApp', url: 'https://wa.me/2250748222841', icon: 'MessageCircle' },
]

export class ContactRepositoryImpl implements ContactRepository {
  async sendMessage(data: ContactFormData): Promise<{ success: boolean; message: string }> {
    // Simulation d'envoi - À remplacer par un vrai service email
    console.log('Contact message:', data)
    
    // Simuler un délai réseau
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    return { success: true, message: 'Message envoyé avec succès ! Nous vous contacterons rapidement.' }
  }
}