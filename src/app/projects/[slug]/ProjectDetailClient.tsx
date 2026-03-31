'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin, ChevronDown, MessageCircle, Shield, Zap, Compass, SquareStack, Car, Power, Smartphone } from 'lucide-react'
import type { Project } from '@/data/projects'
import { sapphireSpecs, sapphireFloorPlans, sapphireAmenities } from '@/data/sapphire'
import { getProjectImageUrl, getPlaceholderImage } from '@/lib/utils'
import GoldRule from '@/components/ui/GoldRule'
import AnimatedHeading from '@/components/ui/AnimatedHeading'
import ProjectGallery from '@/components/projects/ProjectGallery'
import EnquiryForm from '@/components/ui/EnquiryForm'
import { fadeUp, staggerContainer } from '@/lib/animations'

const specSections = [
  { key: 'structure' as const, title: 'Structure' },
  { key: 'carpentry' as const, title: 'Carpentry' },
  { key: 'electrical' as const, title: 'Electrical' },
  { key: 'flooring' as const, title: 'Flooring' },
  { key: 'sanitary' as const, title: 'Sanitary' },
]

const amenityIcons = [Shield, Zap, Compass, SquareStack, Car, SquareStack, Power, Smartphone]

interface Props {
  project: Project
}

export default function ProjectDetailClient({ project }: Props) {
  const [openSpec, setOpenSpec] = useState<string | null>(null)
  const isSapphire = project.slug === 'malas-sapphire'

  const specsRef = useRef(null)
  const specsInView = useInView(specsRef, { once: true, margin: '-80px' })
  const amenitiesRef = useRef(null)
  const amenitiesInView = useInView(amenitiesRef, { once: true, margin: '-80px' })

  return (
    <>
      {/* Hero Image */}
      <section className="relative" style={{ height: '60vh', minHeight: '400px' }}>
        <Image
          src={getProjectImageUrl(project.slug, 1920, 1080)}
          alt={`${project.title} — ${project.location}`}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(14, 14, 14, 0.4)' }} />
      </section>

      {/* Project Header */}
      <section className="py-16 md:py-20" style={{ backgroundColor: 'var(--color-obsidian)' }}>
        <div className="max-w-[1320px] mx-auto px-6 md:px-12">
          <p className="mb-4" style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: '12px', color: 'var(--color-ash)' }}>
            <Link href="/" className="hover:text-[var(--color-gold)] transition-colors">Home</Link>
            {' / '}
            <Link href="/projects" className="hover:text-[var(--color-gold)] transition-colors">Projects</Link>
            {' / '}
            <span style={{ color: 'var(--color-white)' }}>{project.title}</span>
          </p>

          <AnimatedHeading
            text={project.title}
            as="h1"
            className="mb-4"
            style={{ fontSize: 'var(--text-hero)', color: 'var(--color-white)' }}
          />

          <div className="flex flex-wrap items-center gap-3 mb-3">
            <div className="flex items-center gap-1.5">
              <MapPin size={14} style={{ color: 'var(--color-gold)' }} />
              <span style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: '14px', color: 'var(--color-ash)' }}>
                {project.location}
              </span>
            </div>
            <span
              className="px-3 py-1"
              style={{
                border: '0.5px solid var(--color-graphite)',
                fontFamily: 'var(--font-dm-sans), sans-serif',
                fontSize: '10px',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--color-ash)',
              }}
            >
              {project.type}
            </span>
            <span
              className="px-3 py-1"
              style={{
                backgroundColor: project.status === 'flagship' ? 'var(--color-gold)' : 'transparent',
                border: project.status === 'flagship' ? 'none' : '0.5px solid var(--color-graphite)',
                fontFamily: 'var(--font-dm-sans), sans-serif',
                fontSize: '10px',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: project.status === 'flagship' ? 'var(--color-obsidian)' : 'var(--color-ash)',
              }}
            >
              {project.status}
            </span>
          </div>

          <p style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: '14px', color: 'var(--color-ash)' }}>
            Client: {project.client}
          </p>

          {project.description && (
            <p className="mt-4 max-w-2xl" style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: '16px', lineHeight: 1.75, color: 'rgba(250, 250, 248, 0.7)' }}>
              {project.description}
            </p>
          )}
        </div>
      </section>

      {/* Gallery */}
      <section className="py-12" style={{ backgroundColor: 'var(--color-obsidian)' }}>
        <div className="max-w-[1320px] mx-auto px-6 md:px-12">
          <ProjectGallery images={project.gallery} projectSlug={project.slug} />
        </div>
      </section>

      {/* Sapphire-specific content */}
      {isSapphire && (
        <>
          {/* Main content with sidebar */}
          <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--color-obsidian)' }}>
            <div className="max-w-[1320px] mx-auto px-6 md:px-12">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Left — Main content */}
                <div className="lg:col-span-2">
                  {/* Specs Accordion */}
                  <div ref={specsRef}>
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
                      Specifications
                    </h2>

                    <motion.div
                      className="space-y-0"
                      variants={staggerContainer}
                      initial="hidden"
                      animate={specsInView ? 'visible' : 'hidden'}
                    >
                      {specSections.map((section) => (
                        <motion.div
                          key={section.key}
                          variants={fadeUp}
                          style={{
                            borderBottom: '1px solid var(--color-graphite)',
                          }}
                        >
                          <button
                            onClick={() => setOpenSpec(openSpec === section.key ? null : section.key)}
                            className="w-full flex items-center justify-between py-5 transition-colors duration-300"
                          >
                            <span
                              style={{
                                fontFamily: 'var(--font-cormorant), serif',
                                fontSize: '20px',
                                fontWeight: 400,
                                color: openSpec === section.key ? 'var(--color-gold)' : 'var(--color-white)',
                              }}
                            >
                              {section.title}
                            </span>
                            <ChevronDown
                              size={18}
                              style={{
                                color: 'var(--color-ash)',
                                transform: openSpec === section.key ? 'rotate(180deg)' : 'rotate(0deg)',
                                transition: 'transform 0.3s ease',
                              }}
                            />
                          </button>
                          {openSpec === section.key && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              className="pb-5"
                            >
                              <ul className="space-y-2">
                                {sapphireSpecs[section.key].map((spec, i) => (
                                  <li key={i} className="flex items-start gap-2">
                                    <span
                                      className="w-[5px] h-[5px] rounded-full mt-2 flex-shrink-0"
                                      style={{ backgroundColor: 'var(--color-gold)' }}
                                    />
                                    <span style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: '14px', color: 'var(--color-ash)' }}>
                                      {spec}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            </motion.div>
                          )}
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>

                  {/* Floor Plans */}
                  <div className="mt-16">
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
                      Floor Plans
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {sapphireFloorPlans.map((plan, i) => (
                        <div
                          key={i}
                          className="p-6"
                          style={{
                            border: '1px solid var(--color-graphite)',
                          }}
                        >
                          <div className="flex items-center justify-between mb-4">
                            <span
                              style={{
                                fontFamily: 'var(--font-cormorant), serif',
                                fontSize: '22px',
                                fontWeight: 400,
                                color: 'var(--color-gold)',
                              }}
                            >
                              {plan.name}
                            </span>
                            <span
                              style={{
                                fontFamily: 'var(--font-dm-sans), sans-serif',
                                fontSize: '13px',
                                color: 'var(--color-sand)',
                              }}
                            >
                              {plan.area}
                            </span>
                          </div>
                          <div className="space-y-2">
                            {plan.rooms.map((room, j) => (
                              <div key={j} className="flex justify-between">
                                <span style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: '13px', color: 'var(--color-ash)' }}>
                                  {room.name}
                                </span>
                                <span style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: '13px', color: 'var(--color-white)', opacity: 0.7 }}>
                                  {room.size}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Amenities Grid */}
                  <div className="mt-16" ref={amenitiesRef}>
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
                      Amenities
                    </h2>

                    <motion.div
                      className="grid grid-cols-2 md:grid-cols-4 gap-4"
                      variants={staggerContainer}
                      initial="hidden"
                      animate={amenitiesInView ? 'visible' : 'hidden'}
                    >
                      {sapphireAmenities.map((amenity, i) => {
                        const Icon = amenityIcons[i % amenityIcons.length]
                        return (
                          <motion.div
                            key={i}
                            className="flex flex-col items-center text-center p-5"
                            style={{ border: '0.5px solid var(--color-graphite)' }}
                            variants={fadeUp}
                          >
                            <Icon size={24} style={{ color: 'var(--color-gold)' }} />
                            <span
                              className="mt-2"
                              style={{
                                fontFamily: 'var(--font-dm-sans), sans-serif',
                                fontSize: '12px',
                                color: 'var(--color-ash)',
                                letterSpacing: '0.04em',
                              }}
                            >
                              {amenity}
                            </span>
                          </motion.div>
                        )
                      })}
                    </motion.div>
                  </div>

                  {/* Google Maps */}
                  <div className="mt-16">
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
                      Site Location
                    </h2>
                    <div className="w-full" style={{ height: 400 }}>
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.0!2d80.2!3d13.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDA2JzAwLjAiTiA4MMKwMTInMDAuMCJF!5e0!3m2!1sen!2sin!4v1!5m2!1sen!2sin&q=No.20,+7/21,+Haridas+1st+Main+Road,+Santhi+Nagar,+Kolathur,+Chennai+600099"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Mala's Sapphire Location"
                      />
                    </div>
                  </div>
                </div>

                {/* Right — Sticky Sidebar */}
                <div className="lg:col-span-1">
                  <div className="sticky top-24">
                    <div className="p-6" style={{ backgroundColor: 'var(--color-ink)', border: '1px solid var(--color-graphite)' }}>
                      <h3
                        className="mb-6"
                        style={{
                          fontFamily: 'var(--font-cormorant), serif',
                          fontSize: '24px',
                          fontWeight: 400,
                          color: 'var(--color-white)',
                        }}
                      >
                        Enquire About Sapphire
                      </h3>
                      <EnquiryForm project="Mala's Sapphire" compact />

                      <a
                        href="https://wa.me/919840264993?text=Hi%2C%20I%27m%20interested%20in%20Mala%27s%20Sapphire"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full mt-4 py-3 transition-all duration-300"
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
                        WhatsApp Us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* Non-sapphire projects — simple content */}
      {!isSapphire && (
        <section className="py-16 md:py-20" style={{ backgroundColor: 'var(--color-obsidian)' }}>
          <div className="max-w-[1320px] mx-auto px-6 md:px-12 text-center">
            <div className="mx-auto mb-8" style={{ width: 60, height: 1, backgroundColor: 'var(--color-gold)' }} />
            <p
              className="max-w-xl mx-auto mb-8"
              style={{
                fontFamily: 'var(--font-dm-sans), sans-serif',
                fontSize: '16px',
                lineHeight: 1.75,
                color: 'var(--color-ash)',
              }}
            >
              Interested in learning more about {project.title}? Contact us for detailed information, floor plans, and availability.
            </p>
            <Link
              href="/contact"
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
              Get in Touch &rarr;
            </Link>
          </div>
        </section>
      )}
    </>
  )
}
