type NavLink = {
  href: string
  label: string
}

type SiteNavProps = {
  ariaLabel: string
  brandHref: string
  brandLabel: string
  links: NavLink[]
}

export function SiteNav({ ariaLabel, brandHref, brandLabel, links }: SiteNavProps) {
  return (
    <nav className="site-nav" aria-label={ariaLabel}>
      <a className="brand" href={brandHref} aria-label={brandLabel}>
        <span aria-hidden="true" />
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
