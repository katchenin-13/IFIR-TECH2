// app/admin/blog/[id]/page.tsx
'use client'

import { useEffect, useState } from 'react'
import { BlogForm } from '@/shared/components/admin/BlogForm'
import { BlogPost } from '@/features/blog/domain/entities/blog-post.entity'
import { mockBlogPosts } from '@/features/blog/data/repositories/blog.repository.impl'
import { getStorageData } from '@/shared/hooks/useAdmin'
import { use } from 'react'

export default function EditBlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const [post, setPost] = useState<BlogPost | null>(null)

  useEffect(() => {
    const posts = getStorageData('blog', mockBlogPosts)
    const found = posts.find(p => p.id === id)
    if (found) setPost(found)
  }, [id])

  if (!post) return (
    <div className="flex items-center justify-center h-64">
      <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin"></div>
    </div>
  )

  return <BlogForm initial={post} />
}
