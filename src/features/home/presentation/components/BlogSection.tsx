// features/home/presentation/components/BlogSection.tsx
'use client'

import { BlogCard } from '@/features/blog/presentation/components/BlogCard'
import { BlogPost } from '@/features/blog/domain/entities/blog-post.entity'
import Link from 'next/link'
import { ArrowRight, Newspaper } from 'lucide-react'

export function BlogSection({ posts }: { posts: BlogPost[] }) {
  return (
    <section className="py-24 bg-gray-50/50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-primary/5 text-primary px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6">
              <Newspaper className="w-3 h-3" />
              Actualités & Conseils
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#001B6E] uppercase tracking-tighter leading-tight">
              Derniers <span className="text-accent">Articles</span> <br />
              du Blog
            </h2>
          </div>
          
          <Link 
            href="/blog" 
            className="group flex items-center gap-4 bg-white border border-gray-100 px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-primary hover:text-white transition-all shadow-sm"
          >
            Voir tout le blog
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.slice(0, 3).map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
