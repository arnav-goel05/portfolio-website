import aiWorkflowPlaceholderHeader from '../assets/ai-workflow-placeholder-header.png'

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
    slug: 'ai-workflow-system',
    title: 'AI Workflow System',
    eyebrow: 'A placeholder case study for turning messy inputs into usable software.',
    year: '2026',
    status: 'Placeholder',
    category: 'Applied AI',
    platform: 'Web App',
    summary:
      'A placeholder case study for a practical AI product that organizes messy workflows into clearer decisions.',
    heroSummary:
      'A practical AI system concept for moving from scattered requirements, notes, and artifacts to reviewable workflow output.',
    role: 'Software engineer',
    skills: ['Product thinking', 'Applied AI', 'Workflow design', 'Frontend prototyping'],
    timeline: 'Placeholder case study',
    tools: ['React', 'TypeScript', 'AI-assisted workflows'],
    team: ['Individual placeholder'],
    image: aiWorkflowPlaceholderHeader,
    accent: '#83b9ef',
    sections: [
      {
        kicker: 'Problem',
        title: 'Messy workflows often fail before the software gets complicated.',
        body: [
          'The placeholder problem is deliberately broad: teams collect notes, requirements, examples, and constraints faster than they can turn them into a clear next action.',
          'A real version of this case study should narrow the audience, source evidence, and workflow before making any product claims.',
        ],
      },
      {
        kicker: 'User Research',
        title: 'The research section should prove where the workflow breaks.',
        body: [
          'This placeholder keeps research claims conservative until interviews, usage traces, or project artifacts exist.',
          'The expected evidence would be examples of duplicated work, unclear ownership, repeated context gathering, and decisions made from stale information.',
        ],
        cards: [
          {
            label: '01',
            title: 'Inputs scatter',
            body: 'Useful context lives across notes, documents, chats, screenshots, and half-finished artifacts.',
          },
          {
            label: '02',
            title: 'Decisions blur',
            body: 'Teams struggle to see which details are facts, assumptions, open questions, or next steps.',
          },
          {
            label: '03',
            title: 'Output needs review',
            body: 'AI help is only useful when the result is inspectable and easy to correct.',
          },
        ],
      },
      {
        kicker: 'Solution',
        title: 'A focused AI workflow can turn loose context into structured project output.',
        body: [
          'The intended product shape is a lightweight canvas that groups raw inputs, identifies unresolved questions, and drafts a practical output for review.',
          'The system should keep humans in the loop: AI organizes and proposes, but the user confirms the final direction.',
        ],
      },
      {
        kicker: 'System Design',
        title: 'The system should separate source material, reasoning state, and final output.',
        body: [
          'A safer architecture treats source artifacts as preserved evidence, intermediate reasoning as editable structure, and final output as a reviewed deliverable.',
          'That separation makes the workflow easier to debug than a single prompt box that hides where the answer came from.',
        ],
        cards: [
          {
            label: '01',
            title: 'Collect',
            body: 'Bring notes, requirements, and references into one reviewable workspace.',
          },
          {
            label: '02',
            title: 'Structure',
            body: 'Classify inputs into facts, assumptions, questions, and action candidates.',
          },
          {
            label: '03',
            title: 'Review',
            body: 'Generate a draft output that remains editable before it becomes project truth.',
          },
        ],
      },
      {
        kicker: 'MVP Walkthrough',
        title: 'The walkthrough is intentionally reserved for a real prototype.',
        body: [
          'This section should eventually show the core flow: adding sources, resolving ambiguity, and exporting a reviewed artifact.',
          'Until that exists, the page uses a placeholder visual rather than a fabricated product screenshot.',
        ],
        placeholder: 'Placeholder for prototype screens, interaction states, or a short product walkthrough.',
      },
      {
        kicker: 'Validation',
        title: 'Validation should measure whether the workflow reduces ambiguity.',
        body: [
          'Useful validation would compare time-to-brief, number of unresolved questions, and reviewer corrections before and after the workflow.',
          'No outcome metrics are claimed here because this is a placeholder case study.',
        ],
      },
    ],
    takeaways: [
      {
        label: 'What this placeholder is for',
        body: 'It gives the portfolio one polished case-study slot while leaving room for real evidence later.',
      },
      {
        label: 'What is still missing',
        body: 'The page needs a specific product, real workflow evidence, screenshots, and validation before it should make strong claims.',
      },
      {
        label: 'What comes next',
        body: 'Replace placeholder sections with concrete artifacts from the project that best represents applied AI work.',
      },
    ],
  },
]

export const contactLinks = [
  { label: 'Email', href: 'mailto:arnav.goel@u.nus.edu' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/arnav--goel/' },
]
