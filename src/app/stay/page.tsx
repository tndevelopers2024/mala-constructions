import type { Metadata } from 'next'
import StayClient from './StayClient'

export const metadata: Metadata = {
  title: 'At The Top — Stay by Mala\'s | Luxury Penthouse Chennai',
  description:
    'Experience luxury hospitality at At The Top by Mala Constructions. Premium penthouse stay 6 km from Chennai Central with private pool, smart home, and personalized dining.',
}

export default function Page() {
  return <StayClient />
}
