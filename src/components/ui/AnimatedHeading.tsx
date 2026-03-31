'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface AnimatedHeadingProps {
  text: string
  className?: string
  style?: React.CSSProperties
  goldWord?: string
  as?: 'h1' | 'h2' | 'h3'
  delay?: number
}

export default function AnimatedHeading({
  text,
  className = '',
  style = {},
  goldWord,
  as: Tag = 'h2',
  delay = 0,
}: AnimatedHeadingProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const words = text.split(' ')

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.08, delayChildren: delay },
    },
  }

  const wordVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  }

  return (
    <Tag className={className} style={style}>
      <motion.span
        ref={ref}
        variants={container}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        style={{ display: 'block' }}
      >
        {words.map((word, i) => (
          <motion.span
            key={i}
            variants={wordVariant}
            style={{
              display: 'inline-block',
              marginRight: '0.25em',
              ...(word === goldWord
                ? {
                    textDecoration: 'underline',
                    textDecorationColor: 'var(--color-gold)',
                    textUnderlineOffset: '8px',
                  }
                : {}),
            }}
          >
            {word}
          </motion.span>
        ))}
      </motion.span>
    </Tag>
  )
}
