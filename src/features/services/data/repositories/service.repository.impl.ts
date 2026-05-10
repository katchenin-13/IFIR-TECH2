// features/services/data/repositories/service.repository.impl.ts
import { Service, ServiceCategory } from '../../domain/entities/service.entity'

export const mockServices: Service[] = [
  {
    id: '1',
    slug: 'reparation-telephone',
    title: 'Réparation Téléphone',
    description: 'Réparation de toutes marques de téléphones, du diagnostic à la pièce remplacée.',
    icon: 'Smartphone',
    image: '/images/service-phone.jpg',
    features: ['Toutes marques (Samsung, iPhone, Tecno…)', 'Changement d\'écran & vitre', 'Remplacement de batterie', 'Réparation carte mère', 'Déblocage FRP / iCloud'],
  },
  {
    id: '2',
    slug: 'reparation-ordinateur',
    title: 'Réparation Ordinateur',
    description: 'Diagnostic et réparation de PC fixes et portables toutes marques.',
    icon: 'Laptop',
    image: '/images/service-phone.jpg',
    features: ['Toutes marques', 'Changement de composants', 'Réparation carte mère', 'Maintenance préventive', 'Optimisation des performances'],
  },
  {
    id: '3',
    slug: 'micro-soudure',
    title: 'Micro-soudure',
    description: 'Réparation au niveau composant — carte mère de téléphone ou d\'ordinateur.',
    icon: 'Microscope',
    image: '/images/service-microsoudure.jpg',
    features: ['Réparation niveau composant', 'Reballing processeur (BGA)', 'Changement connecteurs', 'Réparation de pistes'],
  },
  {
    id: '4',
    slug: 'deblocage',
    title: 'Déblocage',
    description: 'Suppression de tous types de verrous logiciels sur vos appareils.',
    icon: 'Unlock',
    image: '/images/service-phone.jpg',
    features: ['FRP Samsung / Google', 'iCloud & iPad Activation Lock', 'Mot de passe oublié', 'Pattern / PIN', 'Bootloader'],
  },
  {
    id: '5',
    slug: 'installation-windows',
    title: 'Installation Windows',
    description: 'Installation propre et configuration complète de votre système Windows.',
    icon: 'Monitor',
    image: '/images/formation-reparation.jpg',
    features: ['Windows 10 / 11', 'Installation des drivers', 'Logiciels essentiels', 'Optimisation au démarrage'],
  },
  {
    id: '6',
    slug: 'maintenance-informatique',
    title: 'Maintenance Informatique',
    description: 'Entretien préventif et curatif de votre parc informatique.',
    icon: 'Settings',
    image: '/images/service-microsoudure.jpg',
    features: ['Nettoyage interne & externe', 'Optimisation & accélération', 'Sauvegarde de données', 'Antivirus & sécurité'],
  },
]

export class ServiceRepositoryImpl {
  async findAll(): Promise<Service[]> {
    return mockServices
  }

  async findById(id: string): Promise<Service | null> {
    return mockServices.find(s => s.id === id) || null
  }

  async findBySlug(slug: string): Promise<Service | null> {
    return mockServices.find(s => s.slug === slug) || null
  }
}