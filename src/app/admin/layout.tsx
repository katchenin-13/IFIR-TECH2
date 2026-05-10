// app/admin/layout.tsx
'use client'

import { useState, useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { useAdmin } from '@/shared/hooks/useAdmin'
import { 
  LayoutDashboard, FileText, GraduationCap, HelpCircle, Wrench,
  LogOut, Menu, X, ChevronRight, Settings
} from 'lucide-react'

const navItems = [
  { href: '/admin', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/admin/blog', label: 'Blog', icon: FileText },
  { href: '/admin/formations', label: 'Formations', icon: GraduationCap },
  { href: '/admin/faq', label: 'FAQ', icon: HelpCircle },
  { href: '/admin/services', label: 'Services', icon: Wrench },
]

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const router = useRouter()
  const { isAuthenticated, isLoading, logout } = useAdmin()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    if (!isLoading && !isAuthenticated && pathname !== '/admin/login') {
      router.push('/admin/login')
    }
  }, [isAuthenticated, isLoading, pathname, router])

  // Show nothing while checking auth, or on login page
  if (pathname === '/admin/login') return <>{children}</>
  if (isLoading || !isAuthenticated) return (
    <div className="min-h-screen bg-[#001B6E] flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar overlay (mobile) */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-20 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <aside className={`fixed left-0 top-0 h-full w-64 bg-[#001B6E] text-white flex flex-col z-30 transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        {/* Logo */}
        <div className="p-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl overflow-hidden border-2 border-white/20">
              <Image src="/images/logo/logo.png" alt="IFIR TECH" width={40} height={40} className="object-contain" />
            </div>
            <div>
              <p className="font-black text-sm uppercase tracking-tight">IFIR TECH</p>
              <p className="text-white/50 text-[9px] font-bold uppercase tracking-widest">Panel Admin</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== '/admin' && pathname.startsWith(item.href))
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center justify-between gap-3 px-4 py-3 rounded-2xl transition-all group ${isActive ? 'bg-accent text-black' : 'text-white/70 hover:bg-white/10 hover:text-white'}`}
              >
                <div className="flex items-center gap-3">
                  <item.icon className="w-5 h-5" />
                  <span className="font-black text-xs uppercase tracking-widest">{item.label}</span>
                </div>
                <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? 'translate-x-0' : '-translate-x-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-0'}`} />
              </Link>
            )
          })}
        </nav>

        {/* Bottom */}
        <div className="p-4 border-t border-white/10 space-y-2">
          <Link href="/" target="_blank" className="flex items-center gap-3 px-4 py-3 rounded-2xl text-white/70 hover:bg-white/10 hover:text-white transition-all">
            <Settings className="w-5 h-5" />
            <span className="font-black text-xs uppercase tracking-widest">Voir le site</span>
          </Link>
          <button
            onClick={logout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-red-400 hover:bg-red-500/10 transition-all"
          >
            <LogOut className="w-5 h-5" />
            <span className="font-black text-xs uppercase tracking-widest">Déconnexion</span>
          </button>
        </div>
      </aside>

      {/* Main content */}
      <div className="lg:ml-64 flex-1 flex flex-col">
        {/* Top bar */}
        <header className="bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between sticky top-0 z-10 shadow-sm">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl hover:bg-gray-50"
          >
            <Menu className="w-5 h-5" />
          </button>
          <div className="lg:block hidden">
            <p className="font-black text-xs text-gray-400 uppercase tracking-widest">
              {navItems.find(n => pathname === n.href || (n.href !== '/admin' && pathname.startsWith(n.href)))?.label || 'Admin'}
            </p>
          </div>
          <div className="flex items-center gap-3 ml-auto">
            <div className="bg-primary/5 text-primary px-4 py-2 rounded-xl font-black text-[10px] uppercase tracking-widest">
              Administrateur
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  )
}
