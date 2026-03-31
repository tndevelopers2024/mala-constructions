import type { Metadata } from 'next'
import AboutPage from './AboutClient'

export const metadata: Metadata = {
  title: 'About Us | Mala Constructions | 35 Years of Building Chennai',
  description:
    'Learn about Mala Constructions — founded in 1989, building Chennai since 1999. Over 100 residential buildings, 50+ villas, and 25+ commercial projects.',
}

export default function Page() {
  return <AboutPage />
}
