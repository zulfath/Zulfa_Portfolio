'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SectionWrapperProps {
  id: string
  children: ReactNode
  className?: string
  noPadding?: boolean
}

export default function SectionWrapper({
  id,
  children,
  className,
  noPadding = false,
}: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className={cn(
        'section-wrapper',
        !noPadding && 'py-24 px-4 sm:px-6 lg:px-8',
        className
      )}
    >
      <div className="max-w-6xl mx-auto">{children}</div>
    </motion.section>
  )
}