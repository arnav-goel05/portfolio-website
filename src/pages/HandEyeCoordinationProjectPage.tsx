import handEyeCoordinationHeader from '../assets/hand-eye-coordination-header.svg'
import { SiteNav } from '../components/SiteNav'

const projectNavLinks = [
  { href: '/', label: 'Portfolio' },
  { href: '#problem', label: 'Problem' },
  { href: '#system', label: 'System' },
  { href: '#results', label: 'Results' },
]

export function HandEyeCoordinationProjectPage() {
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
            <h1>3D Hand-Eye Coordination Assessment Tool</h1>
            <p>
              A spatial-computing assessment for hand dexterity, built with
              SwiftUI, ARKit, and RealityKit for Apple Vision Pro.
            </p>
          </div>
          <div className="case-meta">
            <span>SwiftUI</span>
            <span>ARKit</span>
            <span>RealityKit</span>
            <span>Python Analysis</span>
          </div>
        </div>
        <img className="case-hero-image" src={handEyeCoordinationHeader} alt="" aria-hidden="true" />
      </section>

      <section className="case-section split" id="problem">
        <div className="case-copy">
          <span className="case-step">01</span>
          <h2>Product & Problem</h2>
          <p>
            Stroke survivors need repeatable rehabilitation assessments, but
            manual observation can be imprecise and difficult to compare over
            time.
          </p>
          <p>
            Together with the NUH Department of Rehabilitation, this project
            explores a 3D hand-eye coordination test for measuring how closely a
            patient follows an ideal path between two points.
          </p>
        </div>
        <div className="placeholder-panel case-placeholder">
          <h3>Assessment video placeholder</h3>
          <p>
            Add the Vision Pro demo video or a scrubbed product walkthrough here
            once the final media is ready.
          </p>
        </div>
      </section>

      <section className="case-section" id="system">
        <div className="case-copy compact">
          <span className="case-step">02</span>
          <h2>Key Design Decisions & Features</h2>
          <p>
            The product needs to feel simple for patients while capturing enough
            movement detail for useful clinical review.
          </p>
        </div>
        <div className="feature-grid">
          <div>
            <h3>Spatial path task</h3>
            <p>
              Patients trace a virtual line between spatially oriented points in
              three-dimensional space.
            </p>
          </div>
          <div>
            <h3>Deviation capture</h3>
            <p>
              The assessment records small deviations in finger movement against
              the ideal path.
            </p>
          </div>
          <div>
            <h3>Analysis pipeline</h3>
            <p>
              Placeholder for the Python, Pandas, and Matplotlib workflow used
              to aggregate and visualize assessment data.
            </p>
          </div>
        </div>
      </section>

      <section className="case-section results-section" id="results">
        <div className="case-copy compact">
          <span className="case-step">03</span>
          <h2>Outcome & Results</h2>
          <p>
            This section will hold the clinical-trial status, control-versus-patient
            comparison, and final analysis visuals once the data is
            ready to publish.
          </p>
        </div>
        <div className="result-grid">
          <article className="metric-card placeholder-metric">
            <span>Graph placeholder</span>
            <strong>Path deviation</strong>
            <p>Reserved for patient-versus-control movement comparison.</p>
          </article>
          <article className="metric-card placeholder-metric">
            <span>Data placeholder</span>
            <strong>15k+ points</strong>
            <p>Reserved for aggregation notes and analysis methodology.</p>
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
