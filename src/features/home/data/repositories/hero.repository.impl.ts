// features/home/data/repositories/hero.repository.impl.ts
import { HeroContent, Statistic, WhyUsItem } from '../../domain/entities/hero.entity'

export const mockStatistics: Statistic[] = [
  { id: '1', value: 500, label: 'Étudiants formés', icon: 'Users', suffix: '+' },
  { id: '2', value: 97, label: 'Taux de satisfaction', icon: 'Star', suffix: '%' },
  { id: '3', value: 10, label: 'Formations certifiantes', icon: 'BookOpen', suffix: '+' },
  { id: '4', value: 5, label: 'Années d\'expertise', icon: 'Award', suffix: '+' },
]

export const mockWhyUsItems: WhyUsItem[] = [
  { id: '1', title: 'Formation 100% pratique', description: 'Pas de théorie inutile. Vous touchez les outils dès le premier jour de formation.', icon: 'Wrench' },
  { id: '2', title: 'Formateurs de terrain', description: 'Nos instructeurs cumulent des années de réparations réelles — pas juste des diplômes.', icon: 'GraduationCap' },
  { id: '3', title: 'Certificat valorisé', description: 'Vous repartez avec une attestation IFIR Tech reconnue qui ouvre des portes.', icon: 'Award' },
  { id: '4', title: 'Insertion professionnelle', description: 'Stage, emploi ou création d\'entreprise — nous vous accompagnons jusqu\'au bout.', icon: 'Briefcase' },
]

const mockHeroContent: HeroContent = {
  title: 'Devenez Expert en Réparation & Informatique',
  subtitle: 'FORMATION PROFESSIONNELLE À KORHOGO',
  badge: 'Institut de Formation en Informatique et Réparation',
  ctaPrimary: 'Appeler pour RDV',
  ctaSecondary: 'Nos Formations',
  image: '/images/formation-reparation.jpg',
}

export class HeroRepositoryImpl {
  async getContent(): Promise<HeroContent> {
    return mockHeroContent
  }

  async getStatistics(): Promise<Statistic[]> {
    return mockStatistics
  }

  async getWhyUsItems(): Promise<WhyUsItem[]> {
    return mockWhyUsItems
  }
}
