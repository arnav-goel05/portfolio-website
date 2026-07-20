import { ProjectCard } from '../components/ProjectCard'
import { SiteNav } from '../components/SiteNav'
import { heroStickers } from '../data/hero'
import { projects } from '../data/portfolio'

function chunkProjects(size: number) {
  return Array.from({ length: Math.ceil(projects.length / size) }, (_, index) =>
    projects.slice(index * size, index * size + size),
  )
}

export function PortfolioPage() {
  return (
    <main className="portfolio-page">
      <SiteNav ariaLabel="Main navigation" />

      <section className="portfolio-hero" id="top">
        <div className="hero-stickers" aria-hidden="true">
          {heroStickers.map((sticker) => (
            <img
              src={sticker.src}
              alt=""
              className={`hero-sticker ${sticker.className}`}
              key={sticker.className}
              decoding="async"
            />
          ))}
        </div>
        <h1>
          Hey! I'm <em>Arnav Goel.</em>
          <br />
          <span>Building thoughtful products from 0→1.</span>
        </h1>
        <p className="hero-subcopy">
          <em>Working across product thinking, AI,</em>
          <br />
          and software development.
        </p>
        <p className="hero-location">Based in Singapore / Open to relocation</p>
      </section>

      <section className="selected-work" id="work" aria-labelledby="work-title">
        <div className="work-heading">
          <h2 id="work-title">Selected Work</h2>
        </div>

        <div className="work-list">
          {chunkProjects(2).map((projectRow) => (
            <div className="work-row" key={projectRow.map(({ slug }) => slug).join('-')}>
              {projectRow.map((project) => <ProjectCard project={project} key={project.slug} />)}
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
