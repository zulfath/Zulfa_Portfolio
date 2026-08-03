'use client'

import { motion } from 'framer-motion'
import SectionWrapper from '@/components/layout/SectionWrapper'
import GlassCard from '@/components/ui/GlassCard'
import Badge from '@/components/ui/Badge'
import { EXPERIENCES } from '@/data/experience'
import { Briefcase, CalendarDays, MapPin } from 'lucide-react'
import { Variants } from 'framer-motion'

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -32 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}



export default function Experience() {
  return (
    <SectionWrapper id="experience">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="section-label mb-3">Where I&apos;ve Worked</p>
        <h2 className="font-display text-4xl sm:text-5xl font-bold text-[var(--text-primary)]">
          Professional <span className="gradient-text">Experience</span>
        </h2>
      </motion.div>

      {/* Timeline */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-40px' }}
        className="relative max-w-3xl mx-auto"
      >
        {/* Timeline line */}
        <div
          className="absolute left-6 md:left-8 top-0 bottom-0 w-px"
          style={{
            background:
              'linear-gradient(180deg, var(--accent-cyan), var(--accent-violet), transparent)',
          }}
        />

        {EXPERIENCES.map((exp, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="relative pl-16 md:pl-20 pb-12 last:pb-0"
          >
            {/* Timeline dot */}
            <div
              className="absolute left-4 md:left-6 top-2 w-5 h-5 rounded-full border-2 z-10"
              style={{
                borderColor: 'var(--accent-cyan)',
                background: 'var(--bg-primary)',
              }}
            >
              <div
                className="absolute inset-1 rounded-full"
                style={{
                  background:
                    'linear-gradient(135deg, var(--accent-cyan), var(--accent-violet))',
                }}
              />
            </div>

            <GlassCard hover className="relative overflow-hidden">
              {/* Decorative blob */}
              <div
                className="absolute -top-8 -right-8 w-32 h-32 rounded-full blur-3xl opacity-15 pointer-events-none"
                style={{ background: 'var(--accent-cyan)' }}
              />

              <div className="relative z-10">
                {/* Role & Company */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="font-display font-bold text-xl text-[var(--text-primary)]">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <Briefcase
                        size={14}
                        style={{ color: 'var(--accent-cyan)' }}
                      />
                      <span className="font-body text-sm text-[var(--accent-cyan)] font-medium">
                        {exp.company}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col items-start sm:items-end gap-1">
                    <span className="inline-flex items-center gap-1.5 font-body text-xs text-[var(--text-muted)]">
                      <CalendarDays size={12} /> {exp.period}
                    </span>
                    <Badge label={exp.type} variant="cyan" />
                  </div>
                </div>

                {/* Description */}
                <p className="font-body text-sm text-[var(--text-secondary)] leading-relaxed mb-5">
                  {exp.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-2 mb-5">
                  {exp.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-2 font-body text-sm text-[var(--text-secondary)]"
                    >
                      <span
                        className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ background: 'var(--accent-cyan)' }}
                      />
                      {highlight}
                    </li>
                  ))}
                </ul>

                {/* Tech used */}
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <Badge key={t} label={t} variant="neutral" />
                  ))}
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  )
}