'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin } from 'lucide-react'
import GoldRule from '@/components/ui/GoldRule'
import { fadeUp } from '@/lib/animations'

const specPills = [
  '1,084 \u2013 1,154 sq ft',
  '3 BHK + 3 Toilet',
  'East Facing',
  'Vaasthu Compliant',
  '6-Passenger Lift',
]

export default function SapphireSpotlight() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      className="relative"
      style={{ backgroundColor: 'var(--color-ink)' }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-5">
        {/* Left — Image (60%) */}
        <div className="relative lg:col-span-3" style={{ minHeight: '500px' }}>
          <Image
            src="https://picsum.photos/seed/malas-sapphire-spotlight/1200/800"
            alt="Mala's Sapphire luxury apartments exterior, Kolathur, Chennai"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 60vw"
          />
        </div>

        {/* Right — Content (40%) */}
        <div className="lg:col-span-2 p-10 md:p-12 lg:p-16 flex flex-col justify-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <GoldRule className="mb-4" />
            <span
              className="block mb-6"
              style={{
                fontFamily: 'var(--font-dm-sans), sans-serif',
                fontSize: '11px',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--color-gold)',
              }}
            >
              Flagship Project &middot; Available Now
            </span>

            <h2
              className="mb-3"
              style={{
                fontFamily: 'var(--font-cormorant), serif',
                fontSize: 'var(--text-hero)',
                fontWeight: 300,
                color: 'var(--color-white)',
                lineHeight: 1.1,
              }}
            >
              Mala&apos;s Signature Sapphire
            </h2>

            <p
              className="mb-4"
              style={{
                fontFamily: 'var(--font-cormorant), serif',
                fontSize: '20px',
                fontWeight: 400,
                color: 'var(--color-sand)',
              }}
            >
              6 Premium East-Facing 3BHK Residences
            </p>

            <div className="flex items-center gap-2 mb-6">
              <MapPin size={14} style={{ color: 'var(--color-gold)' }} />
              <span
                style={{
                  fontFamily: 'var(--font-dm-sans), sans-serif',
                  fontSize: '13px',
                  color: 'var(--color-ash)',
                }}
              >
                Haridoss Nagar, Kolathur
              </span>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {specPills.map((pill) => (
                <span
                  key={pill}
                  className="px-3 py-1"
                  style={{
                    border: '0.5px solid var(--color-graphite)',
                    fontFamily: 'var(--font-dm-sans), sans-serif',
                    fontSize: '11px',
                    color: 'var(--color-ash)',
                  }}
                >
                  {pill}
                </span>
              ))}
            </div>

            <Link
              href="/projects/malas-sapphire"
              className="inline-block px-8 py-4 transition-all duration-300"
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
              Explore Sapphire &rarr;
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
