// app/blog/[slug]/page.tsx
import { BlogRepositoryImpl } from '@/features/blog/data/repositories/blog.repository.impl'
import { BlogInteractions } from '@/features/blog/presentation/components/BlogInteractions'
import { BlogSidebarShare } from '@/features/blog/presentation/components/BlogSidebarShare'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Calendar, Clock, ArrowLeft } from 'lucide-react'

const blogRepository = new BlogRepositoryImpl()

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await blogRepository.findBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Article Hero */}
      <section className="relative h-[60vh] min-h-[500px] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#001B6E] via-[#001B6E]/40 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 max-w-5xl relative z-10 pb-16 pt-40">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-white/70 hover:text-accent font-black text-[10px] uppercase tracking-[0.2em] mb-8 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Retour au blog
          </Link>

          <div className="flex flex-wrap gap-4 mb-6">
            <span className="bg-accent text-black text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full">
              {post.category}
            </span>
            <div className="flex items-center gap-6 text-[10px] font-black text-white/80 uppercase tracking-widest">
              <div className="flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5 text-accent" />
                {post.date}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-accent" />
                {post.readTime}
              </div>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-[1.1]">
            {post.title}
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-20">

            {/* Author Sidebar */}
            <div className="lg:w-1/4">
              <div className="sticky top-32 p-8 bg-gray-50 rounded-[32px] border border-gray-100">
                <div className="flex flex-col items-center text-center mb-8">
                  <div className="w-20 h-20 rounded-2xl overflow-hidden mb-4 border-2 border-white shadow-lg">
                    <Image
                      src={post.author.avatar}
                      alt={post.author.name}
                      width={80}
                      height={80}
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-black text-[#001B6E] uppercase tracking-tight mb-1">
                    {post.author.name}
                  </h3>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    {post.author.role}
                  </p>
                </div>

                <div className="h-px w-full bg-gray-200 mb-8"></div>

                <h4 className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-4 text-center">
                  Partager l&apos;article
                </h4>

                {/* Interactive share buttons for sidebar */}
                <BlogSidebarShare postTitle={post.title} postSlug={post.slug} />
              </div>
            </div>

            {/* Article Content */}
            <div className="lg:w-3/4">
              <div className="prose prose-lg prose-primary max-w-none">
                <div className="font-bold text-xl text-[#001B6E] mb-12 leading-relaxed border-l-4 border-accent pl-8">
                  {post.excerpt}
                </div>

                <div className="text-gray-600 leading-[1.8] font-medium space-y-8 whitespace-pre-line">
                  {post.content}
                </div>
              </div>

              {/* Interactive Commenter + Partager + Comment Form */}
              <BlogInteractions postTitle={post.title} postSlug={post.slug} />

              <div className="mt-10 flex justify-end">
                <Link href="/blog" className="text-primary font-black uppercase text-xs tracking-widest hover:text-accent transition-colors">
                  Tous les articles →
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  )
}
