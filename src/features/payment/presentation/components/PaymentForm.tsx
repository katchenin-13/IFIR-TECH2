// features/payment/presentation/components/PaymentForm.tsx
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ShieldCheck, CreditCard, Smartphone, Check, ArrowRight, Lock } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const paymentMethods = [
  { id: 'mobile', name: 'Mobile Money', description: 'Orange, MTN, Moov', icons: ['/images/partners/orange-money.svg', '/images/partners/mtn-momo.svg', '/images/partners/moov.png'] },
  { id: 'wave', name: 'Wave', description: 'Paiement via Wave', icons: ['/images/partners/wave.png'] },
  { id: 'card', name: 'Carte Bancaire', description: 'Visa, Mastercard', icons: ['/images/partners/visa.svg', '/images/partners/mastercard.svg'] },
]

export function PaymentForm() {
  const [selectedMethod, setSelectedMethod] = useState('mobile')

  return (
    <div className="flex flex-col lg:flex-row gap-12">
      {/* Left Column: Form */}
      <div className="w-full lg:w-2/3">
        <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-sm border border-gray-100 mb-8">
          <h2 className="text-2xl font-black text-[#001B6E] mb-8 uppercase tracking-tight flex items-center gap-3">
            <span className="w-1.5 h-8 bg-accent rounded-full"></span>
            Informations de facturation
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Nom complet</label>
              <input 
                type="text" 
                placeholder="Ex: Jean Koffi"
                className="w-full bg-gray-50 border border-gray-100 rounded-2xl p-4 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Numéro de téléphone</label>
              <input 
                type="tel" 
                placeholder="Ex: 07 00 00 00 00"
                className="w-full bg-gray-50 border border-gray-100 rounded-2xl p-4 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Adresse Email</label>
              <input 
                type="email" 
                placeholder="votre@email.com"
                className="w-full bg-gray-50 border border-gray-100 rounded-2xl p-4 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>
          </div>

          <h2 className="text-2xl font-black text-[#001B6E] mb-8 uppercase tracking-tight flex items-center gap-3">
            <span className="w-1.5 h-8 bg-accent rounded-full"></span>
            Mode de paiement
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {paymentMethods.map((method) => (
              <button
                key={method.id}
                onClick={() => setSelectedMethod(method.id)}
                className={`relative p-6 rounded-3xl border-2 transition-all text-left flex flex-col items-center gap-3 group ${selectedMethod === method.id ? 'border-primary bg-primary/5' : 'border-gray-100 bg-white hover:border-gray-200'}`}
              >
                {selectedMethod === method.id && (
                  <div className="absolute top-3 right-3 bg-primary text-white p-1 rounded-full">
                    <Check className="w-3 h-3" />
                  </div>
                )}
                <div className="flex gap-2 items-center justify-center flex-wrap min-h-[48px]">
                  {method.icons.map((icon, idx) => (
                    <div key={idx} className="relative w-8 h-8 flex-shrink-0">
                      <Image src={icon} alt={method.name} fill className="object-contain" />
                    </div>
                  ))}
                </div>
                <div className="text-center">
                  <p className="text-xs font-black text-[#001B6E] uppercase">{method.name}</p>
                  <p className="text-[10px] font-bold text-gray-400 uppercase mt-1">{method.description}</p>
                </div>
              </button>
            ))}
          </div>
          
          <div className="bg-primary/5 border border-primary/10 rounded-2xl p-4 flex items-center gap-4">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary shadow-sm">
              <Lock className="w-5 h-5" />
            </div>
            <p className="text-[10px] font-black text-primary uppercase tracking-wider leading-relaxed">
              Vos transactions sont sécurisées et cryptées. Nous ne conservons aucune information bancaire sensible.
            </p>
          </div>
        </div>
      </div>

      {/* Right Column: Order Summary */}
      <div className="w-full lg:w-1/3">
        <div className="sticky top-28 space-y-6">
          <div className="bg-[#001B6E] rounded-[40px] p-8 text-white shadow-2xl overflow-hidden relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl"></div>
            
            <h3 className="text-xl font-black uppercase tracking-widest mb-8 border-b border-white/10 pb-4">
              Votre Commande
            </h3>

            <div className="space-y-6 mb-10">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xs font-black uppercase text-accent mb-1 tracking-wider">Formation Choisie</p>
                  <p className="text-sm font-bold">Réparation Mobile - Niveau Expert</p>
                </div>
                <p className="text-sm font-black">---</p>
              </div>
              <div className="flex justify-between items-center text-white/60 text-xs font-bold uppercase">
                <p>Sous-total</p>
                <p>À Définir</p>
              </div>
              <div className="flex justify-between items-center text-white/60 text-xs font-bold uppercase">
                <p>Frais d&apos;inscription</p>
                <p>Offerts</p>
              </div>
              
              <div className="pt-6 border-t border-white/10 flex justify-between items-center">
                <p className="text-lg font-black uppercase">Total à payer</p>
                <p className="text-2xl font-black text-accent tracking-tighter">Sur devis</p>
              </div>
            </div>

            <Link href="/paiement/merci" className="inline-flex items-center justify-between bg-accent hover:bg-accent-dark text-black font-black py-5 px-8 rounded-2xl transition-all group w-full shadow-xl shadow-accent/20">
              <span className="uppercase tracking-widest text-xs">Confirmer & Payer</span>
              <div className="bg-black rounded-full p-1.5 ml-4 group-hover:translate-x-1 transition-transform">
                <ArrowRight className="w-4 h-4 text-accent" />
              </div>
            </Link>

            <div className="mt-8 flex items-center justify-center gap-4 grayscale opacity-40">
              <Image src="/images/partners/samsung.svg" alt="Visa" width={40} height={20} className="h-4 w-auto" />
              <Image src="/images/partners/apple.svg" alt="Mastercard" width={40} height={20} className="h-4 w-auto" />
              <div className="w-px h-4 bg-white/20"></div>
              <ShieldCheck className="w-4 h-4" />
              <span className="text-[10px] font-bold uppercase">SSL Secured</span>
            </div>
          </div>

          <div className="bg-gray-50 rounded-[30px] p-6 border border-gray-100">
            <h4 className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-4">Besoin d&apos;aide ?</h4>
            <p className="text-xs font-bold text-gray-500 leading-relaxed">
              Contactez notre support au <span className="text-primary font-black">0748222841</span> pour toute question concernant le paiement.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
