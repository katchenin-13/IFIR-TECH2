// features/faq/domain/entities/faq.entity.ts
export interface FAQ {
  id: string
  question: string
  answer: string
  category: 'general' | 'formation' | 'payment' | 'career'
  order: number
}