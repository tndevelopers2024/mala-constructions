'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import SectionNumber from '@/components/ui/SectionNumber'
import { fadeUp } from '@/lib/animations'

const VALUE_PILLS = ['Quality Craftsmanship', 'Client Satisfaction', 'Sustainable Practices']

export default function Vision() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      style={{
        backgroundColor: 'var(--color-obsidian)',
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center',
      }}
      className="section-padding"
    >
      <SectionNumber number="05" />

      <div
        className="max-content"
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '740px',
          margin: '0 auto',
        }}
      >
        {/* Decorative gold line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{
            width: '60px',
            height: '1px',
            backgroundColor: 'var(--color-gold)',
            margin: '0 auto 2.5rem',
            transformOrigin: 'left',
          }}
        />

        <motion.blockquote
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(24px, 3.5vw, 42px)',
            fontWeight: 300,
            fontStyle: 'italic',
            color: 'var(--color-white)',
            lineHeight: 1.4,
            letterSpacing: '-0.01em',
            marginBottom: '2rem',
          }}
        >
          "We don't just build buildings — we build lasting relationships with our clients, contributing to their vision and growth."
        </motion.blockquote>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{ delay: 0.15 }}
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '12px',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--color-ash)',
            marginBottom: '2.5rem',
          }}
        >
          — Mala Constructions, Est. 1999
        </motion.p>

        {/* Value pills */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{ delay: 0.25 }}
          style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '12px' }}
        >
          {VALUE_PILLS.map((pill) => (
            <span
              key={pill}
              style={{
                border: '0.5px solid var(--color-graphite)',
                padding: '8px 20px',
                fontFamily: 'var(--font-body)',
                fontSize: '12px',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--color-sand)',
              }}
            >
              {pill}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
