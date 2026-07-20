import { AboutPage } from './pages/AboutPage'
import { CustomCursor } from './components/CustomCursor'
import { NotFoundPage } from './pages/NotFoundPage'
import { PortfolioPage } from './pages/PortfolioPage'
import './App.css'

function normalizePath(pathname: string) {
  return pathname === '/' ? pathname : pathname.replace(/\/+$/, '') || '/'
}

function App() {
  const path = normalizePath(window.location.pathname)
  const page = path === '/' ? <PortfolioPage /> : path === '/about' ? <AboutPage /> : <NotFoundPage />

  return (
    <>
      <CustomCursor />
      {page}
    </>
  )
}

export default App
