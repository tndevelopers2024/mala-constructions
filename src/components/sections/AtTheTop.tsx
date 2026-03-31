'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Wifi, Home, Paintbrush, UtensilsCrossed, Waves, ChefHat, Headphones, Truck, Car } from 'lucide-react'
import GoldRule from '@/components/ui/GoldRule'
import SectionNumber from '@/components/ui/SectionNumber'
import AnimatedHeading from '@/components/ui/AnimatedHeading'
import { fadeUp, staggerContainer } from '@/lib/animations'

const amenities = [
  { icon: Wifi, label: 'Free Wi-Fi' },
  { icon: Home, label: 'Smart Home' },
  { icon: Paintbrush, label: 'Daily Housekeeping' },
  { icon: UtensilsCrossed, label: 'Personalized Dining' },
  { icon: Waves, label: 'Private Swimming Pool' },
  { icon: ChefHat, label: 'Self Cooking Kitchen' },
  { icon: Headphones, label: '24/7 Service on Call' },
  { icon: Truck, label: 'Food Delivery' },
  { icon: Car, label: '24/7 Cab' },
]

const galleryPhotos = [
  { seed: 'atthetop-living', label: 'Living Room' },
  { seed: 'atthetop-dining', label: 'Dining' },
  { seed: 'atthetop-dining2', label: 'Dining Area' },
  { seed: 'atthetop-bedroom', label: 'Bedroom' },
  { seed: 'atthetop-pool', label: 'Pool' },
  { seed: 'atthetop-kitchen', label: 'Kitchen' },
]

export default function AtTheTop() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      className="relative py-24 md:py-32 lg:py-40"
      style={{ backgroundColor: 'var(--color-cream)' }}
    >
      <div className="max-w-[1320px] mx-auto px-6 md:px-12 relative">
        <SectionNumber number="04" className="-top-8 -left-2 md:left-0" />

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
            Luxury Hospitality
          </span>

          <AnimatedHeading
            text="At The Top — Stay by Mala's"
            className="mb-6"
            style={{
              fontSize: 'var(--text-hero)',
              color: 'var(--color-obsidian)',
            }}
          />

          <motion.p
            className="max-w-2xl mb-12"
            style={{
              fontFamily: 'var(--font-dm-sans), sans-serif',
              fontSize: '16px',
              lineHeight: 1.75,
              color: 'var(--color-obsidian)',
              opacity: 0.7,
            }}
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            Your luxury escape in the heart of Chennai. Situated 6 km from Chennai Central, this stunning penthouse redefines urban living.
          </motion.p>

          {/* Amenities grid */}
          <motion.div
            className="grid grid-cols-3 gap-6 md:gap-8 mb-12"
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            {amenities.map((amenity, i) => {
              const Icon = amenity.icon
              return (
                <motion.div
                  key={i}
                  className="flex flex-col items-center text-center gap-2"
                  variants={fadeUp}
                >
                  <Icon size={24} style={{ color: 'var(--color-gold)' }} />
                  <span
                    style={{
                      fontFamily: 'var(--font-dm-sans), sans-serif',
                      fontSize: '13px',
                      color: 'var(--color-obsidian)',
                      opacity: 0.7,
                    }}
                  >
                    {amenity.label}
                  </span>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Gallery strip */}
          <div className="overflow-x-auto mb-10 -mx-6 px-6">
            <div className="flex gap-4" style={{ minWidth: 'max-content' }}>
              {galleryPhotos.map((photo, i) => (
                <div key={i} className="relative flex-shrink-0" style={{ width: 240, height: 160 }}>
                  <Image
                    src={`https://picsum.photos/seed/${photo.seed}/480/320`}
                    alt={`At The Top ${photo.label}`}
                    fill
                    className="object-cover"
                    sizes="240px"
                  />
                </div>
              ))}
            </div>
          </div>

          <Link
            href="/stay"
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
            Book Your Stay &rarr;
          </Link>
        </div>
      </div>
    </section>
  )
}
