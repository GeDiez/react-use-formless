import { pipe } from '../helpers/functions'
import builtInHandlersForForm from './BuiltInHandlersForForm'

// @function builtInInputProps to create properties for input tags in react
const builtInInputProps = (Dformless, IStore, path, options, taskerValidations) => {
  const handlers = builtInHandlersForForm(Dformless, IStore, path, options)

  const initializeInputProps = pipe(
    (name, initialValue) => IStore.dispatchValues(Dformless.setValue(IStore.values, { name, value: initialValue, path })),
    (name, _) => IStore.dispatchTouched(Dformless.untouchField(IStore.touched, { name, path })),
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
        handlers.touchField(name)
        handlers.validateField(name)
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
        handlers.touchField(name)
        handlers.validateField(name)
      },
      type: 'checkbox'
    }
  }

  const onSubmit = (syntathicEvent) => {
    const errors = taskerValidations.pipe(IStore.errors)

    if (Dformless.isValid(errors)) {
      options.onSuccess(syntathicEvent, { values: IStore.values })
      return
    }
    handlers.touchAllFields()
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
