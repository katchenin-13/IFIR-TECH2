// features/gallery/domain/entities/gallery.entity.ts
export interface GalleryImage {
  id: string
  src: string
  title: string
  category: 'formation' | 'event' | 'web' | 'workshop'
  createdAt: Date
}

export interface GalleryFilters {
  category?: GalleryImage['category']
  search?: string
}