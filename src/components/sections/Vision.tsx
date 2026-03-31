'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import SectionNumber from '@/components/ui/SectionNumber'
import { fadeUp, staggerContainer } from '@/lib/animations'

const valuePills = ['Quality Craftsmanship', 'Client Satisfaction', 'Sustainable Practices']

export default function Vision() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      className="relative py-24 md:py-32 lg:py-40"
      style={{ backgroundColor: 'var(--color-obsidian)' }}
    >
      <div className="max-w-2xl mx-auto px-6 md:px-12 text-center relative">
        <SectionNumber number="05" className="-top-8 left-1/2 -translate-x-1/2" />

        <motion.div
          className="relative z-10"
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Gold rule centered */}
          <div
            className="mx-auto mb-10"
            style={{ width: 60, height: 1, backgroundColor: 'var(--color-gold)' }}
          />

          <blockquote
            className="mb-8"
            style={{
              fontFamily: 'var(--font-cormorant), serif',
              fontSize: 'var(--text-title)',
              fontWeight: 300,
              fontStyle: 'italic',
              color: 'var(--color-white)',
              lineHeight: 1.5,
            }}
          >
            &ldquo;We don&apos;t just build buildings — we build lasting relationships
            with our clients, contributing to their vision and growth.&rdquo;
          </blockquote>

          <p
            className="mb-10"
            style={{
              fontFamily: 'var(--font-dm-sans), sans-serif',
              fontSize: '12px',
              letterSpacing: '0.06em',
              color: 'var(--color-ash)',
            }}
          >
            — Mala Constructions, Est. 1999
          </p>

          <motion.div
            className="flex flex-wrap items-center justify-center gap-3"
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            {valuePills.map((pill) => (
              <motion.span
                key={pill}
                className="px-4 py-2"
                style={{
                  border: '0.5px solid var(--color-graphite)',
                  fontFamily: 'var(--font-dm-sans), sans-serif',
                  fontSize: '12px',
                  letterSpacing: '0.04em',
                  color: 'var(--color-ash)',
                }}
                variants={fadeUp}
              >
                {pill}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
