// features/formations/domain/use-cases/get-formations.use-case.ts
import { Formation } from '../entities/formation.entity'
import { FormationRepositoryImpl } from '../../data/repositories/formation.repository.impl'

export class GetFormationsUseCase {
  constructor(private readonly repository: FormationRepositoryImpl) {}

  async execute(): Promise<Formation[]> {
    return this.repository.findAll()
  }
}
