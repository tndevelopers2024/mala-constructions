'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Phone, Mail, Globe, MessageCircle } from 'lucide-react'
import AnimatedHeading from '@/components/ui/AnimatedHeading'
import GoldRule from '@/components/ui/GoldRule'
import EnquiryForm from '@/components/ui/EnquiryForm'
import { fadeUp } from '@/lib/animations'

export default function ContactClient() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <>
      {/* Page Hero */}
      <section className="relative flex items-end" style={{ height: '50vh', minHeight: '400px' }}>
        <Image
          src="https://picsum.photos/seed/contact-hero/1920/1080"
          alt="Contact Mala Constructions Chennai"
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
            <span style={{ color: 'var(--color-white)' }}>Contact</span>
          </p>
          <AnimatedHeading
            text="Get in Touch"
            as="h1"
            style={{ fontSize: 'var(--text-hero)', color: 'var(--color-white)' }}
          />
        </div>
      </section>

      {/* Two-column layout */}
      <section ref={ref} className="py-24 md:py-32 lg:py-40" style={{ backgroundColor: 'var(--color-obsidian)' }}>
        <div className="max-w-[1320px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left — Contact details */}
            <motion.div
              className="p-8 md:p-10"
              style={{
                backgroundColor: 'var(--color-ink)',
                border: '1px solid var(--color-graphite)',
              }}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
            >
              <h2
                className="mb-8"
                style={{
                  fontFamily: 'var(--font-cormorant), serif',
                  fontSize: 'var(--text-title)',
                  fontWeight: 400,
                  color: 'var(--color-white)',
                }}
              >
                Mala Constructions
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin size={18} style={{ color: 'var(--color-gold)', flexShrink: 0, marginTop: 3 }} />
                  <div>
                    <p style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: '14px', lineHeight: 1.7, color: 'rgba(250, 250, 248, 0.7)' }}>
                      6, Shanthi Nagar, 1st Main Road
                      <br />
                      Kolathur, Chennai &ndash; 600 099
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone size={18} style={{ color: 'var(--color-gold)', flexShrink: 0, marginTop: 3 }} />
                  <div>
                    <a href="tel:+919840264993" className="block transition-colors duration-300" style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: '14px', color: 'rgba(250, 250, 248, 0.7)' }}>
                      9840264993
                    </a>
                    <a href="tel:+919789931141" className="block transition-colors duration-300" style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: '14px', color: 'rgba(250, 250, 248, 0.7)' }}>
                      9789931141
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Mail size={18} style={{ color: 'var(--color-gold)', flexShrink: 0 }} />
                  <a href="mailto:malaconstructionschennai@gmail.com" className="transition-colors duration-300" style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: '14px', color: 'rgba(250, 250, 248, 0.7)' }}>
                    malaconstructionschennai@gmail.com
                  </a>
                </div>

                <div className="flex items-center gap-4">
                  <Globe size={18} style={{ color: 'var(--color-gold)', flexShrink: 0 }} />
                  <a href="https://malaconstructions.com" target="_blank" rel="noopener noreferrer" className="transition-colors duration-300" style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: '14px', color: 'rgba(250, 250, 248, 0.7)' }}>
                    malaconstructions.com
                  </a>
                </div>

                <div className="pt-4">
                  <a
                    href="https://wa.me/919840264993"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 transition-all duration-300"
                    style={{
                      backgroundColor: '#25D366',
                      color: 'white',
                      fontFamily: 'var(--font-dm-sans), sans-serif',
                      fontSize: '12px',
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                    }}
                  >
                    <MessageCircle size={16} />
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right — Enquiry form */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
            >
              <GoldRule className="mb-4" />
              <h2
                className="mb-8"
                style={{
                  fontFamily: 'var(--font-cormorant), serif',
                  fontSize: 'var(--text-title)',
                  fontWeight: 400,
                  color: 'var(--color-white)',
                }}
              >
                Send Us a Message
              </h2>
              <EnquiryForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section style={{ backgroundColor: 'var(--color-obsidian)' }}>
        <div className="w-full" style={{ height: 400 }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.0!2d80.22!3d13.12!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z!5e0!3m2!1sen!2sin!4v1&q=6+Shanthi+Nagar+1st+Main+Road+Kolathur+Chennai+600099"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mala Constructions Office Location"
          />
        </div>
      </section>
    </>
  )
}
