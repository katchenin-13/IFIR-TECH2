// features/blog/presentation/components/BlogCard.tsx
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight, User } from 'lucide-react'
import { BlogPost } from '../../domain/entities/blog-post.entity'

export function BlogCard({ post, index }: { post: BlogPost; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group bg-white rounded-[32px] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500"
    >
      <Link href={`/blog/${post.slug}`} className="block relative h-64 overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-6 left-6">
          <span className="bg-accent text-black text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full shadow-lg">
            {post.category}
          </span>
        </div>
      </Link>

      <div className="p-8">
        <div className="flex items-center gap-6 mb-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">
          <div className="flex items-center gap-2">
            <Calendar className="w-3.5 h-3.5 text-accent" />
            {post.date}
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-accent" />
            {post.readTime}
          </div>
        </div>

        <Link href={`/blog/${post.slug}`}>
          <h3 className="text-xl font-black text-[#001B6E] uppercase tracking-tight mb-4 line-clamp-2 group-hover:text-primary transition-colors leading-tight">
            {post.title}
          </h3>
        </Link>

        <p className="text-gray-500 text-sm font-medium leading-relaxed mb-8 line-clamp-2">
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between pt-6 border-t border-gray-50">
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center">
                <User className="w-4 h-4 text-primary" />
             </div>
             <span className="text-[10px] font-black text-[#001B6E] uppercase tracking-widest">{post.author.name}</span>
          </div>
          
          <Link 
            href={`/blog/${post.slug}`}
            className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all"
          >
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
