import { SiteNav } from '../components/SiteNav'
import oldMacLogoNoDot from '../assets/old-mac-logo-no-dot.png'
import chipSticker from '../assets/stickers/chip.png'
import codeTagSticker from '../assets/stickers/code-tag.png'
import curlyBracesSticker from '../assets/stickers/curly-braces.png'
import databaseSticker from '../assets/stickers/database.png'
import escKeySticker from '../assets/stickers/esc-key.png'
import gitBranchSticker from '../assets/stickers/git-branch.png'
import graphNodesSticker from '../assets/stickers/graph-nodes.png'
import mapGridSticker from '../assets/stickers/map-grid.png'
import rocketSticker from '../assets/stickers/rocket.png'
import sparklesSticker from '../assets/stickers/sparkles.png'
import terminalPromptSticker from '../assets/stickers/terminal-prompt.png'
import terminalWindowSticker from '../assets/stickers/terminal-window.png'
import { contactLinks, projects } from '../data/portfolio'

const portfolioNavLinks = [
  { href: '#work', label: 'Work' },
  { href: '/about', label: 'About' },
]

const heroStickers = [
  { src: terminalWindowSticker, label: 'terminal window', className: 'hero-sticker--terminal-window' },
  { src: curlyBracesSticker, label: 'curly braces', className: 'hero-sticker--curly-braces' },
  { src: databaseSticker, label: 'database stack', className: 'hero-sticker--database' },
  { src: codeTagSticker, label: 'code brackets', className: 'hero-sticker--code-tag' },
  { src: gitBranchSticker, label: 'git branch', className: 'hero-sticker--git-branch' },
  { src: chipSticker, label: 'microchip', className: 'hero-sticker--chip' },
  { src: graphNodesSticker, label: 'graph nodes', className: 'hero-sticker--graph-nodes' },
  { src: escKeySticker, label: 'escape key', className: 'hero-sticker--esc-key' },
  { src: terminalPromptSticker, label: 'terminal prompt', className: 'hero-sticker--terminal-prompt' },
  { src: rocketSticker, label: 'rocket', className: 'hero-sticker--rocket' },
  { src: sparklesSticker, label: 'sparkles', className: 'hero-sticker--sparkles' },
  { src: mapGridSticker, label: 'map grid', className: 'hero-sticker--map-grid' },
]

export function PortfolioPage() {
  return (
    <main className="portfolio-page">
      <SiteNav
        ariaLabel="Main navigation"
        brandHref="#top"
        brandImageSrc={oldMacLogoNoDot}
        brandLabel="Arnav Goel home"
        links={portfolioNavLinks}
      />

      <section className="portfolio-hero reveal" id="top">
        <div className="hero-stickers" aria-hidden="true">
          {heroStickers.map((sticker) => (
            <img
              src={sticker.src}
              alt=""
              className={`hero-sticker ${sticker.className}`}
              key={sticker.label}
              loading="eager"
            />
          ))}
        </div>
        <h1>
          Hello, I am <em>Arnav Goel.</em>
          <br />
          <span>A software engineer who builds.</span>
        </h1>
        <p className="hero-subcopy">
          <em>Building applied AI and spatial tools from 0-&gt;1,</em>
          <br />
          turning complex requirements into practical software.
        </p>
        <p className="hero-location">Based in Singapore / Open to relocation</p>
      </section>

      <section className="selected-work" id="work" aria-labelledby="work-title">
        <div className="work-heading reveal">
          <h1 id="work-title">Selected Work</h1>
        </div>

        <div className="work-list">
          {projects.map((project) => (
            <a className="work-card reveal" href={`/projects/${project.slug}`} key={project.slug}>
              <div className="work-media">
                <img src={project.image} alt="" aria-hidden="true" />
              </div>
              <div className="work-meta" aria-label={`${project.title} metadata`}>
                {[project.year, project.status, project.category, project.platform].map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <div className="work-copy">
                <h2>{project.title}</h2>
                <p>{project.summary}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <footer className="contact-footer" id="contact">
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
