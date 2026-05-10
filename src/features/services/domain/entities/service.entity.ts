// features/services/domain/entities/service.entity.ts
export interface Service {
  id: string
  slug: string
  title: string
  description: string
  icon: string
  image: string
  features: string[]
  price?: string
}

export interface ServiceCategory {
  id: string
  name: string
  services: Service[]
}
