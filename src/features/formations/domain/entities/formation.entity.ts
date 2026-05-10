// features/formations/domain/entities/formation.entity.ts
export interface Module {
  id: string
  title: string
  description: string
  duration: string
  topics: string[]
  order: number
}

export interface Formation {
  id: string
  title: string
  slug: string
  description: string
  longDescription: string
  image: string
  duration: string
  price: string
  category?: string
  modules: Module[]
  prerequisites: string[]
  objectives: string[]
  certification: boolean
  createdAt: Date
  updatedAt: Date
}

export interface FormationFilters {
  search?: string
  minPrice?: number
  maxPrice?: number
  certification?: boolean
}