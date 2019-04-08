import { pipe } from '../helpers/functions'

// @function builtInHandlersForForm
// connectting logic between domain with global state and behavior of a formulary of our app
const builtInHandlersForForm = (Dformless, IStore, path, { initialValues = {}, validate = () => '' }, taskerValidations) => {
  const getValue = name => Dformless.getValue(IStore.values, { name, path })

  const setValue = pipe(
    (name, _) => IStore.dispatchTouched(Dformless.touchField(IStore.touched, { name, path })),
    (name, value) => IStore.dispatchValues(Dformless.setValue(IStore.values, { name, value, path })))

  const setValues = (newValues) =>
    IStore.dispatchValues(newValues)

  const setError = (name, error) =>
    IStore.dispatchErrors(
      Dformless.setError(
        IStore.errors,
        {
          name,
          error,
          path
        }))

  const getError = (name) =>
    Dformless.getValue(IStore.errors, { path, name })

  const touchField = name =>
    IStore.dispatchTouched(Dformless.touchField(IStore.touched, { name, path }))

  const touchAllFields = () =>
    IStore.dispatchTouched(Dformless.touchAllFields(IStore.values))

  const reset = pipe(
    () => IStore.dispatchValues(initialValues),
    () => IStore.dispatchErrors({}))

  const shouldShowError = (name) =>
    Dformless.getValue(IStore.touched, { path, name }) &&
    Dformless.getValue(IStore.errors, { path, name }) !== ''

  const validateField = name =>
    IStore.dispatchErrors(Dformless.validateField(
      IStore.errors,
      {
        name,
        value: Dformless.getValue(IStore.values, { name, path }),
        path,
        validate: (name, value) =>
          validate(name, value, { values: Dformless.getValuesParty(IStore.values, { path }) })
      }))

  const validateForm = () => {
    const errors = taskerValidations.pipe(IStore.errors)

    if (Dformless.isValid(errors)) return
    touchAllFields()
    IStore.dispatchErrors(errors)
  }

  const isValid = () => Dformless.isValid(IStore.errors)

  const isValidParty = () => Dformless.isValidParty(IStore.errors, { path })

  return ({
    getValue,
    setValue,
    setValues,
    getError,
    setError,
    shouldShowError,
    touchField,
    touchAllFields,
    validateField,
    validateForm,
    reset,
    isValid,
    isValidParty
  })
}

export default builtInHandlersForForm
