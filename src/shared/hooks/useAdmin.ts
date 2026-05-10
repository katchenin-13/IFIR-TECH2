// shared/hooks/useAdmin.ts
'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

const ADMIN_PASSWORD = 'ifirtech2024'
const AUTH_KEY = 'ifirtech-admin-auth'

export function useAdmin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const auth = sessionStorage.getItem(AUTH_KEY)
    setIsAuthenticated(auth === 'true')
    setIsLoading(false)
  }, [])

  const login = (password: string): boolean => {
    if (password === ADMIN_PASSWORD) {
      sessionStorage.setItem(AUTH_KEY, 'true')
      setIsAuthenticated(true)
      return true
    }
    return false
  }

  const logout = () => {
    sessionStorage.removeItem(AUTH_KEY)
    setIsAuthenticated(false)
    router.push('/admin/login')
  }

  const requireAuth = () => {
    if (!isLoading && !isAuthenticated) {
      router.push('/admin/login')
    }
  }

  return { isAuthenticated, isLoading, login, logout, requireAuth }
}

// Helpers for localStorage data management
export function getStorageData<T>(key: string, defaultData: T[]): T[] {
  if (typeof window === 'undefined') return defaultData
  const stored = localStorage.getItem(`ifirtech-${key}`)
  if (!stored) return defaultData
  try {
    return JSON.parse(stored)
  } catch {
    return defaultData
  }
}

export function setStorageData<T>(key: string, data: T[]): void {
  if (typeof window === 'undefined') return
  localStorage.setItem(`ifirtech-${key}`, JSON.stringify(data))
}
