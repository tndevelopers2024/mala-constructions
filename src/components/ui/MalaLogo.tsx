'use client'

interface MalaLogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
  light?: boolean
}

export default function MalaLogo({ className = '', size = 'md', light = false }: MalaLogoProps) {
  const scales = { sm: 0.7, md: 1, lg: 1.5 }
  const scale = scales[size]
  const w = 120 * scale
  const h = 72 * scale
  const barColor = light ? '#0E0E0E' : '#FAFAF8'
  const goldColor = '#C9A870'

  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 120 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Mala Constructions logo"
    >
      {/* Skyline bars forming M silhouette */}
      {/* Bar 1 - far left */}
      <rect x="4" y="32" width="8" height="22" fill={barColor} opacity="0.9" />
      {/* Bar 2 */}
      <rect x="16" y="22" width="8" height="32" fill={barColor} />
      {/* Bar 3 - tallest left peak */}
      <rect x="28" y="10" width="8" height="44" fill={barColor} />
      {/* Bar 4 - valley */}
      <rect x="40" y="28" width="8" height="26" fill={barColor} opacity="0.85" />
      {/* Bar 5 - center */}
      <rect x="52" y="18" width="8" height="36" fill={barColor} />
      {/* Bar 6 - tallest right peak */}
      <rect x="64" y="8" width="8" height="46" fill={barColor} />
      {/* Crown on tallest bar */}
      <polygon points="64,8 68,2 72,8" fill={goldColor} />
      {/* Small crown points */}
      <rect x="65" y="4" width="1.5" height="4" fill={goldColor} />
      <rect x="70" y="4" width="1.5" height="4" fill={goldColor} />
      {/* Bar 7 */}
      <rect x="76" y="20" width="8" height="34" fill={barColor} />
      {/* Bar 8 */}
      <rect x="88" y="28" width="8" height="26" fill={barColor} opacity="0.85" />
      {/* Bar 9 - far right */}
      <rect x="100" y="34" width="8" height="20" fill={barColor} opacity="0.9" />

      {/* Gold baseline */}
      <rect x="4" y="54" width="112" height="1" fill={goldColor} />

      {/* MALA wordmark */}
      <text
        x="60"
        y="64"
        textAnchor="middle"
        fontFamily="'DM Sans', sans-serif"
        fontSize="11"
        fontWeight="500"
        letterSpacing="0.25em"
        fill={barColor}
      >
        MALA
      </text>

      {/* Since 1999 sub */}
      <text
        x="60"
        y="71"
        textAnchor="middle"
        fontFamily="'DM Sans', sans-serif"
        fontSize="5.5"
        fontWeight="300"
        letterSpacing="0.2em"
        fill={goldColor}
      >
        SINCE 1999
      </text>
    </svg>
  )
}
