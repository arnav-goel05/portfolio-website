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
    title: 'TRIBE v2 Music Optimization',
    summary:
      'A neuroscience guided music production system that uses TRIBE v2 cortical response predictions to transform a hip hop track toward a calmer, sleep aligned profile.',
    problem:
      'Music production is largely guided by subjective listening. I wanted to determine whether changes in tempo, drums, reverb, EQ, transients, and bass could be evaluated and optimized against a defined cortical response target.',
    contribution:
      'Built an end to end Colab pipeline that separates the track into stems, runs 21 controlled sensitivity probes across seven production controls, maps each version to Schaefer 7 cortical network responses, and uses the strongest signals to guide a focused 10 trial optimizer.',
    outcome:
      'The optimizer selected trial_007, producing a version that was slower, longer, quieter, darker, and slightly narrower while retaining the original vocal performance.',
    highlights: ['21 sensitivity probes', '7 production controls', '10 optimizer trials', '140.6 → 121 BPM', '4826 → 3703 Hz'],
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
    highlights: ['Live beta', '3D Singapore map', 'Events + food + landmarks', 'Google Maps route export'],
    tools: ['MapLibre', 'deck.gl', 'Three.js', '3D Tiles', 'Vite', 'Cloudflare Workers', 'D1', 'R2', 'OneMap', 'OpenStreetMap'],
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
