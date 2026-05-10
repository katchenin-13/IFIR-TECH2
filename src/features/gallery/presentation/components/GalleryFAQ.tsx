// features/gallery/presentation/components/GalleryFAQ.tsx
'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Plus, Minus, MessageCircle } from 'lucide-react'

const faqs = [
  {
    q: "Quels types d'appareils réparez-vous ?",
    a: "Nous réparons tous les types de smartphones (iPhone, Samsung, Huawei, etc.), tablettes, et ordinateurs portables (MacBook, PC)."
  },
  {
    q: "Combien de temps dure une formation ?",
    a: "Nos formations varient de 2 semaines à 3 mois selon le module choisi (Micro-soudure, Réparation complète, Web design)."
  },
  {
    q: "Offrez-vous une garantie sur les réparations ?",
    a: "Oui, toutes nos réparations sont garanties 3 mois contre tout défaut de pièce ou de main d'oeuvre."
  },
  {
    q: "Les certificats sont-ils reconnus ?",
    a: "Oui, nous délivrons un certificat IFIR TECH qui atteste de vos compétences pratiques, très apprécié dans le secteur."
  }
]

export function GalleryFAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left: Image Composition */}
          <div className="w-full lg:w-1/2 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-square rounded-[40px] overflow-hidden">
                <Image src="/images/gallery1.jpg" alt="FAQ 1" fill className="object-cover" />
              </div>
              <div className="relative aspect-square rounded-tl-[80px] rounded-br-[40px] rounded-tr-[40px] rounded-bl-[40px] overflow-hidden bg-secondary flex items-center justify-center p-8 text-white">
                <div className="text-center">
                  <span className="text-6xl font-black block mb-2">10+</span>
                  <span className="text-xs font-bold uppercase tracking-widest">Ans d&apos;expertise</span>
                </div>
              </div>
              <div className="relative aspect-square rounded-tl-[40px] rounded-br-[80px] rounded-tr-[40px] rounded-bl-[40px] overflow-hidden bg-[#001B6E] flex items-center justify-center p-8 text-white">
                <MessageCircle className="w-16 h-16 text-accent opacity-50 absolute -bottom-4 -right-4" />
                <div className="text-center relative z-10">
                  <span className="text-5xl font-black block mb-2">24/7</span>
                  <span className="text-xs font-bold uppercase tracking-widest">Support élève</span>
                </div>
              </div>
              <div className="relative aspect-square rounded-[40px] overflow-hidden">
                <Image src="/images/service-phone.jpg" alt="FAQ 2" fill className="object-cover" />
              </div>
            </div>
          </div>

          {/* Right: Accordion */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl font-black text-[#001B6E] mb-4 uppercase leading-tight">
              Your Frequently Added Question&apos;s
            </h2>
            <p className="text-gray-400 text-sm mb-10">
              Trouvez des réponses rapides aux questions les plus courantes sur nos services et formations.
            </p>

            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div 
                  key={i}
                  className={`border rounded-2xl transition-all duration-300 ${openIndex === i ? 'border-primary bg-white shadow-lg' : 'border-gray-200 bg-white/50'}`}
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <span className="font-bold text-[#001B6E] text-sm pr-4">{faq.q}</span>
                    <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${openIndex === i ? 'bg-primary text-white' : 'bg-gray-100 text-gray-50'}`}>
                      {openIndex === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4 text-primary" />}
                    </div>
                  </button>
                  {openIndex === i && (
                    <div className="px-6 pb-6 text-gray-500 text-sm leading-relaxed animate-fadeIn">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
