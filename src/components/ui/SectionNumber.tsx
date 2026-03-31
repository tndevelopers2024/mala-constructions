interface SectionNumberProps {
  number: string
  className?: string
}

export default function SectionNumber({ number, className = '' }: SectionNumberProps) {
  return (
    <span
      className={`absolute select-none pointer-events-none ${className}`}
      style={{
        fontFamily: 'var(--font-cormorant), serif',
        fontSize: '180px',
        fontWeight: 300,
        color: 'var(--color-graphite)',
        lineHeight: 1,
        opacity: 0.5,
      }}
      aria-hidden="true"
    >
      {number}
    </span>
  )
}
