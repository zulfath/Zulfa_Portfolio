export interface Project {
  title: string
  subtitle: string
  description: string
  features: string[]
  tech: string[]
  github?: string
  demo?: string
  color: 'cyan' | 'violet'
}

export const PROJECTS: Project[] = [
  {
    title: 'TransitGo',
    subtitle: 'Bus Transportation Management System',
    description:
      'A comprehensive bus transportation management system with both web and mobile interfaces, enabling real-time schedule tracking, package management, and seamless admin control.',
    features: [
      'Real-time bus schedules & tracking',
      'Package tracking system',
      'Announcements & notifications',
      'Ratings & reviews system',
      'Admin dashboard with analytics',
    ],
    tech: ['React', 'React Native', 'Spring Boot', 'MySQL'],
    github: 'https://github.com/zulfath/TransitGO',
    color: 'cyan',
  },
  {
    title: 'Essenza',
    subtitle: 'Salon Appointment Booking System',
    description:
      'A modern salon appointment booking platform that streamlines the scheduling process with smart reminders, secure payments, and a review system for clients and stylists.',
    features: [
      'Appointment booking & scheduling',
      'Automated reminders & notifications',
      'Reviews & ratings for stylists',
      'Secure payment integration',
      'Admin panel for salon management',
    ],
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    github: 'https://github.com/zulfath/Essenza-Frontend',
    color: 'violet',
  },
  // {
  //   title: 'FuelGuard',
  //   subtitle: 'Real-Time Gas Station Fuel Tank Monitoring',
  //   description:
  //     'An IoT-based real-time monitoring system for gas station fuel tanks using ESP32 sensors and Firebase, providing live dashboards for fuel levels and consumption analytics.',
  //   features: [
  //     'Real-time sensor monitoring dashboard',
  //     'Firebase integration for live data',
  //     'Fuel level alerts & notifications',
  //     'Historical consumption analytics',
  //     'Multi-station support',
  //   ],
  //   tech: ['ESP32', 'Firebase', 'IoT Dashboard', 'React'],
  //   github: 'https://github.com/zulfamunaf',
  //   color: 'cyan',
  // },
]
