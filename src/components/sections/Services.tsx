'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import GoldRule from '@/components/ui/GoldRule'
import SectionNumber from '@/components/ui/SectionNumber'
import AnimatedHeading from '@/components/ui/AnimatedHeading'
import { fadeUp, staggerContainer } from '@/lib/animations'

const servicesData = [
  {
    name: 'Residential Masterpieces',
    desc: 'Designing and constructing dream homes with care and precision.',
  },
  {
    name: 'Commercial Excellence',
    desc: 'Modern offices, retail outlets, and industrial facilities.',
  },
  {
    name: 'Renovation & Transformation',
    desc: 'Breathing new life into existing spaces with innovative remodeling.',
  },
  {
    name: 'Infrastructure Development',
    desc: 'Roads, utilities, and community infrastructure projects.',
  },
  {
    name: '24\u00D77 Maintenance',
    desc: 'Round-the-clock maintenance for residential and commercial buildings.',
  },
]

interface ServicesProps {
  variant?: 'dark' | 'cream'
}

export default function Services({ variant = 'dark' }: ServicesProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const isDark = variant === 'dark'

  return (
    <section
      ref={ref}
      className="relative py-24 md:py-32 lg:py-40"
      style={{
        backgroundColor: isDark ? 'var(--color-obsidian)' : 'var(--color-cream)',
      }}
    >
      <div className="max-w-[1320px] mx-auto px-6 md:px-12 relative">
        <SectionNumber number="02" className="-top-8 -left-2 md:left-0" />

        <div className="relative z-10">
          <GoldRule className="mb-4" />
          <span
            className="block mb-4"
            style={{
              fontFamily: 'var(--font-dm-sans), sans-serif',
              fontSize: '11px',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--color-ash)',
            }}
          >
            What We Build
          </span>

          <AnimatedHeading
            text="Five Pillars of Construction Excellence"
            className="mb-12 md:mb-16"
            style={{
              fontSize: 'var(--text-hero)',
              color: isDark ? 'var(--color-white)' : 'var(--color-obsidian)',
            }}
          />

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-0"
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            {servicesData.map((service, i) => (
              <motion.div
                key={i}
                className="p-7 md:p-8 transition-colors duration-300"
                style={{
                  border: `0.5px solid ${isDark ? 'var(--color-graphite)' : 'rgba(44, 42, 40, 0.2)'}`,
                }}
                variants={fadeUp}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-gold)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = isDark ? 'var(--color-graphite)' : 'rgba(44, 42, 40, 0.2)'
                }}
              >
                {/* Gold rule at top */}
                <div
                  className="mb-5"
                  style={{ width: 24, height: 1, backgroundColor: 'var(--color-gold)' }}
                />
                <h3
                  className="mb-3"
                  style={{
                    fontFamily: 'var(--font-cormorant), serif',
                    fontSize: '22px',
                    fontWeight: 400,
                    color: isDark ? 'var(--color-white)' : 'var(--color-obsidian)',
                  }}
                >
                  {service.name}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-dm-sans), sans-serif',
                    fontSize: '14px',
                    lineHeight: 1.6,
                    color: 'var(--color-ash)',
                  }}
                >
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
