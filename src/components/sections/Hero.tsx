'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import AnimatedHeading from '@/components/ui/AnimatedHeading'
import { fadeUp, fadeIn, staggerContainer } from '@/lib/animations'

const stats = [
  { number: '100+', label: 'Residential Buildings' },
  { number: '50+', label: 'Villas Delivered' },
  { number: '25+', label: 'Commercial Outlets' },
  { number: '35', label: 'Years of Legacy' },
]

export default function Hero() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section className="relative w-full" style={{ height: '100svh', minHeight: '700px' }}>
      {/* Background Image */}
      <Image
        src="https://picsum.photos/seed/mala-hero/1920/1080"
        alt="Luxury construction by Mala Constructions, Chennai"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0" style={{ backgroundColor: 'rgba(14, 14, 14, 0.6)' }} />

      {/* Content */}
      <div ref={ref} className="relative z-10 flex flex-col justify-center items-center h-full px-6">
        <div className="max-w-3xl text-center">
          {/* Established label */}
          <motion.div
            className="flex items-center justify-center gap-3 mb-8"
            variants={fadeIn}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <div
              className="h-[1px]"
              style={{ width: 40, backgroundColor: 'var(--color-gold)' }}
            />
            <span
              style={{
                fontFamily: 'var(--font-dm-sans), sans-serif',
                fontSize: '11px',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--color-ash)',
              }}
            >
              Established Kolathur &middot; Chennai
            </span>
          </motion.div>

          {/* Headline */}
          <AnimatedHeading
            text="Transforming Spaces"
            as="h1"
            goldWord="Spaces"
            className="mb-4"
            style={{
              fontSize: 'var(--text-display)',
              lineHeight: 1.05,
              color: 'var(--color-white)',
            }}
          />

          {/* Sub-headline */}
          <motion.p
            className="mb-6"
            style={{
              fontFamily: 'var(--font-cormorant), serif',
              fontSize: 'var(--text-title)',
              fontWeight: 400,
              fontStyle: 'italic',
              color: 'var(--color-sand)',
            }}
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            Since 1999
          </motion.p>

          {/* Body */}
          <motion.p
            className="mx-auto mb-10 max-w-lg"
            style={{
              fontFamily: 'var(--font-dm-sans), sans-serif',
              fontSize: '16px',
              lineHeight: 1.75,
              color: 'var(--color-ash)',
            }}
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            35 years of delivering precision-crafted homes, villas, and commercial spaces across Chennai.
          </motion.p>

          {/* CTA Row */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <Link
              href="/projects"
              className="px-8 py-4 transition-all duration-300 text-center"
              style={{
                border: '1px solid var(--color-gold)',
                backgroundColor: 'transparent',
                fontFamily: 'var(--font-dm-sans), sans-serif',
                fontSize: '12px',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--color-gold)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-gold)'
                e.currentTarget.style.color = 'var(--color-obsidian)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent'
                e.currentTarget.style.color = 'var(--color-gold)'
              }}
            >
              View Our Work
            </Link>
            <Link
              href="/contact"
              className="flex items-center gap-2 px-6 py-4 transition-all duration-300 group"
              style={{
                fontFamily: 'var(--font-dm-sans), sans-serif',
                fontSize: '12px',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--color-sand)',
              }}
            >
              Enquire Now
              <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 border-t"
          style={{ borderColor: 'var(--color-graphite)', backgroundColor: 'rgba(14, 14, 14, 0.5)' }}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <div className="max-w-[1320px] mx-auto grid grid-cols-2 md:grid-cols-4">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                className="flex flex-col items-center py-6 px-4"
                style={{
                  borderRight: i < stats.length - 1 ? '1px solid var(--color-graphite)' : 'none',
                }}
                variants={fadeUp}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-cormorant), serif',
                    fontSize: '28px',
                    fontWeight: 600,
                    color: 'var(--color-gold)',
                  }}
                >
                  {stat.number}
                </span>
                <span
                  className="mt-1"
                  style={{
                    fontFamily: 'var(--font-dm-sans), sans-serif',
                    fontSize: '11px',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    color: 'var(--color-ash)',
                  }}
                >
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
