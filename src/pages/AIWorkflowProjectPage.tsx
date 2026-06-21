import { projects } from '../data/portfolio'
import { ProjectCaseStudyPage } from './ProjectCaseStudyPage'

const project = projects.find((item) => item.slug === 'ai-workflow-system')

export function AIWorkflowProjectPage() {
  if (!project) {
    return null
  }

  return <ProjectCaseStudyPage project={project} />
}
