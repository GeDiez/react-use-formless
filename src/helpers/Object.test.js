import { setObjectNested, objectValuesReduce, filter } from './Object'

describe('Object helpers', () => {
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
      const newTree = setObjectNested(tree, { path, name: 'valueNested', value: 'modified' })
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

  describe('objectValuesReduce helper', () => {
    test('should call callback funcion for each value even they are nesting', () => {
      const tree = {
        value1: 'value1',
        values2: {
          value21: 21,
          value22: '22'
        },
        value3: {
          value31: 31,
          value32: 32,
          value33: {
            value331: 331
          }
        }
      }
      const fn = jest.fn((acc, value) => acc)
      objectValuesReduce(tree, fn, 0)
      expect(fn.mock.calls[0]).toEqual([0, 'value1'])
      expect(fn.mock.calls[1]).toEqual([0, 21])
      expect(fn.mock.calls[2]).toEqual([0, '22'])
      expect(fn.mock.calls[3]).toEqual([0, 31])
      expect(fn.mock.calls[4]).toEqual([0, 32])
      expect(fn.mock.calls[5]).toEqual([0, 331])
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
