import { useState } from 'react'

type ProjectMediaProps = {
  image: string
  title: string
  video?: string
}

export function ProjectMedia({ image, title, video }: ProjectMediaProps) {
  const [isVideoLoading, setIsVideoLoading] = useState(Boolean(video))

  if (video) {
    return (
      <>
        <video
          className={isVideoLoading ? 'is-loading' : undefined}
          src={video}
          aria-hidden="true"
          autoPlay
          controls={false}
          controlsList="nodownload nofullscreen noplaybackrate"
          disablePictureInPicture
          loop
          muted
          playsInline
          preload="auto"
          tabIndex={-1}
          onCanPlay={(event) => {
            event.currentTarget.muted = true
            void event.currentTarget.play().catch(() => undefined)
          }}
          onLoadStart={() => setIsVideoLoading(true)}
          onPause={(event) => {
            if (!document.hidden) void event.currentTarget.play().catch(() => undefined)
          }}
          onPlaying={() => setIsVideoLoading(false)}
          onWaiting={() => setIsVideoLoading(true)}
        />
        {isVideoLoading ? (
          <div className="work-video-loading" aria-hidden="true">
            <span />
          </div>
        ) : null}
      </>
    )
  }

  return <img src={image} alt={`${title} project preview`} loading="lazy" decoding="async" />
}
