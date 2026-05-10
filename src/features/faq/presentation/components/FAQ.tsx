// features/faq/presentation/components/FAQ.tsx
'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus, MessageSquare, PhoneCall, HelpCircle } from 'lucide-react'
import Link from 'next/link'
import { FAQ as FAQType } from '../../domain/entities/faq.entity'
import { FAQRepositoryImpl } from '../../data/repositories/faq.repository.impl'

const faqRepository = new FAQRepositoryImpl()

export function FAQ() {
  const [faqs, setFaqs] = useState<FAQType[]>([])
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  useEffect(() => {
    faqRepository.findAll().then(setFaqs)
  }, [])

  return (
    <section className="py-24 bg-primary/5 overflow-hidden" id="faq">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-20">
          
          {/* Left Column: Info & CTA */}
          <div className="w-full lg:w-1/3">
            <div className="sticky top-28">
              <div className="inline-flex items-center gap-2 bg-primary/5 text-primary px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
                <HelpCircle className="w-3 h-3" />
                Support & Aide
              </div>
              
              <h2 className="text-4xl md:text-5xl font-black text-[#001B6E] uppercase tracking-tight mb-6 leading-tight">
                Tout ce que vous <br />
                <span className="text-accent underline decoration-primary/10">devez savoir</span>
              </h2>
              
              <p className="text-gray-500 font-bold text-sm mb-12 leading-relaxed max-w-sm uppercase tracking-wide">
                Nous répondons aux questions les plus fréquentes pour vous aider dans votre projet professionnel.
              </p>

              {/* Support Card */}
              <div className="bg-[#001B6E] rounded-[32px] p-8 text-white relative overflow-hidden shadow-2xl shadow-primary/20">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-accent rounded-2xl flex items-center justify-center text-black mb-6">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-black uppercase mb-4 tracking-tight">Encore une question ?</h3>
                  <p className="text-white/60 text-xs font-bold mb-8 leading-relaxed uppercase tracking-wider">
                    Notre équipe pédagogique est à votre écoute pour vous conseiller.
                  </p>
                  <a 
                    href="tel:0748222841"
                    className="flex items-center justify-center gap-3 w-full bg-white text-primary font-black py-4 px-6 rounded-2xl transition-all hover:bg-accent hover:text-black group shadow-xl"
                  >
                    <PhoneCall className="w-4 h-4" />
                    <span className="uppercase tracking-widest text-[10px]">Nous contacter</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: FAQ Accordion */}
          <div className="w-full lg:w-2/3">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={faq.id}
                  className={`transition-all duration-300 rounded-[24px] overflow-hidden ${openIndex === index ? 'bg-white border-transparent shadow-2xl ring-1 ring-primary/5 scale-[1.02]' : 'bg-white/80 backdrop-blur-sm border border-white shadow-sm hover:bg-white hover:shadow-md'}`}
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full px-8 py-7 flex items-center justify-between text-left group"
                  >
                    <span className={`text-lg font-black uppercase tracking-tight transition-colors ${openIndex === index ? 'text-primary' : 'text-[#001B6E] group-hover:text-primary'}`}>
                      {faq.question}
                    </span>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${openIndex === index ? 'bg-primary text-white rotate-180' : 'bg-primary/5 text-primary'}`}>
                      {openIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                    </div>
                  </button>
                  
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                      >
                        <div className="px-8 pb-8 pt-2">
                          <div className="h-px w-full bg-primary/10 mb-6"></div>
                          <p className="text-gray-600 font-medium text-base leading-relaxed">
                            {faq.answer}
                          </p>
                          <div className="mt-8 flex items-center gap-4">
                            <div className="w-2 h-2 rounded-full bg-accent"></div>
                            <span className="text-[10px] font-black text-primary uppercase tracking-widest">Utile pour votre formation</span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Bottom Note */}
            <div className="mt-12 p-8 border-2 border-dashed border-gray-100 rounded-[32px] flex flex-col sm:flex-row items-center justify-between gap-6">
              <p className="text-gray-400 font-bold text-xs uppercase tracking-widest text-center sm:text-left">
                Vous n&apos;avez pas trouvé votre réponse ?
              </p>
              <div className="flex gap-4">
                <Link 
                  href="/faq/poser"
                  className="text-primary font-black uppercase text-xs tracking-[0.2em] hover:text-accent transition-colors"
                >
                  Poser une question →
                </Link>
                <span className="text-gray-200">|</span>
                <Link 
                  href="/faq"
                  className="text-primary font-black uppercase text-xs tracking-[0.2em] hover:text-accent transition-colors"
                >
                  Voir toutes les questions →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}