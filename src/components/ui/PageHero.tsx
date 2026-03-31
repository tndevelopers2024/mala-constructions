'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import AnimatedHeading from '@/components/ui/AnimatedHeading'

interface PageHeroProps {
  headline: string
  breadcrumb?: { label: string; href: string }[]
  imageUrl?: string
  halfHeight?: boolean
}

export default function PageHero({
  headline,
  breadcrumb,
  imageUrl = 'https://picsum.photos/seed/page-hero-arch/1920/1080',
  halfHeight = true,
}: PageHeroProps) {
  return (
    <section
      style={{
        position: 'relative',
        height: halfHeight ? '55vh' : '100svh',
        display: 'flex',
        alignItems: 'flex-end',
        overflow: 'hidden',
        paddingTop: '72px',
      }}
    >
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <Image
          src={imageUrl}
          alt={headline}
          fill
          style={{ objectFit: 'cover' }}
          priority
          quality={85}
        />
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(14,14,14,0.68)' }} />
      </div>

      <div
        className="max-content"
        style={{
          position: 'relative',
          zIndex: 1,
          paddingBottom: '4rem',
          width: '100%',
        }}
      >
        {breadcrumb && (
          <motion.nav
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ marginBottom: '1.25rem', display: 'flex', gap: '8px', alignItems: 'center' }}
            aria-label="Breadcrumb"
          >
            {breadcrumb.map((crumb, i) => (
              <span key={crumb.href} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                {i > 0 && <span style={{ color: 'var(--color-graphite)' }}>/</span>}
                {i === breadcrumb.length - 1 ? (
                  <span
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '12px',
                      color: 'var(--color-ash)',
                      letterSpacing: '0.04em',
                    }}
                  >
                    {crumb.label}
                  </span>
                ) : (
                  <Link
                    href={crumb.href}
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '12px',
                      color: 'var(--color-ash)',
                      textDecoration: 'none',
                      letterSpacing: '0.04em',
                      transition: 'color 0.25s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-gold)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-ash)')}
                  >
                    {crumb.label}
                  </Link>
                )}
              </span>
            ))}
          </motion.nav>
        )}

        <AnimatedHeading
          text={headline}
          as="h1"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'var(--text-hero)',
            fontWeight: 300,
            color: 'var(--color-white)',
          }}
        />
      </div>
    </section>
  )
}
