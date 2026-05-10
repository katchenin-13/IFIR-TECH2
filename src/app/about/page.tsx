import { WhyUs } from '@/features/home/presentation/components/WhyUs'
import { Stats } from '@/features/home/presentation/components/Stats'
import { FAQ } from '@/features/faq/presentation/components/FAQ'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-primary-dark pt-20">
      <WhyUs />
      <Stats />
      <FAQ />
    </main>
  )
}
