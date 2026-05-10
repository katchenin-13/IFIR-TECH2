// features/gallery/data/repositories/gallery.repository.impl.ts
import { GalleryImage } from '../../domain/entities/gallery.entity'

export const mockGalleryImages: GalleryImage[] = [
  { id: '1', src: 'https://placehold.co/600x600/001B6E/F5B400?text=Micro-soudure', title: 'Atelier micro-soudure', category: 'formation', createdAt: new Date('2024-01-10') },
  { id: '2', src: 'https://placehold.co/600x600/001B6E/F5B400?text=Smartphone', title: 'Diagnostic smartphone', category: 'formation', createdAt: new Date('2024-01-15') },
  { id: '3', src: 'https://placehold.co/600x600/001B6E/F5B400?text=Web', title: 'Création site web', category: 'web', createdAt: new Date('2024-01-20') },
  { id: '4', src: 'https://placehold.co/600x600/001B6E/F5B400?text=Cérémonie', title: 'Cérémonie de remise des certificats', category: 'event', createdAt: new Date('2024-02-01') },
  { id: '5', src: 'https://placehold.co/600x600/001B6E/F5B400?text=Tunnel', title: 'Formation tunnel de vente', category: 'web', createdAt: new Date('2024-02-05') },
  { id: '6', src: 'https://placehold.co/600x600/001B6E/F5B400?text=Ordinateur', title: 'Atelier pratique ordinateur', category: 'formation', createdAt: new Date('2024-02-10') },
]

export class GalleryRepositoryImpl {
  async findAll(): Promise<GalleryImage[]> {
    return mockGalleryImages
  }

  async findByCategory(category: GalleryImage['category']): Promise<GalleryImage[]> {
    return mockGalleryImages.filter(img => img.category === category)
  }
}