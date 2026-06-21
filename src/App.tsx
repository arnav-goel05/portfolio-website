import { AboutPage } from './pages/AboutPage'
import { CustomCursor } from './components/CustomCursor'
import { PortfolioPage } from './pages/PortfolioPage'
import { TribeMusicOptimizationProjectPage } from './pages/TribeMusicOptimizationProjectPage'
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

  if (window.location.pathname === '/projects/tribe-music-optimization') {
    return (
      <>
        <CustomCursor />
        <TribeMusicOptimizationProjectPage />
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
