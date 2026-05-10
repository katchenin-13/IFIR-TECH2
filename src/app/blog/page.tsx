// app/blog/page.tsx
import { BlogCard } from '@/features/blog/presentation/components/BlogCard'
import { BlogRepositoryImpl } from '@/features/blog/data/repositories/blog.repository.impl'

const blogRepository = new BlogRepositoryImpl()

export default async function BlogPage() {
  const posts = await blogRepository.findAll()

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Header */}
      <section className="bg-gray-50 pt-40 pb-24 border-b border-gray-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-primary px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-8">
              Actualités & Conseils
            </div>
            
            <h1 className="text-4xl md:text-7xl font-black text-[#001B6E] uppercase tracking-tighter mb-6 leading-[0.9]">
              Le Blog de <br />
              <span className="text-accent italic">IFIR TECH</span>
            </h1>
            
            <p className="text-gray-500 font-bold text-sm uppercase tracking-widest max-w-2xl mx-auto">
              Découvrez les dernières tendances de la tech, des tutoriels de réparation et les coulisses de notre institut.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </div>

          {/* Newsletter Subscription */}
          <div className="mt-24 bg-[#001B6E] rounded-[48px] p-12 md:p-20 text-white relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
             <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
                <div className="max-w-xl text-center lg:text-left">
                   <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-4">Restez informé !</h2>
                   <p className="text-white/60 font-bold text-sm uppercase tracking-widest">Inscrivez-vous pour recevoir nos derniers tutoriels et offres exclusives.</p>
                </div>
                <div className="w-full lg:w-auto flex flex-col sm:flex-row gap-4">
                   <input 
                     type="email" 
                     placeholder="Votre adresse email" 
                     className="bg-white/10 border border-white/20 rounded-2xl px-8 py-5 outline-none focus:bg-white focus:text-black transition-all font-bold min-w-[300px]"
                   />
                   <button className="bg-accent text-black font-black py-5 px-10 rounded-2xl uppercase tracking-widest text-xs hover:bg-white transition-all shadow-xl shadow-accent/20">
                      S&apos;abonner
                   </button>
                </div>
             </div>
          </div>
        </div>
      </section>
    </main>
  )
}
