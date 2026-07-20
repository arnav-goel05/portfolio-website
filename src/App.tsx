import { AboutPage } from './pages/AboutPage'
import { CustomCursor } from './components/CustomCursor'
import { projects } from './data/portfolio'
import { PortfolioPage } from './pages/PortfolioPage'
import { ProjectCaseStudyPage } from './pages/ProjectCaseStudyPage'
import './App.css'

function App() {
  const projectSlug = window.location.pathname.startsWith('/projects/')
    ? window.location.pathname.slice('/projects/'.length)
    : null
  const project = projects.find((item) => item.slug === projectSlug)

  if (window.location.pathname === '/about') {
    return (
      <>
        <CustomCursor />
        <AboutPage />
      </>
    )
  }

  if (project) {
    return (
      <>
        <CustomCursor />
        <ProjectCaseStudyPage project={project} />
      </>
    )
  }

  return (
    <>
      <CustomCursor />
      <PortfolioPage />
    </>
  )
}

export default App
