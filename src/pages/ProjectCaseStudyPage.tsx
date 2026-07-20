import { SiteNav } from '../components/SiteNav'
import { contactLinks, type Project } from '../data/portfolio'

type ProjectCaseStudyPageProps = {
  project: Project
}

export function ProjectCaseStudyPage({ project }: ProjectCaseStudyPageProps) {
  return (
    <main className="case-study-page">
      <SiteNav ariaLabel={`${project.title} navigation`} />

      <section className="case-hero reveal">
        <div className="case-status">
          <span aria-hidden="true" />
          {project.status}
        </div>
        <div className="case-title-row">
          <h1>{project.title}</h1>
          <p>{project.eyebrow}</p>
        </div>
        <div className="case-visual" style={{ backgroundColor: project.accent }}>
          <img src={project.image} alt="" aria-hidden="true" />
        </div>
      </section>

      <section className="case-overview reveal">
        <div className="case-overview-copy">
          <p>{project.heroSummary}</p>
          <p>
            {project.sections[0]?.body[0] ??
              'This case study follows the project from problem framing to implementation.'}
          </p>
        </div>
        <div className="case-facts">
          <Fact label="Role" value={project.role} />
          <Fact label="Skills" value={project.skills} />
          <Fact label="Timeline" value={project.timeline} />
          <Fact label="Tools" value={project.tools} />
          <Fact label="Team" value={project.team} />
        </div>
      </section>

      {project.sections.map((section) => (
        <section className="case-section reveal" key={section.kicker}>
          <div className="case-section-heading">
            <p>{section.kicker}</p>
            <h2>{section.title}</h2>
          </div>
          <div className="case-section-body">
            {section.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          {section.cards && (
            <div className="case-card-grid">
              {section.cards.map((card) => (
                <article className="case-insight-card" key={`${section.kicker}-${card.label}`}>
                  <span>{card.label}</span>
                  <h3>{card.title}</h3>
                  <p>{card.body}</p>
                </article>
              ))}
            </div>
          )}
          {section.placeholder && (
            <div className="case-placeholder-panel">
              <span>Placeholder</span>
              <p>{section.placeholder}</p>
            </div>
          )}
        </section>
      ))}

      <section className="case-section key-takeaways reveal">
        <div className="case-section-heading">
          <p>Key Takeaways</p>
          <h2>What this project shows and what still needs evidence.</h2>
        </div>
        <div className="takeaway-list">
          {project.takeaways.map((takeaway, index) => (
            <article className="takeaway-row" key={takeaway.label}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <div>
                <h3>{takeaway.label}</h3>
                <p>{takeaway.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="contact-footer">
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

type FactProps = {
  label: string
  value: string | string[]
}

function Fact({ label, value }: FactProps) {
  const values = Array.isArray(value) ? value : [value]

  return (
    <div className="case-fact">
      <h2>{label}</h2>
      {values.map((item) => (
        <p key={item}>{item}</p>
      ))}
    </div>
  )
}
