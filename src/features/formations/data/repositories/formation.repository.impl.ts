// features/formations/data/repositories/formation.repository.impl.ts
import { Formation } from '../../domain/entities/formation.entity'
import { FormationMapper } from '../mappers/formation.mapper'
import { FormationDTO } from '../dto/formation.dto'

const mockFormations: FormationDTO[] = [
  {
    id: '1',
    title: 'Réparation Mobile & Ordinateur',
    slug: 'reparation-mobile-ordinateur',
    description: 'La formation complète pour devenir technicien en réparation de smartphones et d\'ordinateurs.',
    longDescription: 'De zéro à technicien confirmé. Apprenez à diagnostiquer et réparer tous types de téléphones mobiles et d\'ordinateurs portables grâce à une approche entièrement pratique sur du matériel réel. À l\'issue de cette formation, vous êtes capable d\'ouvrir votre propre atelier.',
    image: '/images/service-microsoudure.jpg',
    duration: '1 à 3 mois',
    price: '0',
    category: 'reparation-mobile',
    modules: [
      { id: 'm1', title: 'Micro-soudure', description: 'Techniques de soudure de précision sur circuits électroniques', duration: '2 semaines', topics: ['Soudure BGA', 'Fer à souder', 'Stations'], order: 1 },
      { id: 'm2', title: 'Diagnostic & panne', description: 'Méthodes professionnelles de diagnostic de panne', duration: '2 semaines', topics: ['Multimètre', 'Tests logiciels', 'Alimentation'], order: 2 },
      { id: 'm3', title: 'Déblocage FRP/iCloud', description: 'Déverrouillage de toutes sécurités logicielles', duration: '1 semaine', topics: ['FRP Android', 'iCloud Unlock', 'MDM'], order: 3 },
      { id: 'm4', title: 'Remplacement de pièces', description: 'Démontage, remontage et remplacement de composants', duration: '2 semaines', topics: ['Écrans', 'Batteries', 'Connecteurs'], order: 4 },
    ],
    prerequisites: [],
    objectives: ['Maîtriser la micro-soudure', 'Diagnostiquer n\'importe quelle panne', 'Débloquer FRP & iCloud', 'Remplacer toutes pièces défectueuses'],
    certification: true,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
  },
  {
    id: '2',
    title: 'Architecture des Téléphones & Ordinateurs',
    slug: 'architecture-telephones-ordinateurs',
    description: 'Comprenez le fonctionnement interne des appareils pour mieux les réparer et les expliquer à vos clients.',
    longDescription: 'Maîtrisez l\'architecture matérielle complète des smartphones et ordinateurs. Savoir comment fonctionne un appareil est la clé pour le réparer avec confiance et précision. Cette formation est le fondement de toute expertise en réparation avancée.',
    image: '/images/formation-reparation.jpg',
    duration: '3 mois',
    price: '0',
    category: 'reparation-mobile',
    modules: [
      { id: 'm1', title: 'Structure d\'un smartphone', description: 'Composants internes et leur rôle', duration: '3 semaines', topics: ['Carte mère', 'Processeur', 'Mémoire'], order: 1 },
      { id: 'm2', title: 'Rôle du CPU, PMIC, RAM', description: 'Circuits spécialisés et leur fonctionnement', duration: '3 semaines', topics: ['CPU', 'PMIC', 'RAM/ROM'], order: 2 },
      { id: 'm3', title: 'Circuits & alimentation', description: 'Lecture de schémas et gestion de l\'énergie', duration: '3 semaines', topics: ['Schémas', 'Tensions', 'Résistances'], order: 3 },
    ],
    prerequisites: [],
    objectives: ['Lire un schéma électronique', 'Identifier le rôle de chaque composant', 'Comprendre les circuits d\'alimentation', 'Intervenir avec précision sur la carte mère'],
    certification: true,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
  },
  {
    id: '3',
    title: 'Micro-soudure (Pratique Intensive)',
    slug: 'micro-soudure-pratique',
    description: 'Maîtrisez les techniques avancées de micro-soudure électronique en un mois intensif.',
    longDescription: 'Formation pratique intensive sur toutes les techniques de soudure sur carte mère de téléphone et d\'ordinateur. De la soudure BGA au reballing, devenez un expert recherché capable de réparer là où d\'autres abandonnent.',
    image: '/images/service-microsoudure.jpg',
    duration: '1 mois',
    price: '0',
    category: 'reparation-mobile',
    modules: [
      { id: 'm1', title: 'Techniques de soudure', description: 'Soudure de haute précision sur composants miniatures', duration: '1 semaine', topics: ['BGA', 'QFN', 'SMD'], order: 1 },
      { id: 'm2', title: 'Dessoudage / Ressoudage', description: 'Remplacement propre de composants sans endommager la carte', duration: '1 semaine', topics: ['Hot air', 'Infra-rouge', 'Pasta flux'], order: 2 },
      { id: 'm3', title: 'Reballing IC (CPU, eMMC…)', description: 'Rebillage professionnel de puces BGA', duration: '1 semaine', topics: ['Stencil', 'Billes BGA', 'Nettoyage'], order: 3 },
      { id: 'm4', title: 'Remplacement de composants', description: 'Remplacement de composants passifs et actifs', duration: '1 semaine', topics: ['Résistances', 'Condensateurs', 'Bobines'], order: 4 },
    ],
    prerequisites: ['Notions de base en électronique'],
    objectives: ['Maîtriser toutes les techniques de soudure', 'Dessouder et ressouder sans risque', 'Reballer des puces BGA (CPU, eMMC)', 'Remplacer tous types de composants'],
    certification: true,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
  },
  {
    id: '4',
    title: 'Réparation Avancée',
    slug: 'reparation-avancee',
    description: 'Diagnostic et réparation des pannes complexes sur carte mère — pour aller là où les autres abandonnent.',
    longDescription: 'Formation avancée pour réparer des pannes difficiles : court-circuit, carte mère morte, PCB endommagé. Le niveau expert qui vous différencie de 95% des techniciens du marché et vous permet de facturer vos interventions au prix fort.',
    image: '/images/formation-reparation.jpg',
    duration: '1 mois',
    price: '0',
    category: 'reparation-mobile',
    modules: [
      { id: 'm1', title: 'Carte mère morte', description: 'Diagnostic complet et remise en vie d\'une carte mère', duration: '1 semaine', topics: ['Test alimentation', 'Diagrammes', 'Points de test'], order: 1 },
      { id: 'm2', title: 'Court-circuit (short)', description: 'Localisation précise et élimination de court-circuit', duration: '1 semaine', topics: ['Thermique', 'Résistance nulle', 'Injection courant'], order: 2 },
      { id: 'm3', title: 'Problèmes d\'alimentation', description: 'Réparation des circuits PMIC et de charge batterie', duration: '1 semaine', topics: ['PMIC', 'Charge', 'Régulation'], order: 3 },
      { id: 'm4', title: 'Réparation PCB (BIOS, chipset…)', description: 'Remplacement de puces BGA critiques', duration: '1 semaine', topics: ['BIOS', 'Chipset', 'EC'], order: 4 },
    ],
    prerequisites: ['Avoir suivi la formation Micro-soudure'],
    objectives: ['Remettre en vie une carte mère morte', 'Localiser et éliminer un court-circuit', 'Réparer les problèmes d\'alimentation', 'Remplacer BIOS, chipset et puces critiques'],
    certification: true,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
  },
  {
    id: '5',
    title: 'Création de Site Web & Tunnel de Vente',
    slug: 'creation-site-web-tunnel-de-vente',
    description: 'Créez votre site web et votre système de vente en ligne pour générer des revenus sur Internet.',
    longDescription: 'Apprenez à créer des sites web professionnels et des tunnels de vente performants. Que vous vouliez vendre un produit, promouvoir un service ou créer une boutique en ligne, cette formation vous donne tous les outils pour réussir — sans avoir besoin de coder.',
    image: '/images/formation-web.jpg',
    duration: '2 à 4 semaines',
    price: '0',
    category: 'web',
    modules: [
      { id: 'm1', title: 'Base du web & CMS', description: 'Fondamentaux du web, WordPress et hébergement', duration: '1 semaine', topics: ['WordPress', 'Elementor', 'Hébergement'], order: 1 },
      { id: 'm2', title: 'Tunnel de vente', description: 'Créer des landing pages et systèmes de paiement', duration: '1 semaine', topics: ['Landing page', 'Formulaires', 'Paiement'], order: 2 },
      { id: 'm3', title: 'Marketing digital', description: 'Attirer et convertir des clients en ligne', duration: '1 semaine', topics: ['Réseaux sociaux', 'Email marketing', 'SEO'], order: 3 },
      { id: 'm4', title: 'Monétisation', description: 'Générer des revenus passifs et actifs sur Internet', duration: '1 semaine', topics: ['Dropshipping', 'Infoproduits', 'Affiliation'], order: 4 },
    ],
    prerequisites: [],
    objectives: ['Créer un site web professionnel sans coder', 'Construire un tunnel de vente complet', 'Attirer des clients grâce au marketing digital', 'Générer des revenus en ligne'],
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
