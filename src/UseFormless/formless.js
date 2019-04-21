import { set, iterateObject, get, getRecursive, setRecursive, isObject, filter, reduce } from '../helpers/Object'

const getValue = get

const getError = get

const setValue = set

const setValues = set

const setError = (errors, { name, error, path }) =>
  set(errors, { name, value: error, path })

const isTouched = get

const isValid = (errors) =>
  reduce(errors, function isValidFn(isValid, name, value) {
    if (isObject(value)) return reduce(value, isValidFn, isValid)
    return value === '' && isValid
  }, true)

// Fields

const touchAllFields = values =>
  iterateObject(values, ([key, _]) => ({ [key]: true }))

const touchField = (touched, { path = [], name }) =>
  set(touched, { path, name, value: true })

const untouchField = (touched, { path = [], name }) =>
  set(touched, { path, name, value: false })

const touchAllFieldsParty = (touched, { path }) => {
  const partyTouched = getRecursive(touched, { path })

  return reduce(partyTouched, (touched, name, isTouch) => {
    if (isObject(isTouch)) { return touched }
    return touchField(touched, { name, path })
  }, touched)
}

const validateField = (errors, { name, value, validate, path }) =>
  set(errors, { path, name, value: validate(name, value) })

// party

const getValuesParty = (values, { path }) =>
  filter(getRecursive(values, { path }) || {}, (name, value) => !isObject(value))

const setValuesParty = (values, { path, partyValues }) =>
  setRecursive(values, { path, value: partyValues })

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

const isValidParty = (errors, { path }) => {
  const partyErrors = getRecursive(errors, { path })
  if (!partyErrors) return false

  return isValid(partyErrors)
}

export const formless = {
  getValue,
  setValue,
  setValues,
  getError,
  setError,
  isTouched,
  isValid,
  touchAllFields,
  touchAllFieldsParty,
  touchField,
  untouchField,
  validateField,
  getValuesParty,
  setValuesParty,
  validateParty,
  isValidParty
}
