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
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      className="relative py-24 md:py-32 lg:py-40"
      style={{ backgroundColor: 'var(--color-cream)' }}
    >
      <div className="max-w-[1320px] mx-auto px-6 md:px-12 relative">
        <SectionNumber number="01" className="-top-8 -left-2 md:left-0" />

        <div className="relative z-10">
          <GoldRule className="mb-4" />
          <span
            className="block mb-8"
            style={{
              fontFamily: 'var(--font-dm-sans), sans-serif',
              fontSize: '11px',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--color-ash)',
            }}
          >
            Our Story
          </span>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left — Headline */}
            <AnimatedHeading
              text="Built on Integrity. Crafted with Precision."
              className="leading-[1.15]"
              style={{
                fontSize: 'var(--text-hero)',
                color: 'var(--color-obsidian)',
              }}
            />

            {/* Right — Copy */}
            <motion.div
              className="space-y-5"
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
            >
              <p
                style={{
                  fontFamily: 'var(--font-dm-sans), sans-serif',
                  fontSize: '16px',
                  lineHeight: 1.75,
                  color: 'var(--color-obsidian)',
                  opacity: 0.8,
                }}
              >
                Founded in 1989 as a trusted electrical company, Mala expanded into
                construction in 1999. For over two decades, we have delivered more than
                100 residential buildings, 50 villas, and 25 commercial outlets across
                Chennai.
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-dm-sans), sans-serif',
                  fontSize: '16px',
                  lineHeight: 1.75,
                  color: 'var(--color-obsidian)',
                  opacity: 0.8,
                }}
              >
                Our approach is simple: we treat every project — regardless of scale —
                with the same commitment to quality, precision, and the client&apos;s vision.
              </p>
              <Link
                href="/about"
                className="inline-block mt-2 transition-all duration-300"
                style={{
                  fontFamily: 'var(--font-dm-sans), sans-serif',
                  fontSize: '13px',
                  color: 'var(--color-gold)',
                  letterSpacing: '0.04em',
                }}
              >
                Read our full story &rarr;
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
