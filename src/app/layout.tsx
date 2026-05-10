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
      <body className="flex flex-col min-h-screen bg-gray-100">
        <div className="max-w-[1600px] mx-8 xl:mx-auto w-full bg-white shadow-2xl relative flex flex-col min-h-screen rounded-xl overflow-hidden">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
