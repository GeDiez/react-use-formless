import { isObject } from '../helpers/Object'
import { pipe } from '../helpers/functions'

// @function builtInHandlersForForm
// connectting logic between domain with global state and behavior of a formulary of our app
const builtInHandlersForForm = (Dformless, IStore, path, options, taskerValidations) => {
  const validateWithState = (values, validate) => (_name, value) => {
    if (isObject(validate)) {
      if (typeof validate[_name] === 'function') return validate[_name](value, { values: Dformless.getValuesParty(values, { path }) })
      if (typeof validate[_name] === 'string') return validate[_name]
    }
    if (typeof (validate) === 'function') return validate(_name, value, { values: Dformless.getValuesParty(values, { path }) }) || ''
    return ''
  }

  const validator = validateWithState(IStore.values, options.validate)

  // add validator function to tasker
  const validatePartyTask = errors =>
    Dformless
      .validateParty(IStore.values, errors, { path, validate: validator })

  taskerValidations.add(validatePartyTask)

  // Interfaces between Reactive state and form behavior
  const getValue = name => Dformless.getValue(IStore.values, { name, path })

  const getValues = () => IStore.values

  const setValue = (name, value) => IStore.dispatchValues(values => Dformless.setValue(values, { name, value, path }))

  const setValues = newValues => IStore.dispatchValues(newValues)

  const getError = name => Dformless.getError(IStore.errors, { path, name })

  const getErrors = () => IStore.errors

  const setError = (name, error) => IStore.dispatchErrors(errors => Dformless.setError(errors, { name, error, path }))

  const setErrors = errors => IStore.dispatchErrors(errors)

  const validateValue = name => IStore.dispatchErrors(errors => Dformless.validateField(
    errors,
    {
      name,
      value: Dformless.getValue(IStore.values, { name, path }),
      path,
      validate: validator
    }))

  // Fields

  const initField = pipe(
    (name, initialValue) => {
      IStore.dispatchErrors(errors => Dformless.validateField(
        errors,
        { name, value: initialValue, path, validate: validator }
      ))
    },
    (name, initialValue) => setValue(name, initialValue),
    (name, _) => unTouchField(name)
  )

  const setField = pipe(
    (name, _) => touchField(name),
    (name, value) => setValue(name, value))

  const unTouchField = name =>
    IStore.dispatchTouched(touched => Dformless.untouchField(touched, { name, path }))

  const touchField = name =>
    IStore.dispatchTouched(touched => Dformless.touchField(touched, { name, path }))

  const touchAllFields = () =>
    IStore.dispatchTouched(Dformless.touchAllFields(IStore.values))

  const touchAllFieldsParty = () =>
    IStore.dispatchTouched(touched => Dformless.touchAllFieldsParty(touched, { path }))

  const reset = pipe(
    () => setValues(options.initialValues || {}),
    () => setErrors({}))

  const resetParty = () =>
    IStore.dispatchValues(values => Dformless.setValuesParty(values, { path, partyValues: {} }))

  const validateField = pipe(
    name => touchField(name),
    name => validateValue(name)
  )

  const dispatchPartyErrors = () =>
    IStore.dispatchErrors(Dformless
      .validateParty(
        IStore.values,
        IStore.errors,
        {
          path,
          validate: validator
        }))

  const validateParty = pipe(
    () => dispatchPartyErrors(),
    () => touchAllFieldsParty())

  const validateForm = () => {
    const errors = taskerValidations.pipe(IStore.errors)

    if (Dformless.isValid(errors)) return
    touchAllFields()
    setErrors(errors)
  }

  const isValidField = (name) =>
    Dformless.isTouched(IStore.touched, { path, name }) && getError(name) !== ''

  const isValidParty = () => Dformless.isValidParty(IStore.errors, { path })

  const isValid = () => Dformless.isValid(IStore.errors)

  return ({
    getValue,
    getValues,
    setValue,
    setValues,
    getError,
    getErrors,
    setError,
    setErrors,
    isValidField,
    initField,
    setField,
    touchField,
    unTouchField,
    touchAllFields,
    validateField,
    validateForm,
    validateParty,
    reset,
    resetParty,
    isValid,
    isValidParty
  })
}

export default builtInHandlersForForm
