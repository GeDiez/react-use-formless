// @function builtInInputProps to create properties for input tags in react
const builtInInputProps = (handlers, options, taskerValidations) => {
  const inputProps = (name, initialValue = '') => {
    if (handlers.getValue(name) === undefined) {
      handlers.initField(name, initialValue)
    }

    return {
      name,
      value: handlers.getValue(name),
      onChange: ({ target: { value } }) => handlers.setValue(name, value),
      onBlur: () => handlers.validateField(name)
    }
  }

  const inputCheckboxProps = (name, initialValue = false) => {
    if (handlers.getValue(name) === undefined) {
      handlers.initField(name, !!initialValue)
    }

    return {
      name,
      checked: handlers.getValue(name),
      onChange: () => handlers.setValue(name, !handlers.getValue(name)),
      onBlur: () => handlers.validateField(name),
      type: 'checkbox'
    }
  }

  const onSubmit = (syntathicEvent) => {
    const errors = taskerValidations.pipe(handlers.getErrors())

    if (handlers.isValid(errors)) {
      options.onSuccess(syntathicEvent, { values: handlers.getValues() })
      return
    }

    handlers.touchAllFields()
    handlers.setErrors(errors)
    options.onError(syntathicEvent)
  }

  return {
    field: (name, initialValue) => ({
      name,
      props: () => inputProps(name, initialValue),
      checkboxProps: () => inputCheckboxProps(name, initialValue),
      isValid: () => handlers.isValidField(name),
      getValue: () => handlers.getValue(name),
      setValue: value => handlers.setValue(name, value),
      getError: () => handlers.getError(name),
      setError: error => handlers.setError(name, error),
      touch: () => handlers.touchField(name),
      validate: () => handlers.validateField(name)
    }),
    form: ({
      reset: handlers.reset,
      isValid: handlers.isValid,
      validate: handlers.validateForm,
      onSubmit: onSubmit
    }),
    onSubmit,
    inputProps,
    inputCheckboxProps
  }
}

export default builtInInputProps
