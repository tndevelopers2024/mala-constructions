import Hero from '@/components/sections/Hero'
import MarqueeStrip from '@/components/ui/MarqueeStrip'
import AboutTeaser from '@/components/sections/AboutTeaser'
import Services from '@/components/sections/Services'
import FeaturedProjects from '@/components/sections/FeaturedProjects'
import SapphireSpotlight from '@/components/sections/SapphireSpotlight'
import AtTheTop from '@/components/sections/AtTheTop'
import Vision from '@/components/sections/Vision'

export default function HomePage() {
  return (
    <>
      <Hero />
      <MarqueeStrip />
      <AboutTeaser />
      <Services variant="dark" />
      <FeaturedProjects />
      <SapphireSpotlight />
      <AtTheTop />
      <Vision />
    </>
  )
}
