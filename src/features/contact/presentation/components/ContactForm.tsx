// features/contact/presentation/components/ContactForm.tsx
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import * as Icons from 'lucide-react'
import { ContactFormData } from '../../domain/entities/contact.entity'
import { ContactRepositoryImpl } from '../../data/repositories/contact.repository.impl'
import { SendContactUseCase } from '../../domain/use-cases/send-contact.use-case'
import { Card } from '@/design-system/components/Card/Card'
import { Button } from '@/design-system/components/Button/Button'

const contactRepository = new ContactRepositoryImpl()
const sendContact = new SendContactUseCase(contactRepository)

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null)
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>()

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus(null)
    
    const result = await sendContact.execute(data)
    
    if (result.success) {
      setSubmitStatus({ type: 'success', message: result.message })
      reset()
    } else {
      setSubmitStatus({ type: 'error', message: result.message })
    }
    
    setIsSubmitting(false)
    
    // Auto-hide message after 5 seconds
    setTimeout(() => setSubmitStatus(null), 5000)
  }

  return (
    <Card variant="glass" className="p-8">
      <h3 className="text-2xl font-display font-bold text-white mb-6">
        Envoyez-nous un message
      </h3>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-white mb-2 text-sm">Nom complet *</label>
            <input
              type="text"
              {...register('name', { required: 'Le nom est requis' })}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-gray-400 focus:outline-none focus:border-accent transition-colors"
              placeholder="Votre nom"
            />
            {errors.name && (
              <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>
          
          <div>
            <label className="block text-white mb-2 text-sm">Email *</label>
            <input
              type="email"
              {...register('email', { 
                required: 'L\'email est requis',
                pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Email invalide' }
              })}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-gray-400 focus:outline-none focus:border-accent transition-colors"
              placeholder="votre@email.com"
            />
            {errors.email && (
              <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-white mb-2 text-sm">Téléphone</label>
            <input
              type="tel"
              {...register('phone')}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-gray-400 focus:outline-none focus:border-accent transition-colors"
              placeholder="+225 XX XX XX XX"
            />
          </div>
          
          <div>
            <label className="block text-white mb-2 text-sm">Sujet *</label>
            <input
              type="text"
              {...register('subject', { required: 'Le sujet est requis' })}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-gray-400 focus:outline-none focus:border-accent transition-colors"
              placeholder="Sujet de votre message"
            />
            {errors.subject && (
              <p className="text-red-400 text-sm mt-1">{errors.subject.message}</p>
            )}
          </div>
        </div>
        
        <div>
          <label className="block text-white mb-2 text-sm">Message *</label>
          <textarea
            {...register('message', { required: 'Le message est requis', minLength: { value: 10, message: 'Message trop court' } })}
            rows={5}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-gray-400 focus:outline-none focus:border-accent transition-colors resize-none"
            placeholder="Votre message..."
          />
          {errors.message && (
            <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>
          )}
        </div>
        
        {submitStatus && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-4 rounded-lg ${
              submitStatus.type === 'success' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
            }`}
          >
            {submitStatus.message}
          </motion.div>
        )}
        
        <Button type="submit" size="lg" fullWidth disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Icons.Loader2 className="w-5 h-5 animate-spin mr-2" />
              Envoi en cours...
            </>
          ) : (
            <>
              <Icons.Send className="w-5 h-5 mr-2" />
              Envoyer le message
            </>
          )}
        </Button>
      </form>
    </Card>
  )
}