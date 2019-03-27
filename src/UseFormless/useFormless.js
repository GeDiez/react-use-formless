import { useState } from 'react'
import createParty from './createParty'
import { formless } from './formless'
import { createTasker } from '../helpers/tasker'

export default (options) => {
  const [values, dispatchValues] = useState(options.initialValues || {})
  const [touched, dispatchTouched] = useState({})
  const [errors, dispatchErrors] = useState({})

  const StoreAPI = {
    values,
    touched,
    errors,
    dispatchValues,
    dispatchTouched,
    dispatchErrors
  }

  const taskerValidations = createTasker()

  return createParty(formless, StoreAPI, options)(null, [], taskerValidations)
}
