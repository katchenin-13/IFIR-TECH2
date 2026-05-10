// features/formations/presentation/hooks/useFormations.ts
'use client'

import { useEffect, useState } from 'react'
import { Formation } from '../../domain/entities/formation.entity'
import { FormationRepositoryImpl } from '../../data/repositories/formation.repository.impl'
import { GetFormationsUseCase } from '../../domain/use-cases/get-formations.use-case'

const repository = new FormationRepositoryImpl()
const getFormationsUseCase = new GetFormationsUseCase(repository)

export function useFormations() {
  const [formations, setFormations] = useState<Formation[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchFormations = async () => {
      try {
        setLoading(true)
        const data = await getFormationsUseCase.execute()
        setFormations(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Une erreur est survenue')
      } finally {
        setLoading(false)
      }
    }

    fetchFormations()
  }, [])

  return { formations, loading, error }
}

export function useFormation(slug: string) {
  const [formation, setFormation] = useState<Formation | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchFormation = async () => {
      if (!slug) return
      try {
        setLoading(true)
        const data = await repository.findBySlug(slug)
        setFormation(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Une erreur est survenue')
      } finally {
        setLoading(false)
      }
    }

    fetchFormation()
  }, [slug])

  return { formation, loading, error }
}