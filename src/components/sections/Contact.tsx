'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import SectionWrapper from '@/components/layout/SectionWrapper'
import GlassCard from '@/components/ui/GlassCard'
import { GithubIcon, LinkedinIcon } from '@/components/ui/SocialIcons'
import { Mail, Send, MapPin, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'

const SOCIAL_LINKS = [
  {
    icon: GithubIcon,
    label: 'GitHub',
    href: 'https://github.com/zulfath',
    username: 'Zulfa Munaf',
  },
  {
    icon: LinkedinIcon,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/zulfamunaf',
    username: 'Zulfa Munaf',
  },
  {
    icon: Mail,
    label: 'Email',
    href: 'mailto:zulfamunaf@email.com',
    username: 'zulfamunaf@email.com',
  },
]

type FormState = 'idle' | 'sending' | 'success' | 'error'

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const [formState, setFormState] = useState<FormState>('idle')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState('sending')

    // Simulate form submission (replace with EmailJS or API call)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setFormState('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setFormState('idle'), 4000)
    } catch {
      setFormState('error')
      setTimeout(() => setFormState('idle'), 4000)
    }
  }

  const inputClasses = `w-full px-4 py-3 rounded-xl font-body text-sm
    bg-[var(--bg-glass)] border border-[var(--border-glass)]
    text-[var(--text-primary)] placeholder:text-[var(--text-muted)]
    focus:outline-none focus:border-[var(--accent-cyan)]
    focus:shadow-[0_0_0_3px_var(--accent-cyan-glow)]
    transition-all duration-200 backdrop-blur-sm`

  return (
    <SectionWrapper id="contact">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="section-label mb-3">Let&apos;s Connect</p>
        <h2 className="font-display text-4xl sm:text-5xl font-bold text-[var(--text-primary)]">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        <p className="font-body text-base text-[var(--text-muted)] mt-4 max-w-lg mx-auto">
          Have a project in mind, an opportunity, or just want to say hello?
          I&apos;d love to hear from you!
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
        {/* Left — Contact info */}
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="lg:col-span-2 flex flex-col gap-6"
        >
          <GlassCard strong className="relative overflow-hidden">
            {/* Blob */}
            <div
              className="absolute -top-10 -right-10 w-36 h-36 rounded-full blur-3xl opacity-20 pointer-events-none"
              style={{ background: 'var(--accent-violet)' }}
            />

            <div className="relative z-10">
              <h3 className="font-display font-bold text-lg text-[var(--text-primary)] mb-2">
                Let&apos;s create something amazing
              </h3>
              <p className="font-body text-sm text-[var(--text-muted)] leading-relaxed mb-6">
                I&apos;m always open to discussing new projects, creative ideas,
                or opportunities to be part of your vision.
              </p>

              {/* Location */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: 'var(--accent-cyan-glow)' }}
                >
                  <MapPin size={16} style={{ color: 'var(--accent-cyan)' }} />
                </div>
                <div>
                  <p className="font-body text-xs text-[var(--text-muted)]">
                    Location
                  </p>
                  <p className="font-body text-sm text-[var(--text-primary)] font-medium">
                    Sri Lanka
                  </p>
                </div>
              </div>

              {/* Social links */}
              <div className="space-y-3">
                {SOCIAL_LINKS.map(({ icon: Icon, label, href, username }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-3 group"
                  >
                    <div
                      className="w-10 h-10 rounded-xl glass flex items-center justify-center
                                 text-[var(--text-muted)] group-hover:text-[var(--accent-cyan)]
                                 transition-colors duration-200"
                    >
                      <Icon size={16} />
                    </div>
                    <div>
                      <p className="font-body text-xs text-[var(--text-muted)]">
                        {label}
                      </p>
                      <p className="font-body text-sm text-[var(--text-secondary)] group-hover:text-[var(--accent-cyan)] transition-colors duration-200">
                        {username}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* Right — Contact form */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="lg:col-span-3"
        >
          <GlassCard strong className="relative overflow-hidden">
            {/* Blob */}
            <div
              className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full blur-3xl opacity-15 pointer-events-none"
              style={{ background: 'var(--accent-cyan)' }}
            />

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="relative z-10 space-y-5"
            >
              {/* Name & Email row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block font-body text-xs text-[var(--text-muted)] mb-2 tracking-wide uppercase"
                  >
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block font-body text-xs text-[var(--text-muted)] mb-2 tracking-wide uppercase"
                  >
                    Your Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className={inputClasses}
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="contact-subject"
                  className="block font-body text-xs text-[var(--text-muted)] mb-2 tracking-wide uppercase"
                >
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry"
                  required
                  className={inputClasses}
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="block font-body text-xs text-[var(--text-muted)] mb-2 tracking-wide uppercase"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or idea..."
                  required
                  rows={5}
                  className={`${inputClasses} resize-none`}
                />
              </div>

              {/* Submit button */}
              <motion.button
                type="submit"
                disabled={formState === 'sending'}
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="btn-glow w-full flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <span className="flex items-center gap-2">
                  {formState === 'sending' && (
                    <Loader2 size={16} className="animate-spin" />
                  )}
                  {formState === 'success' && <CheckCircle2 size={16} />}
                  {formState === 'error' && <AlertCircle size={16} />}
                  {formState === 'idle' && <Send size={16} />}
                  {formState === 'idle' && 'Send Message'}
                  {formState === 'sending' && 'Sending...'}
                  {formState === 'success' && 'Message Sent!'}
                  {formState === 'error' && 'Failed to Send'}
                </span>
              </motion.button>
            </form>
          </GlassCard>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}