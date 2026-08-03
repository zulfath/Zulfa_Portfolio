export interface Certification {
  title: string
  issuer: string
  date: string
  image: string
  credentialUrl?: string
}

export const CERTIFICATIONS: Certification[] = [
  {
    title: 'Tech for Everyone',
    issuer: 'SoloLearn',
    date: 'July 2024',
    image: '/certifications/Sololearn Certifcate.jpg',

  },
  {
    title: 'Web Design for Beginners',
    issuer: 'CODL,University of Moratuwa',
    date: 'Nov 2025',
    image: '/certifications/openuom.png',

  },
  // {
  //   title: 'Google IT Support Professional Certificate',
  //   issuer: 'Google (via Coursera)',
  //   date: 'Aug 2025',
  //   image: '/certifications/google-it-support.png',
  //   credentialUrl: '#',
  // },
  // {
  //   title: 'Responsive Web Design',
  //   issuer: 'freeCodeCamp',
  //   date: 'Jun 2025',
  //   image: '/certifications/freecodecamp-responsive-web.png',
  //   credentialUrl: '#',
  // },
]