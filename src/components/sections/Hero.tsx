"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";

const ROLES = [
  "Full-Stack Developer",
  "Software Engineer",
  "AI/ML Enthusiast"
];

function useTypewriter(words: string[], speed = 80, pause = 1800) {
  const [displayed, setDisplayed] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const current = words[wordIdx];
    if (!deleting && charIdx < current.length) {
      timer.current = setTimeout(() => {
        setDisplayed(current.slice(0, charIdx + 1));
        setCharIdx((c) => c + 1);
      }, speed);
    } else if (!deleting && charIdx === current.length) {
      timer.current = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx > 0) {
      timer.current = setTimeout(() => {
        setDisplayed(current.slice(0, charIdx - 1));
        setCharIdx((c) => c - 1);
      }, speed / 2);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setWordIdx((i) => (i + 1) % words.length);
    }
    return () => { if (timer.current) clearTimeout(timer.current) }

  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return displayed;
}

export default function Hero() {
  const typed = useTypewriter(ROLES);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center
                 overflow-hidden px-4 sm:px-6 lg:px-8 pt-20"
    >
      <div
        className="bg-blob w-[500px] h-[500px] top-[-120px] left-[-160px]"
        style={{ background: "var(--accent-cyan)" }}
      />
      <div
        className="bg-blob w-[400px] h-[400px] bottom-[-100px] right-[-120px]"
        style={{ background: "var(--accent-violet)" }}
      />

      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(var(--text-muted) 1px, transparent 1px),
                               linear-gradient(90deg, var(--text-muted) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 280 }}
          className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-10"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span
            className="text-xs font-medium font-body tracking-wide"
            style={{ color: "var(--text-secondary)" }}
          >
            Open to Work
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold leading-none tracking-tight mb-4"
        >
          <span className="block" style={{ color: "var(--text-primary)" }}>
            Zulfa
          </span>
          <span className="block gradient-text">Munaf</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.6 }}
          className="h-10 mb-8 flex items-center justify-center"
        >
          <span
            className="font-body text-lg sm:text-2xl font-light"
            style={{ color: "var(--text-secondary)" }}
          >
            {typed}
            <span className="gradient-text font-bold animate-pulse">|</span>
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="font-body text-base sm:text-lg max-w-xl mx-auto mb-12 leading-relaxed"
          style={{ color: "var(--text-muted)" }}
        >
          IT undergraduate crafting modern web & mobile experiences. Passionate
          about clean code, elegant UI, and scalable systems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <button
            className="btn-glow w-full sm:w-auto"
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <span>View My Work</span>
          </button>
          <button
            className="glass w-full sm:w-auto px-7 py-3 rounded-xl font-display font-semibold
                       text-sm tracking-wide transition-all duration-200 hover:-translate-y-0.5 active:scale-95"
            style={{ color: "var(--text-primary)" }}
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Get In Touch
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="flex items-center justify-center gap-4"
        >
          {[
            {
              icon: GithubIcon,
              label: "GitHub",
              href: "https://github.com/zulfath",
            },
            {
              icon: LinkedinIcon,
              label: "LinkedIn",
              href: "https://linkedin.com/in/zulfamunaf",
            },
            { icon: Mail, label: "Email", href: "https://mail.google.com/mail/?view=cm&to=zulfamunaf@gmail.com" },
          ].map(({ icon: Icon, label, href }) => {
            const isExternal = href.startsWith("http");
            return (
              <motion.a
                key={label}
                href={href}
                {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                aria-label={label}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-11 h-11 glass rounded-xl flex items-center justify-center transition-all duration-200"
                style={{ color: "var(--text-muted)" }}
              >
                <Icon size={18} />
              </motion.a>
            );
          })}
        </motion.div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        onClick={() =>
          document
            .getElementById("about")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col
                   items-center gap-2 transition-colors duration-200"
        style={{ color: "var(--text-muted)" }}
        aria-label="Scroll down"
      >
        <span className="text-xs font-body tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.button>
    </section>
  );
}
