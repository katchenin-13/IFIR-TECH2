// features/home/data/repositories/hero.repository.impl.ts
import { HeroContent, Statistic, WhyUsItem } from '../../domain/entities/hero.entity'

export const mockStatistics: Statistic[] = [
  { id: '1', value: 500, label: 'Étudiants formés', icon: 'Users', suffix: '+' },
  { id: '2', value: 95, label: 'Taux de satisfaction', icon: 'Star', suffix: '%' },
  { id: '3', value: 10, label: 'Formations disponibles', icon: 'BookOpen', suffix: '+' },
  { id: '4', value: 5, label: 'Années d\'expérience', icon: 'Award', suffix: '+' },
]

export const mockWhyUsItems: WhyUsItem[] = [
  { id: '1', title: 'Formation 100% pratique', description: 'Apprenez en faisant. Chaque cours est axé sur la pratique réelle.', icon: 'Wrench' },
  { id: '2', title: 'Formateurs experts', description: 'Des professionnels avec des années d\'expérience terrain.', icon: 'GraduationCap' },
  { id: '3', title: 'Certification reconnue', description: 'Obtenez une attestation valorisée par les employeurs.', icon: 'Award' },
  { id: '4', title: 'Accompagnement emploi', description: 'Nous vous aidons à trouver un stage ou créer votre entreprise.', icon: 'Briefcase' },
]

const mockHeroContent: HeroContent = {
  title: 'DEVENEZ EXPERT EN RÉPARATION & TECH',
  subtitle: 'Formations professionnelles en réparation de téléphones, ordinateurs, micro-soudure et développement web. Apprenez avec les meilleurs experts.',
  badge: 'Institut de Formation en Informatique et Réparation',
  ctaPrimary: 'Voir nos formations',
  ctaSecondary: 'Nous contacter',
  image: 'https://placehold.co/600x700/001B6E/F5B400?text=IFIR+TECH',
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
