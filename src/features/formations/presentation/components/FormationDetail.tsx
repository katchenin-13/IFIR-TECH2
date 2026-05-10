// features/formations/presentation/components/FormationDetail.tsx
'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  CheckCircle2, 
  Clock, 
  Award, 
  BookOpen, 
  ArrowRight, 
  ShieldCheck, 
  ChevronRight, 
  ChevronDown,
  Users,
  Target,
  FileCheck,
  Phone,
  PhoneCall
} from 'lucide-react'
import { Formation } from '../../domain/entities/formation.entity'

export function FormationDetail({ formation }: { formation: Formation }) {
  const [openModule, setOpenModule] = useState<string | null>(formation.modules[0]?.id || null)

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[450px] md:h-[550px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={formation.image}
            alt={formation.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#001B6E] via-[#001B6E]/90 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-md border border-accent/30 text-accent px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
              <Award className="w-3 h-3" />
              Formation Certifiante
            </div>
            
            <nav className="flex items-center gap-2 text-white/50 font-bold text-[10px] mb-4 uppercase tracking-widest">
              <Link href="/" className="hover:text-accent transition-colors">Home</Link>
              <span>/</span>
              <Link href="/formations" className="hover:text-accent transition-colors">Formations</Link>
              <span>/</span>
              <span className="text-white">{formation.title}</span>
            </nav>
            
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6 uppercase tracking-tight">
              {formation.title}
            </h1>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl font-medium">
              {formation.description}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-gray-50/30">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Main Column */}
            <div className="w-full lg:w-2/3">
              {/* Overview */}
              <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-sm border border-gray-100 mb-12">
                <h2 className="text-3xl font-black text-[#001B6E] mb-8 flex items-center gap-4 uppercase tracking-tight">
                  <span className="w-2 h-10 bg-accent rounded-full"></span>
                  Présentation
                </h2>
                <div className="prose prose-lg text-gray-600 leading-relaxed whitespace-pre-line max-w-none">
                  {formation.longDescription}
                </div>
              </div>

              {/* Objectives */}
              <div className="mb-16">
                <h2 className="text-2xl font-black text-[#001B6E] mb-8 uppercase tracking-widest flex items-center gap-3">
                  <Target className="w-6 h-6 text-accent" />
                  Ce que vous allez maîtriser
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {formation.objectives.map((obj, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:border-accent/50 transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                        <CheckCircle2 className="w-5 h-5 text-accent" />
                      </div>
                      <span className="text-gray-800 font-bold text-sm tracking-wide">{obj}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Curriculum (Accordion) */}
              <div className="mb-16">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl font-black text-[#001B6E] uppercase tracking-widest flex items-center gap-3">
                    <BookOpen className="w-6 h-6 text-accent" />
                    Programme du cursus
                  </h2>
                  <span className="text-[10px] font-black text-gray-400 uppercase bg-gray-100 px-4 py-1.5 rounded-full">
                    {formation.modules.length} Modules
                  </span>
                </div>
                
                <div className="space-y-4">
                  {formation.modules
                    .sort((a, b) => a.order - b.order)
                    .map((module, i) => (
                      <div 
                        key={module.id} 
                        className={`bg-white border transition-all duration-300 rounded-[24px] overflow-hidden ${openModule === module.id ? 'border-accent shadow-xl ring-1 ring-accent/10' : 'border-gray-100 shadow-sm hover:border-gray-200'}`}
                      >
                        <button 
                          onClick={() => setOpenModule(openModule === module.id ? null : module.id)}
                          className="w-full flex items-center justify-between p-6 text-left"
                        >
                          <div className="flex items-center gap-4">
                            <span className={`w-10 h-10 rounded-xl flex items-center justify-center font-black text-sm transition-colors ${openModule === module.id ? 'bg-accent text-black' : 'bg-primary/5 text-primary'}`}>
                              {String(i + 1).padStart(2, '0')}
                            </span>
                            <div>
                              <h3 className="text-lg font-black text-[#001B6E] uppercase leading-tight">{module.title}</h3>
                              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">{module.duration}</p>
                            </div>
                          </div>
                          <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${openModule === module.id ? 'rotate-180 text-accent' : ''}`} />
                        </button>
                        
                        <AnimatePresence>
                          {openModule === module.id && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="px-6 pb-8 ml-14"
                            >
                              <p className="text-gray-500 text-sm mb-6 leading-relaxed max-w-xl">
                                {module.description}
                              </p>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {module.topics.map(topic => (
                                  <div key={topic} className="flex items-center gap-2 text-gray-700">
                                    <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                                    <span className="text-[11px] font-bold uppercase tracking-wider">{topic}</span>
                                  </div>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}
                </div>
              </div>

              {/* Target Public */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                <div className="bg-primary/5 rounded-[30px] p-8 border border-primary/10">
                  <div className="flex items-center gap-3 mb-4">
                    <Users className="w-6 h-6 text-primary" />
                    <h3 className="text-lg font-black text-primary uppercase">Public Cible</h3>
                  </div>
                  <ul className="space-y-3">
                    {["Étudiants", "Professionnels en reconversion", "Entrepreneurs", "Passionnés de tech"].map((p, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm font-bold text-primary/70 uppercase tracking-wide">
                        <ChevronRight className="w-4 h-4 text-accent" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-accent/5 rounded-[30px] p-8 border border-accent/10">
                  <div className="flex items-center gap-3 mb-4">
                    <FileCheck className="w-6 h-6 text-accent" />
                    <h3 className="text-lg font-black text-[#001B6E] uppercase">Prérequis</h3>
                  </div>
                  <ul className="space-y-3">
                    {["Aucun niveau requis", "Savoir lire et écrire", "Motivation 100%", "Curiosité technique"].map((p, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm font-bold text-gray-700 uppercase tracking-wide">
                        <ChevronRight className="w-4 h-4 text-primary" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="w-full lg:w-1/3">
              <div className="sticky top-28">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-[#001B6E] rounded-[40px] p-10 text-white shadow-2xl relative overflow-hidden"
                >
                  {/* Decorative element */}
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/5 rounded-full blur-3xl"></div>
                  
                  <div className="relative z-10 text-center mb-10 pb-10 border-b border-white/10">
                    <p className="text-white/60 text-xs font-bold mb-2 uppercase tracking-[0.2em]">Investissement</p>
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-5xl font-black text-accent tracking-tighter">Sur devis</span>
                    </div>
                  </div>

                  <div className="space-y-8 mb-12 relative z-10">
                    <div className="flex items-center gap-5">
                      <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <p className="text-white/50 text-[10px] font-black uppercase tracking-[0.2em]">Durée totale</p>
                        <p className="text-sm font-black uppercase tracking-tight">{formation.duration}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-5">
                      <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0">
                        <Award className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <p className="text-white/50 text-[10px] font-black uppercase tracking-[0.2em]">Certification</p>
                        <p className="text-sm font-black uppercase tracking-tight">{formation.certification ? 'Diplôme Certifié' : 'Attestation'}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-5">
                      <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0">
                        <ShieldCheck className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <p className="text-white/50 text-[10px] font-black uppercase tracking-[0.2em]">Garantie</p>
                        <p className="text-sm font-black uppercase tracking-tight">Accompagnement à vie</p>
                      </div>
                    </div>
                  </div>

                  <div className="relative z-10 space-y-4">
                    <Link href="tel:0748222841" className="inline-flex items-center justify-between bg-accent hover:bg-accent-dark text-black font-black py-5 px-8 rounded-2xl transition-all group w-full shadow-xl shadow-accent/20">
                      <span className="uppercase tracking-widest text-xs">Prendre RDV par appel</span>
                      <div className="bg-black rounded-full p-1.5 ml-4 group-hover:animate-bounce transition-transform">
                        <Phone className="w-4 h-4 text-accent" />
                      </div>
                    </Link>
                    
                    <Link 
                      href="/contact"
                      className="flex items-center justify-center gap-2 text-[10px] font-black text-white/60 hover:text-white uppercase tracking-widest transition-colors py-2"
                    >
                      Demander la brochure PDF
                    </Link>
                  </div>

                  {/* Trust footer */}
                  <div className="mt-10 pt-8 border-t border-white/10 flex items-center justify-center gap-3 opacity-60">
                    <div className="flex -space-x-2">
                      {[1,2,3].map(i => (
                        <div key={i} className="w-6 h-6 rounded-full bg-gray-400 border-2 border-[#001B6E]"></div>
                      ))}
                    </div>
                    <p className="text-[10px] font-bold">150+ Étudiants formés</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Info */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="inline-block p-4 bg-primary/5 rounded-full mb-8">
            <Users className="w-10 h-10 text-primary" />
          </div>
          <h2 className="text-3xl font-black text-[#001B6E] mb-6 uppercase tracking-tight">Une question sur cette formation ?</h2>
          <p className="text-gray-500 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
            Nos conseillers pédagogiques sont à votre écoute pour vous aider à choisir le cursus le plus adapté à votre projet professionnel.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link 
              href="/contact" 
              className="px-10 py-5 bg-primary text-white font-black rounded-2xl uppercase tracking-widest text-sm hover:bg-primary-dark transition-all shadow-lg"
            >
              Parler à un expert
            </Link>
            <div className="text-gray-400 font-bold uppercase text-xs tracking-widest">
              Ou appelez le <span className="text-primary font-black ml-2">0748222841</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
