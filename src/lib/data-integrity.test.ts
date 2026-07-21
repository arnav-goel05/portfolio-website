import { describe, expect, it } from 'vitest'
import { aboutRows } from '../data/about'
import { projects } from '../data/portfolio'

describe('portfolio data integrity', () => {
  it('uses unique experience IDs', () => {
    const ids = aboutRows.map(({ id }) => id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  it('defines complete and uniquely addressable projects', () => {
    const slugs = projects.map(({ slug }) => slug)
    expect(new Set(slugs).size).toBe(slugs.length)
    expect(projects.length).toBeGreaterThan(0)

    for (const project of projects) {
      expect(project.slug).toMatch(/^[a-z0-9]+(?:-[a-z0-9]+)*$/)
      expect(project.title.trim()).not.toBe('')
      expect(project.summary.trim()).not.toBe('')
      expect(project.problem.trim()).not.toBe('')
      const contributions = Array.isArray(project.contribution)
        ? project.contribution
        : [project.contribution]
      expect(contributions.length).toBeGreaterThan(0)
      for (const contribution of contributions) expect(contribution.trim()).not.toBe('')
      expect(project.outcome.trim()).not.toBe('')
      expect(project.tools.length).toBeGreaterThan(0)
      expect(project.image).toBeTruthy()

      for (const link of project.links) {
        expect(link.label.trim()).not.toBe('')
        expect(() => new URL(link.href)).not.toThrow()
      }

      if (project.featuredLink) {
        const featuredLink = project.featuredLink
        expect(featuredLink.label.trim()).not.toBe('')
        expect(() => new URL(featuredLink.href)).not.toThrow()
      }
    }
  })
})
