import type { Metadata } from 'next'
import Image from 'next/image'
import PageHero from '@/components/ui/PageHero'
import GoldRule from '@/components/ui/GoldRule'
import AnimatedHeading from '@/components/ui/AnimatedHeading'
import { services } from '@/data/services'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Services | Mala Constructions',
  description:
    'From residential villas to commercial spaces and 24/7 maintenance — explore the full range of construction services offered by Mala Constructions, Chennai.',
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        headline="What We Build"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
        ]}
        imageUrl="https://picsum.photos/seed/services-hero/1920/1080"
      />

      {services.map((service, i) => {
        const isEven = i % 2 === 0
        return (
          <section
            key={service.id}
            style={{
              backgroundColor: isEven ? 'var(--color-obsidian)' : 'var(--color-ink)',
            }}
            className="section-padding"
          >
            <div className="max-content">
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                  gap: '4rem',
                  alignItems: 'center',
                  direction: isEven ? 'ltr' : 'rtl',
                }}
              >
                {/* Image */}
                <div style={{ position: 'relative', aspectRatio: '4/3', direction: 'ltr' }}>
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                {/* Content */}
                <div style={{ direction: 'ltr' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '1.25rem' }}>
                    <GoldRule />
                    <span
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '11px',
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                        color: 'var(--color-ash)',
                      }}
                    >
                      0{i + 1}
                    </span>
                  </div>

                  <AnimatedHeading
                    text={service.name}
                    as="h2"
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(28px, 3.5vw, 46px)',
                      fontWeight: 300,
                      color: 'var(--color-white)',
                      marginBottom: '1rem',
                    }}
                  />

                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '15px',
                      color: 'var(--color-ash)',
                      lineHeight: 1.8,
                      marginBottom: '1.5rem',
                    }}
                  >
                    {service.desc}
                  </p>

                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {service.deliverables.map((d) => (
                      <li
                        key={d}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '10px',
                          fontFamily: 'var(--font-body)',
                          fontSize: '14px',
                          color: 'var(--color-ash)',
                          lineHeight: 1.6,
                        }}
                      >
                        <span
                          style={{
                            display: 'inline-block',
                            width: '4px',
                            height: '4px',
                            borderRadius: '50%',
                            backgroundColor: 'var(--color-gold)',
                            marginTop: '8px',
                            flexShrink: 0,
                          }}
                        />
                        {d}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    style={{
                      display: 'inline-block',
                      border: '1px solid var(--color-gold)',
                      background: 'transparent',
                      color: 'var(--color-gold)',
                      padding: '12px 28px',
                      fontFamily: 'var(--font-body)',
                      fontSize: '12px',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      textDecoration: 'none',
                      transition: 'background 0.3s, color 0.3s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'var(--color-gold)'
                      e.currentTarget.style.color = 'var(--color-obsidian)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'transparent'
                      e.currentTarget.style.color = 'var(--color-gold)'
                    }}
                  >
                    Discuss This Service →
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )
      })}
    </>
  )
}
