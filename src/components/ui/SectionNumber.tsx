'use client'

interface SectionNumberProps {
  number: string
  light?: boolean
}

export default function SectionNumber({ number, light = false }: SectionNumberProps) {
  return (
    <span
      aria-hidden="true"
      style={{
        position: 'absolute',
        fontFamily: 'var(--font-display)',
        fontSize: '180px',
        fontWeight: 300,
        color: light ? '#2C2A28' : 'var(--color-graphite)',
        opacity: light ? 0.15 : 1,
        lineHeight: 1,
        userSelect: 'none',
        pointerEvents: 'none',
        top: '-20px',
        right: '1.5rem',
        zIndex: 0,
        letterSpacing: '-0.04em',
      }}
    >
      {number}
    </span>
  )
}
