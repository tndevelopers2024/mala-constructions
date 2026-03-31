'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import AnimatedHeading from '@/components/ui/AnimatedHeading'
import GoldRule from '@/components/ui/GoldRule'
import { services } from '@/data/services'
import { fadeUp } from '@/lib/animations'

export default function ServicesClient() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative flex items-end" style={{ height: '50vh', minHeight: '400px' }}>
        <Image
          src="https://picsum.photos/seed/services-hero/1920/1080"
          alt="Mala Constructions Services"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(14, 14, 14, 0.65)' }} />
        <div className="relative z-10 max-w-[1320px] mx-auto w-full px-6 md:px-12 pb-12">
          <p className="mb-3" style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: '12px', color: 'var(--color-ash)' }}>
            <Link href="/" className="hover:text-[var(--color-gold)] transition-colors duration-300">Home</Link>
            {' / '}
            <span style={{ color: 'var(--color-white)' }}>Services</span>
          </p>
          <AnimatedHeading
            text="Our Services"
            as="h1"
            style={{ fontSize: 'var(--text-hero)', color: 'var(--color-white)' }}
          />
        </div>
      </section>

      {/* Service sections */}
      {services.map((service, i) => {
        const isReversed = i % 2 !== 0
        return (
          <ServiceSection key={i} service={service} reversed={isReversed} index={i} />
        )
      })}
    </>
  )
}

function ServiceSection({
  service,
  reversed,
  index,
}: {
  service: typeof services[0]
  reversed: boolean
  index: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      className="relative"
      style={{
        backgroundColor: index % 2 === 0 ? 'var(--color-obsidian)' : 'var(--color-ink)',
      }}
    >
      <div className={`grid grid-cols-1 lg:grid-cols-2 ${reversed ? '' : ''}`}>
        {/* Image */}
        <div
          className={`relative ${reversed ? 'lg:order-2' : 'lg:order-1'}`}
          style={{ minHeight: 400 }}
        >
          <Image
            src={service.image}
            alt={service.name}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        {/* Content */}
        <motion.div
          className={`flex flex-col justify-center p-10 md:p-16 lg:p-20 ${reversed ? 'lg:order-1' : 'lg:order-2'}`}
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <GoldRule className="mb-4" />
          <h2
            className="mb-4"
            style={{
              fontFamily: 'var(--font-cormorant), serif',
              fontSize: 'var(--text-title)',
              fontWeight: 300,
              color: 'var(--color-white)',
              lineHeight: 1.2,
            }}
          >
            {service.name}
          </h2>
          <p
            className="mb-6"
            style={{
              fontFamily: 'var(--font-dm-sans), sans-serif',
              fontSize: '16px',
              lineHeight: 1.75,
              color: 'var(--color-ash)',
            }}
          >
            {service.desc}
          </p>

          <ul className="space-y-3 mb-8">
            {service.deliverables.map((item, j) => (
              <li key={j} className="flex items-start gap-3">
                <span
                  className="w-[5px] h-[5px] rounded-full mt-2 flex-shrink-0"
                  style={{ backgroundColor: 'var(--color-gold)' }}
                />
                <span
                  style={{
                    fontFamily: 'var(--font-dm-sans), sans-serif',
                    fontSize: '14px',
                    lineHeight: 1.6,
                    color: 'rgba(250, 250, 248, 0.7)',
                  }}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <Link
            href="/contact"
            className="inline-block px-8 py-4 transition-all duration-300 self-start"
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
            Discuss Your Project &rarr;
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
