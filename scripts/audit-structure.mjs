import { execFileSync } from 'node:child_process'
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs'
import { dirname, extname, join, relative, resolve } from 'node:path'

const read = (path) => readFileSync(path, 'utf8')
const failures = []
const assert = (condition, message) => {
  if (!condition) failures.push(message)
}

const aboutData = read('src/data/about.ts')
const portfolioStyles = read('src/styles/portfolio.css')
const appStyles = read('src/App.css').trim().split('\n').filter(Boolean)
const packageJson = JSON.parse(read('package.json'))
const maintainedDocs = ['README.md', 'ARCHITECTURE.md', 'DESIGN.md'].map(read).join('\n')
const experienceIds = [...aboutData.matchAll(/\bid:\s*['"]([^'"]+)['"]/g)].map((match) => match[1])
const trackedArtifacts = execFileSync('git', ['ls-files', 'outputs', '.qa', 'tmp'], {
  encoding: 'utf8',
}).trim()
const walk = (directory) =>
  readdirSync(directory).flatMap((name) => {
    const path = join(directory, name)
    return statSync(path).isDirectory() ? walk(path) : [path]
  })
const sourceModules = walk('src').filter(
  (path) => ['.ts', '.tsx'].includes(extname(path)) && !/\.test\.(ts|tsx)$/.test(path),
)
const graph = new Map(sourceModules.map((path) => [resolve(path), []]))
const importedAssets = new Set()

for (const modulePath of sourceModules) {
  const source = read(modulePath)
  const imports = [...source.matchAll(/from\s+['"]([^'"]+)['"]|import\s+['"]([^'"]+)['"]/g)].map(
    (match) => match[1] ?? match[2],
  )
  for (const specifier of imports) {
    if (specifier.includes('/assets/')) importedAssets.add(resolve(dirname(modulePath), specifier))
    if (!specifier.startsWith('.')) continue
    const base = resolve(dirname(modulePath), specifier)
    const dependency = [
      base,
      `${base}.ts`,
      `${base}.tsx`,
      join(base, 'index.ts'),
      join(base, 'index.tsx'),
    ].find((candidate) => graph.has(candidate))
    if (dependency) graph.get(resolve(modulePath)).push(dependency)
  }
}

const visiting = new Set()
const visited = new Set()
const reachable = new Set()
let cycle = null
const visit = (modulePath, stack = []) => {
  if (visiting.has(modulePath)) {
    cycle = [...stack, modulePath].map((path) => relative('.', path)).join(' -> ')
    return
  }
  if (visited.has(modulePath)) return
  visiting.add(modulePath)
  reachable.add(modulePath)
  for (const dependency of graph.get(modulePath) ?? []) visit(dependency, [...stack, modulePath])
  visiting.delete(modulePath)
  visited.add(modulePath)
}
for (const entryPoint of ['src/main.tsx', 'src/worker.ts']) {
  if (existsSync(entryPoint)) visit(resolve(entryPoint))
}

const unusedModules = sourceModules
  .map((path) => resolve(path))
  .filter((path) => !reachable.has(path))
  .map((path) => relative('.', path))
const unusedAssets = walk('src/assets')
  .map((path) => resolve(path))
  .filter((path) => !importedAssets.has(path))
  .map((path) => relative('.', path))

assert(experienceIds.length > 0, 'About experiences must have stable ids.')
assert(new Set(experienceIds).size === experienceIds.length, 'About experience ids must be unique.')
assert(!/placeholder/i.test(aboutData), 'Public About data must not contain placeholders.')
assert(
  !/\.work-card:nth-child/.test(portfolioStyles),
  'Project layout must not depend on card indices.',
)
assert(
  appStyles.every((line) => line.startsWith('@import ')),
  'src/App.css must contain imports only.',
)
assert(
  !maintainedDocs.includes('/Users/'),
  'Maintained documentation must not contain local user paths.',
)
assert(!trackedArtifacts, 'Generated QA/output or tmp files must not be tracked.')
assert(
  Object.keys(packageJson.dependencies).every((name) =>
    ['react', 'react-dom', 'react-icons'].includes(name),
  ),
  'Unexpected direct runtime dependency found.',
)
assert(!cycle, `Source dependency cycle found: ${cycle ?? ''}`)
assert(unusedModules.length === 0, `Unreachable source modules: ${unusedModules.join(', ')}`)
assert(unusedAssets.length === 0, `Unused production assets: ${unusedAssets.join(', ')}`)

if (failures.length) {
  console.error(failures.map((failure) => `- ${failure}`).join('\n'))
  process.exit(1)
}

console.log(`Structure audit passed (${experienceIds.length} experience id checked).`)
