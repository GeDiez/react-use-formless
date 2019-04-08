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

    // add validator function to tasker
    taskerValidations.add(errors => Dformless.validateParty(IStore.values, errors, { path: newPath, validate: options.validate }))

    return ({
      values,
      touched,
      errors,
      ...builtInHandlersForForm(Dformless, IStore, newPath, options, taskerValidations),
      ...builtInInputProps(Dformless, IStore, newPath, options, taskerValidations),
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
