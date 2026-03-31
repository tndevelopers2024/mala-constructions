import type { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import MarqueeStrip from '@/components/ui/MarqueeStrip'
import AboutTeaser from '@/components/sections/AboutTeaser'
import Services from '@/components/sections/Services'
import FeaturedProjects from '@/components/sections/FeaturedProjects'
import SapphireSpotlight from '@/components/sections/SapphireSpotlight'
import AtTheTop from '@/components/sections/AtTheTop'
import Vision from '@/components/sections/Vision'

export const metadata: Metadata = {
  title: 'Mala Constructions | Transforming Spaces Since 1999 | Chennai',
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <MarqueeStrip />
      <AboutTeaser />
      <MarqueeStrip />
      <Services />
      <MarqueeStrip />
      <FeaturedProjects />
      <SapphireSpotlight />
      <AtTheTop />
      <Vision />
    </>
  )
}
