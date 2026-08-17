export type SiteLink = {
  label: string
  href: string
  download?: string
}

export const contactLinks: SiteLink[] = [
  { label: 'Email', href: 'mailto:arnavgoel182@gmail.com' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/arnav--goel/' },
  { label: 'GitHub', href: 'https://github.com/arnav-goel05' },
]

export const pageLinks: SiteLink[] = [
  { href: '/#work', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/arnav-goel-resume.pdf', label: 'Resume', download: 'Arnav-Goel-Resume.pdf' },
]
