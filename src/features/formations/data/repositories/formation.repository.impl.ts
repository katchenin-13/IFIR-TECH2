// features/formations/data/repositories/formation.repository.impl.ts
import { Formation } from '../../domain/entities/formation.entity'
import { FormationMapper } from '../mappers/formation.mapper'
import { FormationDTO } from '../dto/formation.dto'

const mockFormations: FormationDTO[] = [
  {
    id: '1',
    title: 'Réparation Mobile & Ordinateur',
    slug: 'reparation-mobile-ordinateur',
    description: 'Formation complète en réparation de smartphones et ordinateurs.',
    longDescription: 'Apprenez à diagnostiquer et réparer tous types de téléphones mobiles et ordinateurs portables.',
    image: '/images/formations/reparation-mobile.jpg',
    duration: '1 à 3 mois',
    price: '0',
    category: 'reparation-mobile',
    modules: [
      { id: 'm1', title: 'Micro-soudure', description: 'Techniques de soudure sur circuits', duration: '2 semaines', topics: ['Soudure BGA', 'Fer à souder', 'Stations'], order: 1 },
      { id: 'm2', title: 'Diagnostic & panne', description: 'Méthodes de diagnostic', duration: '2 semaines', topics: ['Multimètre', 'Tests logiciels', 'Alimentation'], order: 2 },
      { id: 'm3', title: 'Déblocage FRP/iCloud', description: 'Déverrouillage de sécurité', duration: '1 semaine', topics: ['FRP Android', 'iCloud Unlock', 'MDM'], order: 3 },
      { id: 'm4', title: 'Remplacement de pièces', description: 'Démontage et remontage', duration: '2 semaines', topics: ['Écrans', 'Batteries', 'Connecteurs'], order: 4 },
    ],
    prerequisites: [],
    objectives: ['Micro-soudure', 'Diagnostic & panne', 'Déblocage FRP / iCloud', 'Remplacement de pièces'],
    certification: true,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
  },
  {
    id: '2',
    title: 'Architecture des Téléphones & Ordinateurs',
    slug: 'architecture-telephones-ordinateurs',
    description: 'Comprenez le fonctionnement interne des appareils électroniques.',
    longDescription: 'Maîtrisez l\'architecture matérielle des smartphones et ordinateurs pour mieux les réparer.',
    image: '/images/formations/architecture.jpg',
    duration: '3 mois',
    price: '0',
    category: 'reparation-mobile',
    modules: [
      { id: 'm1', title: 'Structure smartphone', description: 'Composants internes', duration: '3 semaines', topics: ['Carte mère', 'Processeur', 'Mémoire'], order: 1 },
      { id: 'm2', title: 'Rôle du CPU, PMIC, RAM', description: 'Circuits spécialisés', duration: '3 semaines', topics: ['CPU', 'PMIC', 'RAM/ROM'], order: 2 },
      { id: 'm3', title: 'Circuits & alimentation', description: 'Schémas électroniques', duration: '3 semaines', topics: ['Schémas', 'Tensions', 'Résistances'], order: 3 },
    ],
    prerequisites: [],
    objectives: ['Structure d\'un smartphone', 'Rôle du CPU, PMIC, RAM...', 'Circuits & alimentation'],
    certification: true,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
  },
  {
    id: '3',
    title: 'Micro-soudure (Pratique)',
    slug: 'micro-soudure-pratique',
    description: 'Maîtrisez les techniques avancées de micro-soudure électronique.',
    longDescription: 'Formation pratique intensive sur toutes les techniques de soudure sur carte mère de téléphone et ordinateur.',
    image: '/images/formations/micro-soudure.jpg',
    duration: '1 mois',
    price: '0',
    category: 'reparation-mobile',
    modules: [
      { id: 'm1', title: 'Techniques de soudure', description: 'Soudure de précision', duration: '1 semaine', topics: ['BGA', 'QFN', 'SMD'], order: 1 },
      { id: 'm2', title: 'Dessoudage / ressoudage', description: 'Remplacement de composants', duration: '1 semaine', topics: ['Hot air', 'Infra-rouge', 'Pasta flux'], order: 2 },
      { id: 'm3', title: 'Reballing IC (CPU, eMMC...)', description: 'Rebillage de puces BGA', duration: '1 semaine', topics: ['Stencil', 'Billes BGA', 'Nettoyage'], order: 3 },
      { id: 'm4', title: 'Remplacement de composants', description: 'Composants passifs', duration: '1 semaine', topics: ['Résistances', 'Condensateurs', 'Bobines'], order: 4 },
    ],
    prerequisites: ['Notions de base en électronique'],
    objectives: ['Techniques de soudure', 'Dessoudage / ressoudage', 'Reballing IC (CPU, eMMC...)', 'Remplacement de composants'],
    certification: true,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
  },
  {
    id: '4',
    title: 'Réparation Avancée',
    slug: 'reparation-avancee',
    description: 'Diagnostic et réparation des pannes complexes sur carte mère.',
    longDescription: 'Formation avancée pour réparer des pannes difficiles : court-circuit, carte mère morte, PCB endommagé.',
    image: '/images/formations/reparation-avancee.jpg',
    duration: '1 mois',
    price: '0',
    category: 'reparation-mobile',
    modules: [
      { id: 'm1', title: 'Carte mère morte', description: 'Diagnostic de carte mère', duration: '1 semaine', topics: ['Test alimentation', 'Diagrammes', 'Points de test'], order: 1 },
      { id: 'm2', title: 'Court-circuit (short)', description: 'Localisation de court-circuit', duration: '1 semaine', topics: ['Thermique', 'Résistance nulle', 'Injection courant'], order: 2 },
      { id: 'm3', title: 'Problèmes d\'alimentation', description: 'Circuits PMIC et batterie', duration: '1 semaine', topics: ['PMIC', 'Charge', 'Régulation'], order: 3 },
      { id: 'm4', title: 'Réparation PCB (BIOS, chipset...)', description: 'Remplacement puces BGA', duration: '1 semaine', topics: ['BIOS', 'Chipset', 'EC'], order: 4 },
    ],
    prerequisites: ['Avoir suivi la formation Micro-soudure'],
    objectives: ['Carte mère morte', 'Court-circuit (short)', 'Problèmes d\'alimentation', 'Réparation PCB (BIOS, chipset...)'],
    certification: true,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
  },
  {
    id: '5',
    title: 'Création de Site Web & Tunnel de Vente',
    slug: 'creation-site-web-tunnel-de-vente',
    description: 'Créez votre site web et votre système de vente en ligne.',
    longDescription: 'Apprenez à créer des sites web professionnels et des tunnels de vente performants pour vendre en ligne.',
    image: '/images/formations/creation-web.jpg',
    duration: '2 à 4 semaines',
    price: '0',
    category: 'web',
    modules: [
      { id: 'm1', title: 'Base du web & CMS', description: 'Fondamentaux du web', duration: '1 semaine', topics: ['WordPress', 'Elementor', 'Hébergement'], order: 1 },
      { id: 'm2', title: 'Tunnel de vente', description: 'Création de tunnels', duration: '1 semaine', topics: ['Landing page', 'Formulaires', 'Paiement'], order: 2 },
      { id: 'm3', title: 'Marketing digital', description: 'Attirer des clients', duration: '1 semaine', topics: ['Réseaux sociaux', 'Email marketing', 'SEO'], order: 3 },
      { id: 'm4', title: 'Monétisation', description: 'Gagner de l\'argent en ligne', duration: '1 semaine', topics: ['Dropshipping', 'Infoproduits', 'Affiliation'], order: 4 },
    ],
    prerequisites: [],
    objectives: ['Base du web & CMS', 'Tunnel de vente', 'Marketing digital', 'Monétisation'],
    certification: true,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
  },
]

export class FormationRepositoryImpl {
  async findAll(): Promise<Formation[]> {
    return mockFormations.map(FormationMapper.toDomain)
  }

  async findBySlug(slug: string): Promise<Formation | null> {
    const dto = mockFormations.find(f => f.slug === slug) ?? null
    return dto ? FormationMapper.toDomain(dto) : null
  }
}
