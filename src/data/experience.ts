export interface Experience {
  role: string
  company: string
  period: string
  type: string
  description: string
  highlights: string[]
  tech: string[]
}

export const EXPERIENCES: Experience[] = [
  {
    role: 'Software Engineering Intern',
    company: 'Dottech Software Pvt Ltd',
    period: 'Mar 2025 – Sep 2025',
    type: 'Internship',
    description:
      'Worked as a software engineering intern, contributing to production-grade web applications with a focus on dynamic routing, API integration, and clean component architecture.',
    highlights: [
      'Developed frontend features using React, Next.js, GraphQL, and Apollo Client for multiple web applications',
      'Contributed to an online magazine platform by implementing dynamic routing, article search functionality, category filtering, and API integration',
      'Resolved frontend issues across production applications involving navigation, responsive layouts, and dashboard functionality',
      'Debugged and enhanced features within existing enterprise codebases',
    ],
    tech: ['React', 'Next.js', 'GraphQL', 'Apollo Client', 'JavaScript', 'Tailwind CSS', 'Node.js', 'Express'],
  },
]

export interface Education {
  degree: string
  institution: string
  period: string
  status: string
  description: string
  coursework: string[]
}

export const EDUCATION: Education[] = [
  {
    degree: 'BSc (Hons) in Information Technology & Management',
    institution: 'University of Moratuwa',
    period: '2022 – Present',
    status: 'Final Year',
    description:
      'Specializing in software engineering and full-stack web development. Currently completing a final-year research project on AI-assisted dental caries detection using deep learning and computer vision.',
    coursework: [
      'Software Engineering',
      'Data Structures & Algorithms',
      'Database Management Systems',
      'Web Application Development',
      'Object-Oriented Programming',
      'IT Quality Assurance',
      'Enterprise Application Development'
    ],
  },
]