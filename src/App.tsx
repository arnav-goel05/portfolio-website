import { CustomerSupportProjectPage } from './pages/CustomerSupportProjectPage'
import { CustomCursor } from './components/CustomCursor'
import { HandEyeCoordinationProjectPage } from './pages/HandEyeCoordinationProjectPage'
import { PortfolioPage } from './pages/PortfolioPage'
import './App.css'

function App() {
  if (window.location.pathname === '/projects/customer-support') {
    return (
      <>
        <CustomCursor />
        <CustomerSupportProjectPage />
      </>
    )
  }

  if (window.location.pathname === '/projects/hand-eye-coordination') {
    return (
      <>
        <CustomCursor />
        <HandEyeCoordinationProjectPage />
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
