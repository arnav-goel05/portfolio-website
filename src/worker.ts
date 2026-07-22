import { getPageSeo, SITE_ORIGIN, type PageSeo } from './data/seo'

type AssetBinding = {
  fetch(request: Request): Promise<Response>
}

type Env = {
  ASSETS: AssetBinding
}

const SEO_START = '<!-- seo:start -->'
const SEO_END = '<!-- seo:end -->'
const STATIC_PATHS = new Set(['/favicon.png', '/robots.txt', '/sitemap.xml', '/llms.txt'])

function escapeAttribute(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
}

function renderSeoHead(seo: PageSeo) {
  const title = escapeAttribute(seo.title)
  const description = escapeAttribute(seo.description)
  const canonicalUrl = escapeAttribute(seo.canonicalUrl)
  const structuredData = seo.structuredData
    ? `\n    <script type="application/ld+json">${JSON.stringify(seo.structuredData).replaceAll('<', '\\u003c')}</script>`
    : ''

  return `${SEO_START}
    <title>${title}</title>
    <meta name="description" content="${description}" />
    <meta name="robots" content="${escapeAttribute(seo.robots)}" />
    <link rel="canonical" href="${canonicalUrl}" />
    <meta property="og:site_name" content="Arnav Goel Portfolio" />
    <meta property="og:locale" content="en_SG" />
    <meta property="og:type" content="${seo.openGraphType}" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:url" content="${canonicalUrl}" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${description}" />${structuredData}
    ${SEO_END}`
}

function injectSeo(html: string, seo: PageSeo) {
  const start = html.indexOf(SEO_START)
  const end = html.indexOf(SEO_END)

  if (start === -1 || end === -1 || end < start) {
    throw new Error('SEO head markers are missing from index.html')
  }

  return `${html.slice(0, start)}${renderSeoHead(seo)}${html.slice(end + SEO_END.length)}`
}

function isStaticPath(pathname: string) {
  return pathname.startsWith('/assets/') || STATIC_PATHS.has(pathname)
}

async function renderApplication(request: Request, env: Env, seo: PageSeo) {
  const indexUrl = new URL('/index.html', request.url)
  const indexResponse = await env.ASSETS.fetch(
    new Request(indexUrl, {
      method: 'GET',
      headers: request.headers,
    }),
  )

  if (!indexResponse.ok) return indexResponse

  const html = injectSeo(await indexResponse.text(), seo)
  const headers = new Headers(indexResponse.headers)
  headers.delete('content-length')
  headers.delete('etag')
  headers.set('content-type', 'text/html; charset=utf-8')
  headers.set('link', `<${seo.canonicalUrl}>; rel="canonical"`)
  headers.set('x-robots-tag', seo.robots)

  return new Response(request.method === 'HEAD' ? null : html, {
    status: seo.status,
    headers,
  })
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url)

    if (url.hostname === 'www.arnav-goel.com') {
      url.hostname = new URL(SITE_ORIGIN).hostname
      return Response.redirect(url, 308)
    }

    if (request.method !== 'GET' && request.method !== 'HEAD') {
      return env.ASSETS.fetch(request)
    }

    if (isStaticPath(url.pathname)) {
      return env.ASSETS.fetch(request)
    }

    if (url.pathname === '/about/') {
      url.pathname = '/about'
      return Response.redirect(url, 308)
    }

    return renderApplication(request, env, getPageSeo(url.pathname))
  },
}
