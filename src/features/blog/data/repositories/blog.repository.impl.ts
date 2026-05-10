// features/blog/data/repositories/blog.repository.impl.ts
import { BlogPost } from '../../domain/entities/blog-post.entity';

export const mockBlogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'les-secrets-de-la-micro-soudure',
    title: 'Les secrets de la micro-soudure moderne',
    excerpt: 'Découvrez les techniques avancées pour réparer les cartes mères de smartphones de dernière génération sans se tromper.',
    content: `La micro-soudure est un art qui demande précision et patience. Dans cet article, nous explorons les outils indispensables et les gestes qui sauvent lors de la réparation de composants minuscules.

## Les outils indispensables
Pour réussir une micro-soudure professionnelle, il vous faut :
- Une station de soudage à air chaud de qualité
- Un microscope binoculaire haute définition
- Des pannes de fer extrêmement fines

## La technique du rebillage
Le rebillage est l'une des tâches les plus complexes. Il s'agit de replacer les billes d'étain sous une puce BGA. Chez IFIR TECH, nos étudiants maîtrisent cette technique en moins de deux semaines grâce à un entraînement intensif sur du matériel réel.

## Conseils de pro
N'utilisez jamais de flux de mauvaise qualité. Un bon flux, c'est 80% d'une bonne soudure. Et gardez toujours votre panne d'étain propre !`,
    image: '/images/service-microsoudure.jpg',
    author: {
      name: 'Soro Katchenin Moïse',
      role: 'Directeur Technique',
      avatar: '/images/hero-technician.jpg'
    },
    date: '15 Mai 2024',
    category: 'Tutoriel',
    readTime: '8 min'
  },
  {
    id: '2',
    slug: 'entreprendre-dans-la-reparation',
    title: 'Comment lancer son propre atelier de réparation',
    excerpt: 'Un guide complet pour les jeunes entrepreneurs qui souhaitent se lancer dans le business de la tech en Côte d\'Ivoire.',
    content: `Le marché de la réparation est en pleine explosion en Côte d'Ivoire. Voici les étapes clés pour réussir votre lancement.

## 1. Choisir le bon emplacement
La visibilité est la clé. Un local près d'un marché ou d'une université est idéal pour attirer une clientèle régulière. Pensez aussi à être visible sur Google Maps dès le premier jour.

## 2. Gérer son stock de pièces
La qualité des écrans et des batteries que vous utilisez fera votre réputation. Ne faites jamais de compromis là-dessus — un client satisfait en amène dix autres.

## 3. Construire sa réputation en ligne
Créez une page Facebook professionnelle, publiez des vidéos de réparations (avec accord du client), et répondez à chaque avis. La confiance, ça se bâtit avant même que le client franchisse votre porte.`,
    image: '/images/hero-technician.jpg',
    author: {
      name: 'Soro Katchenin Moïse',
      role: 'Directeur Technique',
      avatar: '/images/hero-technician.jpg'
    },
    date: '10 Mai 2024',
    category: 'Entrepreneuriat',
    readTime: '6 min'
  },
  {
    id: '3',
    slug: 'nouveau-centre-korhogo',
    title: 'Inauguration de notre nouveau centre à Korhogo',
    excerpt: "IFIR TECH s'agrandit avec des équipements de pointe pour une expérience de formation encore plus immersive et professionnelle.",
    content: `Nous sommes fiers d'annoncer l'ouverture de nos nouveaux locaux à Korhogo. Plus d'espace, plus de matériel, et toujours la même passion pour former les techniciens de demain.

Nos nouveaux ateliers sont équipés des dernières technologies de diagnostic et de réparation électronique : stations BGA professionnelles, microscopes numériques 4K, alimentations programmables et bien plus encore.

Ce développement est rendu possible grâce à la confiance de nos étudiants et partenaires. Merci à vous tous !

Venez nous rendre visite pour une visite guidée du centre — les inscriptions pour la prochaine session sont ouvertes.`,
    image: '/images/service-phone.jpg',
    author: {
      name: 'Equipe IFIR',
      role: 'Communication',
      avatar: '/images/hero-technician.jpg'
    },
    date: '05 Mai 2024',
    category: 'Actualités',
    readTime: '4 min'
  }
];

export class BlogRepositoryImpl {
  async findAll(): Promise<BlogPost[]> {
    return mockBlogPosts;
  }

  async findBySlug(slug: string): Promise<BlogPost | undefined> {
    return mockBlogPosts.find(post => post.slug === slug);
  }
}
