// features/home/use-cases/get-hero-content.use-case.ts
import { HeroContent } from '../domain/entities/hero.entity'
import { HeroRepositoryImpl } from '../data/repositories/hero.repository.impl'

export class GetHeroContentUseCase {
  constructor(private readonly repository: HeroRepositoryImpl) {}

  async execute(): Promise<HeroContent> {
    return this.repository.getContent()
  }
}
