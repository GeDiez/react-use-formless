export const isObject = (obj) =>
  !!obj && typeof obj === 'object' && !Array.isArray(obj)

export const iterateObject = (target, updateValue) =>
  Object.entries(target).reduce((newObject, [key, value]) =>
    isObject(value)
      ? ({ ...newObject, [key]: iterateObject(value, updateValue) })
      : ({ ...newObject, ...updateValue([key, value]) })
  , {})

export const setObjectNested = (target, { path = [], path: [firstPath, ...nextPaths], name, value }) =>
  path.length
    ? ({
      ...target,
      [firstPath]: setObjectNested(target[firstPath] || {}, { path: nextPaths, name, value })
    })
    : ({
      ...target,
      [name]: value
    })

export const objectValuesReduce = (values, cb, initialValue) =>
  Object.values(values).reduce(
    (accumalated, value) => {
      if (isObject(value)) {
        return objectValuesReduce(value, cb, accumalated)
      }
      return cb(accumalated, value)
    },
    initialValue)

export const getRecursive = (object, { path = [] }) =>
  path.reduce(
    (reducedObject, currentPath) =>
      reducedObject[currentPath],
    object)

export const filter = (object, callback) =>
  Object.entries(object).reduce((filteredObject, [key, value]) =>
    callback(key, value)
      ? {...filteredObject, [key]: value}
      : filteredObject
  , {})
