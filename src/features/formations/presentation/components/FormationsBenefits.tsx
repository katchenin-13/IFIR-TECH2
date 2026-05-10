// features/formations/presentation/components/FormationsBenefits.tsx
'use client'

import { CreditCard, Link as LinkIcon, Clock, ShieldCheck, Briefcase, Users, Layout, Shield } from 'lucide-react'

const benefits = [
  { title: 'Prix abordable', icon: CreditCard },
  { title: 'Job Connector', icon: LinkIcon },
  { title: 'Flexible & Court', icon: Clock },
  { title: 'Certificat Reconnu', icon: ShieldCheck },
  { title: 'Construction Portfolio', icon: Briefcase },
  { title: 'Apprentissage Groupé', icon: Users },
  { title: 'Mentorat en direct', icon: Layout },
  { title: 'Accès à vie', icon: Shield },
]

export function FormationsBenefits() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#E6F8F6]/30">
      <div className="container mx-auto px-4 max-w-7xl text-center">
        <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-12">
          Les avantages de suivre une formation chez IFIR TECH.
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8">
          {benefits.map((benefit, i) => (
            <div key={i} className="flex flex-col items-center group">
              <div className="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center mb-4 group-hover:-translate-y-1 transition-transform duration-300">
                <benefit.icon className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-gray-900 font-bold text-sm mb-2">{benefit.title}</h3>
              <p className="text-gray-400 text-[10px] max-w-[150px] mx-auto leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
