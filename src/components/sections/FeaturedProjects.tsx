'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import GoldRule from '@/components/ui/GoldRule'
import SectionNumber from '@/components/ui/SectionNumber'
import AnimatedHeading from '@/components/ui/AnimatedHeading'
import ProjectCard from '@/components/projects/ProjectCard'
import ProjectFilter, { type FilterKey } from '@/components/projects/ProjectFilter'
import { projects } from '@/data/projects'

export default function FeaturedProjects() {
  const [filter, setFilter] = useState<FilterKey>('all')

  const filtered = projects.filter((p) => {
    if (filter === 'all') return true
    if (['completed', 'ongoing', 'flagship'].includes(filter)) return p.status === filter
    return p.type === filter
  })

  return (
    <section
      style={{ backgroundColor: 'var(--color-obsidian)', position: 'relative', overflow: 'hidden' }}
      className="section-padding"
    >
      <SectionNumber number="03" />

      <div className="max-content">
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '1rem' }}>
          <GoldRule />
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '11px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--color-ash)',
            }}
          >
            Recent Work
          </span>
        </div>

        <div style={{ marginBottom: '3rem' }}>
          <AnimatedHeading
            text="Projects That Define Chennai's Skyline"
            as="h2"
            style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-hero)', fontWeight: 300, color: 'var(--color-white)' }}
          />
        </div>

        <ProjectFilter active={filter} onChange={setFilter} />

        <motion.div
          layout
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '1.5rem',
          }}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
