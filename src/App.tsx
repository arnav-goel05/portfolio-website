import heroArnav from './assets/hero-arnav.png'
import customerSupportHeader from './assets/customer-support-header.png'
import './App.css'

const projects = [
  {
    title: 'Automated Customer Support Evaluation System',
    roles: 'Whisper ASR | BERT-RoBERTa | Sentiment Analysis',
    summary:
      'Built an end-to-end pipeline for call transcription and sentiment assessment, reducing WER from 77.37% to 23.79% and reaching sentiment accuracy above 0.89.',
    tone: 'blue',
    image: customerSupportHeader,
  },
]

const timeline = [
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

const skillGroups = [
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
    items: 'NumPy, Pandas, PyTorch, scikit-learn, data preprocessing, feature engineering, model training and finetuning, NLP, Jupyter notebook',
  },
  {
    title: 'Tools & Infrastructure',
    items: 'Git, CI/CD Pipeline, Docker, Bash/Shell scripting, AWS, Microsoft Office, Linux, Windows',
  },
]

function App() {
  return (
    <main>
      <nav className="site-nav" aria-label="Main navigation">
        <a className="brand" href="#hero" aria-label="Arnav Goel home">
          Arnav Goel <span aria-hidden="true">+</span>
        </a>
        <div className="nav-links">
          <a href="#projects">Projects</a>
          <a href="#timeline">Timeline</a>
          <a href="#skills">Skills</a>
          <a href="#articles">Articles</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero-section" id="hero">
        <div className="hero-copy">
          <h1>Arnav Goel</h1>
          <p className="hero-lede">
            NUS Computer Science student building reliable software, spatial
            computing tools, and applied AI systems.
          </p>
          <p className="hero-support">
            I work across product engineering, healthcare technology, and open
            source, turning complex requirements into practical tools people can
            use.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#projects">
              View Projects
            </a>
            <a className="button secondary" href="#contact">
              Contact
            </a>
          </div>
        </div>
        <div className="hero-visual" aria-label="Editorial portfolio motif">
          <div className="code-mark">&lt;/&gt;</div>
          <img src={heroArnav} alt="Stylized portrait of Arnav working on a laptop" />
        </div>
      </section>

      <section className="section-block" id="projects">
        <div className="section-heading">
          <h2>Projects</h2>
          <a href="#contact">Discuss a project {'->'}</a>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <img className="project-media" src={project.image} alt="" aria-hidden="true" />
              <div className="project-body">
                <div>
                  <h3>{project.title}</h3>
                  <p className={`project-roles role-${project.tone}`}>{project.roles}</p>
                  <p>{project.summary}</p>
                </div>
                <a className="project-arrow" href="#contact" aria-label={`Ask about ${project.title}`}>
                  {'->'}
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block timeline-block" id="timeline">
        <div className="section-heading">
          <h2>Experience Timeline</h2>
          <a href="#contact">Full timeline {'->'}</a>
        </div>
        <div className="timeline-list">
          {timeline.map((item) => (
            <article className="timeline-row" key={`${item.date}-${item.role}`}>
              <time>{item.date}</time>
              <div>
                <h3>{item.role}</h3>
                <p className="timeline-org">{item.org}</p>
                <p>{item.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block" id="skills">
        <div className="section-heading">
          <h2>Technical Skills</h2>
          <a href="#contact">Contact {'->'}</a>
        </div>
        <div className="skill-list">
          {skillGroups.map((group, index) => (
            <article className="skill-row" key={group.title}>
              <span className="article-icon">{String(index + 1).padStart(2, '0')}</span>
              <h3>{group.title}</h3>
              <p>{group.items}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block" id="articles">
        <div className="section-heading">
          <h2>Articles</h2>
          <a href="#contact">Share writing later {'->'}</a>
        </div>
        <div className="placeholder-panel">
          <h3>Writing archive coming soon.</h3>
          <p>
            This section is intentionally blank for now so it can hold essays,
            technical writeups, or published pieces once the final article list
            is available.
          </p>
        </div>
      </section>

      <footer className="footer" id="contact">
        <div>
          <h2>Contact</h2>
          <p>
            Open to software engineering, spatial computing, AI/ML, and
            product-focused opportunities.
          </p>
        </div>
        <address>
          <a href="mailto:arnav.goel@u.nus.edu">arnav.goel@u.nus.edu</a>
          <a href="https://www.linkedin.com/in/arnav--goel/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <span>National University of Singapore</span>
        </address>
        <div className="education-summary">
          <h3>Education</h3>
          <p>
            National University of Singapore, Bachelor of Computing in Computer
            Science, Honours. Expected May 2027.
          </p>
        </div>
      </footer>
    </main>
  )
}

export default App
