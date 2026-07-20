import { useState } from 'react'
import { SiteNav } from '../components/SiteNav'
import { aboutProfile, aboutRows, aboutSkillColumns } from '../data/about'
import { contactLinks } from '../data/site'

export function AboutPage() {
  const [openRow, setOpenRow] = useState<string | null>(null)

  return (
    <main className="about-page">
      <SiteNav ariaLabel="About page navigation" />

      <section className="about-intro" aria-labelledby="about-title">
        <div className="about-copy">
          <h1 className="about-kicker" id="about-title">About</h1>
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

      <section className="about-contact" aria-labelledby="about-contact-title">
        <h2 className="about-kicker" id="about-contact-title">Get in Touch with Me</h2>
        <div className="about-contact-links">
          {contactLinks.map((link) => (
            <a href={link.href} key={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
              {link.label}
            </a>
          ))}
        </div>
      </section>

      <section className="about-rows" aria-labelledby="about-experience-title">
        <h2 className="about-kicker" id="about-experience-title">Experience</h2>
        <div className="about-row-list">
          {aboutRows.map((row) => {
            const isOpen = openRow === row.id
            const detailId = `experience-${row.id}`

            return (
              <article className="about-row" key={row.id}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={detailId}
                  onClick={() => setOpenRow(isOpen ? null : row.id)}
                >
                  <span>
                    <strong>{row.title}</strong>
                    <span>{row.role}</span>
                    <small>{row.date}</small>
                  </span>
                  <span className="about-row-icon" aria-hidden="true">{isOpen ? '-' : '+'}</span>
                </button>
                {isOpen && <p className="about-row-detail" id={detailId}>{row.detail}</p>}
              </article>
            )
          })}
        </div>
      </section>

      <section className="about-skills" aria-labelledby="about-skills-title">
        <h2 className="about-kicker" id="about-skills-title">My Skills</h2>
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

    </main>
  )
}
