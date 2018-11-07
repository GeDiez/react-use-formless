import { useState } from 'react'
import { _setError, _setValue, _setTouched, _touchAllValues, _onSubmit, _inputProps, _isValid } from "./reducers";

// Implementation useFormeless hook

const useFormless = (
  { initialValues },
  {
    validate = () => ({}),
    onSuccess = () => {},
    onError = () => {}
  }
) => {
  const [values, setValues] = useState(initialValues || {})
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [isValid, setValid] = useState(false)

  if (typeof (validate) !== 'function') {
    throw Error('validate option should be a function')
  }

  const setError = (name) => {
    setErrors(_setError({ errors, values, validate, name }))
  }

  const setValue = (name, value) => {
    setValues(_setValue({values, name, value}))
  }

  const touchValue = (name) => {
    setError(name)
    setTouched(_setTouched({touched, name, touch: true}))
  }

  const reset = () => {
    setTouched({})
    setErrors({})
    setValues(initialValues)
    setValid(false)
  }

  const setAllValues = (values) => {
    setValuesAsTouched()
    setValues(values)
    validateValues(values)
  }

  const validateValues = (values) => {
    const fullErrors = validate({ values })
    const isValid = _isValid({errors: fullErrors})

    setErrors(fullErrors)
    setValuesAsTouched()
    setValid(isValid)

    return isValid
  }

  // DOM props

  const onSubmit = _onSubmit({ values, validate: validateValues, onSuccess, onError })

  const inputProps = _inputProps({ values, setValue, touchValue })

  // Privated Functions

  const setValuesAsTouched = () => {
    setTouched(_touchAllValues({ values }))
  }

  return {
    // Variables
    values,
    touched,
    errors,
    isValid,
    // Actions
    setAllValues,
    reset,
    setValue,
    touchValue,
    validateValues,
    // DOM props
    onSubmit,
    inputProps
  }
}

export default useFormless;