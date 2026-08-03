'use client'

import { useEffect, useState } from 'react'
import { motion, useSpring, useTransform } from 'framer-motion'

export default function ScrollProgressBar() {
  const [progress, setProgress] = useState(0)

  const springValue = useSpring(0, { stiffness: 160, damping: 28, restDelta: 0.001 })
  const scaleX = useTransform(springValue, [0, 100], [0, 1])

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      setProgress(pct)
    }
    window.addEventListener('scroll', update, { passive: true })
    update()
    return () => window.removeEventListener('scroll', update)
  }, [])

  useEffect(() => {
    springValue.set(progress)
  }, [progress, springValue])

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[60] h-[3px] origin-left"
      style={{
        scaleX,
        background: 'linear-gradient(90deg, var(--accent-cyan), var(--accent-violet))',
      }}
    />
  )
}