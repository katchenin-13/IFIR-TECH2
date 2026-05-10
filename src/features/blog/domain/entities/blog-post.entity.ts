// features/blog/domain/entities/blog-post.entity.ts
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  date: string;
  category: 'Réparation' | 'Actualités' | 'Tutoriel' | 'Entrepreneuriat';
  readTime: string;
}
