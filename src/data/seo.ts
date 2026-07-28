export const SITE_ORIGIN = 'https://arnav-goel.com'

const PERSON_ID = `${SITE_ORIGIN}/#person`
const WEBSITE_ID = `${SITE_ORIGIN}/#website`

type StructuredData = Record<string, unknown>

export type PageSeo = {
  title: string
  description: string
  canonicalUrl: string
  robots: string
  status: 200 | 404
  openGraphType: 'website' | 'profile'
  structuredData?: StructuredData
}

const personEntity: StructuredData = {
  '@type': 'Person',
  '@id': PERSON_ID,
  name: 'Arnav Goel',
  url: `${SITE_ORIGIN}/`,
  description:
    'Computer Science undergraduate at the National University of Singapore building products across applied AI, spatial computing, and software engineering.',
  sameAs: ['https://www.linkedin.com/in/arnav--goel/', 'https://github.com/arnav-goel05'],
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'National University of Singapore',
    url: 'https://nus.edu.sg/',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Singapore',
    addressCountry: 'SG',
  },
  knowsAbout: [
    'Product discovery',
    'Requirements engineering',
    'Applied artificial intelligence',
    'Software engineering',
    'Spatial computing',
    'Accessibility technology',
  ],
}

export const selectedProjectSeo = {
  amble: {
    slug: 'amble',
    title: 'Amble: Explore Singapore in 3D',
    summary:
      'A 3D city discovery platform for exploring Singapore’s events, restaurants, landmarks, and current restaurant offers in one spatial experience.',
  },
  supplyCue: {
    slug: 'supplycue',
    title: 'SupplyCue: AI Assisted F&B Procurement',
    summary:
      'A Telegram first procurement platform that brings stock requests, supplier communication, delivery checks, invoice verification, and Owner approvals into one clear and traceable workflow.',
  },
  lowVision: {
    slug: 'on-device-low-vision-assistant',
    title: 'On-Device Low Vision Assistant',
    summary:
      'Exploring how on device intelligence on iPhone can help people with low vision complete everyday tasks with greater independence.',
  },
  tribe: {
    slug: 'tribe-music-optimization',
    title: 'TRIBE v2 Music Optimization',
    summary:
      'A model guided music production system that uses TRIBE v2 cortical predictions to remix a hip hop track toward a custom sleep alignment objective.',
  },
  visionPro: {
    slug: 'hand-eye-coordination-assessment',
    title: 'Vision Pro Hand Dexterity Assessment',
    summary:
      'An Apple Vision Pro assessment system that turns hand movement into precise 3D data for stroke rehabilitation and clinical research.',
  },
} as const

const selectedProjects = Object.values(selectedProjectSeo)

export const homeSeo: PageSeo = {
  title: 'Arnav Goel | Product, AI & Software Portfolio',
  description:
    'Portfolio of Arnav Goel, a Singapore based NUS Computer Science student building thoughtful 0 to 1 products across applied AI and software.',
  canonicalUrl: `${SITE_ORIGIN}/`,
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  status: 200,
  openGraphType: 'website',
  structuredData: {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': WEBSITE_ID,
        url: `${SITE_ORIGIN}/`,
        name: 'Arnav Goel Portfolio',
        description:
          'Selected product, applied AI, spatial computing, and software work by Arnav Goel.',
        inLanguage: 'en',
        author: { '@id': PERSON_ID },
      },
      {
        '@type': 'WebPage',
        '@id': `${SITE_ORIGIN}/#webpage`,
        url: `${SITE_ORIGIN}/`,
        name: 'Arnav Goel | Product, AI & Software Portfolio',
        description:
          'Selected product, applied AI, spatial computing, and software work by Arnav Goel.',
        isPartOf: { '@id': WEBSITE_ID },
        about: { '@id': PERSON_ID },
        mainEntity: { '@id': `${SITE_ORIGIN}/#selected-work` },
        inLanguage: 'en',
      },
      personEntity,
      {
        '@type': 'ItemList',
        '@id': `${SITE_ORIGIN}/#selected-work`,
        name: 'Selected work by Arnav Goel',
        numberOfItems: selectedProjects.length,
        itemListElement: selectedProjects.map((project, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: {
            '@type': 'CreativeWork',
            '@id': `${SITE_ORIGIN}/#${project.slug}`,
            url: `${SITE_ORIGIN}/#${project.slug}`,
            name: project.title,
            description: project.summary,
            author: { '@id': PERSON_ID },
          },
        })),
      },
    ],
  },
}

export const aboutSeo: PageSeo = {
  title: 'About Arnav Goel | Product, AI & Software',
  description:
    'Learn about Arnav Goel’s experience across product discovery, applied AI, healthcare technology, spatial computing, and software engineering.',
  canonicalUrl: `${SITE_ORIGIN}/about`,
  robots: 'index, follow, max-image-preview:large, max-snippet:-1',
  status: 200,
  openGraphType: 'profile',
  structuredData: {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfilePage',
        '@id': `${SITE_ORIGIN}/about#webpage`,
        url: `${SITE_ORIGIN}/about`,
        name: 'About Arnav Goel',
        description:
          'Arnav Goel’s experience across product discovery, applied AI, healthcare technology, spatial computing, and software engineering.',
        isPartOf: { '@id': WEBSITE_ID },
        mainEntity: { '@id': PERSON_ID },
        inLanguage: 'en',
      },
      personEntity,
    ],
  },
}

export const notFoundSeo: PageSeo = {
  title: 'Page Not Found | Arnav Goel',
  description: 'The requested page could not be found on Arnav Goel’s portfolio.',
  canonicalUrl: `${SITE_ORIGIN}/`,
  robots: 'noindex, nofollow',
  status: 404,
  openGraphType: 'website',
}

export function getPageSeo(pathname: string): PageSeo {
  if (pathname === '/') return homeSeo
  if (pathname === '/about' || pathname === '/about/') return aboutSeo
  return notFoundSeo
}
