import { useState } from 'react'
import { SiteNav } from '../components/SiteNav'
import { aboutProfile, aboutRows, aboutSkillColumns } from '../data/about'
import { contactLinks } from '../data/portfolio'

const aboutNavLinks = [
  { href: '/#work', label: 'Work' },
  { href: '/about', label: 'About' },
]

export function AboutPage() {
  const [openRow, setOpenRow] = useState<string | null>(null)

  return (
    <main className="about-page">
      <SiteNav
        ariaLabel="About page navigation"
        brandHref="/"
        brandLabel="Back to Arnav Goel portfolio"
        links={aboutNavLinks}
      />

      <section className="about-intro reveal" aria-labelledby="about-title">
        <div className="about-copy">
          <p className="about-kicker" id="about-title">About</p>
          <div className="about-intro-text">
            {aboutProfile.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
        <figure className="about-portrait">
          <img src={aboutProfile.image} alt={aboutProfile.imageAlt} />
        </figure>
      </section>

      <section className="about-contact reveal" aria-labelledby="about-contact-title">
        <p className="about-kicker" id="about-contact-title">Get in Touch with Me</p>
        <div className="about-contact-links">
          {contactLinks.map((link) => (
            <a href={link.href} key={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
              {link.label}
            </a>
          ))}
        </div>
      </section>

      <section className="about-rows reveal" aria-labelledby="about-experience-title">
        <p className="about-kicker" id="about-experience-title">Experience</p>
        <div className="about-row-list">
          {aboutRows.map((row) => {
            const isOpen = openRow === row.title

            return (
              <article className="about-row" key={row.title}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenRow(isOpen ? null : row.title)}
                >
                  <span>
                    <strong>{row.title}</strong>
                    <span>{row.role}</span>
                    <small>{row.date}</small>
                  </span>
                  <span className="about-row-icon" aria-hidden="true">{isOpen ? '-' : '+'}</span>
                </button>
                {isOpen && <p className="about-row-detail">{row.detail}</p>}
              </article>
            )
          })}
        </div>
      </section>

      <section className="about-skills reveal" aria-labelledby="about-skills-title">
        <p className="about-kicker" id="about-skills-title">My Skills</p>
        <div className="about-skill-grid">
          {aboutSkillColumns.map((column) => (
            <ul key={column.join('-')}>
              {column.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          ))}
        </div>
      </section>

      <footer className="contact-footer">
        <p>Where to Find Me <span aria-hidden="true">-&gt;</span></p>
        <div>
          {contactLinks.map((link) => (
            <a href={link.href} key={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
              {link.label}
            </a>
          ))}
        </div>
      </footer>
    </main>
  )
}
