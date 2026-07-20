import oldMacLogoNoDot from '../assets/old-mac-logo-no-dot.png'

type SiteNavProps = {
  ariaLabel: string
}

const links = [
  { href: '/#work', label: 'Work' },
  { href: '/about', label: 'About' },
]

export function SiteNav({ ariaLabel }: SiteNavProps) {
  return (
    <nav className="site-nav" aria-label={ariaLabel}>
      <a className="brand brand--image" href="/" aria-label="Arnav Goel home">
        <img src={oldMacLogoNoDot} alt="" aria-hidden="true" />
      </a>
      <div className="nav-links">
        {links.map((link) => (
          <a href={link.href} key={link.href}>
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  )
}
