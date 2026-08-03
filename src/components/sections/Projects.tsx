'use client'

import { useState } from 'react'
import { motion, AnimatePresence, Variants } from 'framer-motion'
import SectionWrapper from '@/components/layout/SectionWrapper'
import GlassCard from '@/components/ui/GlassCard'
import Badge from '@/components/ui/Badge'
import { PROJECTS } from '@/data/projects'
import { ExternalLink, ChevronRight } from 'lucide-react'
import { GithubIcon } from '@/components/ui/SocialIcons'

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

export default function Projects() {
  const [expanded, setExpanded] = useState<number | null>(null)

  return (
    <SectionWrapper id="projects">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="section-label mb-3">What I&apos;ve Built</p>
        <h2 className="font-display text-4xl sm:text-5xl font-bold text-[var(--text-primary)]">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="font-body text-base text-[var(--text-muted)] mt-4 max-w-lg mx-auto">
          A selection of projects that showcase my skills in full-stack development
        </p>
      </motion.div>

      {/* Project cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-40px' }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-8"
      >
        {PROJECTS.map((project, index) => {
          const isExpanded = expanded === index
          const isViolet = project.color === 'violet'

          return (
            <motion.div
              key={project.title}
              variants={cardVariants}
              className={index === PROJECTS.length - 1 && PROJECTS.length % 2 !== 0
                ? 'lg:col-span-2 lg:max-w-2xl lg:mx-auto'
                : ''
              }
            >
              <GlassCard
                hover
                className="relative overflow-hidden group h-full flex flex-col"
              >
                {/* Decorative gradient */}
                <div
                  className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl opacity-20
                             pointer-events-none transition-opacity duration-500 group-hover:opacity-40"
                  style={{
                    background: isViolet
                      ? 'var(--accent-violet)'
                      : 'var(--accent-cyan)',
                  }}
                />

                {/* Header */}
                <div className="relative z-10">
                  {/* Project number badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="font-body text-xs font-medium tracking-widest uppercase"
                      style={{
                        color: isViolet
                          ? 'var(--accent-violet)'
                          : 'var(--accent-cyan)',
                      }}
                    >
                      Project {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="flex items-center gap-2">
                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1, y: -1 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-9 h-9 glass rounded-lg flex items-center justify-center
                                     text-[var(--text-muted)] hover:text-[var(--accent-cyan)]
                                     transition-colors duration-200"
                          aria-label={`${project.title} GitHub`}
                        >
                          <GithubIcon size={16} />
                        </motion.a>
                      )}
                      {project.demo && (
                        <motion.a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1, y: -1 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-9 h-9 glass rounded-lg flex items-center justify-center
                                     text-[var(--text-muted)] hover:text-[var(--accent-violet)]
                                     transition-colors duration-200"
                          aria-label={`${project.title} Live Demo`}
                        >
                          <ExternalLink size={16} />
                        </motion.a>
                      )}
                    </div>
                  </div>

                  {/* Title & subtitle */}
                  <h3 className="font-display font-bold text-2xl text-[var(--text-primary)] mb-1">
                    {project.title}
                  </h3>
                  <p className="font-body text-sm text-[var(--text-muted)] mb-4">
                    {project.subtitle}
                  </p>

                  {/* Description */}
                  <p className="font-body text-sm text-[var(--text-secondary)] leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((t) => (
                      <Badge
                        key={t}
                        label={t}
                        variant={isViolet ? 'violet' : 'cyan'}
                      />
                    ))}
                  </div>

                  {/* Expandable features */}
                  <button
                    onClick={() =>
                      setExpanded(isExpanded ? null : index)
                    }
                    className="flex items-center gap-1.5 font-body text-sm font-medium
                               transition-colors duration-200 cursor-pointer"
                    style={{
                      color: isViolet
                        ? 'var(--accent-violet)'
                        : 'var(--accent-cyan)',
                    }}
                  >
                    {isExpanded ? 'Hide' : 'View'} Key Features
                    <motion.span
                      animate={{ rotate: isExpanded ? 90 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronRight size={14} />
                    </motion.span>
                  </button>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden mt-4 space-y-2"
                      >
                        {project.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-start gap-2 font-body text-sm text-[var(--text-secondary)]"
                          >
                            <span
                              className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                              style={{
                                background: isViolet
                                  ? 'var(--accent-violet)'
                                  : 'var(--accent-cyan)',
                              }}
                            />
                            {feature}
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>
              </GlassCard>
            </motion.div>
          )
        })}
      </motion.div>
    </SectionWrapper>
  )
}