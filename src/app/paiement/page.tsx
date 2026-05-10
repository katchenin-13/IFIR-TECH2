// app/paiement/page.tsx
import Link from 'next/link'
import { PaymentForm } from '@/features/payment/presentation/components/PaymentForm'
import { ArrowLeft } from 'lucide-react'

export default function PaymentPage() {
  return (
    <main className="min-h-screen bg-white pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header Section */}
        <div className="mb-12">
          <Link 
            href="/formations" 
            className="inline-flex items-center gap-2 text-[10px] font-black text-gray-400 uppercase tracking-widest hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour aux formations
          </Link>
          <h1 className="text-4xl md:text-5xl font-black text-[#001B6E] uppercase tracking-tight">
            Finaliser votre <span className="text-accent underline decoration-primary/10">inscription</span>
          </h1>
          <p className="text-gray-500 font-bold text-sm mt-2 uppercase tracking-wider">
            Étape finale pour rejoindre l&apos;Institut IFIR TECH
          </p>
        </div>

        <PaymentForm />
      </div>
    </main>
  )
}
