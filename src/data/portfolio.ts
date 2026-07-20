import tribeBrainResponseAnimation from '../assets/tribe-brain-response-animation.gif'
import ambleMapFeatureTour from '../assets/amble-map-feature-tour.jpg'

export type Project = {
  slug: string
  title: string
  eyebrow: string
  year: string
  status: string
  category: string
  platform: string
  summary: string
  heroSummary: string
  role: string
  skills: string[]
  timeline: string
  tools: string[]
  team: string[]
  image: string
  accent: string
  sections: {
    kicker: string
    title: string
    body: string[]
    cards?: { label: string; title: string; body: string }[]
    placeholder?: string
  }[]
  takeaways: { label: string; body: string }[]
}

export const projects: Project[] = [
  {
    slug: 'tribe-music-optimization',
    title: 'TRIBE v2 Music Optimization Experiment',
    eyebrow: 'Using predicted brain-response signals as feedback for audio remix decisions.',
    year: '2026',
    status: 'Experiment',
    category: 'Applied AI, Audio',
    platform: 'Colab Notebook',
    summary:
      'A model-guided music production experiment using TRIBE v2 cortical-response predictions to transform a hip-hop track toward a calmer, sleep-oriented profile.',
    heroSummary:
      'An experimental optimization loop that changes an existing hip-hop track, scores predicted cortical-network responses, and selects the remix version that best matches a sleep-aligned target.',
    role: 'AI experiment builder',
    skills: ['Audio processing', 'Model-guided optimization', 'Data visualization', 'Notebook workflow'],
    timeline: 'Prototype experiment',
    tools: ['Google Colab', 'Python', 'Demucs', 'TRIBE v2', 'Matplotlib'],
    team: ['Individual experiment'],
    image: tribeBrainResponseAnimation,
    accent: '#dbe7ff',
    sections: [
      {
        kicker: 'Problem',
        title: 'Music-production changes are hard to connect to predicted listener-state signals.',
        body: [
          'The repo frames a narrow question: can TRIBE v2 predicted brain-response signals guide music production decisions?',
          'Instead of relying only on subjective listening, the experiment treats model-derived brain-response maps as an inspectable feedback signal for creative optimization.',
        ],
      },
      {
        kicker: 'Workflow',
        title: 'The experiment turns audio edits into scored optimization trials.',
        body: [
          'The workflow starts from an existing hip-hop track, separates it into vocals, drums, bass, and other instrumentation with Demucs, then applies controlled audio changes.',
          'Each remix candidate is scored through TRIBE-predicted Schaefer-7 cortical network responses against a sleep-aligned target profile.',
        ],
        cards: [
          {
            label: '01',
            title: 'Split stems',
            body: 'Demucs separates vocals, drums, bass, and other instrumentation before controlled edits are applied.',
          },
          {
            label: '02',
            title: 'Probe controls',
            body: 'Twenty-one one-variable probes test seven controls before narrowing the optimizer search.',
          },
          {
            label: '03',
            title: 'Score trials',
            body: 'TRIBE-predicted cortical-network responses become the objective signal for comparing remix versions.',
          },
        ],
      },
      {
        kicker: 'Optimization',
        title: 'The strongest probe levers feed a focused 10-trial optimizer.',
        body: [
          'The README identifies tempo factor, drum level, and other-stem reverb as the strongest levers from the sensitivity scan.',
          'Those levers are then used in a focused optimizer where audio change, predicted cortical response, objective score, and next remix decision form the feedback loop.',
        ],
      },
      {
        kicker: 'Result Visuals',
        title: 'Trial 007 produced the strongest model-derived sleep-alignment improvement.',
        body: [
          'The project image uses the repository animation, where cortical maps show score-weighted predicted brain-response change across optimizer trials.',
          'The animation highlights trial 007 as the selected-best result and sits closer to the TRIBE v2 story than a static optimizer chart.',
        ],
        placeholder: 'Use the optimizer chart as a future walkthrough asset if this case study gets a richer results section.',
      },
      {
        kicker: 'Final Audio Change',
        title: 'The selected version became slower, longer, quieter, darker, and slightly narrower.',
        body: [
          'The README reports the optimized version moving from about 140.6 BPM to 121.0 BPM, from 350.8 seconds to 410.3 seconds, and from -13.8 dBFS to -16.1 dBFS.',
          'It also reports spectral centroid decreasing from about 4826 Hz to 3703 Hz and stereo width narrowing from 0.347 to 0.319.',
        ],
      },
      {
        kicker: 'Limitations',
        title: 'The repository is an experiment, not a production music tool.',
        body: [
          'The original song, generated stems, generated WAV trials, and full vertex prediction arrays are not included in the repository.',
          'The notebook is designed for Google Colab and requires GPU runtime plus access to the TRIBE v2 model/checkpoints.',
        ],
      },
    ],
    takeaways: [
      {
        label: 'What worked',
        body: 'The project creates a concrete feedback loop from audio edit to predicted cortical response to objective score.',
      },
      {
        label: 'What is still weak',
        body: 'The result is model-derived and experimental; it should not be framed as validated listener or clinical evidence.',
      },
      {
        label: 'What comes next',
        body: 'A stronger case study would include runnable environment notes, a short visual walkthrough, and a clearer explanation of the TRIBE v2 dependency.',
      },
    ],
  },
  {
    slug: 'amble',
    title: 'Amble — Singapore Discovery Map',
    eyebrow: 'Making Singapore easier to explore through one interactive, spatial interface.',
    year: '2026',
    status: 'Live Beta',
    category: '3D Maps, Local Discovery',
    platform: 'Web App',
    summary:
      'An interactive 3D map for discovering Singapore events, restaurants, landmarks, and routes in one visual planning experience.',
    heroSummary:
      'Amble brings events, restaurants, landmarks, and route planning into an interactive 3D map so people can discover what is happening across Singapore without jumping between disconnected lists.',
    role: 'Product engineer',
    skills: ['Product design', '3D geospatial development', 'Data pipelines', 'Cloud deployment'],
    timeline: 'Early product build',
    tools: ['MapLibre', 'deck.gl', '3D Tiles', 'Vite', 'Cloudflare Workers', 'Cloudflare R2', 'Cloudflare D1'],
    team: ['Independent project'],
    image: ambleMapFeatureTour,
    accent: '#dfeff0',
    sections: [
      {
        kicker: 'Problem',
        title: 'Finding something interesting to do in Singapore is more fragmented than it should be.',
        body: [
          'Planning a day out often means moving between event websites, restaurant lists, social posts, map searches, and separate route-planning tools.',
          'The opportunity was not to create another list, but to make discovery spatial: show what is happening, where it is, and what else is nearby in one place.',
        ],
      },
      {
        kicker: 'Experience',
        title: 'Amble turns city discovery into an interactive map-based workflow.',
        body: [
          'The product renders Singapore as a three-dimensional map where people can discover current events, search for restaurants around any area, and inspect nearby landmarks and useful place details.',
          'Locations retain original references, while an ordered day plan can be exported directly to Google Maps for navigation.',
        ],
        cards: [
          {
            label: '01',
            title: 'Discover visually',
            body: 'Explore events and interesting places in their real geographic context instead of scrolling through disconnected lists.',
          },
          {
            label: '02',
            title: 'Search nearby',
            body: 'Find restaurants and landmarks around the current map area while keeping the wider day plan visible.',
          },
          {
            label: '03',
            title: 'Plan the route',
            body: 'Order selected places into a day plan and open the route directly in Google Maps.',
          },
        ],
      },
      {
        kicker: 'System',
        title: 'A browser-based 3D stack connects map geometry, place data, and live discovery tools.',
        body: [
          'MapLibre, deck.gl, and 3D Tiles render Singapore building geometry in the browser. Current events are mapped to verified OneMap building identities, and search covers event title, venue, category, and date.',
          'A Cloudflare Worker serves the application and coordinates Cloudflare R2 geometry, Cloudflare D1 restaurant and runtime data, static assets, and an approved event snapshot.',
        ],
      },
      {
        kicker: 'Data Quality',
        title: 'Useful discovery depends on traceable, location-aware information.',
        body: [
          'Event updates move through a staged, evidence-backed snapshot pipeline rather than appearing as unverified map markers.',
          'The interface keeps useful details and original references attached to each location so people can validate what they find before making plans.',
        ],
      },
      {
        kicker: 'Outcome',
        title: 'The early release combines discovery and planning in one live spatial product.',
        body: [
          'Amble is deployed as a cloud-native web app and already supports event discovery, nearby restaurant search, place details, ordered plans, and Google Maps route export.',
          'The current release is an early version designed to make city exploration feel direct and visual while leaving room for richer discovery and planning features.',
        ],
      },
    ],
    takeaways: [
      {
        label: 'What worked',
        body: 'Putting events, food, landmarks, and routes on one 3D map makes the relationship between places immediately understandable.',
      },
      {
        label: 'What was challenging',
        body: 'The product has to keep geospatial rendering, changing event data, restaurant discovery, and source quality working as one coherent experience.',
      },
      {
        label: 'What comes next',
        body: 'The early release creates a foundation for improving discovery quality, planning flows, and the range of useful places people can explore.',
      },
    ],
  },
]

export const contactLinks = [
  { label: 'Email', href: 'mailto:arnav.goel@u.nus.edu' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/arnav--goel/' },
]
