'use client'

import { useEffect, useRef, useState, useCallback } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const posRef = useRef({ x: 0, y: 0 })
  const targetRef = useRef({ x: 0, y: 0 })
  const rafRef = useRef<number>(0)

  const animate = useCallback(() => {
    const lerp = 0.15
    posRef.current.x += (targetRef.current.x - posRef.current.x) * lerp
    posRef.current.y += (targetRef.current.y - posRef.current.y) * lerp

    if (cursorRef.current) {
      cursorRef.current.style.transform = `translate(${posRef.current.x}px, ${posRef.current.y}px) translate(-50%, -50%)`
    }
    rafRef.current = requestAnimationFrame(animate)
  }, [])

  useEffect(() => {
    // Only show on pointer:fine devices
    if (window.matchMedia('(pointer: coarse)').matches) return

    const onMouseMove = (e: MouseEvent) => {
      targetRef.current = { x: e.clientX, y: e.clientY }
      if (!isVisible) setIsVisible(true)
    }

    const onMouseEnter = () => setIsVisible(true)
    const onMouseLeave = () => setIsVisible(false)

    const handleHoverElements = () => {
      const hoverables = document.querySelectorAll('a, button, [role="button"], input, textarea, select, label')
      hoverables.forEach((el) => {
        el.addEventListener('mouseenter', () => setIsHovering(true))
        el.addEventListener('mouseleave', () => setIsHovering(false))
      })
    }

    window.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseenter', onMouseEnter)
    document.addEventListener('mouseleave', onMouseLeave)

    handleHoverElements()
    rafRef.current = requestAnimationFrame(animate)

    // Re-check for new hoverable elements periodically
    const observer = new MutationObserver(handleHoverElements)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseenter', onMouseEnter)
      document.removeEventListener('mouseleave', onMouseLeave)
      cancelAnimationFrame(rafRef.current)
      observer.disconnect()
    }
  }, [animate, isVisible])

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null
  }

  return (
    <div
      ref={cursorRef}
      className="custom-cursor fixed top-0 left-0 pointer-events-none z-[10000]"
      style={{
        width: isHovering ? 40 : 10,
        height: isHovering ? 40 : 10,
        borderRadius: '50%',
        backgroundColor: isHovering ? 'transparent' : 'var(--color-gold)',
        border: isHovering ? '1.5px solid var(--color-gold)' : 'none',
        transition: 'width 0.25s ease, height 0.25s ease, background-color 0.25s ease, border 0.25s ease',
        opacity: isVisible ? 1 : 0,
        mixBlendMode: 'difference',
      }}
    />
  )
}
