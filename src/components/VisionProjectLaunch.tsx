import { useEffect } from 'react'
import visionTransition from '../assets/vision-transition.webp'

type VisionProjectLaunchProps = {
  active: boolean
  onComplete: () => void
}

const launchDuration = 2850

export function VisionProjectLaunch({ active, onComplete }: VisionProjectLaunchProps) {
  useEffect(() => {
    if (!active) {
      return undefined
    }

    document.documentElement.classList.add('is-vision-launching')
    document.body.classList.add('is-vision-launching')

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const completeTimer = window.setTimeout(onComplete, prefersReducedMotion ? 120 : launchDuration)

    return () => {
      window.clearTimeout(completeTimer)
      document.documentElement.classList.remove('is-vision-launching')
      document.body.classList.remove('is-vision-launching')
    }
  }, [active, onComplete])

  if (!active) {
    return null
  }

  return (
    <div
      className="vision-launch"
      aria-live="polite"
      aria-label="Entering Vision Pro assessment"
    >
      <div className="vision-launch-backdrop" />
      <div className="vision-launch-stage" aria-hidden="true">
        <img className="vision-launch-animation" src={visionTransition} alt="" />
        <p className="vision-launch-caption">Loading Vision Pro assessment</p>
      </div>
    </div>
  )
}
