import { setObjectNested, iterateObject, objectValuesReduce, getRecursive, isObject } from '../helpers/Object'

const getValue = (values, { path, name } = {}) =>
  path.reduce((nestedObject, currentPath) =>
    nestedObject[currentPath] || {}, values
  )[name]

const setValue = setObjectNested

const setError = (errors, { name, error, path }) =>
  setObjectNested(errors, { name, value: error, path })

const touchAllValues = values =>
  iterateObject(values, ([key, _]) => ({ [key]: true }))

const touchValue = (touched, { path = [], name }) =>
  setObjectNested(touched, { path, name, value: true })

const isAllValuesTouched = (touched) =>
  objectValuesReduce(touched, (acc, value) => acc || value, false)

const untouchValue = (touched, { path = [], name }) =>
  setObjectNested(touched, { path, name, value: false })

const validateValue = (errors, { name, value, validate, path }) =>
  setObjectNested(errors, { path, name, value: validate(name, value) || '' })

// create a function that validate the form values at this level
const validateParty = (values, errors, { path, validate }) => {
  // get only tha values por this party
  const partyValues = getRecursive(values, { path })

  return Object.entries(partyValues).reduce((errors, [name, value]) => {
    if (isObject(value)) { return errors }
    return validateValue(errors, { name, value, validate: validate, path })
  }, errors)
}

const isValid = errors =>
  objectValuesReduce(errors, (isValid, value) => {
    return isValid && value === ''
  }, true)

export const formless = {
  getValue,
  setValue,
  setError,
  isValid,
  touchAllValues,
  touchValue,
  untouchValue,
  validateValue,
  validateParty,
  isAllValuesTouched
}
