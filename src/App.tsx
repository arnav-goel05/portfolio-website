import { CustomerSupportProjectPage } from './pages/CustomerSupportProjectPage'
import { PortfolioPage } from './pages/PortfolioPage'
import './App.css'

function App() {
  if (window.location.pathname === '/projects/customer-support') {
    return <CustomerSupportProjectPage />
  }

  return <PortfolioPage />
}

export default App
