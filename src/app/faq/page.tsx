// app/faq/page.tsx
import { FAQ } from '@/features/faq/presentation/components/FAQ'
import Link from 'next/link'
import { PlusCircle, Search } from 'lucide-react'

export default function FullFAQPage() {
  return (
    <main className="min-h-screen pt-32 bg-white">
      {/* Search & Header */}
      <div className="bg-gray-50 border-b border-gray-100 pt-16 pb-20">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <h1 className="text-4xl md:text-6xl font-black text-[#001B6E] uppercase tracking-tighter mb-8">
            Centre d&apos;aide <span className="text-accent">&</span> FAQ
          </h1>
          
          <div className="max-w-2xl mx-auto relative mb-12">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Rechercher une réponse..." 
              className="w-full bg-white border border-gray-100 rounded-3xl py-6 pl-16 pr-6 shadow-xl shadow-primary/5 font-bold outline-none focus:ring-2 focus:ring-primary/10 transition-all"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-4">
             <Link 
               href="/faq/poser"
               className="inline-flex items-center gap-3 bg-[#001B6E] text-white font-black py-4 px-8 rounded-2xl shadow-xl shadow-primary/20 hover:bg-primary-dark transition-all"
             >
               <PlusCircle className="w-5 h-5" />
               <span className="uppercase tracking-widest text-[10px]">Poser ma question</span>
             </Link>
          </div>
        </div>
      </div>

      <div className="-mt-10">
        <FAQ />
      </div>

      {/* Additional Help Section */}
      <section className="py-20 border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h3 className="text-2xl font-black text-[#001B6E] uppercase mb-8">Besoin d&apos;une aide immédiate ?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="bg-gray-50 p-8 rounded-3xl">
              <h4 className="font-black uppercase text-xs mb-2 text-primary">Téléphone</h4>
              <p className="text-xl font-bold">+225 07 48 22 28 41</p>
              <p className="text-gray-500 text-sm mt-2">Lun - Ven : 08H00 - 17H00</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-3xl">
              <h4 className="font-black uppercase text-xs mb-2 text-primary">WhatsApp</h4>
              <p className="text-xl font-bold">Conseiller Direct</p>
              <a href="https://wa.me/2250748222841" className="text-accent font-black text-sm uppercase tracking-widest mt-4 inline-block">Discuter maintenant →</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
