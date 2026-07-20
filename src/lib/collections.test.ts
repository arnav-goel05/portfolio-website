import { describe, expect, it } from 'vitest'
import { chunkItems } from './collections'

describe('chunkItems', () => {
  it.each([
    { label: 'empty input', items: [], expected: [] },
    { label: 'one item', items: [1], expected: [[1]] },
    {
      label: 'even input',
      items: [1, 2, 3, 4],
      expected: [
        [1, 2],
        [3, 4],
      ],
    },
    { label: 'odd input', items: [1, 2, 3], expected: [[1, 2], [3]] },
    { label: 'five items', items: [1, 2, 3, 4, 5], expected: [[1, 2], [3, 4], [5]] },
  ])('chunks $label', ({ items, expected }) => {
    expect(chunkItems(items, 2)).toEqual(expected)
  })

  it('rejects a non-positive chunk size', () => {
    expect(() => chunkItems([1], 0)).toThrow(RangeError)
  })
})
