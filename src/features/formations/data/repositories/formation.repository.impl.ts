// features/formations/data/repositories/formation.repository.impl.ts
import { Formation } from '../../domain/entities/formation.entity'
import { FormationMapper } from '../mappers/formation.mapper'
import { FormationDTO } from '../dto/formation.dto'

const mockFormations: FormationDTO[] = [
  {
    id: '1',
    title: 'Développement Web Full Stack',
    slug: 'developpement-web-full-stack',
    description: 'Maîtrisez le développement web de A à Z.',
    longDescription: 'Une formation complète couvrant HTML, CSS, JavaScript, React, Node.js et les bases de données.',
    image: '/images/formations/web-fullstack.jpg',
    duration: '6 mois',
    price: '2500€',
    modules: [
      { id: 'm1', title: 'HTML & CSS', description: 'Les bases du web', duration: '2 semaines', topics: ['HTML5', 'CSS3', 'Flexbox', 'Grid'], order: 1 },
      { id: 'm2', title: 'JavaScript', description: 'Programmation côté client', duration: '4 semaines', topics: ['ES6+', 'DOM', 'Fetch API'], order: 2 },
      { id: 'm3', title: 'React', description: 'Framework frontend', duration: '4 semaines', topics: ['Composants', 'Hooks', 'Context'], order: 3 },
    ],
    prerequisites: ['Notions de base en informatique'],
    objectives: ['Créer des applications web complètes', 'Maîtriser React et Node.js'],
    certification: true,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
  },
  {
    id: '2',
    title: 'Data Science & IA',
    slug: 'data-science-ia',
    description: 'Plongez dans le monde de la data et de l\'intelligence artificielle.',
    longDescription: 'Formation intensive sur Python, Machine Learning, Deep Learning et les outils data modernes.',
    image: '/images/formations/data-science.jpg',
    duration: '4 mois',
    price: '3000€',
    modules: [
      { id: 'm1', title: 'Python pour la Data', description: 'Bases de Python et librairies data', duration: '3 semaines', topics: ['Python', 'NumPy', 'Pandas'], order: 1 },
      { id: 'm2', title: 'Machine Learning', description: 'Algorithmes et modèles', duration: '5 semaines', topics: ['Scikit-learn', 'Régression', 'Classification'], order: 2 },
    ],
    prerequisites: ['Mathématiques niveau bac', 'Notions de programmation'],
    objectives: ['Construire des modèles ML', 'Analyser et visualiser des données'],
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
