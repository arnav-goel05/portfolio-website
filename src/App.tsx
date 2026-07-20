import { AboutPage } from './pages/AboutPage'
import { CustomCursor } from './components/CustomCursor'
import { NotFoundPage } from './pages/NotFoundPage'
import { PortfolioPage } from './pages/PortfolioPage'
import { normalizePath } from './lib/routes'
import './App.css'

function App() {
  const path = normalizePath(window.location.pathname)
  const page =
    path === '/' ? <PortfolioPage /> : path === '/about' ? <AboutPage /> : <NotFoundPage />

  return (
    <>
      <CustomCursor />
      {page}
    </>
  )
}

export default App
