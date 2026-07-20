import tribeBrainResponseAnimation from '../assets/tribe-brain-response-animation.gif'
import ambleMapFeatureTour from '../assets/amble-map-feature-tour.jpg'
import ambleDemoVideo from '../assets/amble-demo.mp4'
import visionProHandAssessment from '../assets/vision-pro-hand-assessment.png'

type ProjectLink = {
  label: string
  href: string
}

export type Project = {
  slug: string
  title: string
  summary: string
  problem: string
  contribution: string
  outcome: string
  tools: string[]
  image: string
  video?: string
  links: ProjectLink[]
}

export const projects: Project[] = [
  {
    slug: 'tribe-music-optimization',
    title: 'TRIBE v2 Music Optimization',
    summary:
      'A neuroscience guided music production system that uses TRIBE v2 cortical response predictions to transform a hip hop track toward a calmer, sleep aligned profile.',
    problem:
      'Music production is largely guided by subjective listening. I wanted to determine whether changes in tempo, drums, reverb, EQ, transients, and bass could be evaluated and optimized against a defined cortical response target.',
    contribution:
      'Built an end to end Colab pipeline that separates the track into stems, runs 21 controlled sensitivity probes across seven production controls, maps each version to Schaefer 7 cortical network responses, and uses the strongest signals to guide a focused 10 trial optimizer.',
    outcome:
      'The optimizer selected trial_007, producing a version that was slower, longer, quieter, darker, and slightly narrower while retaining the original vocal performance.',
    tools: ['Python', 'Google Colab', 'Demucs', 'TRIBE v2', 'Matplotlib'],
    image: tribeBrainResponseAnimation,
    links: [
      {
        label: 'View source',
        href: 'https://github.com/arnav-goel05/tribe-v2-music-optimization',
      },
    ],
  },
  {
    slug: 'amble',
    title: 'Amble: Explore Singapore in 3D',
    summary:
      'A cloud native 3D discovery platform that brings Singapore’s events, restaurants, landmarks, and route planning into one spatial experience.',
    problem:
      'Finding something to do in Singapore meant switching between disconnected event listings, restaurant platforms, social posts, and maps, with no simple way to understand what was nearby or how different places could fit into one day.',
    contribution:
      'Built Amble end to end, from the MapLibre and deck.gl 3D interface to data pipelines that collect events from official sources, resolve venues to OneMap building identities, cache restaurant results, and publish approved data through Cloudflare Workers, D1, and R2.',
    outcome:
      'Shipped a live cloud native beta where people can explore the city spatially, inspect original references, build a plan, and export the route to Google Maps.',
    tools: ['MapLibre', 'deck.gl', 'Three.js', '3D Tiles', 'Vite', 'Cloudflare Workers', 'D1', 'R2', 'OneMap', 'OpenStreetMap'],
    image: ambleMapFeatureTour,
    video: ambleDemoVideo,
    links: [
      { label: 'Visit Amble', href: 'https://amblefinds.com/' },
      { label: 'View source', href: 'https://github.com/arnav-goel05/amble-discovery-map' },
    ],
  },
  {
    slug: 'hand-eye-coordination-assessment',
    title: 'Vision Pro Hand Dexterity Assessment',
    summary:
      'An Apple Vision Pro assessment system that turns hand-eye coordination into precise 3D movement data for stroke rehabilitation and clinical research.',
    problem:
      'Stroke rehabilitation still relies heavily on clinician observation to assess hand dexterity, making subtle movement deviations difficult to quantify consistently, compare across assessments, or track throughout recovery.',
    contribution:
      'Worked with the NUH Department of Rehabilitation to translate clinical requirements into an immersive visionOS assessment. Built hand calibration, real-time fingertip tracking, six movement tasks, repeated trials, deviation metrics, and automated 3D data export using Swift, SwiftUI, ARKit, and RealityKit. I also developed a Python pipeline with Pandas and Matplotlib to process more than 15,000 spatial data points and visualise differences between control and ataxia movement patterns.',
    outcome:
      'Advanced the system into clinical trials with NUH, creating a repeatable assessment and analysis workflow for evaluating fine motor control. The underlying method is patent pending, with a research paper currently in preparation.',
    tools: ['Swift', 'SwiftUI', 'ARKit', 'RealityKit', 'visionOS', 'Python', 'Pandas', 'Matplotlib'],
    image: visionProHandAssessment,
    links: [
      {
        label: 'View source',
        href: 'https://github.com/arnav-goel05/Hand-Eye-Coordination-Assessment',
      },
    ],
  },
]

export const contactLinks = [
  { label: 'Email', href: 'mailto:arnav.goel@u.nus.edu' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/arnav--goel/' },
]
