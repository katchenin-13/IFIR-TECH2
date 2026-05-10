// app/admin/page.tsx
'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { FileText, GraduationCap, HelpCircle, Wrench, TrendingUp, Plus, ArrowRight } from 'lucide-react'
import { mockBlogPosts } from '@/features/blog/data/repositories/blog.repository.impl'
import { getStorageData } from '@/shared/hooks/useAdmin'

export default function AdminDashboard() {
  const [stats, setStats] = useState({ blog: 0, formations: 0, faq: 0, services: 0 })

  useEffect(() => {
    setStats({
      blog: getStorageData('blog', mockBlogPosts).length,
      formations: getStorageData('formations', []).length || 4,
      faq: getStorageData('faq', []).length || 5,
      services: getStorageData('services', []).length || 6,
    })
  }, [])

  const sections = [
    { label: 'Articles de Blog', count: stats.blog, icon: FileText, href: '/admin/blog', color: 'bg-blue-50 text-blue-600', accentColor: 'border-blue-200' },
    { label: 'Formations', count: stats.formations, icon: GraduationCap, href: '/admin/formations', color: 'bg-yellow-50 text-yellow-600', accentColor: 'border-yellow-200' },
    { label: 'Questions FAQ', count: stats.faq, icon: HelpCircle, href: '/admin/faq', color: 'bg-purple-50 text-purple-600', accentColor: 'border-purple-200' },
    { label: 'Services', count: stats.services, icon: Wrench, href: '/admin/services', color: 'bg-green-50 text-green-600', accentColor: 'border-green-200' },
  ]

  const quickActions = [
    { label: 'Nouvel Article', href: '/admin/blog/nouveau', icon: FileText },
    { label: 'Nouvelle Formation', href: '/admin/formations/nouveau', icon: GraduationCap },
    { label: 'Nouvelle FAQ', href: '/admin/faq/nouveau', icon: HelpCircle },
  ]

  return (
    <div className="max-w-6xl mx-auto space-y-10">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-black text-[#001B6E] uppercase tracking-tight">Tableau de Bord</h1>
        <p className="text-gray-400 font-bold text-xs uppercase tracking-widest mt-1">Gérez votre contenu depuis un seul endroit</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {sections.map((section) => (
          <Link key={section.href} href={section.href} className={`bg-white rounded-[28px] p-6 border ${section.accentColor} hover:shadow-lg transition-all group`}>
            <div className="flex items-center justify-between mb-6">
              <div className={`w-12 h-12 ${section.color} rounded-2xl flex items-center justify-center`}>
                <section.icon className="w-6 h-6" />
              </div>
              <span className="text-4xl font-black text-[#001B6E]">{section.count}</span>
            </div>
            <div className="flex items-center justify-between">
              <p className="font-black text-xs text-gray-500 uppercase tracking-widest">{section.label}</p>
              <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-primary group-hover:translate-x-1 transition-all" />
            </div>
          </Link>
        ))}
      </div>

      {/* Quick Actions */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <TrendingUp className="w-5 h-5 text-primary" />
          <h2 className="font-black text-sm text-[#001B6E] uppercase tracking-widest">Actions Rapides</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {quickActions.map((action) => (
            <Link
              key={action.href}
              href={action.href}
              className="bg-white rounded-[24px] p-6 border border-gray-100 hover:border-primary/30 hover:shadow-lg transition-all group flex items-center gap-4"
            >
              <div className="w-10 h-10 bg-primary/5 group-hover:bg-primary group-hover:text-white rounded-xl flex items-center justify-center text-primary transition-all">
                <Plus className="w-5 h-5" />
              </div>
              <span className="font-black text-xs text-[#001B6E] uppercase tracking-widest">{action.label}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Recent Blog Posts */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <FileText className="w-5 h-5 text-primary" />
            <h2 className="font-black text-sm text-[#001B6E] uppercase tracking-widest">Derniers Articles</h2>
          </div>
          <Link href="/admin/blog" className="text-primary font-black text-[10px] uppercase tracking-widest hover:text-accent transition-colors">
            Voir tout →
          </Link>
        </div>
        <div className="bg-white rounded-[28px] border border-gray-100 overflow-hidden">
          {mockBlogPosts.slice(0, 3).map((post, i) => (
            <div key={post.id} className={`flex items-center justify-between p-5 gap-4 ${i !== 0 ? 'border-t border-gray-50' : ''}`}>
              <div className="flex items-center gap-4">
                <span className="bg-accent text-black text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full whitespace-nowrap">{post.category}</span>
                <p className="font-black text-sm text-[#001B6E] uppercase tracking-tight line-clamp-1">{post.title}</p>
              </div>
              <div className="flex items-center gap-3 flex-shrink-0">
                <span className="text-gray-400 text-[10px] font-bold uppercase tracking-widest hidden sm:block">{post.date}</span>
                <Link href={`/admin/blog/${post.id}`} className="text-primary hover:text-accent transition-colors font-black text-[10px] uppercase tracking-widest">
                  Modifier
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
