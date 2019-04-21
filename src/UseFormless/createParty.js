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
    const handlers = builtInHandlersForForm(Dformless, IStore, newPath, options, taskerValidations)
    const reactFormProps = builtInInputProps(handlers, options, taskerValidations)

    function create(name, partyOptions = { validate: () => '' }) {
      return createParty(Dformless, IStore, { ...partyOptions, initialValues: options.initialValues })(name, newPath, taskerValidations)
    }

    const party = {
      create,
      isValid: handlers.isValidParty,
      validate: handlers.isValidParty,
      reset: handlers.resetParty
    }

    return ({
      values,
      touched,
      errors,
      ...handlers,
      ...reactFormProps,
      party
      // party: (name, partyOptions = { validate: () => '' }) =>
      //   createParty(Dformless, IStore, { ...partyOptions, initialValues: options.initialValues })(name, newPath, taskerValidations)
    })
  }
}

export default createParty
