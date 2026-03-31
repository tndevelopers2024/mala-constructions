'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import type { Project } from '@/data/projects'

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

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      style={{ display: 'block', textDecoration: 'none', position: 'relative' }}
    >
      <motion.div
        style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden' }}
        whileHover="hover"
        initial="rest"
      >
        {/* Image */}
        <Image
          src={project.coverImage}
          alt={`${project.title} — ${project.location}`}
          fill
          style={{ objectFit: 'cover', transition: 'transform 0.6s ease' }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Dark overlay — fades on hover */}
        <motion.div
          variants={{
            rest: { opacity: 0.72 },
            hover: { opacity: 0.3 },
          }}
          transition={{ duration: 0.35 }}
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'var(--color-obsidian)',
            zIndex: 1,
          }}
        />

        {/* Status + Type badges — top */}
        <div
          style={{
            position: 'absolute',
            top: '16px',
            left: '16px',
            zIndex: 3,
            display: 'flex',
            gap: '8px',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '10px',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: project.status === 'flagship' ? 'var(--color-obsidian)' : 'var(--color-ash)',
              backgroundColor:
                project.status === 'flagship' ? 'var(--color-gold)' : 'rgba(14,14,14,0.7)',
              border: project.status === 'flagship' ? 'none' : '1px solid var(--color-graphite)',
              padding: '4px 10px',
            }}
          >
            {STATUS_LABELS[project.status]}
          </span>
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '10px',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--color-ash)',
              backgroundColor: 'rgba(14,14,14,0.7)',
              border: '1px solid var(--color-graphite)',
              padding: '4px 10px',
            }}
          >
            {TYPE_LABELS[project.type]}
          </span>
        </div>

        {/* Project info — slides up from bottom */}
        <motion.div
          variants={{
            rest: { y: 0 },
            hover: { y: 0 },
          }}
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 3,
            padding: '24px 20px',
          }}
        >
          <motion.h3
            variants={{
              rest: { y: 12, opacity: 0.7 },
              hover: { y: 0, opacity: 1 },
            }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '22px',
              fontWeight: 400,
              color: 'var(--color-white)',
              lineHeight: 1.2,
              marginBottom: '4px',
            }}
          >
            {project.title}
          </motion.h3>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '12px',
              letterSpacing: '0.06em',
              color: 'var(--color-sand)',
              textTransform: 'uppercase',
            }}
          >
            {project.location}
          </p>

          {/* Gold border that draws left-to-right */}
          <motion.div
            variants={{
              rest: { scaleX: 0 },
              hover: { scaleX: 1 },
            }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            style={{
              height: '1px',
              backgroundColor: 'var(--color-gold)',
              transformOrigin: 'left',
              marginTop: '12px',
            }}
          />
        </motion.div>
      </motion.div>
    </Link>
  )
}
