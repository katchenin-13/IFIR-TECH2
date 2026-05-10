// features/faq/data/repositories/faq.repository.impl.ts
import { FAQ } from '../../domain/entities/faq.entity'

export const mockFAQs: FAQ[] = [
  { id: '1', question: 'Quelles sont les prérequis pour suivre une formation ?', answer: 'Pour la formation en réparation, il est recommandé d\'avoir des connaissances de base en informatique. Pour la formation web, un ordinateur et une connexion internet sont nécessaires. Aucun diplôme spécifique n\'est requis.', category: 'general', order: 1 },
  { id: '2', question: 'La formation est-elle certifiante ?', answer: 'Oui, à l\'issue de chaque formation, vous recevez une attestation de formation professionnelle reconnue par IFIR TECH.', category: 'formation', order: 2 },
  { id: '3', question: 'Quel est le matériel fourni pendant la formation ?', answer: 'Tout le matériel nécessaire est fourni : stations de soudure, microscopes, multimètres, composants électroniques, ordinateurs, etc.', category: 'formation', order: 3 },
  { id: '4', question: 'Puis-je payer en plusieurs fois ?', answer: 'Oui, nous proposons des facilités de paiement. Contactez-nous pour plus d\'informations.', category: 'payment', order: 4 },
  { id: '5', question: 'Y a-t-il une aide pour trouver du travail après la formation ?', answer: 'Nous accompagnons nos étudiants dans leur insertion professionnelle : stage, création d\'entreprise, mise en relation avec des partenaires.', category: 'career', order: 5 },
  { id: '6', question: 'Les formations sont-elles pratiques ou théoriques ?', answer: 'Nos formations sont 100% pratiques avec une approche par projet. La théorie est abordée à travers des cas concrets.', category: 'formation', order: 6 },
]

export class FAQRepositoryImpl {
  async findAll(): Promise<FAQ[]> {
    return mockFAQs
  }

  async findByCategory(category: FAQ['category']): Promise<FAQ[]> {
    return mockFAQs.filter(faq => faq.category === category)
  }
}