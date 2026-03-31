'use client'

import Link from 'next/link'
import MalaLogo from '@/components/ui/MalaLogo'
import { Phone, Mail, Globe, MapPin } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Services', href: '/services' },
  { label: 'Stay', href: '/stay' },
  { label: 'Contact', href: '/contact' },
]

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--color-ink)', borderTop: '1px solid var(--color-graphite)' }}>
      <div className="max-content" style={{ paddingTop: '5rem', paddingBottom: '3rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '3rem',
            marginBottom: '4rem',
          }}
        >
          {/* Left: Logo + tagline */}
          <div>
            <MalaLogo size="md" />
            <p
              style={{
                marginTop: '1.5rem',
                fontFamily: 'var(--font-display)',
                fontSize: '18px',
                fontWeight: 300,
                fontStyle: 'italic',
                color: 'var(--color-sand)',
                lineHeight: 1.5,
                maxWidth: '260px',
              }}
            >
              From Land to Landmark.
            </p>
            <p
              style={{
                marginTop: '0.75rem',
                fontFamily: 'var(--font-body)',
                fontSize: '13px',
                color: 'var(--color-ash)',
                lineHeight: 1.7,
                maxWidth: '260px',
              }}
            >
              Transforming spaces across Chennai since 1999 with precision, integrity, and craft.
            </p>
          </div>

          {/* Center: Nav links */}
          <div>
            <p className="text-ui" style={{ color: 'var(--color-gold)', fontSize: '10px', marginBottom: '1.5rem' }}>
              Navigation
            </p>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '0.75rem 1.5rem',
              }}
            >
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '13px',
                    color: 'var(--color-ash)',
                    textDecoration: 'none',
                    transition: 'color 0.25s',
                    letterSpacing: '0.03em',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-gold)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-ash)')}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Right: Contact */}
          <div>
            <p className="text-ui" style={{ color: 'var(--color-gold)', fontSize: '10px', marginBottom: '1.5rem' }}>
              Contact
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <MapPin size={13} style={{ color: 'var(--color-gold)', marginTop: '3px', flexShrink: 0 }} />
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--color-ash)', lineHeight: 1.6 }}>
                  6, Shanthi Nagar, 1st Main Road<br />Kolathur, Chennai – 600 099
                </span>
              </div>
              {[
                { icon: Phone, text: '9840264993', href: 'tel:9840264993' },
                { icon: Phone, text: '9789931141', href: 'tel:9789931141' },
                { icon: Mail, text: 'malaconstructionschennai@gmail.com', href: 'mailto:malaconstructionschennai@gmail.com' },
                { icon: Globe, text: 'malaconstructions.com', href: 'https://malaconstructions.com' },
              ].map(({ icon: Icon, text, href }) => (
                <a
                  key={href}
                  href={href}
                  style={{
                    display: 'flex',
                    gap: '10px',
                    alignItems: 'center',
                    fontFamily: 'var(--font-body)',
                    fontSize: '13px',
                    color: 'var(--color-ash)',
                    textDecoration: 'none',
                    transition: 'color 0.25s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-gold)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-ash)')}
                >
                  <Icon size={13} style={{ color: 'var(--color-gold)', flexShrink: 0 }} />
                  {text}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Gold divider */}
        <div style={{ height: '1px', backgroundColor: 'var(--color-gold)', opacity: 0.4, marginBottom: '1.5rem' }} />

        {/* Bottom bar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '0.75rem',
          }}
        >
          <p className="text-caption" style={{ color: 'var(--color-ash)', fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            © 2025 Mala Constructions. All rights reserved.
          </p>
          <p className="text-caption" style={{ color: 'var(--color-ash)', fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            Est. 1989 · Kolathur · Chennai
          </p>
        </div>
      </div>
    </footer>
  )
}
