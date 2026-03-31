import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import '@/styles/globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Mala Constructions | Transforming Spaces Since 1999 | Chennai',
  description:
    "Chennai's trusted construction company since 1999. Over 100 residential buildings, 50+ villas, and 25+ commercial projects delivered across Chennai.",
  keywords:
    'construction company Chennai, villa builders Chennai, apartment builders Kolathur, Mala Constructions',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'Mala Constructions',
    title: 'Mala Constructions | Transforming Spaces Since 1999 | Chennai',
    description:
      "Chennai's trusted construction company since 1999. Over 100 residential buildings, 50+ villas, and 25+ commercial projects delivered across Chennai.",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
