'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Wifi, Home, Paintbrush, UtensilsCrossed, Waves, ChefHat, Headphones, Truck, Car } from 'lucide-react'
import AnimatedHeading from '@/components/ui/AnimatedHeading'
import GoldRule from '@/components/ui/GoldRule'
import { fadeUp, staggerContainer } from '@/lib/animations'

const amenities = [
  { icon: Wifi, label: 'Free Wi-Fi', desc: 'High-speed internet throughout the penthouse' },
  { icon: Home, label: 'Smart Home', desc: 'Automated lighting, AC, and entertainment systems' },
  { icon: Paintbrush, label: 'Daily Housekeeping', desc: 'Professional cleaning services every day' },
  { icon: UtensilsCrossed, label: 'Personalized Dining', desc: 'Curated meals prepared to your taste' },
  { icon: Waves, label: 'Private Swimming Pool', desc: 'Exclusive pool access for your stay' },
  { icon: ChefHat, label: 'Self Cooking Kitchen', desc: 'Fully equipped kitchen for your use' },
  { icon: Headphones, label: '24/7 Service on Call', desc: 'Round-the-clock concierge support' },
  { icon: Truck, label: 'Food Delivery', desc: 'Order from your favorite restaurants' },
  { icon: Car, label: '24/7 Cab', desc: 'Private transportation on demand' },
]

const galleryPhotos = [
  { seed: 'stay-living', label: 'Living Room' },
  { seed: 'stay-dining', label: 'Dining' },
  { seed: 'stay-dining2', label: 'Dining Area' },
  { seed: 'stay-bedroom', label: 'Bedroom' },
  { seed: 'stay-pool', label: 'Pool' },
  { seed: 'stay-kitchen', label: 'Kitchen' },
]

export default function StayClient() {
  const introRef = useRef(null)
  const introInView = useInView(introRef, { once: true, margin: '-80px' })
  const amenitiesRef = useRef(null)
  const amenitiesInView = useInView(amenitiesRef, { once: true, margin: '-80px' })
  const ctaRef = useRef(null)
  const ctaInView = useInView(ctaRef, { once: true, margin: '-80px' })

  return (
    <>
      {/* Hero */}
      <section className="relative flex items-center justify-center" style={{ height: '100svh', minHeight: '600px' }}>
        <Image
          src="https://picsum.photos/seed/stay-hero/1920/1080"
          alt="At The Top — Luxury penthouse by Mala Constructions"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(14, 14, 14, 0.55)' }} />
        <div className="relative z-10 text-center px-6">
          <AnimatedHeading
            text="At The Top"
            as="h1"
            className="mb-4"
            style={{ fontSize: 'var(--text-display)', color: 'var(--color-white)' }}
          />
          <motion.p
            style={{
              fontFamily: 'var(--font-cormorant), serif',
              fontSize: 'var(--text-title)',
              fontWeight: 300,
              fontStyle: 'italic',
              color: 'var(--color-sand)',
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Stay by Mala&apos;s
          </motion.p>
        </div>
      </section>

      {/* Intro */}
      <section ref={introRef} className="py-24 md:py-32 lg:py-40" style={{ backgroundColor: 'var(--color-cream)' }}>
        <div className="max-w-[1320px] mx-auto px-6 md:px-12">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            variants={fadeUp}
            initial="hidden"
            animate={introInView ? 'visible' : 'hidden'}
          >
            <GoldRule className="mx-auto mb-6" />
            <h2
              className="mb-6"
              style={{
                fontFamily: 'var(--font-cormorant), serif',
                fontSize: 'var(--text-hero)',
                fontWeight: 300,
                color: 'var(--color-obsidian)',
                lineHeight: 1.15,
              }}
            >
              Your Luxury Escape in the Heart of Chennai
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-dm-sans), sans-serif',
                fontSize: '16px',
                lineHeight: 1.75,
                color: 'var(--color-obsidian)',
                opacity: 0.7,
              }}
            >
              Located just 6 km from Chennai Central in Kolathur, At The Top offers a stunning penthouse experience that redefines urban living. Whether you&apos;re visiting Chennai for business or leisure, our penthouse provides the perfect blend of comfort, luxury, and convenience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Amenities */}
      <section ref={amenitiesRef} className="py-24 md:py-32 lg:py-40" style={{ backgroundColor: 'var(--color-obsidian)' }}>
        <div className="max-w-[1320px] mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <GoldRule className="mx-auto mb-4" />
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
              Amenities
            </span>
            <AnimatedHeading
              text="Everything You Need, Nothing You Don't"
              className="mx-auto"
              style={{ fontSize: 'var(--text-hero)', color: 'var(--color-white)' }}
            />
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            animate={amenitiesInView ? 'visible' : 'hidden'}
          >
            {amenities.map((amenity, i) => {
              const Icon = amenity.icon
              return (
                <motion.div
                  key={i}
                  className="flex flex-col items-center text-center p-8 transition-colors duration-300"
                  style={{ border: '0.5px solid var(--color-graphite)' }}
                  variants={fadeUp}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--color-gold)')}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--color-graphite)')}
                >
                  <Icon size={32} style={{ color: 'var(--color-gold)' }} />
                  <h3
                    className="mt-4 mb-2"
                    style={{
                      fontFamily: 'var(--font-cormorant), serif',
                      fontSize: '20px',
                      fontWeight: 400,
                      color: 'var(--color-white)',
                    }}
                  >
                    {amenity.label}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-dm-sans), sans-serif',
                      fontSize: '13px',
                      color: 'var(--color-ash)',
                    }}
                  >
                    {amenity.desc}
                  </p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Interior Gallery */}
      <section className="py-24 md:py-32 lg:py-40" style={{ backgroundColor: 'var(--color-ink)' }}>
        <div className="max-w-[1320px] mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <GoldRule className="mx-auto mb-4" />
            <AnimatedHeading
              text="Interior Gallery"
              className="mx-auto"
              style={{ fontSize: 'var(--text-hero)', color: 'var(--color-white)' }}
            />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryPhotos.map((photo, i) => (
              <div key={i} className="relative overflow-hidden group" style={{ aspectRatio: '4/3' }}>
                <Image
                  src={`https://picsum.photos/seed/${photo.seed}/800/600`}
                  alt={`At The Top interior — ${photo.label}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section ref={ctaRef} className="py-24 md:py-32 lg:py-40" style={{ backgroundColor: 'var(--color-obsidian)' }}>
        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={ctaInView ? 'visible' : 'hidden'}
          >
            <div className="mx-auto mb-8" style={{ width: 60, height: 1, backgroundColor: 'var(--color-gold)' }} />
            <h2
              className="mb-4"
              style={{
                fontFamily: 'var(--font-cormorant), serif',
                fontSize: 'var(--text-hero)',
                fontWeight: 300,
                color: 'var(--color-white)',
                lineHeight: 1.15,
              }}
            >
              Elevate Your Chennai Stay
            </h2>
            <p
              className="mb-8"
              style={{
                fontFamily: 'var(--font-dm-sans), sans-serif',
                fontSize: '16px',
                color: 'var(--color-ash)',
              }}
            >
              Located just 6 km from Chennai Central
            </p>
            <Link
              href="/contact"
              className="inline-block px-10 py-4 transition-all duration-300"
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
              Enquire for Availability &rarr;
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
