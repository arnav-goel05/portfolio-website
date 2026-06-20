import { SiteNav } from '../components/SiteNav'
import { contactLinks, projects } from '../data/portfolio'

const portfolioNavLinks = [
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
]

export function PortfolioPage() {
  return (
    <main className="portfolio-page">
      <SiteNav
        ariaLabel="Main navigation"
        brandHref="#top"
        brandLabel="Arnav Goel home"
        links={portfolioNavLinks}
      />

      <section className="portfolio-hero reveal" id="top">
        <h1>
          Hello, I am <em>Arnav Goel.</em>
          <br />
          <span>A software engineer who builds.</span>
        </h1>
        <p className="hero-subcopy">
          <em>Building applied AI and spatial tools from 0-&gt;1,</em>
          <br />
          turning complex requirements into practical software.
        </p>
        <p className="hero-location">Based in Singapore / Open to relocation</p>
      </section>

      <section className="portfolio-about reveal" id="about">
        <p>
          I build applied AI, spatial-computing, and product engineering projects
          that turn messy technical requirements into practical systems.
        </p>
      </section>

      <section className="selected-work" id="work" aria-labelledby="work-title">
        <div className="work-heading reveal">
          <p>Selected Work</p>
          <h1 id="work-title">Projects</h1>
        </div>

        <div className="work-list">
          {projects.map((project) => (
            <a className="work-card reveal" href={`/projects/${project.slug}`} key={project.slug}>
              <div className="work-media" style={{ backgroundColor: project.accent }}>
                <img src={project.image} alt="" aria-hidden="true" />
              </div>
              <div className="work-meta" aria-label={`${project.title} metadata`}>
                <span>{project.year}</span>
                <span>{project.status}</span>
                <span>{project.category}</span>
                <span>{project.platform}</span>
              </div>
              <div className="work-copy">
                <h2>{project.title}</h2>
                <p>{project.summary}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <footer className="contact-footer" id="contact">
        <p>Where to Find Me <span aria-hidden="true">-&gt;</span></p>
        <div>
          {contactLinks.map((link) => (
            <a href={link.href} key={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
              {link.label}
            </a>
          ))}
        </div>
      </footer>
    </main>
  )
}
