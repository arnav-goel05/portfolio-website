import { useEffect } from 'react'
import visionTransition from '../assets/vision-transition.webp'

type VisionProjectLaunchProps = {
  active: boolean
  href: string | null
}

const navigationDelay = 2850

export function VisionProjectLaunch({ active, href }: VisionProjectLaunchProps) {
  useEffect(() => {
    if (!active || !href) {
      return undefined
    }

    document.documentElement.classList.add('is-vision-launching')
    document.body.classList.add('is-vision-launching')

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const navigationTimer = window.setTimeout(() => {
      window.sessionStorage.setItem('hand-eye-autoplay', 'true')
      window.location.href = href
    }, prefersReducedMotion ? 120 : navigationDelay)

    return () => {
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
