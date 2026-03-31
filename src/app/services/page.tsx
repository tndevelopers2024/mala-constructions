import type { Metadata } from 'next'
import ServicesClient from './ServicesClient'

export const metadata: Metadata = {
  title: 'Our Services | Mala Constructions | Chennai',
  description:
    'Explore our construction services: Residential, Commercial, Renovation, Infrastructure, and 24/7 Maintenance across Chennai.',
}

export default function Page() {
  return <ServicesClient />
}
