interface MalaLogoProps {
  className?: string
  variant?: 'light' | 'dark'
  size?: 'sm' | 'md' | 'lg'
}

export default function MalaLogo({ className = '', variant = 'light', size = 'md' }: MalaLogoProps) {
  const fill = variant === 'light' ? 'var(--color-white)' : 'var(--color-obsidian)'
  const goldFill = 'var(--color-gold)'

  const sizeMap = {
    sm: { width: 80, height: 60 },
    md: { width: 120, height: 90 },
    lg: { width: 160, height: 120 },
  }

  const { width, height } = sizeMap[size]

  return (
    <svg
      viewBox="0 0 160 120"
      width={width}
      height={height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Mala Constructions Logo"
    >
      {/* Skyline bars forming M silhouette */}
      <rect x="20" y="50" width="8" height="30" fill={fill} />
      <rect x="32" y="38" width="8" height="42" fill={fill} />
      <rect x="44" y="26" width="8" height="54" fill={fill} />
      <rect x="56" y="38" width="8" height="42" fill={fill} />
      <rect x="68" y="50" width="8" height="30" fill={fill} />
      <rect x="80" y="38" width="8" height="42" fill={fill} />
      <rect x="92" y="26" width="8" height="54" fill={fill} />
      <rect x="104" y="14" width="8" height="66" fill={fill} />
      <rect x="116" y="26" width="8" height="54" fill={fill} />
      <rect x="128" y="38" width="8" height="42" fill={fill} />

      {/* Crown accent above tallest bar */}
      <polygon points="108,8 104,14 112,14" fill={goldFill} />
      <line x1="106" y1="5" x2="110" y2="5" stroke={goldFill} strokeWidth="1.5" />
      <line x1="108" y1="3" x2="108" y2="7" stroke={goldFill} strokeWidth="1" />

      {/* MALA wordmark */}
      <text
        x="80"
        y="98"
        textAnchor="middle"
        fill={fill}
        fontFamily="var(--font-dm-sans), sans-serif"
        fontSize="16"
        fontWeight="500"
        letterSpacing="0.25em"
      >
        MALA
      </text>

      {/* SINCE 1999 sub-text */}
      <text
        x="80"
        y="112"
        textAnchor="middle"
        fill={goldFill}
        fontFamily="var(--font-dm-sans), sans-serif"
        fontSize="7"
        fontWeight="400"
        letterSpacing="0.15em"
      >
        SINCE 1999
      </text>
    </svg>
  )
}
