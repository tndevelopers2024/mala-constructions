import type { Metadata } from 'next'
import Image from 'next/image'
import PageHero from '@/components/ui/PageHero'
import Services from '@/components/sections/Services'
import GoldRule from '@/components/ui/GoldRule'
import AnimatedHeading from '@/components/ui/AnimatedHeading'
import Vision from '@/components/sections/Vision'

export const metadata: Metadata = {
  title: 'About | Mala Constructions',
  description: 'Learn about Mala Constructions — 35 years of transforming spaces in Chennai since 1989.',
}

const TIMELINE = [
  { year: '1989', event: 'Founded as a trusted electrical contracting company in Kolathur, Chennai' },
  { year: '1999', event: 'Expanded into the construction industry, building our first residential projects' },
  { year: '2010', event: 'Completed our first landmark apartment project, establishing our reputation' },
  { year: '2020', event: 'Crossed 100+ completed residential buildings across Chennai' },
  { year: '2024', event: "Launched Mala's Sapphire — our flagship boutique apartment development" },
]

const PARAGRAPHS = [
  'Founded in 1989 as a trusted electrical company, Mala expanded into construction in 1999. For over two decades, we have delivered more than 100 residential buildings, 50 villas, and 25 commercial outlets across Chennai.',
  "Our approach is simple: we treat every project — regardless of scale — with the same commitment to quality, precision, and the client's vision.",
  'Based in Kolathur, Chennai, our team of dedicated professionals brings decades of combined experience to every build. From the foundation to the finishing touches, we maintain meticulous standards at every stage.',
  'Our goal is not merely to construct buildings, but to create spaces where families thrive, businesses prosper, and communities grow stronger.',
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        headline="35 Years of Transforming Chennai"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' },
        ]}
        imageUrl="https://picsum.photos/seed/about-hero-arch/1920/1080"
      />

      <section style={{ backgroundColor: 'var(--color-obsidian)' }} className="section-padding">
        <div className="max-content">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'start', marginBottom: '5rem' }}>
            <div style={{ position: 'relative', aspectRatio: '3/4' }}>
              <Image
                src="https://picsum.photos/seed/about-construction/800/1067"
                alt="Mala Constructions — 35 years of craftsmanship in Chennai"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '1.5rem' }}>
                <GoldRule />
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-ash)' }}>
                  Our Foundation
                </span>
              </div>
              <AnimatedHeading
                text="From Electrical Roots to Construction Excellence"
                as="h2"
                style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 3.5vw, 46px)', fontWeight: 300, color: 'var(--color-white)', marginBottom: '1.5rem' }}
              />
              {PARAGRAPHS.map((para, i) => (
                <p key={i} style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: 'rgba(250,250,248,0.75)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                  {para}
                </p>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div style={{ maxWidth: '680px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '2.5rem' }}>
              <GoldRule />
              <span style={{ fontFamily: 'var(--font-body)', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-ash)' }}>
                Our Journey
              </span>
            </div>
            <div style={{ position: 'relative', paddingLeft: '2rem' }}>
              <div style={{ position: 'absolute', left: 0, top: '8px', bottom: '8px', width: '1px', backgroundColor: 'var(--color-graphite)' }} />
              {TIMELINE.map((item, i) => (
                <div key={item.year} style={{ position: 'relative', paddingBottom: i < TIMELINE.length - 1 ? '2.5rem' : 0 }}>
                  <div style={{ position: 'absolute', left: '-2.4rem', top: '6px', width: '10px', height: '10px', borderRadius: '50%', backgroundColor: 'var(--color-gold)' }} />
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: 400, color: 'var(--color-gold)', display: 'block', marginBottom: '4px' }}>
                    {item.year}
                  </span>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--color-ash)', lineHeight: 1.6 }}>
                    {item.event}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Services light />
      <Vision />
    </>
  )
}
