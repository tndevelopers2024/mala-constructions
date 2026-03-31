'use client'

type FilterKey = 'all' | 'completed' | 'ongoing' | 'flagship' | 'villa' | 'apartment' | 'commercial'

const FILTERS: { key: FilterKey; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'completed', label: 'Completed' },
  { key: 'ongoing', label: 'Ongoing' },
  { key: 'flagship', label: 'Flagship' },
  { key: 'villa', label: 'Villa' },
  { key: 'apartment', label: 'Apartment' },
  { key: 'commercial', label: 'Commercial' },
]

interface ProjectFilterProps {
  active: FilterKey
  onChange: (key: FilterKey) => void
}

export default function ProjectFilter({ active, onChange }: ProjectFilterProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0',
        marginBottom: '3rem',
        borderBottom: '1px solid var(--color-graphite)',
      }}
    >
      {FILTERS.map((f) => (
        <button
          key={f.key}
          onClick={() => onChange(f.key)}
          style={{
            background: 'none',
            border: 'none',
            borderBottom: active === f.key ? '1px solid var(--color-gold)' : '1px solid transparent',
            marginBottom: '-1px',
            padding: '12px 20px',
            fontFamily: 'var(--font-body)',
            fontSize: '11px',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: active === f.key ? 'var(--color-gold)' : 'var(--color-ash)',
            cursor: 'none',
            transition: 'color 0.25s, border-color 0.25s',
          }}
          onMouseEnter={(e) => {
            if (active !== f.key) e.currentTarget.style.color = 'var(--color-white)'
          }}
          onMouseLeave={(e) => {
            if (active !== f.key) e.currentTarget.style.color = 'var(--color-ash)'
          }}
        >
          {f.label}
        </button>
      ))}
    </div>
  )
}

export type { FilterKey }
