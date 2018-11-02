import React from 'react'
import { render } from 'react-testing-library'

import { useFormless, _setError, _setValue, _setTouched, _touchAllValues, _isValid, _onSubmit, _inputProps } from './index'

describe('useFormless hook', () => {
  // Define variables
  const errors = {}
  const touched = {}
  const values = {
    fullname: '',
    username: 'name',
    age: 30,
    hasName: false,
    hasAnyValueElse: 10.13
  }
  const validate = jest.fn(({ values }) => ({
    fullname: values.fullname === '' ? 'custom error1' : '',
    hasName: !values.hasName ? 'custom error2' : ''
  }))

  describe('implementate form logic', () => {
    it('test _setError function', () => {
      const errors1 = _setError({ errors, values, validate, name: 'fullname' })
      const errors2 = _setError({ errors: errors1, values, validate, name: 'hasName' })
      expect(errors2).toEqual({
        fullname: 'custom error1',
        hasName: 'custom error2'
      })
    })

    it('test _setValue function', () => {
      const values1 = _setValue({ values, name: 'fullname', value: 'Dan Abramov' })
      const values2 = _setValue({ values: values1, name: 'hasName', value: true })

      expect(values2).toEqual({
        ...values,
        fullname: 'Dan Abramov',
        hasName: true
      })
    })

    it('test _setTouched function', () => {
      const touched1 = _setTouched({ touched, name: 'fullname', touch: true })
      const touched2 = _setTouched({ touched: touched1, name: 'hasName', touch: true })

      expect(touched2).toEqual({
        fullname: true,
        hasName: true
      })
    })

    it('test _touchAllValues function', () => {
      const touchedValues = _touchAllValues({ values })

      expect(touchedValues).toEqual({
        fullname: true,
        hasName: true,
        username: true,
        age: true,
        hasAnyValueElse: true
      })
    })

    it('test _isValid function', () => {
      const isValid = _isValid({ errors })

      expect(isValid).toBe(true)

      const withErrors = {
        name: 'has error',
        username: 'nas error',
        hasName: ''
      }
      const isValid2 = _isValid({ errors: withErrors })

      expect(isValid2).toBe(false)
    })
  })

  describe('DOM interface functions', () => {
    it('should set value, onInput, onBlur props for a value in specific and return a function it should receive only name', () => {
      const setValue = jest.fn()
      const setTouched = jest.fn()
      const setPropsToValue = _inputProps({ values, setValue, setTouched })
      const props = setPropsToValue('username')

      expect(props.name).toBe('username')
      expect(props.value).toBe('name')
      expect(typeof props.onChange).toBe('function')
      expect(typeof props.onBlur).toBe('function')

      props.onChange({ target: { value: 'some string' } })
      expect(setValue.mock.calls).toEqual([['username', 'some string']])
    })

    it('should make a function for submit form', () => {
      const domEventSubmit = { preventDefault: jest.fn() }
      const onError = jest.fn()
      const onSuccess = jest.fn()
      const validateFailed = jest.fn(() => false)
      const validateSuccess = jest.fn(() => true)
      const onSubmit1 = _onSubmit({ values, validate: validateFailed, onError, onSuccess })

      onSubmit1(domEventSubmit)
      expect(validateFailed.mock.calls).toEqual([[values]])
      // call function without params
      expect(onError.mock.calls).toEqual([[domEventSubmit]])

      const onSubmit2 = _onSubmit({ values, validate: validateSuccess, onError, onSuccess })
      onSubmit2(domEventSubmit)
      expect(validateSuccess.mock.calls).toEqual([[values]])
      // call function without params
      expect(onSuccess.mock.calls).toEqual([[domEventSubmit]])
    })
  })

  describe('react render formless hook', () => {
    const Form = () => {
      const { errors, inputFieldProps, formProps } = useFormless({ initialValues: values }, { validate })
      return (
        <form action='' {...formProps()}>
          <label htmlFor='name' />
          <input id='name' type='text' {...inputFieldProps('name')} />
          <p>{errors.name}</p>
        </form>
      )
    }
    it('should render without crash', () => {
      const { container } = render(Form)
      expect(container).toBeTruthy()
    })
  })
})
