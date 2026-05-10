// features/home/presentation/components/StatsBar.tsx
'use client'

import { Users, Smile, Calendar, Award } from 'lucide-react'

const stats = [
  { value: '500+', label: 'Étudiants formés', icon: Users },
  { value: '95%', label: 'Satisfaction', icon: Smile },
  { value: '3 Mois', label: 'Formation intensive', icon: Calendar },
  { value: '100%', label: 'Pratique', icon: Award },
]

export function StatsBar() {
  return (
    <section className="relative z-10 -mt-10 mb-10 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="bg-[#001042] rounded-[20px] shadow-2xl p-6 sm:p-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className={`flex items-center gap-4 lg:justify-center ${
                  index !== stats.length - 1 ? 'lg:border-r lg:border-white/10' : ''
                }`}
              >
                {/* Icon Circle */}
                <div className="flex-shrink-0 w-16 h-16 rounded-full border-2 border-blue-500/50 flex items-center justify-center bg-blue-600/20">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                
                {/* Text Content */}
                <div className="flex flex-col">
                  <span className="text-2xl sm:text-3xl font-black text-white leading-none">
                    {stat.value}
                  </span>
                  <span className="text-gray-300 text-xs sm:text-sm font-medium mt-1">
                    {stat.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
