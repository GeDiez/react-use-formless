import { setObjectNested, iterateObject, getRecursive, isObject, filter, reduce } from '../helpers/Object'

const getValue = (values, { path, name } = {}) =>
  path.reduce((nestedObject, currentPath) =>
    nestedObject[currentPath] || {}, values
  )[name]

const setValue = setObjectNested

const setError = (errors, { name, error, path }) =>
  setObjectNested(errors, { name, value: error, path })

const getValuesParty = (values, { path }) =>
  filter(getRecursive(values, { path }), (name, value) => !isObject(value))

const touchAllFields = values =>
  iterateObject(values, ([key, _]) => ({ [key]: true }))

const touchField = (touched, { path = [], name }) =>
  setObjectNested(touched, { path, name, value: true })

const untouchField = (touched, { path = [], name }) =>
  setObjectNested(touched, { path, name, value: false })

const validateField = (errors, { name, value, validate, path }) =>
  setObjectNested(errors, { path, name, value: validate(name, value) })

const touchAllFieldsParty = (touched, { path }) => {
  const partyTouched = getRecursive(touched, { path })

  return reduce(partyTouched, (touched, name, isTouch) => {
    if (isObject(isTouch)) { return touched }
    return touchField(touched, { name, path })
  }, touched)
}

// create a function that validate the form values at this level
const validateParty = (values, errors, { path, validate }) => {
  // get only the values for this party
  const partyValues = getRecursive(values, { path })

  function setError(errors, name, value) {
    if (isObject(value)) return {...errors, [name]: reduce(value, setError, errors[name])}
    return validateField(errors, { name, value, validate, path })
  }

  return reduce(partyValues, setError, errors)
}

const isValid = (errors) =>
  reduce(errors, function isValidFn(isValid, name, value) {
    if (isObject(value)) return reduce(value, isValidFn, isValid)
    return value === '' && isValid
  }, true)

const isValidParty = (errors, { path }) => {
  const partyErrors = getRecursive(errors, { path })
  if (!partyErrors) return false

  return isValid(partyErrors)
}

export const formless = {
  getValue,
  setValue,
  setError,
  isValid,
  touchAllFields,
  touchAllFieldsParty,
  touchField,
  untouchField,
  validateField,
  getValuesParty,
  validateParty,
  isValidParty
}
