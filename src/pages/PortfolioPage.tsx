import { SiteNav } from '../components/SiteNav'
import { ProjectMedia } from '../components/ProjectMedia'
import aiLearningBookSticker from '../assets/stickers-v2/ai-learning-book.png'
import ambleCityMapSticker from '../assets/stickers-v2/amble-city-map.png'
import creditRiskGaugeSticker from '../assets/stickers-v2/credit-risk-gauge.png'
import currencyAccessibilityScanSticker from '../assets/stickers-v2/currency-accessibility-scan.png'
import eyeScreeningWheelSticker from '../assets/stickers-v2/eye-screening-wheel.png'
import maternalRiskRulesSticker from '../assets/stickers-v2/maternal-risk-rules.png'
import procurementConversationSticker from '../assets/stickers-v2/procurement-conversation.png'
import ragKnowledgeRetrievalSticker from '../assets/stickers-v2/rag-knowledge-retrieval.png'
import spatialCognitionSticker from '../assets/stickers-v2/spatial-cognition.png'
import spatialHandTrackingSticker from '../assets/stickers-v2/spatial-hand-tracking.png'
import tribeCorticalAudioSticker from '../assets/stickers-v2/tribe-cortical-audio.png'
import vision2ValueHealthcareWorkflowSticker from '../assets/stickers-v2/vision2value-healthcare-workflow.png'
import { contactLinks, projects } from '../data/portfolio'

const heroStickers = [
  { src: vision2ValueHealthcareWorkflowSticker, label: 'healthcare product workflow', className: 'hero-sticker--terminal-window' },
  { src: currencyAccessibilityScanSticker, label: 'accessible currency scanner', className: 'hero-sticker--curly-braces' },
  { src: procurementConversationSticker, label: 'conversational procurement', className: 'hero-sticker--database' },
  { src: eyeScreeningWheelSticker, label: 'digital eye screening', className: 'hero-sticker--code-tag' },
  { src: maternalRiskRulesSticker, label: 'maternal health risk rules', className: 'hero-sticker--git-branch' },
  { src: spatialCognitionSticker, label: 'spatial cognitive assessment', className: 'hero-sticker--chip' },
  { src: aiLearningBookSticker, label: 'AI learning platform', className: 'hero-sticker--graph-nodes' },
  { src: creditRiskGaugeSticker, label: 'credit risk prediction', className: 'hero-sticker--esc-key' },
  { src: tribeCorticalAudioSticker, label: 'cortical audio optimization', className: 'hero-sticker--terminal-prompt' },
  { src: spatialHandTrackingSticker, label: 'spatial hand tracking', className: 'hero-sticker--rocket' },
  { src: ragKnowledgeRetrievalSticker, label: 'knowledge retrieval', className: 'hero-sticker--sparkles' },
  { src: ambleCityMapSticker, label: '3D city discovery map', className: 'hero-sticker--map-grid' },
]

export function PortfolioPage() {
  return (
    <main className="portfolio-page">
      <SiteNav ariaLabel="Main navigation" />

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
        <div className="work-heading reveal">
          <h1 id="work-title">Selected Work</h1>
        </div>

        <div className="work-list">
          {projects.map((project) => (
            <article className="work-card reveal" key={project.slug}>
              <div className="work-media">
                <ProjectMedia image={project.image} title={project.title} video={project.video} />
              </div>
              <div className="work-copy">
                <h2>{project.title}</h2>
                <p>{project.summary}</p>
              </div>

              <dl className="work-details">
                <div>
                  <dt>Problem</dt>
                  <dd>{project.problem}</dd>
                </div>
                <div>
                  <dt>Built</dt>
                  <dd>{project.contribution}</dd>
                </div>
                <div>
                  <dt>Outcome</dt>
                  <dd>{project.outcome}</dd>
                </div>
              </dl>

              <ul className="work-highlights" aria-label={`${project.title} highlights`}>
                {project.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>

              <div className="work-stack">
                <span>Built with</span>
                <p>{project.tools.join(' · ')}</p>
              </div>

              <div className="work-links">
                {project.links.map((link) => (
                  <a href={link.href} key={link.href} target="_blank" rel="noreferrer">
                    {link.label} <span aria-hidden="true">↗</span>
                  </a>
                ))}
              </div>
            </article>
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
