import type { Project } from '../data/portfolio'
import { ProjectMedia } from './ProjectMedia'
import { FaLinkedin } from 'react-icons/fa'

type ProjectCardProps = {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="work-card">
      <div className="work-media">
        <ProjectMedia image={project.image} title={project.title} video={project.video} />
      </div>
      <div className="work-copy">
        <div className="work-title-row">
          <div className="work-title-main">
            <h3>{project.title}</h3>
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

      <div className="work-links">
        {project.links.map((link) => (
          <a href={link.href} key={link.href} target="_blank" rel="noreferrer">
            {link.label} <span aria-hidden="true">↗</span>
          </a>
        ))}
      </div>

      <dl className="work-details">
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
          <dd>{project.outcome}</dd>
        </div>
      </dl>

      <div className="work-stack">
        <span>Built with</span>
        <p>{project.tools.join(' · ')}</p>
      </div>
    </article>
  )
}
