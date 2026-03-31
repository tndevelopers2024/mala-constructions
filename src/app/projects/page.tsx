import type { Metadata } from 'next'
import ProjectsClient from './ProjectsClient'

export const metadata: Metadata = {
  title: 'Our Projects | Mala Constructions | Chennai',
  description:
    'Explore our portfolio of 100+ residential buildings, 50+ villas, and 25+ commercial projects across Chennai.',
}

export default function Page() {
  return <ProjectsClient />
}
