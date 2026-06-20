import { projects } from '../data/portfolio'
import { ProjectCaseStudyPage } from './ProjectCaseStudyPage'

const project = projects.find((item) => item.slug === 'customer-support')

export function CustomerSupportProjectPage() {
  if (!project) {
    return null
  }

  return <ProjectCaseStudyPage project={project} />
}
