'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PageHero from '@/components/ui/PageHero'
import ProjectCard from '@/components/projects/ProjectCard'
import ProjectFilter, { type FilterKey } from '@/components/projects/ProjectFilter'
import { projects } from '@/data/projects'

export default function ProjectsPage() {
  const [filter, setFilter] = useState<FilterKey>('all')

  const filtered = projects.filter((p) => {
    if (filter === 'all') return true
    if (['completed', 'ongoing', 'flagship'].includes(filter)) return p.status === filter
    return p.type === filter
  })

  return (
    <>
      <PageHero
        headline="Our Work"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Projects', href: '/projects' },
        ]}
        imageUrl="https://picsum.photos/seed/projects-hero/1920/1080"
      />

      <section style={{ backgroundColor: 'var(--color-obsidian)' }} className="section-padding">
        <div className="max-content">
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
    </>
  )
}
