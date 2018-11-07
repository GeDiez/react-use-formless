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
    onError(ev)
  } else {
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