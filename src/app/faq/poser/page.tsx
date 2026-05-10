// app/faq/poser/page.tsx
import { FAQForm } from '@/features/faq/presentation/components/FAQForm'

export default function PoserQuestionPage() {
  return (
    <main className="min-h-screen pt-40 pb-20 bg-gray-50/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-[#001B6E] uppercase tracking-tighter mb-4">
            Posez votre <span className="text-accent">Question</span>
          </h1>
          <p className="text-gray-500 font-bold text-sm uppercase tracking-widest">
            Une réponse précise pour chaque ambition
          </p>
        </div>
        
        <FAQForm />
      </div>
    </main>
  )
}
