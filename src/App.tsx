import { AboutPage } from './pages/AboutPage'
import { AIWorkflowProjectPage } from './pages/AIWorkflowProjectPage'
import { CustomCursor } from './components/CustomCursor'
import { PortfolioPage } from './pages/PortfolioPage'
import './App.css'

function App() {
  if (window.location.pathname === '/about') {
    return (
      <>
        <CustomCursor />
        <AboutPage />
      </>
    )
  }

  if (window.location.pathname === '/projects/ai-workflow-system') {
    return (
      <>
        <CustomCursor />
        <AIWorkflowProjectPage />
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
