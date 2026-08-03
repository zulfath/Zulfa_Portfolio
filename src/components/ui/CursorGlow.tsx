'use client'

import { useEffect, useRef } from 'react'

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return
    const move = (e: MouseEvent) => {
      if (!glowRef.current) return
      glowRef.current.style.transform =
        `translate(${e.clientX - 200}px, ${e.clientY - 200}px)`
    }
    window.addEventListener('mousemove', move, { passive: true })
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <div
      ref={glowRef}
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-0 w-[400px] h-[400px]
                 rounded-full transition-transform duration-[80ms] ease-out
                 dark:opacity-[0.06] opacity-[0.04]"
      style={{ background: 'radial-gradient(circle, var(--accent-violet) 0%, transparent 70%)' }}
    />
  )
}