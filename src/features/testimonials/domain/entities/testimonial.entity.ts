// features/testimonials/domain/entities/testimonial.entity.ts
export interface Testimonial {
  id: string
  name: string
  role: string
  content: string
  rating: number
  image: string
  formation: string
  createdAt: Date
}

export interface TestimonialFilters {
  minRating?: number
  formation?: string
}