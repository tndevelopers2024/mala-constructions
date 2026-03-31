'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { MapPin } from 'lucide-react'
import GoldRule from '@/components/ui/GoldRule'
import { fadeUp } from '@/lib/animations'

const SPEC_PILLS = [
  '1,084 – 1,154 sq ft',
  '3 BHK + 3 Toilet',
  'East Facing',
  'Vaasthu Compliant',
  '6-Passenger Lift',
]

export default function SapphireSpotlight() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      style={{
        backgroundColor: 'var(--color-ink)',
        display: 'grid',
        gridTemplateColumns: '1fr',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          minHeight: '600px',
        }}
      >
        {/* Left: Image */}
        <div style={{ position: 'relative', minHeight: '400px' }}>
          <Image
            src="https://picsum.photos/seed/malas-sapphire/1200/800"
            alt="Mala's Sapphire — premium 3BHK apartments in Kolathur, Chennai"
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 768px) 100vw, 60vw"
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to right, transparent 70%, var(--color-ink))',
              pointerEvents: 'none',
            }}
          />
        </div>

        {/* Right: Content */}
        <div
          style={{
            padding: 'clamp(2.5rem, 5vw, 3.75rem)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '1.25rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <GoldRule />
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '10px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--color-gold)',
              }}
            >
              Flagship Project · Available Now
            </span>
          </div>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(28px, 3.5vw, 48px)',
              fontWeight: 300,
              color: 'var(--color-white)',
              lineHeight: 1.1,
            }}
          >
            Mala's Signature Sapphire
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            transition={{ delay: 0.1 }}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '20px',
              fontWeight: 300,
              fontStyle: 'italic',
              color: 'var(--color-sand)',
            }}
          >
            6 Premium East-Facing 3BHK Residences
          </motion.p>

          {/* Location chip */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            transition={{ delay: 0.18 }}
            style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
          >
            <MapPin size={13} style={{ color: 'var(--color-gold)' }} />
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '13px',
                color: 'var(--color-ash)',
                letterSpacing: '0.04em',
              }}
            >
              Haridoss Nagar, Kolathur
            </span>
          </motion.div>

          {/* Spec pills */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            transition={{ delay: 0.26 }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}
          >
            {SPEC_PILLS.map((pill) => (
              <span
                key={pill}
                style={{
                  border: '0.5px solid var(--color-graphite)',
                  padding: '5px 12px',
                  fontFamily: 'var(--font-body)',
                  fontSize: '11px',
                  letterSpacing: '0.06em',
                  color: 'var(--color-ash)',
                }}
              >
                {pill}
              </span>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            transition={{ delay: 0.34 }}
          >
            <Link
              href="/projects/malas-sapphire"
              style={{
                display: 'inline-block',
                border: '1px solid var(--color-gold)',
                background: 'transparent',
                color: 'var(--color-gold)',
                padding: '14px 32px',
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
              Explore Sapphire →
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
