import aboutArnav from '../assets/about-arnav.jpg'

export const aboutProfile = {
  image: aboutArnav,
  imageAlt: 'Arnav Goel standing outdoors in the mountains.',
  intro: [
    'I am Arnav Goel, a Computer Science undergraduate at the National University of Singapore, graduating in May 2027. I work across product thinking, applied AI, and software engineering, turning ambiguous requirements into practical systems people can inspect, use, and trust.',
  ],
}

export const aboutRows = [
  {
    id: 'johnson-and-johnson',
    title: 'Johnson & Johnson, Singapore',
    role: 'Data & Digital Technology Analyst Intern',
    date: 'Jan 2026 – July 2026 [Expected]',
    details: [
      'Developed a graph-enhanced RAG system with observability for sales teams, reducing hours spent searching and validating information across enterprise PDFs by surfacing evidence-backed answers with traceable citations.',
      'Built a BA-first AI workflow platform for healthcare product discovery, automating multi-role workflow generation and downstream document updates to reduce requirements iteration cycles from weeks of manual effort to hours.',
      'Identified and designed AI solutions into existing business workflows, converting product requirements to automations, user flows, Figma wireframes to improve efficiency and reduce manpower cost.',
      'Drove rapid prototyping and PoC development for internal Shark Tank pitches and J&J Hackathon initiatives, collaborating with teams to turn early-stage ideas into validated, business-aligned digital product concepts.',
    ],
  },
  {
    id: 'nuh-rehabilitation',
    title: 'Interactive 3D, Singapore',
    role: 'Software Engineer Intern',
    date: 'May 2025 – Jan 2026',
    details: [
      'Led an agile team of three and coordinated with NUH to digitise existing stroke rehab assessments, building multiplatform applications for Apple Vision Pro and iPad in Swift/Swift UI, to drive real-time recovery analytics.',
      'Developed a patent-pending 3D hand-eye coordination assessment tool for quantifying hand dexterity, incorporating patient testing feedback and clinical requirements to support integration into healthcare workflows.',
      'Analysed and aggregated 15,000 data points through Python queries using Pandas and Matplotlib to process datasets, visualise key trends, and deliver actionable insights for patient recovery optimization.',
    ],
  },
  {
    id: 'iaset-nus',
    title: 'Institute for Applied Sciences and Educational Technology (NUS), Singapore',
    role: 'Software Engineer',
    date: 'Nov 2023 – Jun 2024',
    details: [
      'Designed a full-stack web application using React.js, JavaScript, and MySQL, employing OOP principles to automate coursework workflows, reducing administrative workload by 30% and boosting student engagement.',
      'Developed MySQL schema models and indexes to meet real-world requirements and boost query performance, and implemented complex, multi-table SQL queries to generate detailed user summaries, saving instructor’s time.',
      'Collaborated closely with the client to capture requirements and deliver a secure, reliable product through the implementation of unit testing, error handling, static security scans using Semgrep and input validation.',
    ],
  },
  {
    id: 'lightblue-consulting',
    title: 'LightBlue Environmental Consulting, Bangkok (NUS Global Internship Program)',
    role: 'UX/UI Designer Intern at a Food Waste Consulting Startup',
    date: 'May 2024 – Nov 2024',
    details: [
      'Coordinated with international cross-functional teams to develop customer personas and design user-friendly web and mobile prototypes in Figma, ensuring alignment with customer needs and boosting user satisfaction',
      'Conducted competitor analysis and business research to benchmark best practices, deepening my understanding of business operations, market dynamics, and revenue drivers, and guided company on design change decisions.',
      'Refined interpersonal and project-management skills by adapting to a fast-paced startup in a new country and collaborating with a multicultural team (such as European, American, Thai) to deliver projects on tight deadlines.',
    ],
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
