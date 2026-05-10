// features/home/domain/entities/hero.entity.ts
export interface HeroContent {
  title: string
  subtitle: string
  badge: string
  ctaPrimary: string
  ctaSecondary: string
  image: string
}

export interface Statistic {
  id: string
  value: number
  label: string
  icon: string
  suffix: string
}

export interface WhyUsItem {
  id: string
  title: string
  description: string
  icon: string
}