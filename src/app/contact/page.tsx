import { ContactForm } from '@/features/contact/presentation/components/ContactForm'
import { ContactInfo } from '@/features/contact/presentation/components/ContactInfo'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-primary-dark pt-20 py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
            Contactez-<span className="gradient-text">Nous</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Notre équipe est à votre disposition pour répondre à toutes vos questions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </main>
  )
}
