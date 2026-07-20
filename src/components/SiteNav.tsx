import oldMacLogoNoDot from '../assets/old-mac-logo-no-dot.webp'
import { contactLinks, pageLinks } from '../data/site'

type SiteNavProps = {
  ariaLabel: string
}

const links = [...pageLinks, ...contactLinks]

export function SiteNav({ ariaLabel }: SiteNavProps) {
  return (
    <nav className="site-nav" aria-label={ariaLabel}>
      <a className="brand brand--image" href="/" aria-label="Arnav Goel home">
        <img src={oldMacLogoNoDot} alt="" aria-hidden="true" />
      </a>
      <div className="nav-links">
        {links.map((link) => (
          <a
            href={link.href}
            key={link.href}
            target={link.href.startsWith('http') ? '_blank' : undefined}
            rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  )
}
