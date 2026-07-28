import assert from 'node:assert/strict'

const input = process.argv[2] ?? 'http://127.0.0.1:8787'
const baseUrl = new URL(input.endsWith('/') ? input : `${input}/`)

function route(pathname) {
  return new URL(pathname, baseUrl)
}

function getTagAttribute(html, selectorAttribute, selectorValue, targetAttribute = 'content') {
  const tags = html.match(/<(?:meta|link)\b[^>]*>/gi) ?? []

  for (const tag of tags) {
    const attributes = Object.fromEntries(
      Array.from(tag.matchAll(/([\w:-]+)=["']([^"']*)["']/g), (match) => [match[1], match[2]]),
    )
    if (attributes[selectorAttribute] === selectorValue) return attributes[targetAttribute] ?? null
  }

  return null
}

function getTitle(html) {
  return html.match(/<title>([\s\S]*?)<\/title>/i)?.[1]?.trim() ?? null
}

function getJsonLd(html) {
  return Array.from(
    html.matchAll(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi),
    (match) => JSON.parse(match[1]),
  )
}

async function request(pathname, init) {
  return fetch(route(pathname), init)
}

const [
  homeResponse,
  aboutResponse,
  notFoundResponse,
  robotsResponse,
  sitemapResponse,
  llmsResponse,
] = await Promise.all([
  request('/'),
  request('/about'),
  request('/does-not-exist'),
  request('/robots.txt'),
  request('/sitemap.xml'),
  request('/llms.txt'),
])

assert.equal(homeResponse.status, 200, 'Homepage must return HTTP 200')
assert.equal(aboutResponse.status, 200, 'About must return HTTP 200')
assert.equal(notFoundResponse.status, 404, 'Unknown application routes must return HTTP 404')

const [homeHtml, aboutHtml, notFoundHtml, robots, sitemap, llms] = await Promise.all([
  homeResponse.text(),
  aboutResponse.text(),
  notFoundResponse.text(),
  robotsResponse.text(),
  sitemapResponse.text(),
  llmsResponse.text(),
])

const homeTitle = getTitle(homeHtml)
const aboutTitle = getTitle(aboutHtml)
const homeDescription = getTagAttribute(homeHtml, 'name', 'description')
const aboutDescription = getTagAttribute(aboutHtml, 'name', 'description')

assert.ok(homeTitle, 'Homepage title is required')
assert.ok(aboutTitle, 'About title is required')
assert.notEqual(homeTitle, aboutTitle, 'Homepage and About titles must be distinct')
assert.ok(homeDescription, 'Homepage description is required')
assert.ok(aboutDescription, 'About description is required')
assert.notEqual(
  homeDescription,
  aboutDescription,
  'Homepage and About descriptions must be distinct',
)
assert.equal(
  getTagAttribute(homeHtml, 'rel', 'canonical', 'href'),
  'https://arnav-goel.com/',
  'Homepage canonical must use the apex root',
)
assert.equal(
  getTagAttribute(aboutHtml, 'rel', 'canonical', 'href'),
  'https://arnav-goel.com/about',
  'About canonical must use the non-trailing-slash route',
)
assert.match(getTagAttribute(homeHtml, 'name', 'robots') ?? '', /^index, follow/)
assert.match(getTagAttribute(aboutHtml, 'name', 'robots') ?? '', /^index, follow/)
assert.equal(getTagAttribute(notFoundHtml, 'name', 'robots'), 'noindex, nofollow')
assert.equal(notFoundResponse.headers.get('x-robots-tag'), 'noindex, nofollow')
assert.equal(getTagAttribute(homeHtml, 'name', 'twitter:card'), 'summary')
assert.equal(getTagAttribute(aboutHtml, 'property', 'og:type'), 'profile')

const homeJsonLd = getJsonLd(homeHtml)
const aboutJsonLd = getJsonLd(aboutHtml)
assert.equal(homeJsonLd.length, 1, 'Homepage must expose one JSON-LD graph')
assert.equal(aboutJsonLd.length, 1, 'About must expose one JSON-LD graph')

const homeGraph = homeJsonLd[0]['@graph']
const aboutGraph = aboutJsonLd[0]['@graph']
assert.ok(Array.isArray(homeGraph), 'Homepage JSON-LD graph must be an array')
assert.ok(Array.isArray(aboutGraph), 'About JSON-LD graph must be an array')
assert.ok(homeGraph.some((entity) => entity['@type'] === 'Person'))
assert.ok(homeGraph.some((entity) => entity['@type'] === 'WebSite'))
assert.ok(aboutGraph.some((entity) => entity['@type'] === 'ProfilePage'))

const itemList = homeGraph.find((entity) => entity['@type'] === 'ItemList')
assert.ok(itemList, 'Homepage JSON-LD must include selected work')
assert.equal(itemList.numberOfItems, 5)
assert.equal(itemList.itemListElement.length, 5)

assert.match(robotsResponse.headers.get('content-type') ?? '', /^text\/plain/)
assert.match(sitemapResponse.headers.get('content-type') ?? '', /(?:application|text)\/xml/)
assert.match(llmsResponse.headers.get('content-type') ?? '', /^text\/plain/)
assert.match(robots, /Sitemap: https:\/\/arnav-goel\.com\/sitemap\.xml/)

const sitemapUrls = Array.from(sitemap.matchAll(/<loc>([^<]+)<\/loc>/g), (match) => match[1])
assert.deepEqual(sitemapUrls, ['https://arnav-goel.com/', 'https://arnav-goel.com/about'])
for (const projectTitle of [
  'Amble',
  'SupplyCue',
  'On-Device Low Vision Assistant',
  'TRIBE v2 Music Optimization',
  'Vision Pro Hand Dexterity Assessment',
]) {
  assert.ok(llms.includes(projectTitle), `llms.txt must include ${projectTitle}`)
}

const aboutSlashResponse = await request('/about/', { redirect: 'manual' })
assert.equal(aboutSlashResponse.status, 308, 'Trailing-slash About must permanently redirect')
assert.equal(new URL(aboutSlashResponse.headers.get('location'), baseUrl).pathname, '/about')

const headResponse = await request('/', { method: 'HEAD' })
assert.equal(headResponse.status, 200)
assert.equal(await headResponse.text(), '')

if (baseUrl.hostname === 'arnav-goel.com') {
  const wwwUrl = new URL(baseUrl)
  wwwUrl.hostname = 'www.arnav-goel.com'
  const wwwResponse = await fetch(wwwUrl, { redirect: 'manual' })
  assert.equal(wwwResponse.status, 308, 'www must permanently redirect to the apex domain')
  assert.equal(wwwResponse.headers.get('location'), 'https://arnav-goel.com/')
}

console.log(
  JSON.stringify({
    target: baseUrl.origin,
    routes: { home: 200, about: 200, notFound: 404 },
    structuredData: { homeEntities: homeGraph.length, projects: itemList.numberOfItems },
    discoveryResources: ['robots.txt', 'sitemap.xml', 'llms.txt'],
    healthy: true,
  }),
)
