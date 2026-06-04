import { useState, type MouseEvent } from 'react'
import heroArnav from '../assets/hero-arnav.png'
import { SiteNav } from '../components/SiteNav'
import { VisionProjectLaunch } from '../components/VisionProjectLaunch'
import { projects, skillGroups, timeline } from '../data/portfolio'

const portfolioNavLinks = [
  { href: '#projects', label: 'Projects' },
  { href: '#timeline', label: 'Timeline' },
  { href: '#skills', label: 'Skills' },
  { href: '#articles', label: 'Articles' },
  { href: '#contact', label: 'Contact' },
]

export function PortfolioPage() {
  const [launchHref, setLaunchHref] = useState<string | null>(null)

  const openProject = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (
      href !== '/projects/hand-eye-coordination' ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return
    }

    event.preventDefault()
    setLaunchHref(href)
  }

  return (
    <main className={launchHref ? 'portfolio-page portfolio-page-launching' : 'portfolio-page'}>
      <VisionProjectLaunch active={Boolean(launchHref)} href={launchHref} />
      <SiteNav
        ariaLabel="Main navigation"
        brandHref="#hero"
        brandLabel="Arnav Goel home"
        links={portfolioNavLinks}
      />

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
          <img src={heroArnav} alt="Stylized portrait of Arnav working on a laptop" />
        </div>
      </section>

      <section className="section-block" id="projects">
        <div className="section-heading">
          <h2>Projects</h2>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <a
              className="project-card project-card-link"
              href={project.href}
              key={project.title}
              onClick={(event) => openProject(event, project.href)}
            >
              <img className="project-media" src={project.image} alt="" aria-hidden="true" />
              <div className="project-body">
                <div>
                  <h3>{project.title}</h3>
                  <p className={`project-roles role-${project.tone}`}>{project.roles}</p>
                  <p>{project.summary}</p>
                </div>
                <span className="project-arrow" aria-label={`Open ${project.title}`}>
                  {'->'}
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="section-block timeline-block" id="timeline">
        <div className="section-heading">
          <h2>Experience Timeline</h2>
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
