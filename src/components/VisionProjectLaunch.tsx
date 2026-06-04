import { useEffect, useState } from 'react'
import visionPovFrame from '../assets/vision-pov-frame.png'
import visionProShell from '../assets/vision-pro-shell.png'

type VisionProjectLaunchProps = {
  active: boolean
  href: string | null
}

const wearingDelay = 1500
const playbackDelay = 2500
const navigationDelay = 3900

export function VisionProjectLaunch({ active, href }: VisionProjectLaunchProps) {
  const [phase, setPhase] = useState<'rising' | 'wearing' | 'playing'>('rising')

  useEffect(() => {
    if (!active || !href) {
      return undefined
    }

    setPhase('rising')
    document.documentElement.classList.add('is-vision-launching')
    document.body.classList.add('is-vision-launching')

    const wearingTimer = window.setTimeout(() => setPhase('wearing'), wearingDelay)
    const playbackTimer = window.setTimeout(() => setPhase('playing'), playbackDelay)
    const navigationTimer = window.setTimeout(() => {
      window.sessionStorage.setItem('hand-eye-autoplay', 'true')
      window.location.href = href
    }, navigationDelay)

    return () => {
      window.clearTimeout(wearingTimer)
      window.clearTimeout(playbackTimer)
      window.clearTimeout(navigationTimer)
      document.documentElement.classList.remove('is-vision-launching')
      document.body.classList.remove('is-vision-launching')
    }
  }, [active, href])

  if (!active) {
    return null
  }

  return (
    <div
      className={`vision-launch vision-launch-${phase}`}
      aria-live="polite"
      aria-label="Entering Vision Pro assessment"
    >
      <div className="vision-launch-backdrop" />
      <div className="vision-launch-stage" aria-hidden="true">
        <img className="vision-launch-shell" src={visionProShell} alt="" />
        <img className="vision-launch-frame" src={visionPovFrame} alt="" />
        <div className="vision-launch-panel">
          <div className="vision-launch-orbit">
            <span>68%</span>
            <small>Loading assessment</small>
          </div>
          <div className="vision-launch-grid" />
          <span className="vision-launch-target target-a" />
          <span className="vision-launch-target target-b" />
          <p>Please keep your hands relaxed and follow the targets</p>
        </div>
        <div className="vision-launch-lens">
          <div className="vision-launch-path">
            <span className="launch-path-point launch-path-start" />
            <span className="launch-path-point launch-path-mid" />
            <span className="launch-path-point launch-path-end" />
            <span className="launch-path-line" />
            <span className="launch-path-finger" />
          </div>
          <div className="vision-launch-progress">
            <i />
          </div>
        </div>
      </div>
    </div>
  )
}
