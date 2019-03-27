import { pipe } from '../helpers/functions'
import builtInHandlersForForm from './BuiltInHandlersForForm'

// @function builtInInputProps to create properties for input tags in react
const builtInInputProps = (Dformless, IStore, path, options, taskerValidations) => {
  const handlers = builtInHandlersForForm(Dformless, IStore, path, options)

  const initializeInputProps = pipe(
    (name, initialValue) => IStore.dispatchValues(Dformless.setValue(IStore.values, { name, value: initialValue, path })),
    (name, _) => IStore.dispatchTouched(Dformless.untouchValue(IStore.touched, { name, path })),
    (name, _) => handlers.setError(name, '')
  )

  const inputProps = (name, initialValue = '') => {
    if (handlers.getValue(name) === undefined) {
      initializeInputProps(name, initialValue)
    }

    return {
      name,
      value: handlers.getValue(name),
      onChange: ({ target: { value } }) => handlers.setValue(name, value),
      onBlur: () => {
        handlers.touchValue(name)
        handlers.validateValue(name)
      }
    }
  }

  const inputCheckboxProps = (name, initialValue = false) => {
    if (handlers.getValue(name) === undefined) {
      initializeInputProps(name, !!initialValue)
    }

    return {
      name,
      checked: handlers.getValue(name),
      onChange: () => handlers.setValue(name, !handlers.getValue(name)),
      onBlur: () => {
        handlers.touchValue(name)
        handlers.validateValue(name)
      },
      type: 'checkbox'
    }
  }

  const onSubmit = (syntathicEvent) => {
    const errors = taskerValidations.pipe(IStore.errors)

    if (Dformless.isValid(errors)) {
      options.onSuccess(syntathicEvent)
      return
    }
    IStore.dispatchErrors(errors)
    options.onError(syntathicEvent)
  }

  return {
    onSubmit,
    inputProps,
    inputCheckboxProps
  }
}

export default builtInInputProps
