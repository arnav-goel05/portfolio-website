import { projects } from '../data/portfolio'
import { ProjectCaseStudyPage } from './ProjectCaseStudyPage'

const project = projects.find((item) => item.slug === 'hand-eye-coordination')

export function HandEyeCoordinationProjectPage() {
  if (!project) {
    return null
  }

  return <ProjectCaseStudyPage project={project} />
}
