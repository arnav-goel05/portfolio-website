import heroArnav from '../assets/hero-arnav.webp'

export const aboutProfile = {
  image: heroArnav,
  imageAlt: 'Portrait-style illustration of Arnav working at a laptop.',
  intro: [
    'I am Arnav Goel, a Computer Science undergraduate at the National University of Singapore, graduating in May 2027. I work across product thinking, applied AI, and software engineering, turning ambiguous requirements into practical systems people can inspect, use, and trust.',
    'My experience spans graph-enhanced RAG and healthcare product discovery at Johnson & Johnson, spatial rehabilitation tools for Apple Vision Pro with NUH, full-stack education software, and product design in an international startup.',
  ],
}

export const aboutRows = [
  {
    id: 'johnson-and-johnson',
    title: 'Johnson & Johnson, Singapore',
    role: 'Data & Digital Technology Analyst Intern',
    date: 'Jan 2026 - Jul 2026',
    detail:
      'Built a graph-enhanced RAG system with traceable citations, a BA-first AI workflow platform for healthcare product discovery, and rapid prototypes that translated business requirements into automations, user flows, and Figma concepts.',
  },
  {
    id: 'nuh-rehabilitation',
    title: 'Interactive 3D / NUH Rehabilitation',
    role: 'Software Engineer Intern',
    date: 'May 2025 - Jan 2026',
    detail:
      'Worked with NUH to digitise stroke rehabilitation assessments across Apple Vision Pro and iPad, including a patent-pending 3D hand-eye coordination tool and Python analysis of more than 15,000 movement data points.',
  },
  {
    id: 'lightblue-consulting',
    title: 'LightBlue Environmental Consulting, Bangkok',
    role: 'UX/UI Designer Intern',
    date: 'May 2024 - Nov 2024',
    detail:
      'Developed customer personas and web and mobile prototypes in Figma, using competitor analysis and business research to guide product and design decisions with an international startup team.',
  },
  {
    id: 'iaset-nus',
    title: 'Institute for Applied Sciences and Educational Technology, NUS',
    role: 'Software Engineer',
    date: 'Nov 2023 - Jun 2024',
    detail:
      'Built a React and MySQL coursework platform that reduced administrative workload by 30%, translating client requirements into secure workflows, tested application logic, and efficient multi-table data models.',
  },
]

export const aboutSkillColumns = [
  [
    'Product Discovery',
    'Requirements Engineering',
    'Applied AI / RAG',
    'Machine Learning / NLP',
    'Data Analysis',
  ],
  ['React + TypeScript', 'Python', 'Swift / SwiftUI', 'SQL + Data Modeling', 'Cloud + CI/CD'],
]
