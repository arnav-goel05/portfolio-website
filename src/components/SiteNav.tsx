import { useState } from 'react'
import oldMacLogoNoDot from '../assets/old-mac-logo-no-dot.webp'
import { contactLinks, pageLinks } from '../data/site'

type SiteNavProps = {
  ariaLabel: string
}

const links = [...pageLinks, ...contactLinks]

export function SiteNav({ ariaLabel }: SiteNavProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="site-nav" aria-label={ariaLabel}>
      <a className="brand brand--image" href="/" aria-label="Arnav Goel home">
        <img src={oldMacLogoNoDot} alt="" aria-hidden="true" />
      </a>
      <button
        className="nav-toggle"
        type="button"
        aria-expanded={isMenuOpen}
        aria-controls="site-nav-links"
        onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
      >
        Menu <span aria-hidden="true">{isMenuOpen ? '-' : '+'}</span>
      </button>
      <div className={`nav-links${isMenuOpen ? ' is-open' : ''}`} id="site-nav-links">
        {links.map((link) => (
          <a
            href={link.href}
            key={link.href}
            target={link.href.startsWith('http') ? '_blank' : undefined}
            rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
            onClick={() => setIsMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  )
}
