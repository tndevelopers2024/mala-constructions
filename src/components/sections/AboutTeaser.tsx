'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import GoldRule from '@/components/ui/GoldRule'
import SectionNumber from '@/components/ui/SectionNumber'
import AnimatedHeading from '@/components/ui/AnimatedHeading'
import { fadeUp } from '@/lib/animations'

export default function AboutTeaser() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      style={{
        backgroundColor: 'var(--color-cream)',
        position: 'relative',
        overflow: 'hidden',
      }}
      className="section-padding"
    >
      <SectionNumber number="01" light />

      <div className="max-content">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '4rem',
            alignItems: 'start',
          }}
        >
          {/* Left */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '1.5rem' }}>
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
                Our Story
              </span>
            </div>
            <AnimatedHeading
              text="Built on Integrity. Crafted with Precision."
              as="h2"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--text-hero)',
                fontWeight: 300,
                color: 'var(--color-ink)',
                lineHeight: 1.15,
              }}
            />
          </div>

          {/* Right */}
          <div style={{ position: 'relative', zIndex: 1 }}>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              transition={{ delay: 0.15 }}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '15px',
                color: 'var(--color-graphite)',
                lineHeight: 1.8,
                marginBottom: '1.25rem',
              }}
            >
              Founded in 1989 as a trusted electrical company, Mala expanded into construction in 1999. For over two decades, we have delivered more than 100 residential buildings, 50 villas, and 25 commercial outlets across Chennai.
            </motion.p>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              transition={{ delay: 0.28 }}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '15px',
                color: 'var(--color-graphite)',
                lineHeight: 1.8,
                marginBottom: '2rem',
              }}
            >
              Our approach is simple: we treat every project — regardless of scale — with the same commitment to quality, precision, and the client's vision.
            </motion.p>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              transition={{ delay: 0.38 }}
            >
              <Link
                href="/about"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '13px',
                  color: 'var(--color-gold)',
                  textDecoration: 'none',
                  letterSpacing: '0.04em',
                  borderBottom: '1px solid var(--color-gold)',
                  paddingBottom: '2px',
                  transition: 'opacity 0.25s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.7')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
              >
                Read our full story →
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
