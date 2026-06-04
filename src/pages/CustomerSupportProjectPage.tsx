import customerSupportHeader from '../assets/customer-support-header.png'
import { SiteNav } from '../components/SiteNav'

const projectNavLinks = [
  { href: '/', label: 'Portfolio' },
  { href: '#problem', label: 'Problem' },
  { href: '#system', label: 'System' },
  { href: '#results', label: 'Results' },
]

export function CustomerSupportProjectPage() {
  return (
    <main className="case-study-page">
      <SiteNav
        ariaLabel="Project navigation"
        brandHref="/"
        brandLabel="Back to Arnav Goel portfolio"
        links={projectNavLinks}
      />

      <section className="case-hero">
        <a className="back-link" href="/">
          {'<-'} Back to portfolio
        </a>
        <div className="case-hero-grid">
          <div>
            <h1>Automated Customer Support Evaluation System</h1>
            <p>
              A pipeline that turns support calls into transcripts, sentiment
              signals, and evaluation summaries.
            </p>
          </div>
          <div className="case-meta">
            <span>Whisper ASR</span>
            <span>BERT-RoBERTa</span>
            <span>Sentiment Analysis</span>
          </div>
        </div>
        <img className="case-hero-image" src={customerSupportHeader} alt="" aria-hidden="true" />
      </section>

      <section className="case-section split" id="problem">
        <div className="case-copy">
          <span className="case-step">01</span>
          <h2>Product & Problem</h2>
          <p>
            Support calls contain useful signals, but reviewing them manually is
            slow, inconsistent, and difficult to scale. The goal was to automate
            transcription and sentiment assessment so calls could be evaluated
            more reliably.
          </p>
          <p>
            The product needed to convert noisy audio into usable text, classify
            customer sentiment, and package the output into a clear evaluation
            flow.
          </p>
        </div>
        <div className="call-review-card" aria-label="Illustrative call review flow">
          <div className="waveform">
            {Array.from({ length: 24 }, (_, index) => (
              <span key={index} style={{ height: `${18 + ((index * 17) % 56)}px` }} />
            ))}
          </div>
          <div className="transcript-note">
            <strong>Call transcript</strong>
            <p>00:04 Customer reports unresolved issue...</p>
            <p>00:18 Agent confirms next action...</p>
            <p>00:42 Sentiment signal detected.</p>
          </div>
        </div>
      </section>

      <section className="case-section" id="system">
        <div className="case-copy compact">
          <span className="case-step">02</span>
          <h2>Key Design Decisions & Features</h2>
          <p>
            I kept the system modular so each stage could be improved without
            rewriting the full pipeline.
          </p>
        </div>
        <div className="pipeline">
          <article>
            <span>Audio</span>
            <strong>Support call</strong>
          </article>
          <article>
            <span>ASR</span>
            <strong>Whisper transcript</strong>
          </article>
          <article>
            <span>NLP</span>
            <strong>BERT-RoBERTa sentiment</strong>
          </article>
          <article>
            <span>Output</span>
            <strong>Evaluation summary</strong>
          </article>
        </div>
        <div className="feature-grid">
          <div>
            <h3>Transcription first</h3>
            <p>Whisper ASR converted call audio into text that could be reviewed and scored.</p>
          </div>
          <div>
            <h3>Sentiment layer</h3>
            <p>BERT-RoBERTa added a language-understanding layer for customer sentiment.</p>
          </div>
          <div>
            <h3>Evaluation output</h3>
            <p>The final output grouped transcription and sentiment into a practical review flow.</p>
          </div>
        </div>
      </section>

      <section className="case-section results-section" id="results">
        <div className="case-copy compact">
          <span className="case-step">03</span>
          <h2>Outcome & Results</h2>
          <p>
            The system improved transcription quality and produced sentiment
            signals strong enough to support automated review.
          </p>
        </div>
        <div className="result-grid">
          <article className="metric-card">
            <span>WER reduced</span>
            <strong>77.37% -&gt; 23.79%</strong>
            <div className="metric-bars" aria-hidden="true">
              <i className="bar before" />
              <i className="bar after" />
            </div>
          </article>
          <article className="metric-card">
            <span>Sentiment accuracy</span>
            <strong>&gt; 0.89</strong>
            <div className="score-ring" aria-hidden="true">0.89+</div>
          </article>
        </div>
        <div className="case-actions">
          <a className="button primary" href="/">
            Back to portfolio
          </a>
          <a className="button secondary" href="/#contact">
            Contact
          </a>
        </div>
      </section>
    </main>
  )
}
