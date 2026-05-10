// app/paiement/merci/page.tsx
import Link from 'next/link'
import { CheckCircle, ArrowRight, Mail, PhoneCall } from 'lucide-react'

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-white pt-40 pb-20">
      <div className="container mx-auto px-4 max-w-2xl text-center">
        <div className="flex justify-center mb-10">
          <div className="relative">
            <div className="absolute inset-0 bg-accent rounded-full blur-2xl opacity-20 animate-pulse"></div>
            <div className="relative w-24 h-24 bg-accent rounded-full flex items-center justify-center">
              <CheckCircle className="w-12 h-12 text-black stroke-[3]" />
            </div>
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-black text-[#001B6E] uppercase tracking-tight mb-6">
          Inscription <span className="text-accent">Confirmée !</span>
        </h1>
        
        <p className="text-gray-500 font-bold text-lg mb-12 leading-relaxed">
          Merci pour votre confiance. Votre inscription à l&apos;Institut IFIR TECH a été enregistrée avec succès. Un conseiller vous contactera dans les plus brefs délais pour finaliser votre dossier.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-gray-50 rounded-3xl p-6 border border-gray-100 flex flex-col items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm">
              <Mail className="w-5 h-5" />
            </div>
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Reçu par email</p>
            <p className="text-xs font-black text-primary">Envoyé instantanément</p>
          </div>
          <div className="bg-gray-50 rounded-3xl p-6 border border-gray-100 flex flex-col items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm">
              <PhoneCall className="w-5 h-5" />
            </div>
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Appel de confirmation</p>
            <p className="text-xs font-black text-primary">Sous 24h ouvrées</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            href="/" 
            className="px-10 py-5 bg-primary text-white font-black rounded-2xl uppercase tracking-widest text-sm hover:bg-primary-dark transition-all shadow-lg w-full sm:w-auto"
          >
            Retour à l&apos;accueil
          </Link>
          <Link 
            href="/formations" 
            className="px-10 py-5 border-2 border-gray-100 text-[#001B6E] font-black rounded-2xl uppercase tracking-widest text-sm hover:bg-gray-50 transition-all w-full sm:w-auto flex items-center justify-center gap-2"
          >
            Voir d&apos;autres formations
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-100">
          <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em]">
            IFIR TECH - L&apos;excellence par la pratique
          </p>
        </div>
      </div>
    </main>
  )
}
