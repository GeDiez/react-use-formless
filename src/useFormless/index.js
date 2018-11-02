import { useState } from "react";
import { Object } from "core-js";

export const useForm = ({ initialValues }, { validate = () => true }) => {
  const [values, setValues] = useState(initialValues || {});
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isValid, setValid] = useState(false);

  const setError = (name) => {
    if (typeof(validate) !== 'function') {
      throw Error('validate option should be a function');
    }
    const error = validate({ values })[name];

    setErrors({ ...errors, [name]: error });
  }

  const setValue = (name, value) => {
    setValues({
      ...values,
      [name]: value,
    });
  }

  const touchValue = (name) => {
    setError(name);
    setTouched({ ...touched, [name]: true });
  }

  const reset = () => {
    setTouched({});
    setErrors({});
    setValues(initialValues);
    setValid(false);
  }

  const setAllValues = (values) => {
    setValuesAsTouched();
    setValues(values);
    validateValues(values);
  }

  const validateValues = (values) => {
    const fullErrors = validate({ values });
    const isValid = Object.keys(fullErrors).every(name => fullErrors[name] === '');

    setErrors(fullErrors);
    setValuesAsTouched();
    setValid(isValid);

    return isValid;
  }

  //DOM props
  const submitProps = ({onSuccess, onError}) => ({
    onSubmit: (ev) => {
      const isValid = validateValues(values);
      if (!isValid) {
        ev.preventDefault();
        onError();
      } else {
        onSuccess();
      }

    }
  });

  const inputFieldProps = (name) => ({
    name,
    value: values[name],
    onInput: ({target: { value }}) =>
      setValue(name, value),
    onBlur: () => touchValue(name),
  });

  //Privated Functions

  const setValuesAsTouched = () => {
    setTouched(Object.keys(values).reduce((acc, name) => ({...acc, [name]: true}), {}));
  }

  return {
    // Variables
    values,
    touched,
    errors,
    reset,
    isValid,
    // Actions
    setAllValues,
    setValue,
    touchValue,
    validateValues,
    // DOM props
    submitProps,
    inputFieldProps,
  }
}