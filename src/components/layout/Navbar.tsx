'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import ThemeToggle from '@/components/ui/ThemeToggle'
import { useScrollSpy } from '@/hooks/useScrollSpy'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { label: 'About',      href: '#about' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education',  href: '#education' },
  { label: 'Contact',    href: '#contact' },
]

const SECTION_IDS = NAV_LINKS.map(l => l.href.slice(1))

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const activeId = useScrollSpy(SECTION_IDS, 100)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'py-3 backdrop-blur-xl border-b border-[var(--border-glass)] shadow-[var(--shadow-sm)]'
            : 'py-5'
        )}
        style={{ background: scrolled ? 'var(--nav-bg)' : 'transparent' }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">

            <motion.a
              href="#hero"
              onClick={() => handleNavClick('#hero')}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="font-display font-bold text-xl tracking-tight"
            >
              <span className="gradient-text">ZM</span>
              <span className="text-[var(--text-muted)] font-light ml-1">.</span>
            </motion.a>

            <div className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map(({ label, href }) => {
                const id = href.slice(1)
                const isActive = activeId === id
                return (
                  <button
                    key={id}
                    onClick={() => handleNavClick(href)}
                    className={cn(
                      'relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 font-body tracking-wide',
                      isActive
                        ? 'text-[var(--accent-cyan)]'
                        : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                    )}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute inset-0 rounded-lg bg-[var(--accent-cyan-glow)]"
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      />
                    )}
                    <span className="relative z-10">{label}</span>
                  </button>
                )
              })}
            </div>

            <div className="flex items-center gap-3">
              <ThemeToggle />
              <button
                className="md:hidden w-10 h-10 rounded-xl glass flex items-center justify-center
                           transition-all duration-200 hover:scale-105 active:scale-95"
                onClick={() => setMenuOpen(v => !v)}
                aria-label="Toggle menu"
              >
                {menuOpen
                  ? <X size={17} className="text-[var(--text-primary)]" />
                  : <Menu size={17} className="text-[var(--text-primary)]" />
                }
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.98 }}
            transition={{ duration: 0.22 }}
            className="fixed top-20 left-4 right-4 z-40 glass-strong rounded-2xl p-4 shadow-[var(--shadow-lg)]"
          >
            {NAV_LINKS.map(({ label, href }, i) => {
              const id = href.slice(1)
              const isActive = activeId === id
              return (
                <motion.button
                  key={id}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => handleNavClick(href)}
                  className={cn(
                    'w-full text-left px-4 py-3 rounded-xl font-body text-sm font-medium transition-all duration-200',
                    isActive
                      ? 'text-[var(--accent-cyan)] bg-[var(--accent-cyan-glow)]'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--border-subtle)]'
                  )}
                >
                  {label}
                </motion.button>
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}