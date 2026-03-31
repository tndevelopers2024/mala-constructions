import type { Metadata } from 'next'
import ContactClient from './ContactClient'

export const metadata: Metadata = {
  title: 'Contact Us | Mala Constructions | Chennai',
  description:
    'Get in touch with Mala Constructions. Visit us at Kolathur, Chennai or call 9840264993 for construction enquiries.',
}

export default function Page() {
  return <ContactClient />
}
