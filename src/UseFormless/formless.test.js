import { formless } from './formless'

describe('formless domain logic', () => {
  const state = {
    name: 'Jonh',
    surName: 'Patterson',
    address: {
      street: 'Av. North',
      city: 'Colima',
      moreDetails: {
        reference: 'next to farmacy'
      }
    }
  }

  const touchedState = {
    name: false,
    surName: false,
    address: {
      street: false,
      city: false,
      moreDetails: {
        reference: false
      }
    }
  }

  const errorsState = {
    name: '',
    surName: '',
    address: {
      street: '',
      city: '',
      moreDetails: {
        reference: ''
      }
    }
  }

  describe('getInput function', () => {
    test('should get the value given a state, path, name', () => {
      const path = ['address', 'moreDetails']
      const value = formless.getValue(state, { path, name: 'reference' })
      expect(value).toBe('next to farmacy')
    })
  })

  describe('getValuesParty', () => {
    test('should return all values at this party within a object', () => {
      const path = ['address']
      const valuesAtParty = formless.getValuesParty(state, { path })

      expect(valuesAtParty).toEqual({
        street: 'Av. North',
        city: 'Colima'
      })
    })
  })

  describe('setInput function', () => {
    test('should get the value given a state, path, name and returning a new tree', () => {
      const path = ['address', 'moreDetails']
      const newState = formless.setValue(state, { path, name: 'owner', value: 'Sara Valentine' })
      expect(newState).toEqual({
        name: 'Jonh',
        surName: 'Patterson',
        address: {
          street: 'Av. North',
          city: 'Colima',
          moreDetails: {
            reference: 'next to farmacy',
            owner: 'Sara Valentine'
          }
        }
      })
    })
  })

  describe('validateField function', () => {
    const path = ['address', 'moreDetails']
    const errorsStateExpected = {
      name: '',
      surName: '',
      address: {
        street: '',
        city: '',
        moreDetails: {
          reference: 'Required'
        }
      }
    }

    test('should accept 3 params, name, value, and options', () => {
      const mockValidate = jest.fn()
      formless.validateField(errorsState, { path, name: 'reference', value: '', validate: mockValidate })

      expect(mockValidate.mock.calls[0]).toEqual(['reference', ''])
    })

    test('if there is not validation this even must return the same values', () => {
      const newErrorsState = formless.validateField(errorsState, { path, name: 'reference', value: '', validate: null })
      expect(newErrorsState).toEqual(errorsState)
    })

    test('should validate a value given a function validator and return a new errorState', () => {
      function validate(name, value) {
        return value === '' ? 'Required' : null
      }

      const newErrorsState = formless.validateField(errorsState, { path, name: 'reference', value: '', validate })
      expect(newErrorsState).toEqual(errorsStateExpected)
    })

    test('should validate a value given a function validator within a object and return a new errorState', () => {
      const validatorsObject = {
        'reference': function validate(value) {
          return value === '' ? 'Required' : null
        }
      }

      const newErrorsState = formless.validateField(errorsState, { path, name: 'reference', value: '', validate: validatorsObject })
      expect(newErrorsState).toEqual(errorsStateExpected)
    })

    test('should validate a value given a function validator within a object and return a new errorState', () => {
      const validatorsObject = {
        'reference': function validate(value) {
          return value === '' ? 'Required' : null
        }
      }

      const newErrorsState = formless.validateField(errorsState, { path, name: 'reference', value: '', validate: validatorsObject })
      expect(newErrorsState).toEqual(errorsStateExpected)
    })
  })

  describe('touchAllValues function', () => {
    test('should create a new tree with all values as touched', () => {
      const newState = formless.touchAllFields(state)
      expect(newState).toEqual({
        name: true,
        surName: true,
        address: {
          street: true,
          city: true,
          moreDetails: {
            reference: true
          }
        }
      })
    })
  })

  describe('touchValue function', () => {
    test('should mark a name given as touched and returning a new state', () => {
      const path = ['address']
      const newState = formless.touchField(touchedState, { path, name: 'street' })
      expect(newState).toEqual({
        name: false,
        surName: false,
        address: {
          street: true,
          city: false,
          moreDetails: {
            reference: false
          }
        }
      })
    })
  })

  describe('setError function', () => {
    test('should set an error into a stete of errors', () => {
      const path = ['address', 'moreDetails']
      const newState = formless.setError(errorsState, { path, name: 'reference', error: 'you need add a reference' })
      expect(newState).toEqual({
        name: '',
        surName: '',
        address: {
          street: '',
          city: '',
          moreDetails: {
            reference: 'you need add a reference'
          }
        }
      })
    })
  })
})
