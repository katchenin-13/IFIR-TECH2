// app/page.tsx
import { Hero } from '@/features/home/presentation/components/Hero'
import { Stats } from '@/features/home/presentation/components/Stats'
import { FormationsSection } from '@/features/formations/presentation/components/FormationsSection'
import { WhyUs } from '@/features/home/presentation/components/WhyUs'
import { ServicesSection } from '@/features/services/presentation/components/ServicesSection'
import { Gallery } from '@/features/gallery/presentation/components/Gallery'
import { TestimonialsSection } from '@/features/testimonials/presentation/components/TestimonialsSection'
import { FAQ } from '@/features/faq/presentation/components/FAQ'
import { CTASection } from '@/features/home/presentation/components/CTASection'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <FormationsSection />
      <WhyUs />
      <ServicesSection />
      <Gallery />
      <TestimonialsSection />
      <FAQ />
      <CTASection />
    </>
  )
}