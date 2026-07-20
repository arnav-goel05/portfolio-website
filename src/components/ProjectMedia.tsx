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
        aria-label={`${title} product walkthrough`}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
      />
    )
  }

  return <img src={image} alt="" aria-hidden="true" />
}
