// app/about/page.tsx
import { AboutHero } from '@/features/home/presentation/components/AboutHero'
import { AboutContent } from '@/features/home/presentation/components/AboutContent'
import { WhyUs } from '@/features/home/presentation/components/WhyUs'
import { TeamSection } from '@/features/home/presentation/components/TeamSection'
import { FAQ } from '@/features/faq/presentation/components/FAQ'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <AboutHero />
      <AboutContent />
      <WhyUs />
      <TeamSection />
      <FAQ />
    </main>
  )
}
