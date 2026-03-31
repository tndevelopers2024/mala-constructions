'use client'

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import GoldRule from '@/components/ui/GoldRule'
import SectionNumber from '@/components/ui/SectionNumber'
import AnimatedHeading from '@/components/ui/AnimatedHeading'
import ProjectCard from '@/components/projects/ProjectCard'
import ProjectFilter from '@/components/projects/ProjectFilter'
import { projects } from '@/data/projects'

type FilterValue = 'all' | 'completed' | 'ongoing' | 'villa' | 'commercial' | 'apartment'

export default function FeaturedProjects() {
  const [filter, setFilter] = useState<FilterValue>('all')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const filtered = projects.filter((p) => {
    if (filter === 'all') return true
    if (['completed', 'ongoing'].includes(filter)) return p.status === filter || (filter === 'completed' && p.status === 'flagship')
    return p.type === filter
  })

  return (
    <section
      ref={ref}
      className="relative py-24 md:py-32 lg:py-40"
      style={{ backgroundColor: 'var(--color-obsidian)' }}
    >
      <div className="max-w-[1320px] mx-auto px-6 md:px-12 relative">
        <SectionNumber number="03" className="-top-8 -left-2 md:left-0" />

        <div className="relative z-10">
          <GoldRule className="mb-4" />
          <span
            className="block mb-4"
            style={{
              fontFamily: 'var(--font-dm-sans), sans-serif',
              fontSize: '11px',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--color-ash)',
            }}
          >
            Recent Work
          </span>

          <AnimatedHeading
            text="Projects That Define Chennai's Skyline"
            className="mb-10"
            style={{
              fontSize: 'var(--text-hero)',
              color: 'var(--color-white)',
            }}
          />

          <div className="mb-10">
            <ProjectFilter active={filter} onChange={setFilter} />
          </div>

          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <motion.div
                  key={project.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
