import { AboutPage } from './pages/AboutPage'
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

  return (
    <>
      <CustomCursor />
      <PortfolioPage />
    </>
  )
}

export default App
