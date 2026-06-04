import { CustomerSupportProjectPage } from './pages/CustomerSupportProjectPage'
import { HandEyeCoordinationProjectPage } from './pages/HandEyeCoordinationProjectPage'
import { PortfolioPage } from './pages/PortfolioPage'
import './App.css'

function App() {
  if (window.location.pathname === '/projects/customer-support') {
    return <CustomerSupportProjectPage />
  }

  if (window.location.pathname === '/projects/hand-eye-coordination') {
    return <HandEyeCoordinationProjectPage />
  }

  return <PortfolioPage />
}

export default App
