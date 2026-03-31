'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import AnimatedHeading from '@/components/ui/AnimatedHeading'
import { ArrowRight } from 'lucide-react'
import { useState } from 'react'
import EnquiryModal from '@/components/ui/EnquiryModal'
import Link from 'next/link'

const STATS = [
  { number: '100+', label: 'Residential Buildings' },
  { number: '50+', label: 'Villas Delivered' },
  { number: '25+', label: 'Commercial Outlets' },
  { number: '35', label: 'Years of Legacy' },
]

export default function Hero() {
  const [enquiryOpen, setEnquiryOpen] = useState(false)

  return (
    <>
      <section
        style={{
          position: 'relative',
          height: '100svh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        {/* Background Image */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <Image
            src="https://picsum.photos/seed/hero-architecture/1920/1080"
            alt="Mala Constructions — luxury architecture in Chennai"
            fill
            style={{ objectFit: 'cover' }}
            priority
            quality={90}
          />
          {/* Dark overlay */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundColor: 'rgba(14,14,14,0.62)',
            }}
          />
        </div>

        {/* Content */}
        <div
          className="max-content"
          style={{
            position: 'relative',
            zIndex: 1,
            textAlign: 'center',
            paddingTop: '72px',
            width: '100%',
          }}
        >
          {/* Established label */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px',
              marginBottom: '2rem',
            }}
          >
            <div style={{ width: '40px', height: '1px', backgroundColor: 'var(--color-gold)' }} />
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '11px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--color-sand)',
                fontWeight: 400,
              }}
            >
              Established Kolathur · Chennai
            </span>
          </motion.div>

          {/* Main Headline */}
          <div style={{ marginBottom: '1.25rem' }}>
            <AnimatedHeading
              text="Transforming Spaces"
              as="h1"
              className="text-display"
              goldWord="Spaces"
              delay={0.4}
              style={{ color: 'var(--color-white)' }}
            />
          </div>

          {/* Since 1999 */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontSize: 'var(--text-title)',
              color: 'var(--color-sand)',
              marginBottom: '1.5rem',
            }}
          >
            Since 1999
          </motion.p>

          {/* Body */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.0 }}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '16px',
              color: 'var(--color-ash)',
              maxWidth: '520px',
              margin: '0 auto 2.5rem',
              lineHeight: 1.75,
            }}
          >
            35 years of delivering precision-crafted homes, villas, and commercial spaces across Chennai.
          </motion.p>

          {/* CTA Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.15 }}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}
          >
            <Link
              href="/projects"
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
                transition: 'background 0.3s ease, color 0.3s ease',
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
              View Our Work
            </Link>
            <button
              onClick={() => setEnquiryOpen(true)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'none',
                border: 'none',
                color: 'var(--color-sand)',
                fontFamily: 'var(--font-body)',
                fontSize: '12px',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                cursor: 'none',
                transition: 'color 0.25s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--color-gold)'
                const span = e.currentTarget.querySelector('span')
                if (span) span.style.borderBottomColor = 'var(--color-gold)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--color-sand)'
                const span = e.currentTarget.querySelector('span')
                if (span) span.style.borderBottomColor = 'transparent'
              }}
            >
              <span style={{ borderBottom: '1px solid transparent', transition: 'border-color 0.25s' }}>
                Enquire Now
              </span>
              <ArrowRight size={14} />
            </button>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.4 }}
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 1,
            backgroundColor: 'rgba(14,14,14,0.85)',
            backdropFilter: 'blur(8px)',
            borderTop: '1px solid var(--color-graphite)',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <div
            className="max-content"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              width: '100%',
            }}
          >
            {STATS.map((stat, i) => (
              <div
                key={stat.label}
                style={{
                  padding: '1.25rem 1.5rem',
                  textAlign: 'center',
                  borderLeft: i > 0 ? '1px solid var(--color-graphite)' : 'none',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '28px',
                    fontWeight: 600,
                    color: 'var(--color-gold)',
                    lineHeight: 1,
                    marginBottom: '4px',
                  }}
                >
                  {stat.number}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '11px',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    color: 'var(--color-ash)',
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <EnquiryModal open={enquiryOpen} onClose={() => setEnquiryOpen(false)} />
    </>
  )
}
