'use client'

import Link from 'next/link'
import MalaLogo from '@/components/ui/MalaLogo'
import { Phone, Mail, Globe, MapPin } from 'lucide-react'

const footerLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/projects', label: 'Projects' },
  { href: '/services', label: 'Services' },
  { href: '/stay', label: 'Stay' },
  { href: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--color-ink)' }}>
      <div className="max-w-[1320px] mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Left Column — Logo + Tagline */}
          <div>
            <MalaLogo size="lg" variant="light" />
            <p
              className="mt-6 max-w-xs"
              style={{
                fontFamily: 'var(--font-cormorant), serif',
                fontSize: '20px',
                fontWeight: 300,
                fontStyle: 'italic',
                color: 'var(--color-sand)',
              }}
            >
              Transforming Spaces Since 1999
            </p>
            <p
              className="mt-3 max-w-xs"
              style={{
                fontFamily: 'var(--font-dm-sans), sans-serif',
                fontSize: '14px',
                color: 'var(--color-ash)',
                lineHeight: 1.6,
              }}
            >
              From Land to Landmark — Chennai&apos;s trusted construction partner for over 35 years.
            </p>
          </div>

          {/* Center Column — Nav Links */}
          <div>
            <h4
              className="mb-6"
              style={{
                fontFamily: 'var(--font-dm-sans), sans-serif',
                fontSize: '11px',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--color-gold)',
              }}
            >
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="transition-colors duration-300"
                  style={{
                    fontFamily: 'var(--font-dm-sans), sans-serif',
                    fontSize: '14px',
                    color: 'var(--color-ash)',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-gold-light)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-ash)')}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Right Column — Contact */}
          <div>
            <h4
              className="mb-6"
              style={{
                fontFamily: 'var(--font-dm-sans), sans-serif',
                fontSize: '11px',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--color-gold)',
              }}
            >
              Get in Touch
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={16} style={{ color: 'var(--color-gold)', flexShrink: 0, marginTop: 3 }} />
                <p
                  style={{
                    fontFamily: 'var(--font-dm-sans), sans-serif',
                    fontSize: '14px',
                    color: 'var(--color-ash)',
                    lineHeight: 1.6,
                  }}
                >
                  6, Shanthi Nagar, 1st Main Road,
                  <br />
                  Kolathur, Chennai &ndash; 600 099
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} style={{ color: 'var(--color-gold)', flexShrink: 0 }} />
                <div>
                  <a
                    href="tel:+919840264993"
                    className="block transition-colors duration-300"
                    style={{
                      fontFamily: 'var(--font-dm-sans), sans-serif',
                      fontSize: '14px',
                      color: 'var(--color-ash)',
                    }}
                  >
                    9840264993
                  </a>
                  <a
                    href="tel:+919789931141"
                    className="block transition-colors duration-300"
                    style={{
                      fontFamily: 'var(--font-dm-sans), sans-serif',
                      fontSize: '14px',
                      color: 'var(--color-ash)',
                    }}
                  >
                    9789931141
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} style={{ color: 'var(--color-gold)', flexShrink: 0 }} />
                <a
                  href="mailto:malaconstructionschennai@gmail.com"
                  className="transition-colors duration-300"
                  style={{
                    fontFamily: 'var(--font-dm-sans), sans-serif',
                    fontSize: '13px',
                    color: 'var(--color-ash)',
                  }}
                >
                  malaconstructionschennai@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Globe size={16} style={{ color: 'var(--color-gold)', flexShrink: 0 }} />
                <a
                  href="https://malaconstructions.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-300"
                  style={{
                    fontFamily: 'var(--font-dm-sans), sans-serif',
                    fontSize: '14px',
                    color: 'var(--color-ash)',
                  }}
                >
                  malaconstructions.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="w-full"
        style={{
          borderTop: '1px solid var(--color-gold)',
        }}
      >
        <div className="max-w-[1320px] mx-auto px-6 md:px-12 py-5">
          <p
            className="text-center"
            style={{
              fontFamily: 'var(--font-dm-sans), sans-serif',
              fontSize: '11px',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: 'var(--color-ash)',
            }}
          >
            &copy; 2025 Mala Constructions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
