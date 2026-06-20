import customerSupportHeader from '../assets/customer-support-header.png'
import handEyeCoordinationHeader from '../assets/hand-eye-coordination-header.svg'

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
    slug: 'customer-support',
    title: 'Automated Customer Support Evaluation System',
    eyebrow: 'Turning support calls into reviewable signals',
    year: '2024',
    status: 'Prototype Built',
    category: 'AI, NLP',
    platform: 'Pipeline',
    summary:
      'An end-to-end call transcription and sentiment evaluation system for customer support review.',
    heroSummary:
      'Building an automated evaluation pipeline from noisy support audio to transcript, sentiment, and review-ready output.',
    role: 'Machine learning engineer',
    skills: ['Speech recognition', 'NLP', 'Model evaluation', 'Pipeline design'],
    timeline: 'Academic project',
    tools: ['Python', 'Whisper ASR', 'BERT-RoBERTa', 'Pandas'],
    team: ['Individual project'],
    image: customerSupportHeader,
    accent: '#83b9ef',
    sections: [
      {
        kicker: 'Problem',
        title: 'Support calls hold useful signals, but manual review does not scale.',
        body: [
          'Call evaluation is slow when every recording has to be listened to, transcribed, and judged manually.',
          'The practical challenge was to turn raw audio into structured evidence that could support a more consistent review process.',
        ],
      },
      {
        kicker: 'User Research',
        title: 'The key workflow gap was between raw conversations and actionable review.',
        body: [
          'This project did not include published user interviews, so this section is intentionally framed around workflow assumptions rather than invented research.',
          'The assumed reviewer need is simple: reduce listening time, preserve enough transcript context, and surface sentiment signals without hiding the original call evidence.',
        ],
        cards: [
          {
            label: '01',
            title: 'Audio is hard to scan',
            body: 'Reviewers need searchable text before they can compare calls efficiently.',
          },
          {
            label: '02',
            title: 'Sentiment needs context',
            body: 'A score is useful only when it remains tied to the transcript and call moment.',
          },
          {
            label: '03',
            title: 'Automation needs measurable quality',
            body: 'The pipeline had to report transcription and classification performance, not just produce outputs.',
          },
        ],
      },
      {
        kicker: 'Solution',
        title: 'A modular pipeline converts audio into transcript, sentiment, and evaluation summary.',
        body: [
          'Whisper ASR handles transcription first, creating a text layer that can be searched and inspected.',
          'A BERT-RoBERTa sentiment layer then classifies the transcript output so review can move from raw call to structured assessment.',
        ],
      },
      {
        kicker: 'System Design',
        title: 'Each model stage is separated so quality can improve without rewriting the full system.',
        body: [
          'The pipeline is intentionally staged: audio input, ASR transcript, NLP sentiment classification, then evaluation output.',
          'This is less flashy than an all-in-one system, but it is easier to test and less likely to hide failures in production.',
        ],
        cards: [
          {
            label: '01',
            title: 'Audio input',
            body: 'Support recordings enter the system as the source artifact.',
          },
          {
            label: '02',
            title: 'Transcript layer',
            body: 'Whisper converts speech to text for downstream review.',
          },
          {
            label: '03',
            title: 'Sentiment layer',
            body: 'BERT-RoBERTa classifies customer sentiment from transcript text.',
          },
        ],
      },
      {
        kicker: 'MVP Walkthrough',
        title: 'The walkthrough evidence is currently represented with placeholders.',
        body: [
          'Real interface screenshots or a scrubbed demo would make this section stronger.',
          'Until those assets exist, this page avoids pretending that a polished dashboard was shipped.',
        ],
        placeholder: 'Placeholder for transcript table, sentiment output, or pipeline run screenshot.',
      },
      {
        kicker: 'User Study',
        title: 'Validation focused on model performance rather than a formal user study.',
        body: [
          'The measurable result was a transcription improvement from 77.37% WER to 23.79% WER and sentiment accuracy above 0.89.',
          'A production-ready next step would be reviewer validation: does this actually reduce review time without losing important context?',
        ],
      },
    ],
    takeaways: [
      {
        label: 'What worked',
        body: 'Separating transcription and sentiment made the system easier to evaluate and reason about.',
      },
      {
        label: 'What is still weak',
        body: 'The portfolio evidence needs real screenshots, sample outputs, or a walkthrough artifact to feel complete.',
      },
      {
        label: 'What comes next',
        body: 'Add reviewer-facing validation and error handling around low-confidence transcripts.',
      },
    ],
  },
  {
    slug: 'hand-eye-coordination',
    title: '3D Hand-Eye Coordination Assessment Tool',
    eyebrow: 'Measuring spatial movement for rehabilitation',
    year: '2025',
    status: 'In Development',
    category: 'Healthcare, Spatial Computing',
    platform: 'Apple Vision Pro',
    summary:
      'A spatial-computing assessment tool for measuring how closely patients follow an ideal hand path.',
    heroSummary:
      'Designing a Vision Pro rehabilitation assessment that turns hand movement into repeatable path-accuracy data.',
    role: 'Software engineer intern',
    skills: ['Spatial computing', 'SwiftUI', 'ARKit', 'RealityKit', 'Data analysis'],
    timeline: 'May 2025 - Present',
    tools: ['SwiftUI', 'ARKit', 'RealityKit', 'Python', 'Pandas'],
    team: ['Interactive 3D', 'NUH Rehabilitation'],
    image: handEyeCoordinationHeader,
    accent: '#b7df7f',
    sections: [
      {
        kicker: 'Problem',
        title: 'Manual rehabilitation assessment can be hard to repeat consistently.',
        body: [
          'Stroke survivors need assessments that clinicians can compare over time, but hand movement quality is difficult to capture precisely through observation alone.',
          'The project explores whether a spatial path-following task can turn hand-eye coordination into clearer movement data.',
        ],
      },
      {
        kicker: 'User Research',
        title: 'The product has to serve both patients completing the task and clinicians reviewing the result.',
        body: [
          'The current public portfolio content does not include formal user-study findings, so this section stays conservative.',
          'The inferred design constraint is that the patient task must feel simple while the captured data remains useful for clinical review.',
        ],
        cards: [
          {
            label: '01',
            title: 'Patient task clarity',
            body: 'The assessment should make the start point, path, and target obvious in the headset.',
          },
          {
            label: '02',
            title: 'Clinician comparability',
            body: 'Outputs should make sessions comparable instead of becoming isolated demos.',
          },
          {
            label: '03',
            title: 'Low distraction',
            body: 'Visual polish should not compete with the motor task being measured.',
          },
        ],
      },
      {
        kicker: 'Solution',
        title: 'A Vision Pro path-following task records movement against an ideal trajectory.',
        body: [
          'The patient traces a virtual path between points in 3D space while the system captures deviation from the ideal path.',
          'The experience is designed as an assessment, not a game, so clarity and repeatability matter more than spectacle.',
        ],
      },
      {
        kicker: 'System Design',
        title: 'The workflow connects spatial interaction, tracking, and Python-based analysis.',
        body: [
          'SwiftUI and RealityKit shape the assessment experience, while ARKit tracking provides the spatial signal.',
          'Python analysis is reserved for aggregating and visualizing movement data after the session.',
        ],
        cards: [
          {
            label: '01',
            title: 'Spatial setup',
            body: 'Define visible start, midpoint, and end targets for the patient task.',
          },
          {
            label: '02',
            title: 'Movement capture',
            body: 'Record hand motion and deviations from the ideal trajectory.',
          },
          {
            label: '03',
            title: 'Analysis output',
            body: 'Aggregate path data into clinician-readable comparisons.',
          },
        ],
      },
      {
        kicker: 'MVP Walkthrough',
        title: 'The existing Vision Pro visual becomes the walkthrough anchor.',
        body: [
          'The current site already contains a strong spatial-computing visual; the redesign uses it as the case-study hero rather than keeping a separate launch animation.',
          'A real demo video or assessment recording can replace this placeholder later.',
        ],
        placeholder: 'Placeholder for Vision Pro demo video or scrubbed assessment walkthrough.',
      },
      {
        kicker: 'User Study',
        title: 'Clinical validation is not ready to publish yet.',
        body: [
          'This section should eventually hold trial status, patient-versus-control comparison, and final analysis visuals.',
          'Until those are available, the page should say what is missing instead of overstating results.',
        ],
      },
    ],
    takeaways: [
      {
        label: 'What worked',
        body: 'A spatial path task gives the project a concrete interaction model that is easy to understand.',
      },
      {
        label: 'What is still weak',
        body: 'The public case study needs validated results before it can make strong clinical claims.',
      },
      {
        label: 'What comes next',
        body: 'Replace placeholders with real trial visuals, methodology notes, and clinician-facing outputs.',
      },
    ],
  },
]

export const contactLinks = [
  { label: 'Email', href: 'mailto:arnav.goel@u.nus.edu' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/arnav--goel/' },
]
