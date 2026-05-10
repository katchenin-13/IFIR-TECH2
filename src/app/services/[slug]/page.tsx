// app/services/[slug]/page.tsx
import { notFound } from 'next/navigation'
import { ServiceRepositoryImpl } from '@/features/services/data/repositories/service.repository.impl'
import { ServiceDetail } from '@/features/services/presentation/components/ServiceDetail'

const repository = new ServiceRepositoryImpl()

interface ServicePageProps {
  params: Promise<{ slug: string }>
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params
  const service = await repository.findBySlug(slug)
  
  if (!service) {
    notFound()
  }
  
  return (
    <div className="bg-primary-dark min-h-screen">
      <ServiceDetail service={service} />
    </div>
  )
}

export async function generateStaticParams() {
  const services = await repository.findAll()
  return services.map((service) => ({
    slug: service.slug,
  }))
}
