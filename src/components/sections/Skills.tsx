'use client'

import { motion } from 'framer-motion'
import SectionWrapper from '@/components/layout/SectionWrapper'
import GlassCard from '@/components/ui/GlassCard'
import { SKILL_CATEGORIES } from '@/data/skills'

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

function ProgressBar({ level, delay }: { level: number; delay: number }) {
  return (
    <div className="w-full h-2 rounded-full overflow-hidden bg-[var(--border-subtle)]">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay, ease: 'easeOut' }}
        className="h-full rounded-full"
        style={{
          background:
            'linear-gradient(90deg, var(--accent-cyan), var(--accent-violet))',
        }}
      />
    </div>
  )
}

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="section-label mb-3">What I Work With</p>
        <h2 className="font-display text-4xl sm:text-5xl font-bold text-[var(--text-primary)]">
          Skills &amp; <span className="gradient-text">Technologies</span>
        </h2>
        <p className="font-body text-base text-[var(--text-muted)] mt-4 max-w-lg mx-auto">
          A curated collection of technologies I use to bring ideas to life — from frontend
          interfaces to backend APIs and everything in between.
        </p>
      </motion.div>

      {/* Skill categories grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {SKILL_CATEGORIES.map((category) => {
          const Icon = category.icon
          const isViolet = category.color === 'violet'

          return (
            <motion.div key={category.title} variants={cardVariants}>
              <GlassCard hover className="h-full flex flex-col">
                {/* Category header */}
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{
                      background: isViolet
                        ? 'var(--accent-violet-glow)'
                        : 'var(--accent-cyan-glow)',
                    }}
                  >
                    <Icon
                      size={20}
                      style={{
                        color: isViolet
                          ? 'var(--accent-violet)'
                          : 'var(--accent-cyan)',
                      }}
                    />
                  </div>
                  <h3 className="font-display font-bold text-lg text-[var(--text-primary)]">
                    {category.title}
                  </h3>
                </div>

                {/* Skills list with progress bars */}
                <div className="flex flex-col gap-4 flex-1">
                  {category.skills.map((skill, idx) => (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="font-body text-sm text-[var(--text-secondary)]">
                          {skill.name}
                        </span>
                        <span className="font-body text-xs text-[var(--text-muted)]">
                          {skill.level}%
                        </span>
                      </div>
                      <ProgressBar level={skill.level} delay={idx * 0.08} />
                    </div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          )
        })}
      </motion.div>
    </SectionWrapper>
  )
}