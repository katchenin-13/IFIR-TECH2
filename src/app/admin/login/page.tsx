// app/admin/login/page.tsx
'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAdmin } from '@/shared/hooks/useAdmin'
import { Lock, Eye, EyeOff, ShieldCheck } from 'lucide-react'
import Image from 'next/image'

export default function AdminLoginPage() {
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { login } = useAdmin()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    
    await new Promise(r => setTimeout(r, 800)) // Simulate auth delay
    
    const success = login(password)
    if (success) {
      router.push('/admin')
    } else {
      setError('Mot de passe incorrect. Veuillez réessayer.')
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#001B6E] flex items-center justify-center p-4">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      </div>
      
      <div className="relative w-full max-w-md">
        {/* Card */}
        <div className="bg-white rounded-[40px] p-10 shadow-2xl">
          {/* Logo */}
          <div className="flex flex-col items-center mb-10">
            <div className="w-20 h-20 rounded-2xl overflow-hidden mb-4 border-4 border-primary/10 shadow-xl">
              <Image src="/images/logo/logo.png" alt="IFIR TECH" width={80} height={80} className="object-contain" />
            </div>
            <h1 className="text-2xl font-black text-[#001B6E] uppercase tracking-tight">Panel Admin</h1>
            <p className="text-gray-400 text-[10px] font-black uppercase tracking-[0.2em] mt-1">IFIR TECH - Accès Réservé</p>
          </div>

          {/* Shield badge */}
          <div className="flex items-center gap-2 bg-primary/5 rounded-2xl p-4 mb-8">
            <ShieldCheck className="w-5 h-5 text-primary" />
            <p className="text-primary font-black text-[10px] uppercase tracking-widest">Zone sécurisée — Administrateurs uniquement</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-primary uppercase tracking-widest ml-1">
                Mot de passe
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Entrez le mot de passe admin"
                  required
                  className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 pl-12 pr-12 outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all font-bold text-sm"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-100 text-red-600 rounded-2xl p-4 text-[10px] font-black uppercase tracking-widest text-center">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#001B6E] text-white font-black py-5 rounded-2xl uppercase tracking-widest text-xs shadow-xl shadow-primary/20 hover:bg-primary-dark transition-all disabled:opacity-50 flex items-center justify-center gap-3"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <Lock className="w-4 h-4" />
                  Accéder au Panel
                </>
              )}
            </button>
          </form>

          <p className="text-center text-gray-300 text-[9px] font-bold uppercase tracking-widest mt-8">
            Mot de passe par défaut : <span className="text-primary font-black">ifirtech2024</span>
          </p>
        </div>
      </div>
    </div>
  )
}
