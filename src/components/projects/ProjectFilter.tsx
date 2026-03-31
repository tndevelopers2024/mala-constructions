'use client'

import { motion } from 'framer-motion'

type FilterValue = 'all' | 'completed' | 'ongoing' | 'villa' | 'commercial' | 'apartment'

interface ProjectFilterProps {
  active: FilterValue
  onChange: (value: FilterValue) => void
}

const filters: { label: string; value: FilterValue }[] = [
  { label: 'All', value: 'all' },
  { label: 'Completed', value: 'completed' },
  { label: 'Ongoing', value: 'ongoing' },
  { label: 'Villa', value: 'villa' },
  { label: 'Commercial', value: 'commercial' },
  { label: 'Apartment', value: 'apartment' },
]

export default function ProjectFilter({ active, onChange }: ProjectFilterProps) {
  return (
    <div className="flex flex-wrap gap-1 md:gap-0">
      {filters.map((filter) => (
        <button
          key={filter.value}
          onClick={() => onChange(filter.value)}
          className="relative px-4 py-2.5 transition-colors duration-300"
          style={{
            fontFamily: 'var(--font-dm-sans), sans-serif',
            fontSize: '11px',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: active === filter.value ? 'var(--color-gold)' : 'var(--color-ash)',
          }}
        >
          {filter.label}
          {active === filter.value && (
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-[1px]"
              style={{ backgroundColor: 'var(--color-gold)' }}
              layoutId="filter-indicator"
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            />
          )}
        </button>
      ))}
    </div>
  )
}
