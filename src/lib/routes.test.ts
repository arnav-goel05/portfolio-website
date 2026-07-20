import { describe, expect, it } from 'vitest'
import { normalizePath } from './routes'

describe('normalizePath', () => {
  it.each([
    ['/', '/'],
    ['/about', '/about'],
    ['/about/', '/about'],
    ['/about///', '/about'],
    ['/unknown/path/', '/unknown/path'],
  ])('normalizes %s to %s', (input, expected) => {
    expect(normalizePath(input)).toBe(expected)
  })
})
