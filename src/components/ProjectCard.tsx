import { useState } from 'react'
import type { Project } from '../data/portfolio'
import { ProjectMedia } from './ProjectMedia'
import { FaLinkedin } from 'react-icons/fa'

type ProjectCardProps = {
  project: Project
}

function ProjectOutcome({ outcome }: { outcome: Project['outcome'] }) {
  if (typeof outcome === 'string') {
    return outcome
  }

  return (
    <div className="work-outcome">
      <p>{outcome.summary}</p>
      <p>{outcome.lead}</p>
      <ul>
        {outcome.metrics.map((metric) => (
          <li key={metric}>{metric}</li>
        ))}
      </ul>
      <p>{outcome.note}</p>
    </div>
  )
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false)
  const detailId = `${project.slug}-details`
  const titleId = `${project.slug}-title`

  return (
    <article className="work-card" id={project.slug} aria-labelledby={titleId}>
      <div className="work-media">
        <ProjectMedia image={project.image} title={project.title} video={project.video} />
      </div>
      <div className="work-copy">
        <div className="work-title-row">
          <div className="work-title-main">
            <h3 id={titleId}>{project.title}</h3>
            {project.status ? <span className="work-status">{project.status}</span> : null}
          </div>
          {project.featuredLink ? (
            <a
              className="work-title-link"
              href={project.featuredLink.href}
              target="_blank"
              rel="noreferrer"
              aria-label={project.featuredLink.label}
              title={project.featuredLink.label}
            >
              <FaLinkedin aria-hidden="true" />
            </a>
          ) : null}
        </div>
        <p>{project.summary}</p>
      </div>

      <div className="work-actions">
        <div className="work-links">
          {project.links.map((link) => (
            <a href={link.href} key={link.href} target="_blank" rel="noreferrer">
              {link.label} <span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
        <button
          className="work-accordion-toggle"
          type="button"
          aria-expanded={isOpen}
          aria-controls={detailId}
          aria-label={`${isOpen ? 'Hide' : 'View'} details for ${project.title}`}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span>{isOpen ? 'Hide details' : 'View details'}</span>
          <span className="work-accordion-icon" aria-hidden="true">
            {isOpen ? '−' : '+'}
          </span>
        </button>
      </div>

      <dl className="work-details" id={detailId} hidden={!isOpen}>
        <div>
          <dt>Problem</dt>
          <dd>{project.problem}</dd>
        </div>
        <div>
          <dt>Built</dt>
          <dd>
            {Array.isArray(project.contribution) ? (
              <ul>
                {project.contribution.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : (
              project.contribution
            )}
          </dd>
        </div>
        <div>
          <dt>Outcome</dt>
          <dd>
            <ProjectOutcome outcome={project.outcome} />
          </dd>
        </div>
      </dl>

      <div className="work-stack" hidden={!isOpen}>
        <span>Built with</span>
        <p>{project.tools.join(' · ')}</p>
      </div>
    </article>
  )
}
