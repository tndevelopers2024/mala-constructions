'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { ChevronDown, MessageCircle, Shield, Zap, Sun, Grid3X3, Droplets } from 'lucide-react'
import GoldRule from '@/components/ui/GoldRule'
import { sapphireSpecs, sapphireFloorPlans, sapphireAmenities } from '@/data/sapphire'

const schema = z.object({
  name: z.string().min(2, 'Name required'),
  phone: z.string().min(10, 'Valid phone required'),
  email: z.string().email('Valid email required'),
  message: z.string().optional(),
})
type FormData = z.infer<typeof schema>

const SPEC_SECTIONS = [
  { key: 'structure' as const, label: 'Structure & Foundation', icon: Shield },
  { key: 'carpentry' as const, label: 'Carpentry & Doors', icon: Grid3X3 },
  { key: 'electrical' as const, label: 'Electrical & Smart Systems', icon: Zap },
  { key: 'flooring' as const, label: 'Flooring & Surfaces', icon: Sun },
  { key: 'sanitary' as const, label: 'Sanitary & Plumbing', icon: Droplets },
]

const fieldStyle: React.CSSProperties = {
  width: '100%',
  background: 'transparent',
  border: '1px solid var(--color-graphite)',
  borderRadius: 0,
  padding: '11px 14px',
  color: 'var(--color-white)',
  fontFamily: 'var(--font-body)',
  fontSize: '14px',
  outline: 'none',
  transition: 'border-color 0.25s',
}

export default function SapphireDetail() {
  const [openSection, setOpenSection] = useState<string | null>(null)
  const [sent, setSent] = useState(false)
  const [reqError, setReqError] = useState('')

  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, project: "Mala's Sapphire" }),
      })
      if (!res.ok) throw new Error()
      setSent(true)
      reset()
    } catch {
      setReqError('Something went wrong. Please try again.')
    }
  }

  return (
    <section style={{ backgroundColor: 'var(--color-ink)' }} className="section-padding">
      <div className="max-content">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'start' }}>

          {/* Main content column */}
          <div>
            {/* Specs Accordion */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '2rem' }}>
              <GoldRule />
              <span style={{ fontFamily: 'var(--font-body)', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-ash)' }}>
                Specifications
              </span>
            </div>

            <div style={{ borderTop: '1px solid var(--color-graphite)', marginBottom: '3rem' }}>
              {SPEC_SECTIONS.map((section) => {
                const isOpen = openSection === section.key
                const Icon = section.icon
                return (
                  <div key={section.key} style={{ borderBottom: '1px solid var(--color-graphite)' }}>
                    <button
                      onClick={() => setOpenSection(isOpen ? null : section.key)}
                      style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.25rem 0', background: 'none', border: 'none', cursor: 'none', textAlign: 'left' }}
                    >
                      <span style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <Icon size={15} style={{ color: 'var(--color-gold)', flexShrink: 0 }} />
                        <span style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 400, color: 'var(--color-white)' }}>
                          {section.label}
                        </span>
                      </span>
                      <ChevronDown size={16} style={{ color: 'var(--color-ash)', transform: isOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.3s ease', flexShrink: 0 }} />
                    </button>
                    <div style={{ maxHeight: isOpen ? '500px' : '0', overflow: 'hidden', transition: 'max-height 0.35s ease' }}>
                      <ul style={{ padding: '0 0 1.25rem 1.75rem', margin: 0, listStyle: 'none' }}>
                        {sapphireSpecs[section.key].map((item) => (
                          <li key={item} style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--color-ash)', lineHeight: 1.7, paddingBottom: '6px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                            <span style={{ color: 'var(--color-gold)', marginTop: '8px', flexShrink: 0, display: 'inline-block', width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'var(--color-gold)' }} />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Floor Plans */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '2rem' }}>
              <GoldRule />
              <span style={{ fontFamily: 'var(--font-body)', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-ash)' }}>
                Floor Plans
              </span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
              {sapphireFloorPlans.map((plan) => (
                <div key={plan.label} style={{ border: '0.5px solid var(--color-graphite)', padding: '1.75rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                    <span style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: 400, color: 'var(--color-white)' }}>{plan.label}</span>
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'var(--color-gold)', border: '0.5px solid var(--color-gold)', padding: '3px 8px', letterSpacing: '0.06em' }}>{plan.area}</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {plan.rooms.map((room) => (
                      <div key={room.name} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--color-graphite)', paddingBottom: '5px' }}>
                        <span style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--color-ash)' }}>{room.name}</span>
                        <span style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--color-sand)' }}>{room.dims}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Amenities */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '2rem' }}>
              <GoldRule />
              <span style={{ fontFamily: 'var(--font-body)', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-ash)' }}>
                Amenities
              </span>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '3rem' }}>
              {sapphireAmenities.map((amenity) => (
                <span key={amenity} style={{ border: '0.5px solid var(--color-graphite)', padding: '8px 18px', fontFamily: 'var(--font-body)', fontSize: '12px', letterSpacing: '0.06em', color: 'var(--color-ash)' }}>
                  {amenity}
                </span>
              ))}
            </div>

            {/* Google Maps */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '1.5rem' }}>
              <GoldRule />
              <span style={{ fontFamily: 'var(--font-body)', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-ash)' }}>
                Site Location
              </span>
            </div>
            <div style={{ border: '1px solid var(--color-graphite)', overflow: 'hidden', height: '360px' }}>
              <iframe
                title="Mala's Sapphire location"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://maps.google.com/maps?q=Haridas+Nagar+1st+Main+Road,Kolathur,Chennai+600099&output=embed"
              />
            </div>
          </div>

          {/* Enquiry sidebar */}
          <div style={{ backgroundColor: 'var(--color-obsidian)', border: '1px solid var(--color-graphite)', padding: '2rem', position: 'sticky', top: '96px', alignSelf: 'start' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '1.25rem' }}>
              <GoldRule />
              <span style={{ fontFamily: 'var(--font-body)', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-ash)' }}>Enquire</span>
            </div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '24px', fontWeight: 300, color: 'var(--color-white)', marginBottom: '1.5rem' }}>
              Enquire About Sapphire
            </h3>

            {sent ? (
              <p style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-body)', fontSize: '14px' }}>
                Thank you! We will be in touch shortly.
              </p>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                {(['name', 'phone', 'email'] as const).map((field) => (
                  <div key={field}>
                    <input {...register(field)} placeholder={field.charAt(0).toUpperCase() + field.slice(1)} style={fieldStyle}
                      onFocus={(e) => (e.target.style.borderColor = 'var(--color-gold)')}
                      onBlur={(e) => (e.target.style.borderColor = 'var(--color-graphite)')}
                    />
                    {errors[field] && <p style={{ color: '#c0392b', fontSize: '11px', marginTop: '3px' }}>{errors[field]?.message}</p>}
                  </div>
                ))}
                <textarea {...register('message')} placeholder="Message (optional)" rows={3}
                  style={{ ...fieldStyle, resize: 'vertical' }}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--color-gold)')}
                  onBlur={(e) => (e.target.style.borderColor = 'var(--color-graphite)')}
                />
                {reqError && <p style={{ color: '#c0392b', fontSize: '12px' }}>{reqError}</p>}
                <button type="submit" disabled={isSubmitting}
                  style={{ border: '1px solid var(--color-gold)', background: 'transparent', color: 'var(--color-gold)', padding: '13px', fontFamily: 'var(--font-body)', fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'none', transition: 'background 0.3s, color 0.3s', opacity: isSubmitting ? 0.6 : 1 }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--color-gold)'; e.currentTarget.style.color = 'var(--color-obsidian)' }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--color-gold)' }}
                >
                  {isSubmitting ? 'Sending...' : 'Send Enquiry'}
                </button>
                <a
                  href="https://wa.me/919840264993?text=Hi%2C%20I%27m%20interested%20in%20Mala%27s%20Sapphire"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', border: '1px solid var(--color-graphite)', padding: '12px', fontFamily: 'var(--font-body)', fontSize: '12px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-ash)', textDecoration: 'none', transition: 'border-color 0.25s, color 0.25s' }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--color-gold)'; e.currentTarget.style.color = 'var(--color-gold)' }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--color-graphite)'; e.currentTarget.style.color = 'var(--color-ash)' }}
                >
                  <MessageCircle size={14} />
                  WhatsApp Us
                </a>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}
