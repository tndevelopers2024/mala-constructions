'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { staggerContainer, wordReveal } from '@/lib/animations'

import { CSSProperties } from 'react'

interface AnimatedHeadingProps {
  text: string
  className?: string
  as?: 'h1' | 'h2' | 'h3'
  goldWord?: string
  style?: CSSProperties
}

export default function AnimatedHeading({
  text,
  className = '',
  as: Tag = 'h2',
  goldWord,
  style,
}: AnimatedHeadingProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const words = text.split(' ')

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        fontFamily: 'var(--font-cormorant), serif',
        fontWeight: 300,
        ...style,
      }}
    >
      <motion.span
        className="inline-flex flex-wrap"
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {words.map((word, i) => (
          <motion.span
            key={i}
            variants={wordReveal}
            className={`inline-block mr-[0.3em] ${
              goldWord && word.replace(/[^a-zA-Z]/g, '') === goldWord
                ? 'gold-underline'
                : ''
            }`}
          >
            {word}
          </motion.span>
        ))}
      </motion.span>
    </Tag>
  )
}
