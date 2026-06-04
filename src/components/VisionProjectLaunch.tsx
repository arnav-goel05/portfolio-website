import { useEffect, useState } from 'react'
import visionPovFrame from '../assets/vision-pov-frame.png'

type VisionProjectLaunchProps = {
  active: boolean
  href: string | null
}

const wearingDelay = 900
const playbackDelay = 1550
const navigationDelay = 3200

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
        <img className="vision-launch-frame" src={visionPovFrame} alt="" />
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
