// features/services/data/repositories/service.repository.impl.ts
import { Service, ServiceCategory } from '../../domain/entities/service.entity'

export const mockServices: Service[] = [
  {
    id: '1',
    slug: 'reparation-telephone',
    title: 'Réparation Téléphone',
    description: 'Réparation de toutes marques de téléphones',
    icon: 'Smartphone',
    image: '/images/service-phone.jpg',
    features: ['Toutes marques', 'Changement écran', 'Changement batterie', 'Réparation carte mère', 'Déblocage'],
  },
  {
    id: '2',
    slug: 'reparation-ordinateur',
    title: 'Réparation Ordinateur',
    description: 'Réparation PC fixes et portables',
    icon: 'Laptop',
    image: '/images/service-computer.jpg',
    features: ['Toutes marques', 'Changement composants', 'Réparation carte mère', 'Maintenance', 'Optimisation'],
  },
  {
    id: '3',
    slug: 'micro-soudure',
    title: 'Micro-soudure',
    description: 'Réparation de carte mère de tout type d\'appareil',
    icon: 'Microscope',
    image: '/images/service-microsoudure.jpg',
    features: ['Réparation niveau composant', 'Reballing processeur', 'Changement connecteurs', 'Réparation pistes'],
  },
  {
    id: '4',
    slug: 'deblocage',
    title: 'Déblocage',
    description: 'Déblocage de tous types de verrous',
    icon: 'Unlock',
    image: '/images/service-unlock.jpg',
    features: ['FRP Samsung', 'iCloud/iPad', 'Mot de passe', 'Pattern', 'Bootloader'],
  },
  {
    id: '5',
    slug: 'installation-windows',
    title: 'Installation Windows',
    description: 'Installation et configuration de Windows',
    icon: 'Monitor',
    image: '/images/service-windows.jpg',
    features: ['Windows 10/11', 'Drivers', 'Logiciels', 'Optimisation'],
  },
  {
    id: '6',
    slug: 'maintenance-informatique',
    title: 'Maintenance informatique',
    description: 'Maintenance préventive et curative',
    icon: 'Settings',
    image: '/images/service-maintenance.jpg',
    features: ['Nettoyage', 'Optimisation', 'Sauvegarde', 'Sécurité'],
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