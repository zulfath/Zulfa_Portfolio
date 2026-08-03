import {
  Code2,
  Server,
  Database,
  Wrench,
} from 'lucide-react'

export interface Skill {
  name: string
  level: number // 0-100
}

export interface SkillCategory {
  title: string
  icon: typeof Code2
  color: 'cyan' | 'violet'
  skills: Skill[]
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Languages',
    icon: Code2,
    color: 'cyan',
    skills: [
      { name: 'JavaScript', level: 75 },
      { name: 'Python', level: 50 },
      { name: 'Java', level: 50 },
      { name: 'C', level: 70 },
    ],
  },
  {
    title: 'Frontend',
    icon: Code2,
    color: 'violet',
    skills: [
      { name: 'React.js', level: 80 },
      { name: 'Next.js', level: 75 },
      { name: 'HTML5', level: 95 },
      { name: 'CSS3', level: 90 },
      { name: 'Tailwind CSS', level: 75 },
    ],
  },
  {
    title: 'Backend & APIs',
    icon: Server,
    color: 'cyan',
    skills: [
      { name: 'Node.js', level: 75 },
      { name: 'Express.js', level: 75 },
      { name: 'Spring Boot', level: 50 },
      { name: 'GraphQL', level: 75 },
      { name: 'Apollo Client', level: 75 },
      { name: 'RESTful APIs', level: 75 },
    ],
  },
  {
    title: 'Databases',
    icon: Database,
    color: 'violet',
    skills: [
      { name: 'MongoDB', level: 75 },
      { name: 'MySQL', level: 75 },
    ],
  },
  {
    title: 'Tools & Practices',
    icon: Wrench,
    color: 'cyan',
    skills: [
      { name: 'Git & GitHub', level: 90 },
      { name: 'JWT Authentication', level: 80 },
      { name: 'Figma', level: 80 },
      { name: 'Lucidchart', level: 75 },
      { name: 'Canva', level: 85 },
      { name: 'VS Code', level: 90 },
      { name: 'IntelliJ', level: 50 },
    ],
  },
]