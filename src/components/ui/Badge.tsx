import { cn } from '@/lib/utils'

interface BadgeProps {
  label: string
  variant?: 'cyan' | 'violet' | 'neutral'
  className?: string
}

export default function Badge({ label, variant = 'neutral', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full text-xs font-medium font-body tracking-wide transition-all duration-200',
        variant === 'cyan' &&
          'bg-[var(--accent-cyan-glow)] text-[var(--accent-cyan)] border border-[var(--accent-cyan)] border-opacity-30',
        variant === 'violet' &&
          'bg-[var(--accent-violet-glow)] text-[var(--accent-violet)] border border-[var(--accent-violet)] border-opacity-30',
        variant === 'neutral' &&
          'bg-[var(--border-subtle)] text-[var(--text-secondary)] border border-[var(--border-subtle)]',
        className
      )}
    >
      {label}
    </span>
  )
}