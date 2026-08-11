'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/ui/SocialIcons'
const SOCIAL = [
  { icon: GithubIcon, label: 'GitHub', href: 'https://github.com/zulfath' },
  { icon: LinkedinIcon, label: 'LinkedIn', href: 'https://linkedin.com/in/zulfamunaf' },
  { icon: Mail, label: 'Email', href: 'https://mail.google.com/mail/?view=cm&to=zulfamunaf@gmail.com' },
]

const NAV_QUICK = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative z-10 pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div
        className="max-w-6xl mx-auto h-px mb-12 rounded-full opacity-30"
        style={{
          background: 'linear-gradient(90deg, transparent, var(--accent-cyan), var(--accent-violet), transparent)',
        }}
      />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

          <div>
            <p className="font-display font-bold text-2xl mb-3">
              <span className="gradient-text">Zulfa Munaf</span>
            </p>
            <p className="font-body text-sm leading-relaxed max-w-xs"
              style={{ color: 'var(--text-muted)' }}>
              IT undergraduate & aspiring software engineer. Building clean,
              performant, and beautiful digital experiences.
            </p>
          </div>

          <div>
            <p className="font-display font-semibold text-sm mb-4 tracking-wider uppercase"
              style={{ color: 'var(--text-secondary)' }}>
              Quick Links
            </p>
            <ul className="space-y-2">
              {NAV_QUICK.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="font-body text-sm transition-colors duration-200"
                    style={{ color: 'var(--text-muted)' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent-cyan)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-display font-semibold text-sm mb-4 tracking-wider uppercase"
              style={{ color: 'var(--text-secondary)' }}>
              Connect
            </p>
            <div className="flex gap-3">
              {SOCIAL.map(({ icon: Icon, label, href }) => {
                const isExternal = !href.startsWith('mailto:')
                return (
                  <motion.a
                    key={label}
                    href={href}
                    {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    onClick={!isExternal ? (e: React.MouseEvent) => {
                      e.preventDefault()
                      window.location.href = href
                    } : undefined}
                    aria-label={label}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 glass rounded-xl flex items-center justify-center
                               transition-all duration-200"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    <Icon size={16} />
                  </motion.a>
                )
              })}
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-2"
          style={{ borderTop: '1px solid var(--border-subtle)', color: 'var(--text-muted)' }}>
          <p className="font-body text-xs">© {year} Zulfa Munaf. All rights reserved.</p>
          <p className="font-body text-xs flex items-center gap-1.5">
            Built with

            using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}