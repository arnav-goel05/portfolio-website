import { useEffect, useRef, useState } from 'react'

type ProjectMediaProps = {
  image: string
  title: string
  video?: string
}

export function ProjectMedia({ image, title, video }: ProjectMediaProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isNearViewport, setIsNearViewport] = useState(false)

  useEffect(() => {
    if (!video || !videoRef.current) return

    const element = videoRef.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsNearViewport(entry.isIntersecting)
        if (entry.isIntersecting) {
          void element.play().catch(() => undefined)
        } else {
          element.pause()
        }
      },
      { rootMargin: '240px 0px' },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [video])

  if (video) {
    return (
      <video
        ref={videoRef}
        src={isNearViewport ? video : undefined}
        poster={image}
        aria-hidden="true"
        loop
        muted
        playsInline
        preload="none"
      />
    )
  }

  return <img src={image} alt={`${title} project preview`} loading="lazy" decoding="async" />
}
