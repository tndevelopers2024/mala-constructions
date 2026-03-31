'use client'

export default function MarqueeStrip() {
  const text = 'RESIDENTIAL \u00B7 COMMERCIAL \u00B7 RENOVATION \u00B7 SINCE 1999 \u00B7 KOLATHUR \u00B7 CHENNAI \u00B7 '

  return (
    <div
      className="w-full overflow-hidden py-5"
      style={{ backgroundColor: 'var(--color-ink)', borderTop: '1px solid var(--color-graphite)', borderBottom: '1px solid var(--color-graphite)' }}
    >
      <div className="animate-marquee flex whitespace-nowrap" style={{ width: 'max-content' }}>
        {Array.from({ length: 12 }).map((_, i) => (
          <span
            key={i}
            className="mx-4"
            style={{
              fontFamily: 'var(--font-dm-sans), sans-serif',
              fontSize: '11px',
              letterSpacing: '0.08em',
              color: 'var(--color-ash)',
              textTransform: 'uppercase',
            }}
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  )
}
