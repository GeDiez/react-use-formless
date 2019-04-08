import { pipe } from './functions'

describe('functions helpers', () => {
  describe('pipe mutable', () => {
    test('pipe mutable', () => {
      const mockFn1 = jest.fn(() => {})
      const mockFn2 = jest.fn()
      const mockFn3 = jest.fn()
      const args = [1, [], {}, '1.1', 1.1]
      pipe(mockFn1, mockFn2, mockFn3)(...args)

      expect(mockFn1.mock.calls[0]).toEqual(args)
    })
  })
})
