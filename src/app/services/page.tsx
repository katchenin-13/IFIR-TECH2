// app/services/page.tsx
import { ServicesHero } from '@/features/services/presentation/components/ServicesHero'
import { ServicesListing } from '@/features/services/presentation/components/ServicesListing'

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <ServicesHero />
      <ServicesListing />
    </main>
  )
}
