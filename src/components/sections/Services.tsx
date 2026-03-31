'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import GoldRule from '@/components/ui/GoldRule'
import SectionNumber from '@/components/ui/SectionNumber'
import AnimatedHeading from '@/components/ui/AnimatedHeading'
import { services } from '@/data/services'

export default function Services({ light = false }: { light?: boolean }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const bg = light ? 'var(--color-cream)' : 'var(--color-obsidian)'
  const textColor = light ? 'var(--color-ink)' : 'var(--color-white)'
  const descColor = light ? 'var(--color-graphite)' : 'var(--color-ash)'

  return (
    <section
      ref={ref}
      style={{ backgroundColor: bg, position: 'relative', overflow: 'hidden' }}
      className="section-padding"
    >
      <SectionNumber number="02" light={light} />

      <div className="max-content">
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '1rem' }}>
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
            What We Build
          </span>
        </div>

        <div style={{ marginBottom: '3rem' }}>
          <AnimatedHeading
            text="Five Pillars of Construction Excellence"
            as="h2"
            style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-hero)', fontWeight: 300, color: textColor }}
          />
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1px',
            backgroundColor: 'var(--color-graphite)',
          }}
        >
          {services.map((service, i) => (
            <ServiceCard
              key={service.id}
              service={service}
              inView={inView}
              delay={i * 0.1}
              textColor={textColor}
              descColor={descColor}
              bg={bg}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({
  service,
  inView,
  delay,
  textColor,
  descColor,
  bg,
}: {
  service: (typeof services)[0]
  inView: boolean
  delay: number
  textColor: string
  descColor: string
  bg: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      style={{
        backgroundColor: bg,
        padding: '32px 28px',
        borderTop: 'none',
        transition: 'border-color 0.25s',
        position: 'relative',
        cursor: 'default',
      }}
      onMouseEnter={(e) => {
        ;(e.currentTarget as HTMLElement).style.outline = '1px solid var(--color-gold)'
        ;(e.currentTarget as HTMLElement).style.zIndex = '1'
      }}
      onMouseLeave={(e) => {
        ;(e.currentTarget as HTMLElement).style.outline = 'none'
        ;(e.currentTarget as HTMLElement).style.zIndex = '0'
      }}
    >
      {/* Gold top rule */}
      <div
        style={{
          width: '24px',
          height: '1px',
          backgroundColor: 'var(--color-gold)',
          marginBottom: '1.25rem',
        }}
      />
      <h3
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '22px',
          fontWeight: 400,
          color: textColor,
          marginBottom: '0.75rem',
          lineHeight: 1.2,
        }}
      >
        {service.name}
      </h3>
      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '14px',
          color: descColor,
          lineHeight: 1.65,
        }}
      >
        {service.desc}
      </p>
    </motion.div>
  )
}
