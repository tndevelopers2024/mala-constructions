import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import PageHero from '@/components/ui/PageHero'
import GoldRule from '@/components/ui/GoldRule'
import AnimatedHeading from '@/components/ui/AnimatedHeading'
import {
  Wifi, Home, Sparkles, UtensilsCrossed, Waves,
  ChefHat, Phone, Package, Car
} from 'lucide-react'

export const metadata: Metadata = {
  title: "At The Top — Stay by Mala's | Luxury Penthouse Chennai",
  description:
    'Experience luxury penthouse living in the heart of Chennai. 6 km from Chennai Central. Private pool, smart home, personalized service.',
}

const AMENITIES = [
  { icon: Wifi, label: 'Free Wi-Fi', desc: 'High-speed connectivity throughout' },
  { icon: Home, label: 'Smart Home', desc: 'Fully automated lighting and climate' },
  { icon: Sparkles, label: 'Daily Housekeeping', desc: 'Fresh linens and full service daily' },
  { icon: UtensilsCrossed, label: 'Personalized Dining', desc: 'Curated meals on your schedule' },
  { icon: Waves, label: 'Private Swimming Pool', desc: 'Exclusive rooftop pool access' },
  { icon: ChefHat, label: 'Self Cooking Kitchen', desc: 'Fully equipped modern kitchen' },
  { icon: Phone, label: '24/7 Service on Call', desc: 'Dedicated concierge around the clock' },
  { icon: Package, label: 'Food Delivery', desc: 'Curated restaurant delivery options' },
  { icon: Car, label: '24/7 Cab', desc: 'Dedicated transport available' },
]

const GALLERY_SEEDS = [
  { seed: 'stay-living', label: 'Living Room' },
  { seed: 'stay-dining', label: 'Dining Area' },
  { seed: 'stay-dining2', label: 'Private Dining' },
  { seed: 'stay-bedroom', label: 'Master Bedroom' },
  { seed: 'stay-pool', label: 'Rooftop Pool' },
  { seed: 'stay-kitchen', label: 'Kitchen' },
]

export default function StayPage() {
  return (
    <>
      <PageHero
        headline="At The Top"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Stay', href: '/stay' },
        ]}
        imageUrl="https://picsum.photos/seed/stay-penthouse-hero/1920/1080"
        halfHeight={false}
      />

      <section style={{ backgroundColor: 'var(--color-obsidian)' }} className="section-padding">
        <div className="max-content">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '1.25rem' }}>
                <GoldRule />
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-ash)' }}>
                  Luxury Hospitality
                </span>
              </div>
              <AnimatedHeading
                text="Stay by Mala's: Your Luxury Escape in the Heart of Chennai"
                as="h2"
                style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-hero)', fontWeight: 300, color: 'var(--color-white)', marginBottom: '1.5rem' }}
              />
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: 'rgba(250,250,248,0.75)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                Located just 6 km from Chennai Central, At The Top is a stunning penthouse that redefines urban living. Every detail has been curated to deliver an experience that is both intimate and effortlessly luxurious.
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: 'rgba(250,250,248,0.75)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                Whether you are visiting Chennai for business or leisure, At The Top offers the perfect sanctuary — combining the comfort of a private home with the seamless service of a luxury hotel.
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: 'rgba(250,250,248,0.75)', lineHeight: 1.8 }}>
                From the rooftop pool to the smart home systems, every corner of this residence has been designed with the same precision and care that Mala Constructions brings to every project.
              </p>
            </div>
            <div style={{ position: 'relative', aspectRatio: '3/4' }}>
              <Image
                src="https://picsum.photos/seed/stay-main-feature/800/1067"
                alt="At The Top penthouse — luxury living in Chennai"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: 'var(--color-cream)' }} className="section-padding">
        <div className="max-content">
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '1rem' }}>
            <GoldRule />
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-ash)' }}>
              Amenities
            </span>
          </div>
          <AnimatedHeading
            text="Everything You Need, Nothing You Don't"
            as="h2"
            style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-hero)', fontWeight: 300, color: 'var(--color-ink)', marginBottom: '3rem' }}
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1.5rem' }}>
            {AMENITIES.map(({ icon: Icon, label, desc }) => (
              <div
                key={label}
                style={{ border: '0.5px solid #C2B49A40', padding: '2rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', transition: 'border-color 0.25s' }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = 'var(--color-gold)')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = '#C2B49A40')}
              >
                <Icon size={28} style={{ color: 'var(--color-gold)' }} />
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 400, color: 'var(--color-ink)' }}>{label}</h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--color-ash)', lineHeight: 1.6 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: 'var(--color-ink)' }} className="section-padding">
        <div className="max-content">
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '1rem' }}>
            <GoldRule />
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-ash)' }}>
              The Space
            </span>
          </div>
          <AnimatedHeading
            text="Inside At The Top"
            as="h2"
            style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-hero)', fontWeight: 300, color: 'var(--color-white)', marginBottom: '2.5rem' }}
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1rem' }}>
            {GALLERY_SEEDS.map(({ seed, label }) => (
              <div key={seed} style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden' }}>
                <Image
                  src={`https://picsum.photos/seed/${seed}/800/600`}
                  alt={`At The Top — ${label}`}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1rem', background: 'linear-gradient(to top, rgba(14,14,14,0.8) 0%, transparent 100%)' }}>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '12px', letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--color-sand)' }}>{label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: 'var(--color-obsidian)', textAlign: 'center', borderTop: '1px solid var(--color-graphite)' }} className="section-padding">
        <div className="max-content" style={{ maxWidth: '640px', margin: '0 auto' }}>
          <div style={{ width: '60px', height: '1px', backgroundColor: 'var(--color-gold)', margin: '0 auto 2rem' }} />
          <AnimatedHeading
            text="Elevate Your Chennai Stay"
            as="h2"
            style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-hero)', fontWeight: 300, color: 'var(--color-white)', marginBottom: '1rem' }}
          />
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: 'var(--color-ash)', marginBottom: '2.5rem' }}>
            Located just 6 km from Chennai Central
          </p>
          <Link
            href="/contact"
            style={{ display: 'inline-block', border: '1px solid var(--color-gold)', background: 'transparent', color: 'var(--color-gold)', padding: '16px 40px', fontFamily: 'var(--font-body)', fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none', transition: 'background 0.3s, color 0.3s' }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--color-gold)'; e.currentTarget.style.color = 'var(--color-obsidian)' }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--color-gold)' }}
          >
            Enquire for Availability →
          </Link>
        </div>
      </section>
    </>
  )
}
