'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  Wifi, Home, Sparkles, UtensilsCrossed, Waves,
  ChefHat, Phone, Package, Car
} from 'lucide-react'
import GoldRule from '@/components/ui/GoldRule'
import SectionNumber from '@/components/ui/SectionNumber'
import AnimatedHeading from '@/components/ui/AnimatedHeading'
import { fadeUp } from '@/lib/animations'

const AMENITIES = [
  { icon: Wifi, label: 'Free Wi-Fi' },
  { icon: Home, label: 'Smart Home' },
  { icon: Sparkles, label: 'Daily Housekeeping' },
  { icon: UtensilsCrossed, label: 'Personalized Dining' },
  { icon: Waves, label: 'Private Swimming Pool' },
  { icon: ChefHat, label: 'Self Cooking Kitchen' },
  { icon: Phone, label: '24/7 Service on Call' },
  { icon: Package, label: 'Food Delivery' },
  { icon: Car, label: '24/7 Cab' },
]

const GALLERY_SEEDS = ['stay-living', 'stay-dining', 'stay-dining2', 'stay-bedroom', 'stay-pool', 'stay-kitchen']

export default function AtTheTop() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      style={{ backgroundColor: 'var(--color-cream)', position: 'relative', overflow: 'hidden' }}
      className="section-padding"
    >
      <SectionNumber number="04" light />

      <div className="max-content">
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '1rem' }}>
          <GoldRule />
          <span style={{ fontFamily: 'var(--font-body)', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-ash)' }}>
            Luxury Hospitality
          </span>
        </div>

        <AnimatedHeading
          text="At The Top — Stay by Mala's"
          as="h2"
          style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-hero)', fontWeight: 300, color: 'var(--color-ink)', marginBottom: '1.25rem' }}
        />

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{ delay: 0.2 }}
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '15px',
            color: 'var(--color-graphite)',
            lineHeight: 1.8,
            maxWidth: '640px',
            marginBottom: '3rem',
          }}
        >
          Your luxury escape in the heart of Chennai. Situated 6 km from Chennai Central, this stunning penthouse redefines urban living.
        </motion.p>

        {/* Amenities grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.5rem',
            marginBottom: '3rem',
            maxWidth: '640px',
          }}
        >
          {AMENITIES.map((item, i) => (
            <motion.div
              key={item.label}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              transition={{ delay: 0.08 * i + 0.2 }}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', textAlign: 'center' }}
            >
              <item.icon size={22} style={{ color: 'var(--color-gold)' }} />
              <span style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--color-graphite)', lineHeight: 1.4 }}>
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Gallery strip */}
        <div
          style={{
            display: 'flex',
            gap: '1rem',
            overflowX: 'auto',
            paddingBottom: '0.5rem',
            marginBottom: '2.5rem',
            scrollbarWidth: 'none',
          }}
        >
          {GALLERY_SEEDS.map((seed) => (
            <div
              key={seed}
              style={{
                position: 'relative',
                flexShrink: 0,
                width: '260px',
                height: '180px',
              }}
            >
              <Image
                src={`https://picsum.photos/seed/${seed}/520/360`}
                alt={`At The Top penthouse — ${seed.replace('stay-', '')}`}
                fill
                style={{ objectFit: 'cover' }}
                sizes="260px"
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <Link
          href="/stay"
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
            transition: 'background 0.3s, color 0.3s',
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
          Book Your Stay →
        </Link>
      </div>
    </section>
  )
}
