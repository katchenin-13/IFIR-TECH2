// features/faq/data/repositories/faq.repository.impl.ts
import { FAQ } from '../../domain/entities/faq.entity'

export const mockFAQs: FAQ[] = [
  { id: '1', question: 'Quelles sont les conditions pour rejoindre une formation ?', answer: 'Aucun diplôme spécifique n\'est requis. Pour la formation en réparation, avoir des notions de base en informatique est un plus. Pour la formation web, un ordinateur et une connexion internet sont nécessaires. La motivation est votre seul vrai prérequis.', category: 'general', order: 1 },
  { id: '2', question: 'La formation est-elle certifiante ?', answer: 'Oui. À l\'issue de chaque formation, vous recevez une attestation de formation professionnelle délivrée par IFIR TECH. Ce certificat est reconnu par nos partenaires employeurs et vous aide à valoriser votre profil sur le marché.', category: 'formation', order: 2 },
  { id: '3', question: 'Quel matériel est fourni pendant la formation ?', answer: 'Tout le matériel est fourni par IFIR TECH : stations de soudure, microscopes, multimètres, composants électroniques, ordinateurs. Vous n\'avez rien à acheter en dehors de vos frais de formation.', category: 'formation', order: 3 },
  { id: '4', question: 'Puis-je payer la formation en plusieurs fois ?', answer: 'Oui, nous proposons des facilités de paiement adaptées à votre situation. Appelez-nous directement au 07 48 22 28 41 pour convenir d\'un arrangement qui vous convient.', category: 'payment', order: 4 },
  { id: '5', question: 'Est-ce qu\'IFIR Tech aide à trouver du travail après la formation ?', answer: 'Absolument. Nous accompagnons chaque apprenant dans son projet professionnel : stage en atelier, mise en relation avec des partenaires recruteurs, aide à la création d\'entreprise. Votre réussite est notre meilleure publicité.', category: 'career', order: 5 },
  { id: '6', question: 'Les formations sont-elles pratiques ou surtout théoriques ?', answer: '100% pratiques. La théorie existe, mais elle est toujours enseignée à travers des cas concrets. Dès le premier jour, vous avez les mains dans les appareils. C\'est notre philosophie depuis le premier jour.', category: 'formation', order: 6 },
]

export class FAQRepositoryImpl {
  async findAll(): Promise<FAQ[]> {
    return mockFAQs
  }

  async findByCategory(category: FAQ['category']): Promise<FAQ[]> {
    return mockFAQs.filter(faq => faq.category === category)
  }
}