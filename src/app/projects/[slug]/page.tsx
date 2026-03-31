import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { projects } from '@/data/projects'
import ProjectGallery from '@/components/projects/ProjectGallery'
import SapphireDetail from './SapphireDetail'
import GoldRule from '@/components/ui/GoldRule'
import Link from 'next/link'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) return {}
  return {
    title: `${project.title} | Mala Constructions`,
    description: project.description ?? `${project.title} — a ${project.type} project by Mala Constructions in ${project.location}.`,
  }
}

const STATUS_LABELS: Record<string, string> = {
  completed: 'Completed',
  ongoing: 'Ongoing',
  flagship: 'Flagship',
}

const TYPE_LABELS: Record<string, string> = {
  villa: 'Villa',
  apartment: 'Apartment',
  commercial: 'Commercial',
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) notFound()

  return (
    <>
      {/* Full-width hero */}
      <div style={{ position: 'relative', height: '60vh', marginTop: '72px' }}>
        <Image
          src={project.coverImage}
          alt={`${project.title} — ${project.location}`}
          fill
          style={{ objectFit: 'cover' }}
          priority
          sizes="100vw"
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 50%, rgba(14,14,14,0.85))' }} />
      </div>

      {/* Project header */}
      <section style={{ backgroundColor: 'var(--color-obsidian)' }} className="section-padding">
        <div className="max-content">
          {/* Breadcrumb */}
          <nav style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '2rem' }} aria-label="Breadcrumb">
            {[{ label: 'Home', href: '/' }, { label: 'Projects', href: '/projects' }, { label: project.title, href: '#' }].map((crumb, i) => (
              <span key={crumb.href} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                {i > 0 && <span style={{ color: 'var(--color-graphite)' }}>/</span>}
                {i < 2 ? (
                  <Link href={crumb.href} style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'var(--color-ash)', textDecoration: 'none' }}>
                    {crumb.label}
                  </Link>
                ) : (
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'var(--color-ash)' }}>{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
            {/* Left: project details */}
            <div>
              <div style={{ display: 'flex', gap: '8px', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
                {[STATUS_LABELS[project.status], TYPE_LABELS[project.type]].map((badge) => (
                  <span
                    key={badge}
                    style={{
                      border: '0.5px solid var(--color-graphite)',
                      padding: '4px 12px',
                      fontFamily: 'var(--font-body)',
                      fontSize: '10px',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'var(--color-ash)',
                    }}
                  >
                    {badge}
                  </span>
                ))}
              </div>

              <h1
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'var(--text-hero)',
                  fontWeight: 300,
                  color: 'var(--color-white)',
                  marginBottom: '0.5rem',
                }}
              >
                {project.title}
              </h1>

              <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--color-ash)', letterSpacing: '0.04em', marginBottom: '0.25rem' }}>
                {project.location}
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--color-ash)' }}>
                Client: {project.client}
              </p>

              {project.description && (
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: 'rgba(250,250,248,0.75)', lineHeight: 1.8, marginTop: '1.5rem' }}>
                  {project.description}
                </p>
              )}
            </div>

            {/* Right: CTA */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '0.5rem' }}>
                <GoldRule />
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-ash)' }}>
                  Interested?
                </span>
              </div>
              <Link
                href="/contact"
                style={{
                  border: '1px solid var(--color-gold)',
                  background: 'transparent',
                  color: 'var(--color-gold)',
                  padding: '14px 32px',
                  fontFamily: 'var(--font-body)',
                  fontSize: '12px',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  display: 'inline-block',
                  transition: 'background 0.3s, color 0.3s',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--color-gold)'; e.currentTarget.style.color = 'var(--color-obsidian)' }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--color-gold)' }}
              >
                Enquire About This Project
              </Link>
            </div>
          </div>

          {/* Gallery */}
          {project.gallery.length > 0 && (
            <ProjectGallery images={project.gallery} title={project.title} />
          )}
        </div>
      </section>

      {/* Sapphire-specific content */}
      {project.slug === 'malas-sapphire' && <SapphireDetail />}
    </>
  )
}
