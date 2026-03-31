'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Phone, Mail, Globe, MapPin, MessageCircle } from 'lucide-react'
import PageHero from '@/components/ui/PageHero'
import GoldRule from '@/components/ui/GoldRule'
import AnimatedHeading from '@/components/ui/AnimatedHeading'

const schema = z.object({
  name: z.string().min(2, 'Name required'),
  phone: z.string().min(10, 'Valid phone required'),
  email: z.string().email('Valid email required'),
  message: z.string().min(10, 'Message required'),
})
type FormData = z.infer<typeof schema>

const fieldStyle: React.CSSProperties = {
  width: '100%',
  background: 'transparent',
  border: '1px solid var(--color-graphite)',
  borderRadius: 0,
  padding: '13px 16px',
  color: 'var(--color-white)',
  fontFamily: 'var(--font-body)',
  fontSize: '14px',
  outline: 'none',
  transition: 'border-color 0.25s',
}

export default function ContactPage() {
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
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error()
      setSent(true)
      reset()
    } catch {
      setReqError('Something went wrong. Please try again.')
    }
  }

  return (
    <>
      <PageHero
        headline="Get In Touch"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Contact', href: '/contact' },
        ]}
        imageUrl="https://picsum.photos/seed/contact-hero/1920/1080"
      />

      <section style={{ backgroundColor: 'var(--color-obsidian)' }} className="section-padding">
        <div className="max-content">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'start' }}>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '1.25rem' }}>
                <GoldRule />
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-ash)' }}>Find Us</span>
              </div>
              <AnimatedHeading
                text="We'd love to hear about your project."
                as="h2"
                style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(26px, 3vw, 42px)', fontWeight: 300, color: 'var(--color-white)', marginBottom: '2.5rem' }}
              />
              <div style={{ backgroundColor: 'var(--color-ink)', border: '1px solid var(--color-graphite)', padding: '2rem' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 400, color: 'var(--color-white)', marginBottom: '0.25rem' }}>
                  MALA CONSTRUCTIONS
                </h3>
                <div style={{ height: '1px', backgroundColor: 'var(--color-graphite)', margin: '1rem 0 1.5rem' }} />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <MapPin size={14} style={{ color: 'var(--color-gold)', marginTop: '3px', flexShrink: 0 }} />
                    <div>
                      <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--color-white)', lineHeight: 1.6 }}>6, Shanthi Nagar, 1st Main Road</p>
                      <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--color-ash)', lineHeight: 1.6 }}>Kolathur, Chennai – 600 099</p>
                    </div>
                  </div>
                  {[
                    { icon: Phone, text: '9840264993', href: 'tel:9840264993' },
                    { icon: Phone, text: '9789931141', href: 'tel:9789931141' },
                    { icon: Mail, text: 'malaconstructionschennai@gmail.com', href: 'mailto:malaconstructionschennai@gmail.com' },
                    { icon: Globe, text: 'malaconstructions.com', href: 'https://malaconstructions.com' },
                  ].map(({ icon: Icon, text, href }) => (
                    <a key={href} href={href}
                      style={{ display: 'flex', gap: '12px', alignItems: 'center', fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--color-ash)', textDecoration: 'none', transition: 'color 0.25s' }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-gold)')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-ash)')}
                    >
                      <Icon size={14} style={{ color: 'var(--color-gold)', flexShrink: 0 }} />
                      {text}
                    </a>
                  ))}
                  <div style={{ height: '1px', backgroundColor: 'var(--color-graphite)' }} />
                  <a href="https://wa.me/919840264993" target="_blank" rel="noopener noreferrer"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', border: '1px solid var(--color-graphite)', padding: '11px 20px', fontFamily: 'var(--font-body)', fontSize: '12px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-ash)', textDecoration: 'none', transition: 'border-color 0.25s, color 0.25s' }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--color-gold)'; e.currentTarget.style.color = 'var(--color-gold)' }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--color-graphite)'; e.currentTarget.style.color = 'var(--color-ash)' }}
                  >
                    <MessageCircle size={14} />
                    Message on WhatsApp
                  </a>
                </div>
              </div>
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '1.5rem' }}>
                <GoldRule />
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-ash)' }}>Send an Enquiry</span>
              </div>
              {sent ? (
                <div style={{ border: '1px solid var(--color-graphite)', padding: '2.5rem', textAlign: 'center' }}>
                  <div style={{ width: '40px', height: '1px', backgroundColor: 'var(--color-gold)', margin: '0 auto 1.5rem' }} />
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '24px', fontWeight: 300, color: 'var(--color-white)', marginBottom: '0.75rem' }}>Message Received</h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--color-ash)' }}>Thank you for reaching out. We will get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {(['name', 'phone', 'email'] as const).map((field) => (
                    <div key={field}>
                      <input {...register(field)} placeholder={field.charAt(0).toUpperCase() + field.slice(1)} style={fieldStyle}
                        onFocus={(e) => (e.target.style.borderColor = 'var(--color-gold)')}
                        onBlur={(e) => (e.target.style.borderColor = 'var(--color-graphite)')}
                      />
                      {errors[field] && <p style={{ color: '#c0392b', fontSize: '11px', marginTop: '4px' }}>{errors[field]?.message}</p>}
                    </div>
                  ))}
                  <div>
                    <textarea {...register('message')} placeholder="Tell us about your project" rows={5}
                      style={{ ...fieldStyle, resize: 'vertical' }}
                      onFocus={(e) => (e.target.style.borderColor = 'var(--color-gold)')}
                      onBlur={(e) => (e.target.style.borderColor = 'var(--color-graphite)')}
                    />
                    {errors.message && <p style={{ color: '#c0392b', fontSize: '11px', marginTop: '4px' }}>{errors.message?.message}</p>}
                  </div>
                  {reqError && <p style={{ color: '#c0392b', fontSize: '12px' }}>{reqError}</p>}
                  <button type="submit" disabled={isSubmitting}
                    style={{ border: '1px solid var(--color-gold)', background: 'transparent', color: 'var(--color-gold)', padding: '15px', fontFamily: 'var(--font-body)', fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'none', transition: 'background 0.3s, color 0.3s', opacity: isSubmitting ? 0.6 : 1 }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--color-gold)'; e.currentTarget.style.color = 'var(--color-obsidian)' }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--color-gold)' }}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <div style={{ width: '100%', height: '400px', borderTop: '1px solid var(--color-graphite)' }}>
        <iframe
          title="Mala Constructions location"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://maps.google.com/maps?q=Shanthi+Nagar,Kolathur,Chennai+600099&output=embed"
        />
      </div>
    </>
  )
}
