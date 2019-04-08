export const pipe = (...fns) => (...params) =>
  fns.forEach(fn => fn(...params))
