// app/layout.tsx
import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from '@/features/navigation/presentation/components/Navbar'
import { Footer } from '@/features/navigation/presentation/components/Footer'
import { PartnersCarousel } from '@/features/home/presentation/components/PartnersCarousel'
import { LoadingScreen } from '@/shared/components/LoadingScreen'
import { WelcomePopup } from '@/shared/components/WelcomePopup'

export const metadata: Metadata = {
  title: {
    default: 'IFIR TECH - Institut de Formation en Informatique et Réparation',
    template: '%s | IFIR TECH'
  },
  description: 'Devenez expert en réparation de téléphones, ordinateurs, micro-soudure et développement web à Korhogo. Formations 100% pratiques et certifiantes.',
  keywords: ['formation informatique Korhogo', 'réparation téléphone Côte d\'Ivoire', 'micro-soudure', 'réparation ordinateur', 'IFIR TECH', 'Soro Katchenin Moise', 'formation pratique'],
  authors: [{ name: 'Soro Katchenin Moise' }],
  creator: 'Soro Katchenin Moise',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://ifirtech.ci',
    title: 'IFIR TECH - Institut de Formation Professionnelle',
    description: 'Expertise en réparation électronique et informatique. Formations certifiantes à Korhogo.',
    siteName: 'IFIR TECH',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'IFIR TECH - Institut de Formation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IFIR TECH - Institut de Formation',
    description: 'Expertise en réparation électronique et informatique.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="flex flex-col min-h-screen bg-gray-100">
        <LoadingScreen />
        <WelcomePopup />
        <div className="max-w-[1600px] mx-8 xl:mx-auto w-full bg-white shadow-2xl relative flex flex-col min-h-screen rounded-xl overflow-hidden">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <PartnersCarousel />
          <Footer />
        </div>
      </body>
    </html>
  )
}
