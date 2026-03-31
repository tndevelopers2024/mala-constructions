'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import GoldRule from '@/components/ui/GoldRule'
import SectionNumber from '@/components/ui/SectionNumber'
import AnimatedHeading from '@/components/ui/AnimatedHeading'
import Services from '@/components/sections/Services'
import { fadeUp, staggerContainer } from '@/lib/animations'

const timeline = [
  { year: '1989', event: 'Founded as electrical company' },
  { year: '1999', event: 'Entered construction industry' },
  { year: '2010', event: 'Completed first apartment project' },
  { year: '2020', event: '100+ buildings milestone' },
  { year: '2024', event: "Mala's Sapphire launched" },
]

export default function AboutPage() {
  const storyRef = useRef(null)
  const storyInView = useInView(storyRef, { once: true, margin: '-80px' })
  const timelineRef = useRef(null)
  const timelineInView = useInView(timelineRef, { once: true, margin: '-80px' })
  const visionRef = useRef(null)
  const visionInView = useInView(visionRef, { once: true, margin: '-80px' })

  return (
    <>
      {/* Page Hero */}
      <section className="relative flex items-end" style={{ height: '50vh', minHeight: '400px' }}>
        <Image
          src="https://picsum.photos/seed/about-hero/1920/1080"
          alt="Mala Constructions — 35 years of building Chennai"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(14, 14, 14, 0.65)' }} />
        <div className="relative z-10 max-w-[1320px] mx-auto w-full px-6 md:px-12 pb-12">
          <p
            className="mb-3"
            style={{
              fontFamily: 'var(--font-dm-sans), sans-serif',
              fontSize: '12px',
              color: 'var(--color-ash)',
            }}
          >
            <Link href="/" className="hover:text-[var(--color-gold)] transition-colors duration-300">Home</Link>
            {' / '}
            <span style={{ color: 'var(--color-white)' }}>About</span>
          </p>
          <AnimatedHeading
            text="35 Years of Transforming Chennai"
            as="h1"
            style={{
              fontSize: 'var(--text-hero)',
              color: 'var(--color-white)',
            }}
          />
        </div>
      </section>

      {/* Origin Story */}
      <section ref={storyRef} className="py-24 md:py-32 lg:py-40" style={{ backgroundColor: 'var(--color-obsidian)' }}>
        <div className="max-w-[1320px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="relative" style={{ minHeight: 400 }}>
              <Image
                src="https://picsum.photos/seed/about-story/800/1000"
                alt="Mala Constructions office and team"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <motion.div
              className="flex flex-col justify-center"
              variants={fadeUp}
              initial="hidden"
              animate={storyInView ? 'visible' : 'hidden'}
            >
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
                Our Story
              </span>
              <h2
                className="mb-8"
                style={{
                  fontFamily: 'var(--font-cormorant), serif',
                  fontSize: 'var(--text-hero)',
                  fontWeight: 300,
                  color: 'var(--color-white)',
                  lineHeight: 1.1,
                }}
              >
                Built on Integrity. Crafted with Precision.
              </h2>
              <div className="space-y-5">
                <p style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: '16px', lineHeight: 1.75, color: 'rgba(250, 250, 248, 0.7)' }}>
                  Founded in 1989 as a trusted electrical company, Mala expanded into construction in 1999.
                  For over two decades, we have delivered more than 100 residential buildings, 50 villas,
                  and 25 commercial outlets across Chennai.
                </p>
                <p style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: '16px', lineHeight: 1.75, color: 'rgba(250, 250, 248, 0.7)' }}>
                  Our approach is simple: we treat every project — regardless of scale — with the same
                  commitment to quality, precision, and the client&apos;s vision. From residential buildings to
                  commercial outlets, from renovation to round-the-clock maintenance, we deliver excellence
                  at every stage.
                </p>
                <p style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: '16px', lineHeight: 1.75, color: 'rgba(250, 250, 248, 0.7)' }}>
                  Under the leadership of our founder, Mala Constructions has grown from a small electrical
                  services firm serving Kolathur to one of Chennai&apos;s most trusted construction companies,
                  known for delivering projects on time with uncompromising quality.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Timeline */}
          <motion.div
            ref={timelineRef}
            className="mt-20 max-w-2xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            animate={timelineInView ? 'visible' : 'hidden'}
          >
            <div className="relative pl-8">
              {/* Vertical line */}
              <div
                className="absolute left-[4px] top-2 bottom-2 w-[1px]"
                style={{ backgroundColor: 'var(--color-graphite)' }}
              />
              {timeline.map((item, i) => (
                <motion.div key={i} className="relative mb-10 last:mb-0" variants={fadeUp}>
                  {/* Gold circle */}
                  <div
                    className="absolute -left-8 top-1 w-[10px] h-[10px] rounded-full"
                    style={{ backgroundColor: 'var(--color-gold)', marginLeft: 0 }}
                  />
                  <span
                    className="block mb-1"
                    style={{
                      fontFamily: 'var(--font-cormorant), serif',
                      fontSize: '20px',
                      fontWeight: 400,
                      color: 'var(--color-gold)',
                    }}
                  >
                    {item.year}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-dm-sans), sans-serif',
                      fontSize: '14px',
                      color: 'var(--color-ash)',
                    }}
                  >
                    {item.event}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <Services variant="cream" />

      {/* Vision Statement */}
      <section
        ref={visionRef}
        className="py-24 md:py-32 lg:py-40"
        style={{ backgroundColor: 'var(--color-obsidian)' }}
      >
        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={visionInView ? 'visible' : 'hidden'}
          >
            <div
              className="mx-auto mb-8"
              style={{ width: 60, height: 1, backgroundColor: 'var(--color-gold)' }}
            />
            <blockquote
              style={{
                fontFamily: 'var(--font-cormorant), serif',
                fontSize: 'var(--text-title)',
                fontWeight: 300,
                fontStyle: 'italic',
                color: 'var(--color-white)',
                lineHeight: 1.5,
              }}
            >
              &ldquo;Our vision is to continue transforming Chennai&apos;s skyline while maintaining
              the trust and quality that our clients have come to expect. We aim to innovate in
              sustainable building practices while delivering homes that stand the test of time.&rdquo;
            </blockquote>
            <p
              className="mt-6"
              style={{
                fontFamily: 'var(--font-dm-sans), sans-serif',
                fontSize: '12px',
                letterSpacing: '0.06em',
                color: 'var(--color-ash)',
              }}
            >
              — Vision for the Future
            </p>
          </motion.div>
        </div>
      </section>
    </>
  )
}
