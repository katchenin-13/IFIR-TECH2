// features/testimonials/data/repositories/testimonial.repository.impl.ts
import { Testimonial } from '../../domain/entities/testimonial.entity'

const mockTestimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Kouassi Jean',
    role: 'Technicien indépendant',
    content: 'Grâce à IFIR TECH, j\'ai pu ouvrir mon propre atelier de réparation. La formation est vraiment pratique et les formateurs sont excellents.',
    rating: 5,
    image: '/images/testimonials/t1.jpg',
    formation: 'Réparation Téléphone & Micro-soudure',
    createdAt: new Date('2024-03-01'),
  },
  {
    id: '2',
    name: 'Aya Koné',
    role: 'Développeuse web freelance',
    content: 'La formation web m\'a permis de décrocher mes premiers clients en moins de 2 mois. Je recommande vivement !',
    rating: 5,
    image: '/images/testimonials/t2.jpg',
    formation: 'Développement Web Full Stack',
    createdAt: new Date('2024-03-15'),
  },
  {
    id: '3',
    name: 'Moussa Diallo',
    role: 'Technicien en entreprise',
    content: 'Formation sérieuse, encadrement de qualité. J\'ai été embauché dès la fin de ma formation.',
    rating: 5,
    image: '/images/testimonials/t3.jpg',
    formation: 'Réparation Ordinateur',
    createdAt: new Date('2024-04-01'),
  },
]

export class TestimonialRepositoryImpl {
  async findAll(): Promise<Testimonial[]> {
    return mockTestimonials
  }

  async findByFormation(formation: string): Promise<Testimonial[]> {
    return mockTestimonials.filter(t => t.formation === formation)
  }
}
