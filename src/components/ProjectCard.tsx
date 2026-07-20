import type { Project } from '../data/portfolio'
import { ProjectMedia } from './ProjectMedia'

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
          <h3>{project.title}</h3>
          {project.status ? <span className="work-status">{project.status}</span> : null}
        </div>
        <p>{project.summary}</p>
      </div>

      <dl className="work-details">
        <div>
          <dt>Problem</dt>
          <dd>{project.problem}</dd>
        </div>
        <div>
          <dt>Built</dt>
          <dd>{project.contribution}</dd>
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

      <div className="work-links">
        {project.links.map((link) => (
          <a href={link.href} key={link.href} target="_blank" rel="noreferrer">
            {link.label} <span aria-hidden="true">↗</span>
          </a>
        ))}
      </div>
    </article>
  )
}
