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

    test('should validate a value given a function validator and return a new errorState', () => {
      function validate(name, value) {
        return value === '' ? 'Required' : null
      }

      const newErrorsState = formless.validateField(errorsState, { path, name: 'reference', value: '', validate })
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

  describe('isValid function', () => {
    test('should return true', () => {
      const isValid = formless.isValid(errorsState)

      expect(isValid).toBe(true)
    })

    test('should return false', () => {
      const isValid = formless.isValid({
        name: 'has error',
        surName: '',
        address: {
          street: '',
          city: '',
          moreDetails: {
            reference: ''
          }
        }
      })

      expect(isValid).toBe(false)
    })

    test('should return false if it found error at any nested party', () => {
      const isValid = formless.isValid({
        name: '',
        surName: '',
        address: {
          street: '',
          city: 'has error',
          moreDetails: {
            reference: ''
          }
        }
      })

      expect(isValid).toBe(false)
    })
  })

  describe('validateParty', () => {
    test('should validate recursively only the party form given the right path for it', () => {
      const invalidState = {
        name: 'Jonh',
        surName: '',
        address: {
          street: 'Av. North',
          city: '',
          moreDetails: {
            reference: 'next to farmacy'
          }
        }
      }

      const expectedErrorsState = {
        name: '',
        surName: 'has error',
        address: {
          street: '',
          city: 'has error',
          moreDetails: {
            reference: ''
          }
        }
      }

      const validate = jest.fn((name, value) => value ? '' : 'has error')
      // root form is considered as a party
      const path = []
      const newErrorState = formless.validateParty(invalidState, errorsState, { path, validate })
      expect(newErrorState).toEqual(expectedErrorsState)
    })
  })
})
