import { set, objectValuesReduce, get, filter } from './Object'

describe('Object helpers', () => {
  describe('get helper', () => {
    test('should get any value inside an object given a path', () => {
      const target = {
        level1: {
          level2: {
            level3: {
              value: 1
            }
          }
        }
      }
      const path = ['level1', 'level2', 'level3']
      const path2 = ['level1', 'level2']
      const value = get(target, { path, name: 'value' })
      const value2 = get(target, { path: path2, name: 'level3' })

      expect(value).toBe(1)
      expect(value2).toEqual({ value: 1 })
    })
  })

  describe('setObjectNested helper', () => {
    const tree = {
      value1: 1,
      value2: '2',
      subtree: {
        value1: '1',
        subsubtree: {
          valueNested: 'nested'
        }
      }
    }

    test('updates a value inside a tree given a path and return a new tree(Object)', () => {
      const path = ['subtree', 'subsubtree']
      const newTree = set(tree, { path, name: 'valueNested', value: 'modified' })
      expect(newTree).toEqual({
        value1: 1,
        value2: '2',
        subtree: {
          value1: '1',
          subsubtree: {
            valueNested: 'modified'
          }
        }
      })
    })
  })

  describe('filter function', () => {
    test('should filter each pair(key, value) of an object which are true for tha callback given', () => {
      const tree = {
        value1: 5,
        value2: '2',
        value3: 1,
        value4: 1,
        value5: 2
      }

      const newTree = filter(tree, (key, value) => {
        if (value === 1 || key === 'value1') {
          return true
        }
      })

      expect(newTree).toEqual({
        value1: 5,
        value3: 1,
        value4: 1
      })
    })
  })
})
