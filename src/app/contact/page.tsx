// app/contact/page.tsx
import { ContactForm } from '@/features/contact/presentation/components/ContactForm'
import { ContactInfo } from '@/features/contact/presentation/components/ContactInfo'
import { Headphones, MapPin } from 'lucide-react'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Header */}
      <section className="bg-gray-50 pt-40 pb-24 border-b border-gray-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 bg-primary/5 text-primary px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-8">
              <Headphones className="w-3 h-3" />
              Support Client 24/7
            </div>
            
            <h1 className="text-4xl md:text-7xl font-black text-[#001B6E] uppercase tracking-tighter mb-6 leading-[0.9]">
              Parlons de votre <br />
              <span className="text-accent underline decoration-primary/10 italic">avenir</span> technique
            </h1>
            
            <p className="text-gray-500 font-bold text-sm uppercase tracking-widest max-w-xl">
              Notre équipe est prête à vous accompagner dans votre projet de formation ou de réparation.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Info Cards - 2 columns */}
            <div className="lg:col-span-2">
              <ContactInfo />
            </div>

            {/* Form - 3 columns */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="bg-white rounded-[40px] p-4 shadow-xl border border-gray-100 overflow-hidden relative min-h-[400px] flex items-center justify-center group">
             {/* Simple visual representation of a map since I can't embed a real live map without a key */}
             <div className="absolute inset-0 bg-blue-50 opacity-50"></div>
             <div className="relative z-10 flex flex-col items-center gap-6">
                <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center animate-bounce shadow-2xl">
                  <MapPin className="w-10 h-10" />
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-black text-[#001B6E] uppercase mb-2">Nous trouver à Korhogo</h3>
                  <p className="text-gray-500 font-bold text-xs uppercase tracking-widest">Situé au quartier Soba, non loin de l&apos;université</p>
                </div>
                <button className="bg-white border border-gray-200 text-primary font-black py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl transition-all uppercase tracking-widest text-xs mt-4">
                  Ouvrir dans Google Maps →
                </button>
             </div>
          </div>
        </div>
      </section>
    </main>
  )
}
