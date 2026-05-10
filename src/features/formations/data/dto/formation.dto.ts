// features/formations/data/dto/formation.dto.ts
export interface FormationDTO {
  id: string
  title: string
  slug: string
  description: string
  longDescription: string
  image: string
  duration: string
  price: string
  modules: ModuleDTO[]
  prerequisites: string[]
  objectives: string[]
  certification: boolean
  createdAt: string
  updatedAt: string
}

export interface ModuleDTO {
  id: string
  title: string
  description: string
  duration: string
  topics: string[]
  order: number
}