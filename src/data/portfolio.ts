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

export type Project = {
  slug: string
  title: string
  status?: string
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
    status: 'Updated weekly',
    summary:
      'A cloud native 3D discovery platform that brings Singapore’s events, restaurants, landmarks, and route planning into one spatial experience.',
    problem:
      'Finding something to do in Singapore meant switching between disconnected event listings, restaurant platforms, social posts, and maps, with no simple way to understand what was nearby or how different places could fit into one day.',
    contribution:
      'Built Amble end to end, from the MapLibre and deck.gl 3D interface to data pipelines that collect events from official sources, resolve venues to OneMap building identities, cache restaurant results, and publish approved data through Cloudflare Workers, D1, and R2.',
    outcome:
      'Shipped a live cloud native beta where people can explore the city spatially, inspect original references, build a plan, and export the route to Google Maps.',
    tools: [
      'MapLibre',
      'deck.gl',
      'Three.js',
      '3D Tiles',
      'Vite',
      'Cloudflare Workers',
      'D1',
      'R2',
      'OneMap',
      'OpenStreetMap',
    ],
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
    slug: 'procurepilot',
    title: 'ProcurePilot: AI-Assisted F&B Procurement',
    status: 'Updated weekly',
    summary:
      'A Telegram-first procurement platform that connects staff requests, supplier communication, document intelligence, delivery checks, and owner approvals in one auditable workflow.',
    problem:
      'Procurement in small F&B teams often happens across chat messages, supplier emails, spreadsheets, and verbal updates. Requests are easy to lose, changes are difficult to trace, and invoice or delivery mismatches may only surface when payment is due. Automating this process introduces another risk: allowing AI to make decisions with financial consequences.',
    contribution:
      'Built ProcurePilot end to end as a multi-tenant procurement system. Staff submit and confirm stock needs through Telegram, suppliers continue communicating through Gmail, and owners manage requests, exceptions, evidence, and approvals from a web workspace. Added AI-assisted document extraction with confidence and provenance, deterministic checks for pricing, GST, quantities, deliveries, and duplicate invoices, bounded supplier negotiation, durable background processing, tenant isolation, and a complete audit trail.',
    outcome:
      'Deployed a live Cloudflare demo and validated connected Telegram and Gmail workflows, structured invoice extraction, and Stripe test-payment reconciliation. The system keeps every financially meaningful action under explicit owner control while making the surrounding procurement work faster, traceable, and resilient to retries or provider failures.',
    tools: [
      'Next.js',
      'TypeScript',
      'PostgreSQL',
      'Drizzle',
      'Telegram Bot API',
      'Gmail API',
      'OpenAI',
      'Stripe',
      'Cloudflare Workers',
      'Queues',
      'R2',
      'Hyperdrive',
    ],
    image: procurePilotWorkspace,
    links: [
      {
        label: 'Visit ProcurePilot',
        href: 'https://procurepilot.project-hub-arnav.workers.dev',
      },
    ],
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
]
