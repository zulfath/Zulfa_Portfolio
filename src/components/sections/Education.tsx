'use client'

import { motion } from 'framer-motion'
import SectionWrapper from '@/components/layout/SectionWrapper'
import GlassCard from '@/components/ui/GlassCard'
import Badge from '@/components/ui/Badge'
import { EDUCATION } from '@/data/experience'
import { GraduationCap, CalendarDays, BookOpen } from 'lucide-react'

export default function Education() {
  return (
    <SectionWrapper id="education">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="section-label mb-3">My Academic Journey</p>
        <h2 className="font-display text-4xl sm:text-5xl font-bold text-[var(--text-primary)]">
          Education &amp; <span className="gradient-text">Academics</span>
        </h2>
      </motion.div>

      <div className="max-w-3xl mx-auto">
        {EDUCATION.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <GlassCard hover className="relative overflow-hidden">
              {/* Decorative blobs */}
              <div
                className="absolute -top-12 -right-12 w-48 h-48 rounded-full blur-3xl opacity-15 pointer-events-none"
                style={{ background: 'var(--accent-violet)' }}
              />
              <div
                className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full blur-3xl opacity-10 pointer-events-none"
                style={{ background: 'var(--accent-cyan)' }}
              />

              <div className="relative z-10">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
                      style={{
                        background:
                          'linear-gradient(135deg, var(--accent-cyan), var(--accent-violet))',
                      }}
                    >
                      <GraduationCap size={24} className="text-white" />
                    </div>

                    <div>
                      <h3 className="font-display font-bold text-xl text-[var(--text-primary)] mb-1">
                        {edu.degree}
                      </h3>
                      <p className="font-body text-sm text-[var(--accent-cyan)] font-medium">
                        {edu.institution}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col items-start sm:items-end gap-2">
                    <span className="inline-flex items-center gap-1.5 font-body text-xs text-[var(--text-muted)]">
                      <CalendarDays size={12} /> {edu.period}
                    </span>
                    <Badge label={edu.status} variant="violet" />
                  </div>
                </div>

                {/* Description */}
                <p className="font-body text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                  {edu.description}
                </p>

                {/* Divider */}
                <div className="section-divider mb-6" />

                {/* Relevant coursework */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <BookOpen
                      size={16}
                      style={{ color: 'var(--accent-violet)' }}
                    />
                    <h4 className="font-display font-semibold text-sm text-[var(--text-primary)] tracking-wide">
                      Relevant Coursework
                    </h4>
                  </div>

                  <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={{
                      hidden: {},
                      show: { transition: { staggerChildren: 0.04 } },
                    }}
                    className="flex flex-wrap gap-2"
                  >
                    {edu.coursework.map((course, i) => (
                      <motion.div
                        key={course}
                        variants={{
                          hidden: { opacity: 0, scale: 0.85 },
                          show: {
                            opacity: 1,
                            scale: 1,
                            transition: { type: 'spring', stiffness: 300 },
                          },
                        }}
                      >
                        <Badge label={course} variant={i % 2 === 0 ? 'cyan' : 'violet'} />
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}