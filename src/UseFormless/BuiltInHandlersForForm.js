import { pipe } from '../helpers/functions'

// @function builtInHandlersForForm
// connectting logic between domain with global state and behavior of a formulary of our app
const builtInHandlersForForm = (Dformless, IStore, path, { initialValues = {}, validate = () => '', onSuccess = () => {}, onError = () => {} }) => {
  const getValue = name => Dformless.getValue(IStore.values, { name, path })

  const setValue = pipe(
    (name, _) => IStore.dispatchTouched(Dformless.touchValue(IStore.touched, { name, path })),
    (name, value) => IStore.dispatchValues(Dformless.setValue(IStore.values, { name, value, path })))

  const setError = (name, error) =>
    IStore.dispatchErrors(
      Dformless.setError(
        IStore.errors,
        {
          name,
          error,
          path
        }))

  const touchValue = name =>
    IStore.dispatchTouched(Dformless.touchValue(IStore.touched, { name, path }))

  const validateValue = name =>
    IStore.dispatchErrors(Dformless.validateValue(
      IStore.errors,
      {
        name,
        value: Dformless.getValue(IStore.values, { name, path }),
        path,
        validate: (name, value) =>
          validate(name, value, {values: IStore.values, touched: IStore.touched})
      }))

  const reset = pipe(
    () => IStore.dispatchValues(initialValues),
    () => IStore.dispatchErrors({}))

  const setValues = (newValues) =>
    IStore.dispatchValues(newValues)

  const isValid = Dformless.isValid(IStore.errors)

  return ({
    getValue,
    setValue,
    setValues,
    touchValue,
    setError,
    validateValue,
    reset,
    isValid
  })
}

export default builtInHandlersForForm
