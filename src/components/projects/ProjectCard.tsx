'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin } from 'lucide-react'
import type { Project } from '@/data/projects'
import { getProjectImageUrl } from '@/lib/utils'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const imageUrl = getProjectImageUrl(project.slug)

  return (
    <Link href={`/projects/${project.slug}`}>
      <motion.div
        className="group relative overflow-hidden"
        style={{ aspectRatio: '4/3' }}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Image */}
        <Image
          src={imageUrl}
          alt={`${project.title} - ${project.location}`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Dark overlay */}
        <div
          className="absolute inset-0 transition-opacity duration-500"
          style={{
            backgroundColor: 'rgba(14, 14, 14, 0.65)',
          }}
        />
        <div
          className="absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
          style={{
            backgroundColor: 'rgba(14, 14, 14, 0.30)',
          }}
        />

        {/* Status badge */}
        <div className="absolute top-4 left-4 z-10">
          <span
            className="px-3 py-1"
            style={{
              fontFamily: 'var(--font-dm-sans), sans-serif',
              fontSize: '10px',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: project.status === 'flagship' ? 'var(--color-obsidian)' : 'var(--color-white)',
              backgroundColor: project.status === 'flagship' ? 'var(--color-gold)' : 'rgba(250, 250, 248, 0.15)',
              border: project.status === 'flagship' ? 'none' : '1px solid rgba(250, 250, 248, 0.2)',
            }}
          >
            {project.status}
          </span>
        </div>

        {/* Content — slides up on hover */}
        <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-10">
          <h3
            style={{
              fontFamily: 'var(--font-cormorant), serif',
              fontSize: '24px',
              fontWeight: 400,
              color: 'var(--color-white)',
            }}
          >
            {project.title}
          </h3>
          <div className="flex items-center gap-1.5 mt-1">
            <MapPin size={12} style={{ color: 'var(--color-gold)' }} />
            <span
              style={{
                fontFamily: 'var(--font-dm-sans), sans-serif',
                fontSize: '12px',
                color: 'var(--color-ash)',
              }}
            >
              {project.location}
            </span>
          </div>
        </div>

        {/* Gold bottom border draw */}
        <div
          className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-[400ms] ease-out"
          style={{ backgroundColor: 'var(--color-gold)' }}
        />
      </motion.div>
    </Link>
  )
}
