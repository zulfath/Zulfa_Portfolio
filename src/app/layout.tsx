import type { Metadata, Viewport } from 'next'
import { Syne, DM_Sans } from 'next/font/google'
import './globals.css'
import { ThemeProvider }      from '@/context/ThemeContext'
import Navbar                 from '@/components/layout/Navbar'
import ScrollProgressBar      from '@/components/ui/ScrollProgressBar'
import BackToTop              from '@/components/ui/BackToTop'
import CursorGlow             from '@/components/ui/CursorGlow'
import PageTransition         from '@/components/ui/PageTransition'

/* ── Fonts ─────────────────────────────────────── */
const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-dm-sans',
  display: 'swap',
})

/* ── SEO & Open Graph metadata ─────────────────── */
const SITE_URL = 'https://zulfamunaf.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: 'Zulfa Munaf — Full-Stack Developer & Software Engineer',
    template: '%s | Zulfa Munaf',
  },
  description:
    'Portfolio of Zulfa Munaf - aspiring Software Engineer skilled in React, Next.js, and more. Open to Associate Software Engineer | Software Engineer Role.',

  keywords: [
    'Zulfa Munaf',
    'Software Engineer',
    'Full-Stack Developer',
    'React Developer',
    'Next.js Developer',
    'Portfolio',

  ],

  authors: [{ name: 'Zulfa Munaf', url: SITE_URL }],
  creator: 'Zulfa Munaf',

  openGraph: {
    type:        'website',
    locale:      'en_US',
    url:          SITE_URL,
    siteName:    'Zulfa Munaf Portfolio',
    title:       'Zulfa Munaf — Full-Stack Developer',
    description: 'IT undergraduate | React · Next.js',
    images: [
      {
        url:    '/og-image.png',  // place a 1200×630 image in /public
        width:  1200,
        height: 630,
        alt:    'Zulfa Munaf — Full-Stack Developer Portfolio',
      },
    ],
  },

  twitter: {
    card:        'summary_large_image',
    title:       'Zulfa Munaf — Full-Stack Developer',
    description: 'IT undergraduate | React · Next.js · Java Spring Boot | Open to internships',
    images:      ['/og-image.png'],
    creator:     '@zulfamunaf',
  },

  robots: {
    index:          true,
    follow:         true,
    googleBot: {
      index:               true,
      follow:              true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet':       -1,
    },
  },

  icons: {
    icon:    '/favicon.ico',
    apple:   '/apple-touch-icon.png',
  },

  manifest: '/site.webmanifest',
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)',  color: '#0a0a0f' },
    { media: '(prefers-color-scheme: light)', color: '#f4f4f8' },
  ],
  width:        'device-width',
  initialScale: 1,
}

/* ── Root layout ───────────────────────────────── */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${syne.variable} ${dmSans.variable} noise-overlay antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider>
          {/* Global polish layer */}
          <ScrollProgressBar />
          <CursorGlow />

          {/* Navigation */}
          <Navbar />

          {/* Page content with entrance transition */}
          <PageTransition>
            <main className="relative z-10">{children}</main>
          </PageTransition>

          {/* Floating back-to-top */}
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  )
}
