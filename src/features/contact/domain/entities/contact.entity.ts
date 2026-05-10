// features/contact/domain/entities/contact.entity.ts
export interface ContactFormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

export interface ContactInfo {
  address: string
  phone: string
  email: string
  hours: string
  mapEmbedUrl: string
}

export interface SocialLink {
  name: string
  url: string
  icon: string
}