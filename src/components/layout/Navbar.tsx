'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import MalaLogo from '@/components/ui/MalaLogo'
import EnquiryModal from '@/components/ui/EnquiryModal'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/services', label: 'Services' },
  { href: '/stay', label: 'Stay' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [enquiryOpen, setEnquiryOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-[100] transition-all duration-500"
        style={{
          backgroundColor: scrolled ? 'rgba(14,14,14,0.94)' : 'transparent',
          backdropFilter: scrolled ? 'blur(8px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(8px)' : 'none',
        }}
      >
        <div className="w-full px-6 md:px-12 lg:px-16">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" aria-label="Mala Constructions Home">
              <MalaLogo size="sm" variant="light" />
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-0">
              {navLinks.map((link, i) => (
                <div key={link.href} className="flex items-center">
                  <Link
                    href={link.href}
                    className="px-4 py-2 transition-colors duration-300"
                    style={{
                      fontFamily: 'var(--font-dm-sans), sans-serif',
                      fontSize: '12px',
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      color: pathname === link.href ? 'var(--color-gold)' : 'var(--color-white)',
                    }}
                    onMouseEnter={(e) => {
                      if (pathname !== link.href) e.currentTarget.style.color = 'var(--color-gold-light)'
                    }}
                    onMouseLeave={(e) => {
                      if (pathname !== link.href) e.currentTarget.style.color = 'var(--color-white)'
                    }}
                  >
                    {link.label}
                  </Link>
                  {i < navLinks.length - 1 && (
                    <span
                      className="w-[3px] h-[3px] rounded-full flex-shrink-0"
                      style={{ backgroundColor: 'var(--color-gold)' }}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Desktop CTA */}
            <button
              onClick={() => setEnquiryOpen(true)}
              className="hidden lg:block px-6 py-2.5 transition-all duration-300"
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
              Enquire
            </button>

            {/* Mobile Hamburger */}
            <button
              className="lg:hidden p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              style={{ color: 'var(--color-white)' }}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[99] flex flex-col items-center justify-center"
            style={{ backgroundColor: 'var(--color-obsidian)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    className="block text-center transition-colors duration-300"
                    style={{
                      fontFamily: 'var(--font-cormorant), serif',
                      fontSize: '32px',
                      fontWeight: 300,
                      color: pathname === link.href ? 'var(--color-gold)' : 'var(--color-white)',
                    }}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1, duration: 0.4 }}
                onClick={() => {
                  setMobileOpen(false)
                  setEnquiryOpen(true)
                }}
                className="mt-4 px-8 py-3 transition-all duration-300"
                style={{
                  border: '1px solid var(--color-gold)',
                  backgroundColor: 'transparent',
                  fontFamily: 'var(--font-dm-sans), sans-serif',
                  fontSize: '12px',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--color-gold)',
                }}
              >
                Enquire Now
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <EnquiryModal isOpen={enquiryOpen} onClose={() => setEnquiryOpen(false)} />
    </>
  )
}
