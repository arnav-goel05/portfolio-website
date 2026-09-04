import tribeBrainResponseAnimation from '../assets/tribe-brain-response-animation.gif'
import ambleMapFeatureTour from '../assets/amble-map-feature-tour.jpg'
import ambleDemoVideo from '../assets/amble-demo.mp4'
import visionProHandAssessment from '../assets/vision-pro-hand-assessment.webp'
import supplyCueWorkspace from '../assets/supplycue-workspace.png'
import supplyCueDemoVideo from '../assets/supplycue-demo.mp4'
import byteStreakDailyStates from '../assets/bytestreak-daily-states.jpeg'
import liveShieldQrCodeRedaction from '../assets/liveshield-qr-code-redaction.png'
import liveShieldDemoVideo from '../assets/liveshield-demo.mp4'
import lowVisionCurrencyDetectionResults from '../assets/low-vision-currency-detection-results.jpg'
import lowVisionApplianceControlDetectionResults from '../assets/low-vision-appliance-control-detection-results.jpg'
import { selectedProjectSeo } from './seo'

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

export type ProjectMediaItem = {
  src: string
  alt: string
  caption: string
}

export type Project = {
  slug: string
  title: string
  status?: string
  summary: string
  problem: string
  contribution: string | string[]
  outcome: string | ProjectOutcome
  tools?: string[]
  image: string
  imageAlt?: string
  secondaryImage?: string
  secondaryImageAlt?: string
  mediaGallery?: ProjectMediaItem[]
  mediaVariant?: 'grid' | 'pair' | 'wide'
  video?: string
  links: ProjectLink[]
  featuredLink?: ProjectLink
}

export const projects: Project[] = [
  {
    ...selectedProjectSeo.amble,
    problem:
      'Discovering what to do in Singapore often means switching between disconnected event listings, restaurant platforms, social posts, and maps. This makes it difficult to understand what is nearby, compare possibilities, or turn several places into a practical plan.',
    contribution: [
      'Created an interactive 3D interface deployed through Cloudflare Workers, with searchable events, viewport-based restaurant discovery, and an ordered itinerary builder.',
      'Engineered an evidence-backed event pipeline that collects official listings, normalises recurring occurrences, resolves venues to verified OneMap building identities, and atomically publishes reviewed snapshots.',
      'Developed a restaurant enrichment pipeline that uses TinyFish Search to identify official websites and TinyFish Fetch to inspect dynamic promotion pages. The pipeline verifies restaurant identity, preserves original evidence, and rejects expired offers.',
      'Integrated the OpenAI Realtime API for voice based, natural language discovery across events, restaurants, and places.',
    ],
    outcome:
      'Launched Amble as a public beta serving 100+ monthly users, giving people one continuous journey for discovering Singapore events, restaurants, live promotions, and building a practical day plan.',
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
      'OpenAI Realtime API',
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
    ...selectedProjectSeo.supplyCue,
    problem:
      'Procurement in small F&B teams is often spread across chat messages, supplier emails, spreadsheets, invoices, and verbal updates. Requests can get lost, supplier changes are difficult to follow, and pricing or delivery problems may only become visible when payment is due.',
    contribution: [
      'Created a web workspace where Owners set purchasing rules, manage suppliers, and review requests, deliveries, invoices, exceptions, and approvals in one place.',
      'Connected Telegram so staff can request stock using ordinary messages. SupplyCue identifies the item, quantity, required date, and supplier, checks that the request is clear before sending it, and returns supplier updates through the same chat.',
      'Integrated Gmail to send orders, follow supplier conversations, and connect each reply to the correct request. SupplyCue handles price negotiation while escalating quantity changes, substitutions, delivery issues, payment terms, and excessive prices to the Owner.',
      'Developed AI assisted invoice reading and delivery checks to identify differences in quantities, prices, totals, and GST. Every request, supplier message, document, and decision is stored within one traceable case history for Owner review.',
    ],
    outcome:
      'In end to end workflow testing, SupplyCue reduced manual coordination per order from about 90 minutes to 15 minutes by automating requests, supplier negotiation, and invoice verification. The interactive Cloudflare demo is now being used to assess the concept with F&B operators.',
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
    image: supplyCueWorkspace,
    video: supplyCueDemoVideo,
    links: [
      {
        label: 'Visit SupplyCue',
        href: 'https://supplycue.project-hub-arnav.workers.dev/',
      },
    ],
    featuredLink: {
      label: 'View SupplyCue on LinkedIn',
      href: 'https://www.linkedin.com/posts/arnav--goel_running-an-fb-business-is-already-demanding-activity-7486689143083806720-IFKv?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEUjVB8BW9ilsQ4eIZxp6tu-VDisSZGJD3A',
    },
  },
  {
    ...selectedProjectSeo.liveShield,
    problem:
      'Live streaming can unintentionally expose bystanders, private screens, documents, badges, parcels, codes, and other sensitive information. Once broadcast, this content can be recorded or shared beyond the creator’s control.',
    contribution: [
      'Developed LiveShield in Java using CameraX to analyze video from both the front and back cameras directly on the device. Creators can select themselves as the host, while YuNet and OpenCV detect, track, and cover other faces, including people who enter the frame later.',
      'Combined PaddleOCR and OpenCV to identify email addresses, phone numbers, payment card details, verification codes, and words marked as private. Added ZXing to detect QR codes and barcodes, as well as manual privacy zones for screens, documents, badges, parcels, and background areas.',
      'Created a protected video pipeline using OpenGL and MediaCodec, ensuring that the preview and broadcast use the same sanitized footage. Integrated RTMP publishing so eligible creators can stream directly to TikTok LIVE.',
    ],
    outcome:
      'Built an installable Android prototype and validated its privacy pipeline across 20 simulated camera, detection, rendering, and connection failures. Successfully broadcast protected video from both cameras through TikTok LIVE without exposing untreated frames.',
    tools: [
      'Java',
      'CameraX',
      'OpenGL',
      'MediaCodec',
      'YuNet',
      'OpenCV',
      'PaddleOCR',
      'ZXing',
      'RTMP',
      'TikTok LIVE',
    ],
    image: liveShieldQrCodeRedaction,
    imageAlt: 'A parcel label covered by LiveShield',
    video: liveShieldDemoVideo,
    links: [{ label: 'View GitHub', href: 'https://github.com/arnav-goel05/liveshield' }],
  },
  {
    ...selectedProjectSeo.lowVision,
    problem:
      'Many existing low vision applications can recognise objects, read text, or describe where controls are located, but they often stop before helping the user complete the task. People may still need support deciding how much money to give a cashier, identifying unfamiliar notes and coins, or understanding which appliance buttons to press and in what order. These interactions must also be fast, private, accessible, and usable by elderly Singaporeans across English and Mandarin.',
    contribution: [
      'Conducting research with doctors, orientation and mobility specialists, and people with low vision to understand their everyday needs and translate them into clear product requirements and testable workflows.',
      'Building an initial iPhone prototype that processes information on device for speed, privacy, and reliable offline use. The application includes VoiceOver, scalable text, clear recovery guidance, and English and Mandarin support for elderly users in Singapore.',
      'Prototyping guided workflows for Singapore currency and home appliances. The currency workflow recognises local notes and coins and helps users determine how much to give a cashier. The appliance workflow uses speech input and voice guidance to explain which controls to use and walk users through each task step by step.',
    ],
    outcome:
      'Work in progress. The current focus is refining the initial on device prototype and validating its core workflows before broader testing with people with low vision.',
    tools: [
      'Swift',
      'SwiftUI',
      'Core ML',
      'Vision framework',
      'AVFoundation',
      'Speech',
      'AVSpeechSynthesizer',
      'SwiftData',
      'XCTest',
      'Python',
    ],
    image: lowVisionCurrencyDetectionResults,
    imageAlt: 'Singapore banknote detection results across 15 test cases',
    secondaryImage: lowVisionApplianceControlDetectionResults,
    secondaryImageAlt:
      'Microwave dial and keypad control detection results across multiple appliance models',
    mediaVariant: 'pair',
    links: [],
  },
  {
    ...selectedProjectSeo.tribe,
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
    ...selectedProjectSeo.visionPro,
    status: 'Patent pending',
    problem:
      'Stroke rehabilitation often relies on clinician observation to assess hand dexterity. This makes small movement deviations difficult to quantify consistently, compare across assessments, or track throughout recovery.',
    contribution: [
      'Led a 3 person team working with NUH to translate clinical requirements into a Vision Pro and iPad assessment that guides patients through structured hand movement tasks and captures quantified recovery metrics.',
      'Developed hand calibration, real time fingertip tracking, six movement tasks, repeatable trials, deviation measurements, and automated 3D data export using Swift, SwiftUI, ARKit, and RealityKit.',
      'Created a Python analysis pipeline that processes more than 15,000 movement points from each assessment, visualises key patterns, and compares healthy control data with simulated ataxia data.',
    ],
    outcome:
      'Refined the assessment through testing with 7 patients and clinician feedback, establishing a repeatable workflow for measuring fine motor control and analysing more than 15,000 movement points. The underlying method is patent pending.',
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
    ...selectedProjectSeo.byteStreak,
    problem:
      'Maintaining a Daily Challenge streak requires remembering to return to LeetCode and check whether today’s problem has been accepted. Without this progress on the Android home screen, it is easy to lose track as the day progresses.',
    contribution: [
      'Created a native Android dashboard and Jetpack Glance widget that display the current challenge, completion status, recent streak, acceptance time, and last update. Setup requires only a public LeetCode username, with no password or login required.',
      'Engineered an on device pipeline that queries the LeetCode GraphQL API, matches accepted submissions to the exact challenge and its 24 hour UTC window, calculates consecutive completions, and caches results for immediate rendering.',
      'Designed Byte, a mascot with 12 visual states that responds to completion, urgency, streak milestones, connectivity, and recently broken streaks. Added network aware background updates, retry handling, and three daily reminders that verify the challenge remains incomplete before notifying the user.',
    ],
    outcome:
      'Built an installable Android prototype that gives users a reliable, glanceable view of their Daily Challenge progress. Validated its matching, streak, reminder, onboarding, and widget scheduling logic with 27 unit tests and three Android API 36 emulator tests.',
    tools: [
      'Kotlin',
      'Jetpack Compose',
      'Jetpack Glance',
      'WorkManager',
      'LeetCode GraphQL',
      'SharedPreferences',
      'Android Notifications',
      'JUnit',
      'Espresso',
    ],
    image: byteStreakDailyStates,
    imageAlt:
      'Six Byte mascot widget states becoming more urgent throughout an unfinished Daily Challenge',
    mediaVariant: 'wide',
    links: [
      {
        label: 'View GitHub',
        href: 'https://github.com/arnav-goel05/leetcode_android_widget',
      },
    ],
    featuredLink: {
      label: 'View ByteStreak on LinkedIn',
      href: 'https://www.linkedin.com/feed/update/urn:li:activity:7490814050411634688/',
    },
  },
]
