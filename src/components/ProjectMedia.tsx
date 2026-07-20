type ProjectMediaProps = {
  image: string
  title: string
  video?: string
}

export function ProjectMedia({ image, title, video }: ProjectMediaProps) {
  if (video) {
    return (
      <video
        src={video}
        poster={image}
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
        onPause={(event) => {
          if (!document.hidden) void event.currentTarget.play().catch(() => undefined)
        }}
      />
    )
  }

  return <img src={image} alt={`${title} project preview`} loading="lazy" decoding="async" />
}
