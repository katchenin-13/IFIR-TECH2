// app/formations/page.tsx
import { FormationsHero } from '@/features/formations/presentation/components/FormationsHero'
import { FormationsFilter } from '@/features/formations/presentation/components/FormationsFilter'
import { FormationsListing } from '@/features/formations/presentation/components/FormationsListing'
import { FormationsBenefits } from '@/features/formations/presentation/components/FormationsBenefits'

export default function FormationsPage() {
  return (
    <main className="min-h-screen bg-white">
      <FormationsHero />
      <FormationsFilter />
      <FormationsListing />
      <FormationsBenefits />
    </main>
  )
}
