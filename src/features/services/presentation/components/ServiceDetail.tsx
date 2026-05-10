// features/services/presentation/components/ServiceDetail.tsx
import { Service } from '../../domain/entities/service.entity'
import * as Icons from 'lucide-react'
import Image from 'next/image'

export function ServiceDetail({ service }: { service: Service }) {
  const getIcon = (iconName: string) => {
    const IconComponent = Icons[iconName as keyof typeof Icons] as React.ElementType
    return IconComponent ? <IconComponent className="w-8 h-8 text-accent" /> : null
  }

  return (
    <main className="max-w-4xl mx-auto px-4 py-12 pt-28">
      <div className="flex items-center gap-4 mb-6">
        <div className="p-4 bg-accent/10 rounded-2xl">
          {getIcon(service.icon)}
        </div>
        <h1 className="text-4xl md:text-5xl font-display font-bold text-white">{service.title}</h1>
      </div>
      
      <p className="text-gray-300 text-lg mb-10 leading-relaxed">
        {service.description}
      </p>

      {service.price && (
        <div className="bg-primary-dark/50 border border-gray-700 rounded-xl p-6 mb-10 inline-block">
          <p className="text-sm text-gray-400 mb-1">Tarif indicatif</p>
          <p className="text-2xl font-bold text-accent">{service.price}</p>
        </div>
      )}

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-white mb-6">Caractéristiques de la prestation</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {service.features.map((feature, i) => (
            <div key={i} className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/10 hover:border-accent/50 transition-colors">
              <Icons.CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />
              <span className="text-gray-300">{feature}</span>
            </div>
          ))}
        </div>
      </section>
      
      {/* Fallback image area just in case */}
      <section className="mb-10">
        <div className="relative w-full h-[400px] rounded-2xl overflow-hidden border border-gray-700">
          <Image 
            src={service.image} 
            alt={service.title}
            fill
            className="object-cover"
          />
        </div>
      </section>
    </main>
  )
}
