import { useState } from 'react'

export const _setError = ({errors, values, validate, name}) => {
  const error = validate({ values })[name]
  return { ...errors, [name]: error }
}

export const _setValue = ({values, name, value}) => {
  return {
    ...values,
    [name]: value
  }
}

export const _setTouched = ({ touched, name, touch }) => {
  return { ...touched, [name]: touch }
}

export const _touchAllValues = ({ values }) => {
  return Object.keys(values).reduce((acc, name) => ({...acc, [name]: true}), {})
}

export const _isValid = ({ errors }) => {
  return Object.keys(errors).every(name => errors[name] === '')
}

// DOM interface logic

export const _onSubmit = ({ validate, values, onError, onSuccess }) => (ev) => {
  const isValid = validate(values)
  if (!isValid) {
    console.log('1212')
    onError(ev)
  } else {
    console.log('45645')
    onSuccess(ev)
  }
}

export const _inputProps = ({ values, setValue, touchValue }) => (name) => {
  return {
    name,
    value: values[name],
    onChange: ({target: { value }}) =>
      setValue(name, value),
    onBlur: () => touchValue(name)
  }
}

// Implementation useFormeless hook

export const useFormless = (
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
