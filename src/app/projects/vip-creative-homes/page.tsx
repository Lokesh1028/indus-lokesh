import type { Metadata } from 'next'
import CreativeHomesExperience from '@/components/projects/CreativeHomesExperience'

export const metadata: Metadata = {
  title: 'VIP Creative Homes | Premium Villas in Maheshwaram | VIP Homes',
  description:
    'Discover VIP Creative Homes, an upcoming premium villa community at Harshaguda, Maheshwaram, South Hyderabad, envisioned around contemporary architecture, open spaces and thoughtful family living.',
  alternates: {
    canonical: 'https://viphomes.co.in/projects/vip-creative-homes',
  },
  openGraph: {
    title: 'VIP Creative Homes | A New Expression of Villa Living',
    description:
      'Harshaguda · Maheshwaram · South Hyderabad. An upcoming VIP Homes development.',
    url: 'https://viphomes.co.in/projects/vip-creative-homes',
    type: 'website',
    images: [
      {
        url: 'https://viphomes.co.in/images/vip-creative-homes/villa-concept.webp',
        alt: 'VIP Creative Homes — conceptual villa exterior',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VIP Creative Homes',
    images: [
      'https://viphomes.co.in/images/vip-creative-homes/villa-concept.webp',
    ],
  },
}

export default function CreativeHomesPage() {
  return <CreativeHomesExperience />
}
