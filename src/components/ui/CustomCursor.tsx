'use client'

import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const [hovered, setHovered] = useState(false)
  const pos = useRef({ x: -100, y: -100 })
  const current = useRef({ x: -100, y: -100 })
  const raf = useRef<number>(0)

  useEffect(() => {
    const isTouchDevice = window.matchMedia('(hover: none)').matches
    if (isTouchDevice) return

    const move = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY }
    }

    const onEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest('a, button, [data-cursor-hover]')) {
        setHovered(true)
      }
    }

    const onLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest('a, button, [data-cursor-hover]')) {
        setHovered(false)
      }
    }

    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', onEnter)
    window.addEventListener('mouseout', onLeave)

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t

    const animate = () => {
      current.current.x = lerp(current.current.x, pos.current.x, 0.12)
      current.current.y = lerp(current.current.y, pos.current.y, 0.12)

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${current.current.x}px, ${current.current.y}px)`
      }

      raf.current = requestAnimationFrame(animate)
    }

    raf.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', onEnter)
      window.removeEventListener('mouseout', onLeave)
      cancelAnimationFrame(raf.current)
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 99998,
        pointerEvents: 'none',
        willChange: 'transform',
        width: hovered ? '40px' : '10px',
        height: hovered ? '40px' : '10px',
        marginLeft: hovered ? '-20px' : '-5px',
        marginTop: hovered ? '-20px' : '-5px',
        borderRadius: '50%',
        backgroundColor: hovered ? 'transparent' : 'var(--color-gold)',
        border: hovered ? '1.5px solid var(--color-gold)' : 'none',
        transition: 'width 0.25s ease, height 0.25s ease, margin 0.25s ease, background-color 0.25s ease',
      }}
    />
  )
}
