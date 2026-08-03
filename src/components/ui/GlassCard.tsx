import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface GlassCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  strong?: boolean
}

export default function GlassCard({
  children,
  className,
  hover = false,
  strong = false,
}: GlassCardProps) {
  return (
    <div
      className={cn(
        strong ? 'glass-strong' : 'glass',
        hover && [
          'transition-all duration-300 cursor-pointer',
          'hover:border-[var(--accent-cyan)] hover:shadow-[0_8px_40px_var(--accent-cyan-glow)]',
          'hover:-translate-y-1',
        ],
        'p-6',
        className
      )}
    >
      {children}
    </div>
  )
}