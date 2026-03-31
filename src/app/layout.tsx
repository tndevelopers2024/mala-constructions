import type { Metadata } from 'next'
import '@/styles/globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import CustomCursor from '@/components/ui/CustomCursor'

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
    title: 'Mala Constructions | Transforming Spaces Since 1999',
    description:
      "Chennai's trusted construction company since 1999. Premium homes, villas, and commercial spaces.",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&family=DM+Sans:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <CustomCursor />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
