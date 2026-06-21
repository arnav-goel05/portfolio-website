import tribeOptimizerGraph from '../assets/tribe-optimizer-graph.png'

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
      'A TRIBE v2 guided experiment that tests whether predicted cortical-response signals can steer music-production choices.',
    heroSummary:
      'An experimental optimization loop that changes an existing hip-hop track, scores predicted cortical-network responses, and selects the remix version that best matches a sleep-aligned target.',
    role: 'AI experiment builder',
    skills: ['Audio processing', 'Model-guided optimization', 'Data visualization', 'Notebook workflow'],
    timeline: 'Prototype experiment',
    tools: ['Google Colab', 'Python', 'Demucs', 'TRIBE v2', 'Matplotlib'],
    team: ['Individual experiment'],
    image: tribeOptimizerGraph,
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
          'The included optimizer chart compares trial scores against the best single-change sensitivity test and highlights trial 007.',
          'The repo also includes an animation showing where optimizer trials moved the score-weighted predicted brain-response map toward or away from the original baseline.',
        ],
        placeholder: 'Use the repository animation as a future walkthrough asset if this case study gets a richer media section.',
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
]

export const contactLinks = [
  { label: 'Email', href: 'mailto:arnav.goel@u.nus.edu' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/arnav--goel/' },
]
