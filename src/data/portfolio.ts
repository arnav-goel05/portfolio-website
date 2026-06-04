import customerSupportHeader from '../assets/customer-support-header.png'
import handEyeCoordinationHeader from '../assets/hand-eye-coordination-header.svg'

export const projects = [
  {
    title: 'Automated Customer Support Evaluation System',
    roles: 'Whisper ASR | BERT-RoBERTa | Sentiment Analysis',
    summary:
      'Built an end-to-end pipeline for call transcription and sentiment assessment, reducing WER from 77.37% to 23.79% and reaching sentiment accuracy above 0.89.',
    tone: 'blue',
    image: customerSupportHeader,
    href: '/projects/customer-support',
  },
  {
    title: '3D Hand-Eye Coordination Assessment Tool',
    roles: 'SwiftUI | ARKit | RealityKit | Python Analysis',
    summary:
      'Developing a spatial-computing tool with NUH Rehabilitation to assess hand dexterity by measuring how closely patients follow an ideal path between two points.',
    tone: 'green',
    image: handEyeCoordinationHeader,
    href: '/projects/hand-eye-coordination',
  },
]

export const timeline = [
  {
    date: 'May 2025 - Present',
    role: 'Software Engineer Intern',
    org: 'Interactive 3D, Singapore',
    detail:
      'Leading an agile team of three building spatial-computing applications for Apple Vision Pro and iPad in Swift and SwiftUI for immersive patient rehabilitation and recovery analytics.',
  },
  {
    date: 'Jun 2025 - Aug 2025',
    role: 'Contributor',
    org: 'TEAMMATES Open-Source Project, Singapore',
    detail:
      'Enhanced feedback session reports with visualizations, multi-select question filters, configurable statistics, tests, documentation, and GitHub workflow collaboration across a 150,000+ line codebase.',
  },
  {
    date: 'Nov 2023 - Jun 2024',
    role: 'Software Engineer',
    org: 'Institute for Applied Sciences and Educational Technology, NUS',
    detail:
      'Designed a React, JavaScript, and MySQL full-stack web application to automate coursework workflows, improve query performance, integrate Google Calendar, and support secure delivery with testing and Semgrep scans.',
  },
  {
    date: 'May 2024 - Nov 2024',
    role: 'UX/UI Designer Intern',
    org: 'LightBlue Environmental Consulting, Bangkok',
    detail:
      'Built customer personas and Figma web/mobile prototypes, conducted competitor and business research, and collaborated with international cross-functional teams in a fast-paced startup environment.',
  },
]

export const skillGroups = [
  {
    title: 'Programming Languages',
    items: 'Java, Python, Swift, R, JavaScript, TypeScript',
  },
  {
    title: 'Web Development & Database',
    items: 'React.js, Node.js, HTML5, CSS3, Material UI, Figma, MySQL, NoSQL, Firebase',
  },
  {
    title: 'AI/ML Frameworks',
    items:
      'NumPy, Pandas, PyTorch, scikit-learn, data preprocessing, feature engineering, model training and finetuning, NLP, Jupyter notebook',
  },
  {
    title: 'Tools & Infrastructure',
    items: 'Git, CI/CD Pipeline, Docker, Bash/Shell scripting, AWS, Microsoft Office, Linux, Windows',
  },
]
