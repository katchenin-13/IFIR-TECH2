// features/contact/presentation/components/ContactForm.tsx
'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { Send, Loader2, CheckCircle2, User, Mail, Phone, MessageSquare, Tag } from 'lucide-react'
import { ContactFormData } from '../../domain/entities/contact.entity'
import { ContactRepositoryImpl } from '../../data/repositories/contact.repository.impl'
import { SendContactUseCase } from '../../domain/use-cases/send-contact.use-case'

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
    setTimeout(() => setSubmitStatus(null), 5000)
  }

  if (submitStatus?.type === 'success') {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-[32px] p-12 text-center shadow-2xl border border-green-100 flex flex-col items-center justify-center min-h-[500px]"
      >
        <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-8">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="text-3xl font-black text-[#001B6E] uppercase tracking-tight mb-4">Message Envoyé !</h3>
        <p className="text-gray-500 font-bold uppercase tracking-widest text-[10px] leading-relaxed max-w-xs mx-auto">
          Nous avons bien reçu votre message. <br /> Une réponse vous sera adressée sous peu.
        </p>
        <button 
          onClick={() => setSubmitStatus(null)}
          className="mt-10 text-primary font-black uppercase text-xs tracking-[0.2em] hover:text-accent transition-colors"
        >
          Envoyer un autre message →
        </button>
      </motion.div>
    )
  }

  return (
    <div className="bg-white rounded-[32px] shadow-2xl shadow-primary/5 border border-gray-100 p-8 md:p-12">
      <div className="mb-10">
        <h3 className="text-2xl font-black text-[#001B6E] uppercase tracking-tight mb-2">Envoyez un message</h3>
        <p className="text-gray-400 font-bold text-[10px] uppercase tracking-[0.2em]">Réponse garantie sous 24 heures ouvrées</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div className="space-y-2">
            <label className="text-[10px] font-black text-primary uppercase tracking-widest ml-1">Nom Complet</label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                {...register('name', { required: 'Le nom est requis' })}
                className={`w-full bg-gray-50 border ${errors.name ? 'border-red-200 focus:border-red-500' : 'border-gray-100 focus:border-primary'} rounded-2xl py-4 pl-12 pr-4 outline-none focus:bg-white focus:ring-4 focus:ring-primary/5 transition-all font-bold text-sm`}
                placeholder="Ex: Jean Kouassi"
              />
            </div>
            {errors.name && <p className="text-red-500 text-[9px] font-black uppercase tracking-widest mt-1 ml-1">{errors.name.message}</p>}
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label className="text-[10px] font-black text-primary uppercase tracking-widest ml-1">Adresse Email</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                {...register('email', { required: 'L\'email est requis' })}
                className={`w-full bg-gray-50 border ${errors.email ? 'border-red-200 focus:border-red-500' : 'border-gray-100 focus:border-primary'} rounded-2xl py-4 pl-12 pr-4 outline-none focus:bg-white focus:ring-4 focus:ring-primary/5 transition-all font-bold text-sm`}
                placeholder="contact@email.com"
              />
            </div>
            {errors.email && <p className="text-red-500 text-[9px] font-black uppercase tracking-widest mt-1 ml-1">{errors.email.message}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Phone */}
          <div className="space-y-2">
            <label className="text-[10px] font-black text-primary uppercase tracking-widest ml-1">Téléphone</label>
            <div className="relative">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                {...register('phone')}
                className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 pl-12 pr-4 outline-none focus:bg-white focus:ring-4 focus:ring-primary/5 focus:border-primary transition-all font-bold text-sm"
                placeholder="+225 07 00 00 00 00"
              />
            </div>
          </div>

          {/* Subject */}
          <div className="space-y-2">
            <label className="text-[10px] font-black text-primary uppercase tracking-widest ml-1">Sujet</label>
            <div className="relative">
              <Tag className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                {...register('subject', { required: 'Le sujet est requis' })}
                className={`w-full bg-gray-50 border ${errors.subject ? 'border-red-200 focus:border-red-500' : 'border-gray-100 focus:border-primary'} rounded-2xl py-4 pl-12 pr-4 outline-none focus:bg-white focus:ring-4 focus:ring-primary/5 transition-all font-bold text-sm`}
                placeholder="Ex: Demande de formation"
              />
            </div>
            {errors.subject && <p className="text-red-500 text-[9px] font-black uppercase tracking-widest mt-1 ml-1">{errors.subject.message}</p>}
          </div>
        </div>

        {/* Message */}
        <div className="space-y-2">
          <label className="text-[10px] font-black text-primary uppercase tracking-widest ml-1">Votre Message</label>
          <div className="relative">
            <MessageSquare className="absolute left-4 top-6 w-4 h-4 text-gray-400" />
            <textarea
              {...register('message', { required: 'Le message est requis' })}
              rows={5}
              className={`w-full bg-gray-50 border ${errors.message ? 'border-red-200 focus:border-red-500' : 'border-gray-100 focus:border-primary'} rounded-2xl py-4 pl-12 pr-4 outline-none focus:bg-white focus:ring-4 focus:ring-primary/5 transition-all font-bold text-sm resize-none`}
              placeholder="Décrivez votre besoin..."
            />
          </div>
          {errors.message && <p className="text-red-500 text-[9px] font-black uppercase tracking-widest mt-1 ml-1">{errors.message.message}</p>}
        </div>

        <button
          disabled={isSubmitting}
          className="w-full bg-[#001B6E] hover:bg-primary-dark text-white font-black py-5 px-8 rounded-2xl transition-all group flex items-center justify-center gap-3 shadow-xl shadow-primary/20 disabled:opacity-50"
        >
          {isSubmitting ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <>
              <span className="uppercase tracking-[0.2em] text-xs">Envoyer le message</span>
              <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </>
          )}
        </button>
      </form>
    </div>
  )
}