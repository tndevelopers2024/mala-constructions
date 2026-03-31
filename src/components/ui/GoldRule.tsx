'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { lineGrow } from '@/lib/animations'

interface GoldRuleProps {
  className?: string
  width?: number
}

export default function GoldRule({ className = '', width = 60 }: GoldRuleProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ width, height: 1, backgroundColor: 'var(--color-gold)', transformOrigin: 'left' }}
      variants={lineGrow}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    />
  )
}
