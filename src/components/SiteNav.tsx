type NavLink = {
  href: string
  label: string
}

type SiteNavProps = {
  ariaLabel: string
  brandHref: string
  brandImageSrc?: string
  brandLabel: string
  links: NavLink[]
}

export function SiteNav({ ariaLabel, brandHref, brandImageSrc, brandLabel, links }: SiteNavProps) {
  return (
    <nav className="site-nav" aria-label={ariaLabel}>
      <a className={`brand${brandImageSrc ? ' brand--image' : ''}`} href={brandHref} aria-label={brandLabel}>
        {brandImageSrc ? <img src={brandImageSrc} alt="" aria-hidden="true" /> : <span aria-hidden="true" />}
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
