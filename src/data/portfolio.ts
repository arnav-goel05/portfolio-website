import tribeBrainResponseAnimation from '../assets/tribe-brain-response-animation.gif'
import ambleMapFeatureTour from '../assets/amble-map-feature-tour.jpg'
import spatialHeadset from '../assets/spatial-headset.png'

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
  highlights: string[]
  tools: string[]
  image: string
  links: ProjectLink[]
}

export const projects: Project[] = [
  {
    slug: 'tribe-music-optimization',
    title: 'TRIBE v2 Music Optimization Experiment',
    summary:
      'A model-guided music production experiment using predicted cortical responses to move a hip-hop track toward a calmer, sleep-oriented profile.',
    problem:
      'Music-production choices are subjective, making it difficult to connect specific audio changes to a desired listener state.',
    contribution:
      'Built the full feedback loop: stem separation, 21 controlled sensitivity tests, TRIBE v2 response scoring, and a focused 10-trial optimizer.',
    outcome:
      'The selected remix became slower, quieter, darker, and slightly narrower while preserving the original vocal performance. The result is model-derived, not clinical validation.',
    highlights: ['21 controlled tests', '10 optimizer trials', '140.6 → 121 BPM', '4826 → 3703 Hz'],
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
    title: 'Amble — Singapore Discovery Map',
    summary:
      'An interactive 3D map for discovering Singapore events, restaurants, landmarks, and routes in one visual planning experience.',
    problem:
      'Planning something to do in Singapore means jumping between event sites, restaurant lists, social posts, maps, and route-planning tools.',
    contribution:
      'Designed and built a browser-based 3D discovery experience that combines live places, source-backed event data, nearby search, and day planning.',
    outcome:
      'Shipped a live cloud-native beta where people can explore the city spatially, inspect original references, build a plan, and export the route to Google Maps.',
    highlights: ['Live beta', '3D Singapore map', 'Events + food + landmarks', 'Google Maps route export'],
    tools: ['MapLibre', 'deck.gl', '3D Tiles', 'Vite', 'Cloudflare Workers', 'R2', 'D1'],
    image: ambleMapFeatureTour,
    links: [
      { label: 'Visit Amble', href: 'https://amblefinds.com/' },
      { label: 'View source', href: 'https://github.com/arnav-goel05/amble-discovery-map' },
    ],
  },
  {
    slug: 'hand-eye-coordination-assessment',
    title: 'Vision Pro Hand-Eye Assessment',
    summary:
      'A spatial hand-dexterity assessment that measures how closely a patient follows defined movement paths during stroke rehabilitation.',
    problem:
      'Traditional hand-eye coordination assessments rely heavily on manual observation, making small movement deviations difficult to measure consistently.',
    contribution:
      'Translated rehabilitation requirements into a Vision Pro experience with hand calibration, real-time finger tracking, defined movement paths, deviation calculation, and a results summary.',
    outcome:
      'Developed the project with the NUH Department of Rehabilitation through requirements gathering, design, implementation, and clinical-trial evaluation.',
    highlights: ['NUH Rehabilitation', 'Vision Pro hand tracking', 'Movement deviation scoring', 'Straight + zigzag paths'],
    tools: ['Swift', 'SwiftUI', 'ARKit', 'RealityKit', 'Apple Vision Pro'],
    image: spatialHeadset,
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
