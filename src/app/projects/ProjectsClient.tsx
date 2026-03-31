'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import AnimatedHeading from '@/components/ui/AnimatedHeading'
import ProjectCard from '@/components/projects/ProjectCard'
import ProjectFilter from '@/components/projects/ProjectFilter'
import { projects } from '@/data/projects'

type FilterValue = 'all' | 'completed' | 'ongoing' | 'villa' | 'commercial' | 'apartment'

export default function ProjectsClient() {
  const [filter, setFilter] = useState<FilterValue>('all')

  const filtered = projects.filter((p) => {
    if (filter === 'all') return true
    if (['completed', 'ongoing'].includes(filter)) return p.status === filter || (filter === 'completed' && p.status === 'flagship')
    return p.type === filter
  })

  return (
    <>
      {/* Page Hero */}
      <section className="relative flex items-end" style={{ height: '50vh', minHeight: '400px' }}>
        <Image
          src="https://picsum.photos/seed/projects-hero/1920/1080"
          alt="Our construction projects across Chennai"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(14, 14, 14, 0.65)' }} />
        <div className="relative z-10 max-w-[1320px] mx-auto w-full px-6 md:px-12 pb-12">
          <p className="mb-3" style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: '12px', color: 'var(--color-ash)' }}>
            <Link href="/" className="hover:text-[var(--color-gold)] transition-colors duration-300">Home</Link>
            {' / '}
            <span style={{ color: 'var(--color-white)' }}>Projects</span>
          </p>
          <AnimatedHeading
            text="Our Work"
            as="h1"
            style={{ fontSize: 'var(--text-hero)', color: 'var(--color-white)' }}
          />
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-24 md:py-32 lg:py-40" style={{ backgroundColor: 'var(--color-obsidian)' }}>
        <div className="max-w-[1320px] mx-auto px-6 md:px-12">
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
      </section>
    </>
  )
}
