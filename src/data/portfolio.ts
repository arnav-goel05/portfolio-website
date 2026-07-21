import tribeBrainResponseAnimation from '../assets/tribe-brain-response-animation.gif'
import ambleMapFeatureTour from '../assets/amble-map-feature-tour.jpg'
import ambleDemoVideo from '../assets/amble-demo.mp4'
import visionProHandAssessment from '../assets/vision-pro-hand-assessment.webp'
import procurePilotWorkspace from '../assets/procurepilot-workspace.webp'
import bartGecPipeline from '../assets/bart-gec-pipeline.svg'
import currencyAccessibilityScan from '../assets/stickers-v2/currency-accessibility-scan.webp'

type ProjectLink = {
  label: string
  href: string
}

type ProjectOutcome = {
  summary: string
  lead: string
  metrics: string[]
  note: string
}

export type Project = {
  slug: string
  title: string
  status?: string
  summary: string
  problem: string
  contribution: string | string[]
  outcome: string | ProjectOutcome
  tools: string[]
  image: string
  video?: string
  links: ProjectLink[]
  featuredLink?: ProjectLink
}

export const projects: Project[] = [
  {
    slug: 'amble',
    title: 'Amble: Explore Singapore in 3D',
    status: 'Weekly releases',
    summary:
      'A 3D city discovery platform for exploring Singapore’s events, restaurants, landmarks, and current restaurant offers in one spatial experience.',
    problem:
      'Discovering what to do in Singapore often means switching between disconnected event listings, restaurant platforms, social posts, and maps. This makes it difficult to understand what is nearby, compare possibilities, or turn several places into a practical plan.',
    contribution: [
      'Created an interactive 3D interface deployed through Cloudflare Workers, with searchable events, viewport-based restaurant discovery, and an ordered itinerary builder.',
      'Engineered an evidence-backed event pipeline that collects official listings, normalises recurring occurrences, resolves venues to verified OneMap building identities, and atomically publishes reviewed snapshots.',
      'Developed a restaurant enrichment pipeline that uses TinyFish Search to identify official websites and TinyFish Fetch to inspect dynamic promotion pages. The pipeline verifies restaurant identity, preserves original evidence, and rejects expired offers.',
    ],
    outcome:
      'Released Amble as a live public beta at amblefinds.com, replacing a fragmented research process with one continuous journey from deciding where to go to leaving with a practical day plan.',
    tools: [
      'JavaScript',
      'MapLibre GL JS',
      'deck.gl',
      '3D Tiles',
      'Vite',
      'Node.js',
      'TinyFish',
      'Cloudflare Workers',
      'OneMap',
      'OpenStreetMap',
      'Playwright',
    ],
    image: ambleMapFeatureTour,
    video: ambleDemoVideo,
    links: [
      { label: 'Visit Amble', href: 'https://amblefinds.com/' },
      { label: 'View GitHub', href: 'https://github.com/arnav-goel05/amble-discovery-map' },
    ],
    featuredLink: {
      label: 'View Amble on LinkedIn',
      href: 'https://www.linkedin.com/feed/update/urn:li:activity:7483499253718335488/',
    },
  },
  {
    slug: 'supplycue',
    title: 'SupplyCue: AI Assisted F&B Procurement',
    status: 'Weekly releases',
    summary:
      'A Telegram first procurement platform that brings stock requests, supplier communication, delivery checks, invoice verification, and Owner approvals into one clear and traceable workflow.',
    problem:
      'Procurement in small F&B teams is often spread across chat messages, supplier emails, spreadsheets, invoices, and verbal updates. Requests can get lost, supplier changes are difficult to follow, and pricing or delivery problems may only become visible when payment is due.',
    contribution: [
      'Created a web workspace where Owners set purchasing rules, manage suppliers, and review requests, deliveries, invoices, exceptions, and approvals in one place.',
      'Connected Telegram so staff can request stock using ordinary messages. SupplyCue identifies the item, quantity, required date, and supplier, checks that the request is clear before sending it, and returns supplier updates through the same chat.',
      'Integrated Gmail to send orders, follow supplier conversations, and connect each reply to the correct request. SupplyCue handles price negotiation while escalating quantity changes, substitutions, delivery issues, payment terms, and excessive prices to the Owner.',
      'Developed AI assisted invoice reading and delivery checks to identify differences in quantities, prices, totals, and GST. Every request, supplier message, document, and decision is stored within one traceable case history for Owner review.',
    ],
    outcome:
      'Released SupplyCue as an interactive Cloudflare demo, replacing fragmented procurement coordination with one continuous journey. I am currently working to partner with F&B operators to assess the concept’s feasibility in real procurement workflows.',
    tools: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'PostgreSQL',
      'Drizzle ORM',
      'Telegram Bot API',
      'Gmail API',
      'OpenAI Responses API',
      'Stripe',
      'Cloudflare Workers',
      'Cloudflare Queues',
      'Hyperdrive',
    ],
    image: procurePilotWorkspace,
    links: [
      {
        label: 'Visit SupplyCue',
        href: 'https://procurepilot.project-hub-arnav.workers.dev/',
      },
    ],
  },
  {
    slug: 'tribe-music-optimization',
    title: 'TRIBE v2 Music Optimization',
    summary:
      'A model guided music production system that uses TRIBE v2 cortical predictions to remix a hip hop track toward a custom sleep alignment objective.',
    problem:
      'Music production decisions are typically evaluated through subjective listening. I investigated whether controlled changes to tempo, drum level, reverb, EQ, bass smoothing, and transient intensity could instead be compared using predicted cortical activity.',
    contribution: [
      'Developed an end to end Google Colab pipeline that separates a track into vocals, drums, bass, and instrumentation using Demucs, then evaluates 21 controlled production probes across seven parameters.',
      'Scored each version with TRIBE v2 across four matched 15 second sections. The pipeline maps the predictions through the Schaefer 100 parcel, 7 network atlas and combines them into a custom sleep alignment objective.',
      'Ranked the five most responsive controls and ran a reproducible 10 trial optimization process using broad exploration followed by progressively tighter refinements. The pipeline also exports cortical maps, network time series, comparison charts, and the selected remix.',
    ],
    outcome: {
      summary:
        'The optimizer selected trial_007, improving the target aligned model score by +0.711, compared with +0.550 from the strongest individual probe.',
      lead: 'The selected mix was slower, longer, quieter, darker, and slightly narrower:',
      metrics: [
        'Tempo: approximately 140.6 → 121.0 BPM',
        'Duration: 350.8 → 410.3 seconds',
        'Loudness: −13.8 → −16.1 dBFS',
        'Spectral centroid: approximately 4,826 → 3,703 Hz',
        'Stereo width: 0.347 → 0.319',
      ],
      note: 'The original separated vocal stem remained at unity gain and was not regenerated, although the final mix, including the vocal, was time stretched with the tempo change.',
    },
    tools: [
      'Python',
      'Google Colab',
      'TRIBE v2',
      'Demucs',
      'PyTorch',
      'FFmpeg',
      'SciPy',
      'Schaefer 2018',
      'Nilearn',
      'Matplotlib',
    ],
    image: tribeBrainResponseAnimation,
    links: [
      {
        label: 'View GitHub',
        href: 'https://github.com/arnav-goel05/tribe-v2-music-optimization',
      },
    ],
    featuredLink: {
      label: 'View TRIBE v2 Music Optimization on LinkedIn',
      href: 'https://www.linkedin.com/feed/update/urn:li:activity:7474024422937387008/',
    },
  },
  {
    slug: 'hand-eye-coordination-assessment',
    title: 'Vision Pro Hand Dexterity Assessment',
    status: 'Patent pending',
    summary:
      'An Apple Vision Pro assessment system that turns hand movement into precise 3D data for stroke rehabilitation and clinical research.',
    problem:
      'Stroke rehabilitation often relies on clinician observation to assess hand dexterity. This makes small movement deviations difficult to quantify consistently, compare across assessments, or track throughout recovery.',
    contribution: [
      'Worked with the NUH Department of Rehabilitation to translate clinical requirements into a Vision Pro assessment that guides patients through structured hand movement tasks in 3D.',
      'Developed hand calibration, real time fingertip tracking, six movement tasks, repeatable trials, deviation measurements, and automated 3D data export using Swift, SwiftUI, ARKit, and RealityKit.',
      'Created a Python analysis pipeline that processes more than 15,000 movement points from each assessment, visualises key patterns, and compares healthy control data with simulated ataxia data.',
    ],
    outcome:
      'The assessment is now being evaluated in clinical trials with NUH, establishing a repeatable workflow for measuring and analysing fine motor control. The underlying method is patent pending, and a research paper is currently in preparation.',
    tools: [
      'Swift',
      'SwiftUI',
      'ARKit',
      'RealityKit',
      'visionOS',
      'Python',
      'Pandas',
      'Matplotlib',
    ],
    image: visionProHandAssessment,
    links: [],
  },
  {
    slug: 'on-device-low-vision-assistant',
    title: 'On-Device Low Vision Assistant',
    summary:
      'A private and accessible iPhone assistant that identifies Singapore banknotes and helps people with low vision read and operate supported microwave displays without cloud processing.',
    problem:
      'Everyday tasks such as distinguishing banknotes or reading appliance displays can require sighted assistance. Cloud vision introduces privacy and connectivity constraints, while generic recognition systems do not provide the confidence aware, step by step guidance needed for safe independent use.',
    contribution:
      'Built two isolated camera experiences in SwiftUI: Core ML recognition for five Singapore banknote denominations and an Apple Vision pipeline for microwave model labels, display text, panel localisation, and deterministic appliance guidance. Added English and Mandarin speech, VoiceOver support, scalable text, voice commands, confidence gated results, local SwiftData history, strict camera and microphone lifecycle controls, and automated unit, UI, accessibility, privacy, and performance tests.',
    outcome:
      'Delivered a fully on-device research prototype evaluated with 12 independently captured banknote photographs, with recognition data and history remaining on the iPhone. The microwave assistant includes profiles for two supported COMFEE models and 19 reviewed function graphs, while uncertain, conflicting, or unsupported evidence fails closed with a clear recovery action.',
    tools: [
      'Swift',
      'SwiftUI',
      'Core ML',
      'Apple Vision',
      'AVFoundation',
      'AVSpeechSynthesizer',
      'SwiftData',
      'XCTest',
      'Python',
    ],
    image: currencyAccessibilityScan,
    links: [],
  },
  {
    slug: 'bart-grammatical-error-correction',
    title: 'BART Grammatical Error Correction',
    summary:
      'A transformer based grammatical error correction study investigating how model capacity and training strategy affect the precision and reliability of automated writing corrections.',
    problem:
      'Grammatical error correction must recognise diverse grammar, spelling, and punctuation mistakes without introducing unnecessary edits. Limited high quality annotated data makes this especially difficult, raising an important question: should models learn from every available dataset at once, or progressively specialise on cleaner corrections?',
    contribution:
      'Developed the BART experimentation pipeline for the study, implementing both single stage and two stage fine tuning for BART Base and BART Large. The two stage curriculum first adapted each model on the large Lang-8 learner corpus before specialising it on the higher quality NUCLE, FCE, and W&I+LOCNESS datasets. Configured dropout, learning rate scheduling, gradient accumulation, checkpointing, early stopping, beam search inference, and ERRANT based model selection; ran the training workloads on the NUS GPU cluster and built the evaluation workflow for BEA-2019 and CoNLL-2014.',
    outcome:
      'The ablation revealed that training strategy depended strongly on model capacity. Single stage and two stage BART Base produced nearly identical F0.5 scores of 63.56 and 63.54, while two stage specialisation improved BART Large from 60.04 to 67.20, a 7.16 point gain. The findings showed that a more complex training curriculum was valuable for the larger model but unnecessary for its smaller counterpart.',
    tools: [
      'Python',
      'PyTorch',
      'Hugging Face Transformers',
      'BART',
      'CUDA',
      'SLURM',
      'ERRANT',
      'M2Scorer',
    ],
    image: bartGecPipeline,
    links: [],
  },
]
