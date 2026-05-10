// features/formations/presentation/components/FormationsHero.tsx
'use client'

import Image from 'next/image'

export function FormationsHero() {
  return (
    <section className="bg-[#F3F4F6] pt-32 pb-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="bg-white rounded-[40px] overflow-hidden flex flex-col md:flex-row items-center p-8 md:p-12 shadow-sm">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <nav className="text-sm text-gray-500 mb-4 flex items-center gap-2">
              <span>Home</span>
              <span>/</span>
              <span className="text-primary font-bold">Course</span>
            </nav>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#001B6E] leading-tight mb-4">
              Programme des <br />
              <span className="text-accent underline decoration-primary/10">Formations</span>
            </h1>
            <p className="text-gray-600 text-lg max-w-md">
              Développez vos compétences avec nos experts certifiés et boostez votre carrière professionnelle.
            </p>
          </div>
          <div className="w-full md:w-1/2 relative h-64 md:h-96">
            <Image
              src="/images/hero-technician.jpg"
              alt="Course Program"
              fill
              className="object-cover rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
