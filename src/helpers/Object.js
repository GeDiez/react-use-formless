export const isObject = (obj) =>
  !!obj && typeof obj === 'object' && !Array.isArray(obj)

export const iterateObject = (target, updateValue) =>
  Object.entries(target).reduce((newObject, [key, value]) =>
    isObject(value)
      ? ({ ...newObject, [key]: iterateObject(value, updateValue) })
      : ({ ...newObject, ...updateValue([key, value]) })
  , {})

export const get = (target, { path, name } = {}) =>
  path.reduce(
    (nestedObject, currentPath) =>
      nestedObject[currentPath] || {},
    target
  )[name]

export const set = (target, { path = [], path: [firstPath, ...nextPaths], name, value }) =>
  path.length
    ? ({
      ...target,
      [firstPath]: set(target[firstPath] || {}, { path: nextPaths, name, value })
    })
    : ({
      ...target,
      [name]: value
    })

export const getRecursive = (object, { path = [] }) =>
  path.reduce(
    (reducedObject, currentPath) =>
      reducedObject[currentPath],
    object)

export const setRecursive = (object, { path = [], value }) => {
  const [firstRoute, ...rest] = path
  if (rest.length) {
    return {...object, [firstRoute]: setRecursive(object[firstRoute], { path: rest, value })}
  }

  return { ...object, [firstRoute]: value }
}

export const filter = (object, callback) =>
  Object.entries(object).reduce((filteredObject, [key, value]) =>
    callback(key, value)
      ? {...filteredObject, [key]: value}
      : filteredObject
  , {})

export const reduce = (object, callback, initialValue) =>
  Object.entries(object).reduce((acc, [key, value]) =>
    callback(acc, key, value)
  , initialValue)
