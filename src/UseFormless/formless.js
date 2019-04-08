import { setObjectNested, iterateObject, objectValuesReduce, getRecursive, isObject, filter } from '../helpers/Object'

const getValue = (values, { path, name } = {}) =>
  path.reduce((nestedObject, currentPath) =>
    nestedObject[currentPath] || {}, values
  )[name]

const setValue = setObjectNested

const getValuesParty = (values, { path }) =>
  filter(getRecursive(values, { path }), (name, value) => !isObject(value))

const setError = (errors, { name, error, path }) =>
  setObjectNested(errors, { name, value: error, path })

const touchAllFields = values =>
  iterateObject(values, ([key, _]) => ({ [key]: true }))

const touchField = (touched, { path = [], name }) =>
  setObjectNested(touched, { path, name, value: true })

const untouchField = (touched, { path = [], name }) =>
  setObjectNested(touched, { path, name, value: false })

const validateField = (errors, { name, value, validate, path }) => {
  const error = () => {
    if (isObject(validate)) {
      if (typeof validate[name] === 'function') return validate[name](value)
      if (typeof validate[name] === 'string') return validate[name]
    }
    if (typeof (validate) === 'function') return validate(name, value) || ''
    return ''
  }
  return setObjectNested(errors, { path, name, value: error() })
}

// create a function that validate the form values at this level
const validateParty = (values, errors, { path, validate }) => {
  // get only the values for this party
  const partyValues = getRecursive(values, { path })

  return Object.entries(partyValues).reduce((errors, [name, value]) => {
    if (isObject(value)) { return errors }
    return validateField(errors, { name, value, validate: validate, path })
  }, errors)
}

const isValid = errors =>
  objectValuesReduce(errors, (isValid, value) => {
    return isValid && value === ''
  }, true)

const isValidParty = (errors, { path }) => {
  const partyErrors = getRecursive(errors, { path })
  if (!partyErrors) return false

  return Object.values(partyErrors).reduce((isValid, value) => {
    if (isObject(value)) return isValid
    if (value !== '') return false
    return isValid
  }, true)
}

export const formless = {
  getValue,
  setValue,
  setError,
  isValid,
  touchAllFields,
  touchField,
  untouchField,
  validateField,
  getValuesParty,
  validateParty,
  isValidParty
}
