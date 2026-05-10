// app/formations/[slug]/page.tsx
import { notFound } from 'next/navigation'
import { FormationRepositoryImpl } from '@/features/formations/data/repositories/formation.repository.impl'
import { FormationDetail } from '@/features/formations/presentation/components/FormationDetail'

const repository = new FormationRepositoryImpl()

interface FormationPageProps {
  params: Promise<{ slug: string }>
}

export default async function FormationPage({ params }: FormationPageProps) {
  const { slug } = await params
  const formation = await repository.findBySlug(slug)
  
  if (!formation) {
    notFound()
  }
  
  return <FormationDetail formation={formation} />
}

export async function generateStaticParams() {
  const formations = await repository.findAll()
  return formations.map((formation) => ({
    slug: formation.slug,
  }))
}