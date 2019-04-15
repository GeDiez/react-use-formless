import { isObject } from '../helpers/Object'
import builtInHandlersForForm from './BuiltInHandlersForForm'
import builtInInputProps from './BuiltInInputProps'

// create party for create values nested and you can use the same API to handle all inputs in your forms
// @constructs createParty
// @param { DomainFormless } Dformless - domain for a form
// @param { InterfaceStore } IStore - Interface Store (stores and setState functions) for handle updates
// @param { Object } options - options given for the user

const createParty = (Dformless, IStore, options) => {
  const { values, errors, touched } = IStore

  return (name, path = [], taskerValidations) => {
    const newPath = name ? [...path, name] : []

    const createValidator = (values, validate) => (_name, value) => {
      if (isObject(validate)) {
        if (typeof validate[_name] === 'function') return validate[_name](value, { values: Dformless.getValuesParty(values, { path: newPath }) })
        if (typeof validate[_name] === 'string') return validate[_name]
      }
      if (typeof (validate) === 'function') return validate(_name, value, { values: Dformless.getValuesParty(values, { path: newPath }) }) || ''
      return ''
    }

    // add validator function to tasker
    const validatePartyTask = errors =>
      Dformless
        .validateParty(
          IStore.values,
          errors,
          {
            path: newPath,
            validate: createValidator(IStore.values, options.validate)
          })
    taskerValidations.add(validatePartyTask)

    return ({
      values,
      touched,
      errors,
      ...builtInHandlersForForm(Dformless, IStore, newPath, {...options, validate: createValidator(IStore.values, options.validate)}, taskerValidations),
      ...builtInInputProps(Dformless, IStore, newPath, {...options, validate: createValidator(IStore.values, options.validate)}, taskerValidations),
      party: (name, partyOptions = { validate: () => '' }) =>
        createParty(
          Dformless,
          IStore,
          { ...partyOptions, initialValues: options.initialValues }
        )(name, newPath, taskerValidations)
    })
  }
}

export default createParty
