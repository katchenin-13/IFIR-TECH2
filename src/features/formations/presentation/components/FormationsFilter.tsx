// features/formations/presentation/components/FormationsFilter.tsx
'use client'

import { Laptop, Smartphone, Globe, BarChart3, Palette, Camera, Briefcase, Microscope } from 'lucide-react'

const categories = [
  { id: 'all', label: 'Toutes', icon: Briefcase },
  { id: 'mobile', label: 'Mobile', icon: Smartphone },
  { id: 'computer', label: 'Ordinateur', icon: Laptop },
  { id: 'web', label: 'Web', icon: Globe },
  { id: 'marketing', label: 'Marketing', icon: BarChart3 },
  { id: 'design', label: 'Design', icon: Palette },
  { id: 'photo', label: 'Photo', icon: Camera },
  { id: 'science', label: 'Science', icon: Microscope },
]

export function FormationsFilter() {
  return (
    <section className="py-8 bg-white border-b border-gray-100 sticky top-20 z-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-between gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className="flex flex-col items-center gap-2 group min-w-[80px]"
            >
              <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-primary/10 group-hover:text-primary transition-all duration-300">
                <cat.icon className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 group-hover:text-primary">
                {cat.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
