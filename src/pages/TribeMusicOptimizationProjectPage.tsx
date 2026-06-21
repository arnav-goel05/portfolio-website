import { projects } from '../data/portfolio'
import { ProjectCaseStudyPage } from './ProjectCaseStudyPage'

const project = projects.find((item) => item.slug === 'tribe-music-optimization')

export function TribeMusicOptimizationProjectPage() {
  if (!project) {
    return null
  }

  return <ProjectCaseStudyPage project={project} />
}
