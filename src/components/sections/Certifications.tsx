'use client'

import { motion, Variants } from 'framer-motion'
import Image from 'next/image'
import SectionWrapper from '@/components/layout/SectionWrapper'
import GlassCard from '@/components/ui/GlassCard'
import { CERTIFICATIONS } from '@/data/certifications'
import { ExternalLink, CalendarDays, Building2 } from 'lucide-react'

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut', delay: i * 0.1 },
  }),
}

export default function Certifications() {
  return (
    <SectionWrapper id="certifications">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="section-label mb-3">Credentials</p>
        <h2 className="font-display text-4xl sm:text-5xl font-bold text-[var(--text-primary)]">
          Certifications &amp; <span className="gradient-text">Achievements</span>
        </h2>
      </motion.div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {CERTIFICATIONS.map((cert, index) => (
          <motion.div
            key={cert.title}
            custom={index}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            <GlassCard hover className="relative overflow-hidden h-full">
              {/* Decorative accent */}
              <div
                className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl opacity-15 pointer-events-none"
                style={{ background: index % 2 === 0 ? 'var(--accent-cyan)' : 'var(--accent-violet)' }}
              />

              <div className="relative z-10 flex flex-col h-full">
                {/* Certificate image */}
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-4 glass">
                  <Image
                    src={cert.image}
                    alt={`${cert.title} certificate`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                {/* Header */}
                <div className="mb-2">
                  <h3 className="font-display font-bold text-lg text-[var(--text-primary)] leading-snug mb-1">
                    {cert.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-[var(--accent-cyan)]">
                    <Building2 size={12} />
                    <span className="font-body text-sm font-medium">{cert.issuer}</span>
                  </div>
                </div>

                {/* Date */}
                <div className="flex items-center gap-1.5 mb-4">
                  <CalendarDays size={12} style={{ color: 'var(--text-muted)' }} />
                  <span className="font-body text-xs text-[var(--text-muted)]">{cert.date}</span>
                </div>

                {/* Credential link */}
                {cert.credentialUrl && (
                  <motion.a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 4 }}
                    className="inline-flex items-center gap-2 font-body text-sm font-medium transition-colors duration-200 mt-auto"
                    style={{ color: 'var(--accent-cyan)' }}
                  >
                    View Credential
                    <ExternalLink size={14} />
                  </motion.a>
                )}
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}