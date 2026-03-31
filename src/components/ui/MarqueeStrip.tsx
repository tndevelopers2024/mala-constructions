'use client'

const MARQUEE_TEXT =
  'RESIDENTIAL · COMMERCIAL · RENOVATION · SINCE 1999 · KOLATHUR · CHENNAI · '

export default function MarqueeStrip() {
  const repeated = MARQUEE_TEXT.repeat(8)

  return (
    <div
      style={{
        backgroundColor: 'var(--color-ink)',
        borderTop: '1px solid var(--color-graphite)',
        borderBottom: '1px solid var(--color-graphite)',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        paddingTop: '14px',
        paddingBottom: '14px',
      }}
    >
      <div className="animate-marquee" style={{ display: 'inline-block' }}>
        <span
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '11px',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--color-ash)',
            fontWeight: 400,
          }}
        >
          {repeated}
        </span>
        <span
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '11px',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--color-ash)',
            fontWeight: 400,
          }}
        >
          {repeated}
        </span>
      </div>
    </div>
  )
}
