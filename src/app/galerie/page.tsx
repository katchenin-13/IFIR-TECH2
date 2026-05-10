// app/gallery/page.tsx
import { GalleryHero } from '@/features/gallery/presentation/components/GalleryHero'
import { GalleryMasonry } from '@/features/gallery/presentation/components/GalleryMasonry'
import { GalleryFAQ } from '@/features/gallery/presentation/components/GalleryFAQ'

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-white">
      <GalleryHero />
      <GalleryMasonry />
      <GalleryFAQ />
    </main>
  )
}
