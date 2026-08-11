'use client'

import { motion } from 'framer-motion'
import SectionWrapper from '@/components/layout/SectionWrapper'
import GlassCard from '@/components/ui/GlassCard'
import { Code2, Cpu, Globe, Rocket } from 'lucide-react'

// const STATS = [
//   { label: 'Projects Built',     value: '10+',  icon: Rocket },
//   { label: 'Technologies',       value: '14+',  icon: Cpu },
//   { label: 'Months Experience',  value: '3+',   icon: Code2 },
//   { label: 'Cups of Coffee',     value: '∞',    icon: Globe },
// ]

const TRAITS = [
  { emoji: '🎯', label: 'Problem Solver' },
  { emoji: '🧠', label: 'AI Curious' },
  { emoji: '📚', label: 'Lifelong Learner' },
  { emoji: '🤝', label: 'Team Player' },
  { emoji: '⚡', label: 'Fast Learner' },
  { emoji: '💻', label: 'Full-Stack Dev' },
]

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const } },
}

export default function About() {
  return (
    <SectionWrapper id="about">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="section-label mb-3">Who I Am</p>
        <h2 className="font-display text-4xl sm:text-5xl font-bold text-[var(--text-primary)]">
          About <span className="gradient-text">Me</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left — avatar + traits */}
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center lg:items-start gap-8"
        >
          {/* Avatar card */}
          <GlassCard className="w-full max-w-sm mx-auto lg:mx-0 relative overflow-hidden" strong>
            {/* Decorative gradient blob inside card */}
            <div
              className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl opacity-30 pointer-events-none"
              style={{ background: 'var(--accent-violet)' }}
            />
            <div
              className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full blur-3xl opacity-20 pointer-events-none"
              style={{ background: 'var(--accent-cyan)' }}
            />

            <div className="relative z-10 flex flex-col items-center text-center py-4">
              {/* Initials avatar */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="w-28 h-28 rounded-2xl mb-5 flex items-center justify-center
                           font-display font-bold text-4xl text-white shadow-lg"
                style={{
                  background: 'linear-gradient(135deg, var(--accent-cyan), var(--accent-violet))',
                }}
              >
                ZM
              </motion.div>

              <h3 className="font-display font-bold text-xl text-[var(--text-primary)] mb-1">
                Zulfa Munaf
              </h3>
              <p className="font-body text-sm text-[var(--text-muted)] mb-4">
                IT Undergraduate· Sri Lanka
              </p>

              {/* Status pill */}
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs
                           font-medium font-body border"
                style={{
                  background: 'var(--accent-cyan-glow)',
                  borderColor: 'var(--accent-cyan)',
                  color: 'var(--accent-cyan)',
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Open to Opportunities
              </span>
            </div>
          </GlassCard>

          {/* Trait pills */}
          <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
            {TRAITS.map(({ emoji, label }, i) => (
              <motion.span
                key={label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, type: 'spring', stiffness: 300 }}
                whileHover={{ scale: 1.07, y: -2 }}
                className="glass px-4 py-2 rounded-xl text-sm font-body
                           text-[var(--text-secondary)] cursor-default
                           hover:border-[var(--accent-cyan)]
                           hover:text-[var(--accent-cyan)]
                           transition-colors duration-200"
              >
                {emoji} {label}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Right — bio + stats */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-8"
        >
          {/* Bio */}
          <div className="space-y-4">
            <p className="font-body text-base text-[var(--text-secondary)] leading-relaxed">
              Hey there! I&apos;m <span className="text-[var(--accent-cyan)] font-medium">Zulfa Munaf</span>,
              a final-year IT undergraduate at the University of Moratuwa with a passion for
              building modern, performant, and user-centric digital products.
            </p>
            <p className="font-body text-base text-[var(--text-secondary)] leading-relaxed">
              I specialise in <span className="text-[var(--accent-violet)] font-medium">full-stack development</span>,
              working across the stack — from crafting interfaces with React, Next.js, and
              GraphQL/Apollo Client to building backend services with Node.js, Java, and Python,
              backed by MongoDB and MySQL.
            </p>
            <p className="font-body text-base text-[var(--text-secondary)] leading-relaxed">
              Right now I&apos;m also applying deep learning and computer vision in my final-year
              research on AI-assisted dental caries detection. I believe great software is a
              balance of solid engineering and thoughtful design.
            </p>
          </div>

          {/* Stats grid
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {STATS.map(({ label, value, icon: Icon }) => (
              <motion.div key={label} variants={itemVariants}>
                <GlassCard hover className="!p-5 flex flex-col gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: 'var(--accent-cyan-glow)' }}
                  >
                    <Icon size={18} style={{ color: 'var(--accent-cyan)' }} />
                  </div>
                  <div>
                    <p className="font-display font-bold text-2xl text-[var(--text-primary)]">
                      {value}
                    </p>
                    <p className="font-body text-xs text-[var(--text-muted)] mt-0.5">
                      {label}
                    </p>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div> */}

          {/* CTA */}
          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
            className="btn-glow inline-flex items-center justify-center gap-2 w-full sm:w-fit"
          >
            <span>Download Resume</span>
          </motion.a>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
