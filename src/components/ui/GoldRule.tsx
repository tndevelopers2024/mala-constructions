'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { lineGrow } from '@/lib/animations'

interface GoldRuleProps {
  className?: string
}

export default function GoldRule({ className = '' }: GoldRuleProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      variants={lineGrow}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      style={{
        width: '60px',
        height: '1px',
        backgroundColor: 'var(--color-gold)',
        transformOrigin: 'left',
      }}
      className={className}
    />
  )
}
