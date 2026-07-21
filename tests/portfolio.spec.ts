import { expect, test, type Page } from '@playwright/test'

const projectTitles = [
  'Amble: Explore Singapore in 3D',
  'SupplyCue: AI Assisted F&B Procurement',
  'On-Device Low Vision Assistant',
  'TRIBE v2 Music Optimization',
  'Vision Pro Hand Dexterity Assessment',
]

function collectConsoleErrors(page: Page) {
  const errors: string[] = []
  page.on('console', (message) => {
    if (message.type() === 'error') errors.push(message.text())
  })
  page.on('pageerror', (error) => errors.push(error.message))
  return errors
}

test('homepage presents every project and valid navigation', async ({ page }) => {
  const errors = collectConsoleErrors(page)
  await page.goto('/')

  await expect(page.getByRole('heading', { level: 1 })).toContainText(
    'Building thoughtful products from 0→1.',
  )
  await expect(page.locator('.work-card')).toHaveCount(projectTitles.length)
  for (const title of projectTitles) {
    await expect(page.getByRole('heading', { name: title })).toBeVisible()
  }

  await expect(page.getByRole('link', { name: 'Work' })).toHaveAttribute('href', '/#work')
  await expect(page.getByRole('link', { name: 'About' })).toHaveAttribute('href', '/about')
  await expect(page.getByRole('link', { name: 'Email' })).toHaveAttribute(
    'href',
    'mailto:arnav.goel@u.nus.edu',
  )
  await expect(page.getByRole('link', { name: 'LinkedIn', exact: true })).toHaveAttribute(
    'href',
    'https://www.linkedin.com/in/arnav--goel/',
  )
  await expect(page.getByRole('link', { name: 'GitHub', exact: true })).toHaveAttribute(
    'href',
    'https://github.com/arnav-goel05',
  )
  expect(errors).toEqual([])
})

test('About loads directly with and without a trailing slash', async ({ page }) => {
  for (const path of ['/about', '/about/']) {
    await page.goto(path)
    await expect(page.getByRole('heading', { level: 1, name: 'About' })).toBeVisible()
  }
})

test('experience accordion exposes its state and controlled detail', async ({ page }) => {
  await page.goto('/about')
  const trigger = page.getByRole('button', { name: /Interactive 3D/ })
  const detailId = await trigger.getAttribute('aria-controls')

  expect(detailId).toBeTruthy()
  await expect(trigger).toHaveAttribute('aria-expanded', 'false')
  await trigger.click()
  await expect(trigger).toHaveAttribute('aria-expanded', 'true')
  await expect(page.locator(`#${detailId}`)).toBeVisible()
  await trigger.click()
  await expect(trigger).toHaveAttribute('aria-expanded', 'false')
  await expect(page.locator(`#${detailId}`)).toHaveCount(0)
})

test('unknown paths render the explicit not-found page', async ({ page }) => {
  await page.goto('/this-page-does-not-exist')
  await expect(page.getByRole('heading', { level: 1, name: "That page isn't here." })).toBeVisible()
  await expect(page.getByRole('link', { name: 'Return home' })).toHaveAttribute('href', '/')
})

for (const viewport of [
  { label: 'desktop', width: 1440, height: 900 },
  { label: 'mobile', width: 390, height: 844 },
]) {
  test(`homepage and About avoid horizontal overflow on ${viewport.label}`, async ({ page }) => {
    await page.setViewportSize(viewport)
    for (const path of ['/', '/about']) {
      await page.goto(path)
      const dimensions = await page.evaluate(() => ({
        clientWidth: document.documentElement.clientWidth,
        scrollWidth: document.documentElement.scrollWidth,
      }))
      expect(dimensions.scrollWidth).toBeLessThanOrEqual(dimensions.clientWidth)
    }
  })
}
