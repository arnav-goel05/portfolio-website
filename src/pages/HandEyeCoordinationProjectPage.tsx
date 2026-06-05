import { useCallback, useEffect, useState } from 'react'
import { VisionProjectLaunch } from '../components/VisionProjectLaunch'
import visionPovFrame from '../assets/vision-pov-frame.png'
import visionTransitionFinal from '../assets/vision-transition-final.png'

export function HandEyeCoordinationProjectPage() {
  const [shouldPlayLaunch] = useState(() => {
    const shouldLaunch =
      window.sessionStorage.getItem('hand-eye-launch') === 'true' ||
      window.sessionStorage.getItem('hand-eye-autoplay') === 'true'

    window.sessionStorage.removeItem('hand-eye-launch')
    window.sessionStorage.removeItem('hand-eye-autoplay')
    return shouldLaunch
  })
  const [isLaunchPlaying, setIsLaunchPlaying] = useState(shouldPlayLaunch)
  const [arrivedFromLaunch] = useState(shouldPlayLaunch)
  const [assessmentState, setAssessmentState] = useState<'ready' | 'playing' | 'complete'>('ready')

  useEffect(() => {
    if (assessmentState !== 'playing') {
      return undefined
    }

    const completeTimer = window.setTimeout(() => setAssessmentState('complete'), 6200)
    return () => window.clearTimeout(completeTimer)
  }, [assessmentState])

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [assessmentState])

  const startAssessment = () => {
    if (assessmentState === 'playing') {
      setAssessmentState('ready')
      window.setTimeout(() => setAssessmentState('playing'), 0)
      return
    }

    setAssessmentState('playing')
  }

  const finishLaunch = useCallback(() => {
    setIsLaunchPlaying(false)
    setAssessmentState('complete')
  }, [])

  const visionFrameImage =
    arrivedFromLaunch && assessmentState === 'complete' ? visionTransitionFinal : visionPovFrame

  return (
    <main className="case-study-page hand-eye-page">
      <VisionProjectLaunch active={isLaunchPlaying} onComplete={finishLaunch} />
      <section
        className={`vision-experience vision-experience-${assessmentState} ${
          arrivedFromLaunch ? 'vision-experience-from-launch' : ''
        } ${isLaunchPlaying ? 'vision-experience-launching' : ''}`}
      >
        <a className="vision-back-link" href="/">
          {'<-'} Back to projects
        </a>

        <div className="vision-intro">
          <span>Hand-eye coordination assessment</span>
          <h1>
            {assessmentState === 'ready'
              ? 'Experience it in Vision Pro'
              : '3D Hand-Eye Coordination Assessment Tool'}
          </h1>
          <p>
            {assessmentState === 'ready'
              ? 'Put on the Vision Pro to begin the assessment. Follow the path as accurately as you can from start to finish.'
              : 'A spatial assessment tool for hand dexterity built for Apple Vision Pro. It measures how closely a patient follows an ideal path between two points.'}
          </p>
        </div>

        <div className="vision-stage" aria-label="Apple Vision Pro assessment simulation">
          <img className="vision-frame" src={visionFrameImage} alt="" aria-hidden="true" />
          <div className="vision-lens">
            <div className="vision-status">
              <span>{assessmentState === 'playing' ? 'Test in progress' : 'Vision Pro session ready'}</span>
              <span>ARKit tracking</span>
            </div>

            <div className="path-surface">
              <span className="path-point path-start" />
              <span className="path-point path-mid" />
              <span className="path-point path-end" />
              <span className="path-line" />
              <span className="path-glow" />
              <span className="path-finger" />

              {assessmentState !== 'ready' && (
                <article className="path-accuracy">
                  <span>Path accuracy</span>
                  <strong>{assessmentState === 'complete' ? '94%' : '...'}</strong>
                </article>
              )}
            </div>

            {assessmentState === 'ready' ? (
              <button className="vision-start-button" type="button" onClick={startAssessment}>
                Start assessment
              </button>
            ) : (
              <div className="vision-progress" aria-label="Assessment progress">
                <span>00:24</span>
                <i />
                <span>00:25</span>
              </div>
            )}

            <div className="vision-tags" aria-hidden="true">
              <span>Vision Pro session ready</span>
              <span>ARKit tracking</span>
              <span>Spatial path test</span>
            </div>
          </div>
        </div>

        <a className={`vision-scroll-cue ${assessmentState === 'complete' ? 'is-visible' : ''}`} href="#problem">
          Scroll down to learn more
        </a>
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
