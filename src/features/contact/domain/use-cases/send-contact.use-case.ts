// features/contact/domain/use-cases/send-contact.use-case.ts
import { ContactFormData } from '../entities/contact.entity'

export interface ContactRepository {
  sendMessage(data: ContactFormData): Promise<{ success: boolean; message: string }>
}

export class SendContactUseCase {
  constructor(private readonly repository: ContactRepository) {}
  
  async execute(data: ContactFormData): Promise<{ success: boolean; message: string }> {
    // Validation
    if (!data.name || data.name.length < 2) {
      return { success: false, message: 'Nom invalide' }
    }
    if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      return { success: false, message: 'Email invalide' }
    }
    if (!data.message || data.message.length < 10) {
      return { success: false, message: 'Message trop court' }
    }
    
    return this.repository.sendMessage(data)
  }
}