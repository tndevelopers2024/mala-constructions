'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import MalaLogo from '@/components/ui/MalaLogo'
import EnquiryModal from '@/components/ui/EnquiryModal'

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Services', href: '/services' },
  { label: 'Stay', href: '/stay' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [enquiryOpen, setEnquiryOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: '0 1.5rem',
          height: '72px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: scrolled ? 'rgba(14,14,14,0.94)' : 'transparent',
          backdropFilter: scrolled ? 'blur(8px)' : 'none',
          transition: 'background-color 0.4s ease, backdrop-filter 0.4s ease',
          borderBottom: scrolled ? '1px solid var(--color-graphite)' : '1px solid transparent',
        }}
      >
        {/* Logo */}
        <Link href="/" aria-label="Mala Constructions home">
          <MalaLogo size="sm" />
        </Link>

        {/* Desktop Nav Links */}
        <div
          className="desktop-nav"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0',
          }}
        >
          {NAV_LINKS.map((link, i) => (
            <span key={link.href} style={{ display: 'flex', alignItems: 'center' }}>
              {i > 0 && (
                <span
                  style={{
                    display: 'inline-block',
                    width: '4px',
                    height: '4px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-gold)',
                    margin: '0 20px',
                    opacity: 0.6,
                  }}
                />
              )}
              <Link
                href={link.href}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '12px',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color: pathname === link.href ? 'var(--color-gold)' : 'var(--color-white)',
                  textDecoration: 'none',
                  fontWeight: 400,
                  transition: 'color 0.25s',
                  opacity: 0.88,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-gold)')}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color =
                    pathname === link.href ? 'var(--color-gold)' : 'var(--color-white)')
                }
              >
                {link.label}
              </Link>
            </span>
          ))}
        </div>

        {/* Enquire CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <button
            onClick={() => setEnquiryOpen(true)}
            className="desktop-nav"
            style={{
              border: '1px solid var(--color-gold)',
              background: 'transparent',
              color: 'var(--color-gold)',
              padding: '9px 20px',
              fontFamily: 'var(--font-body)',
              fontSize: '11px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              cursor: 'none',
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
            Enquire
          </button>

          {/* Hamburger */}
          <button
            className="mobile-nav"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'none',
              display: 'flex',
              flexDirection: 'column',
              gap: '5px',
              padding: '4px',
            }}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: 'block',
                  width: i === 1 ? '20px' : '28px',
                  height: '1.5px',
                  backgroundColor: 'var(--color-white)',
                  transition: 'all 0.3s',
                  transformOrigin: 'center',
                }}
              />
            ))}
          </button>
        </div>
      </nav>

      {/* Mobile Full Screen Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 999,
              backgroundColor: 'var(--color-obsidian)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '2.5rem',
            }}
          >
            <button
              onClick={() => setMenuOpen(false)}
              style={{
                position: 'absolute',
                top: '1.5rem',
                right: '1.5rem',
                background: 'none',
                border: 'none',
                color: 'var(--color-ash)',
                cursor: 'none',
                fontFamily: 'var(--font-body)',
                fontSize: '13px',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}
            >
              Close
            </button>
            {NAV_LINKS.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
              >
                <Link
                  href={link.href}
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '36px',
                    fontWeight: 300,
                    color: 'var(--color-white)',
                    textDecoration: 'none',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              onClick={() => { setEnquiryOpen(true); setMenuOpen(false) }}
              style={{
                border: '1px solid var(--color-gold)',
                background: 'transparent',
                color: 'var(--color-gold)',
                padding: '12px 32px',
                fontFamily: 'var(--font-body)',
                fontSize: '12px',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                cursor: 'none',
                marginTop: '1rem',
              }}
            >
              Enquire Now
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      <EnquiryModal open={enquiryOpen} onClose={() => setEnquiryOpen(false)} />

      <style>{`
        @media (min-width: 900px) {
          .mobile-nav { display: none !important; }
          .desktop-nav { display: flex !important; }
        }
        @media (max-width: 899px) {
          .desktop-nav { display: none !important; }
          .mobile-nav { display: flex !important; }
        }
      `}</style>
    </>
  )
}
