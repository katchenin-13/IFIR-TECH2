// app/layout.tsx
import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from '@/features/navigation/presentation/components/Navbar'
import { Footer } from '@/features/navigation/presentation/components/Footer'

export const metadata: Metadata = {
  title: 'IFIR TECH - Institut de Formation en Informatique et Réparation',
  description: 'Formations professionnelles en réparation de téléphones, ordinateurs, micro-soudure et développement web.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
