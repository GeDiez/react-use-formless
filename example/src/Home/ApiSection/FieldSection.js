import React from 'react';

import { Code as Highlight } from "../../shared/components";

export function FieldSection(props) {
  return (
    <>
      <h2 className="title is-2">Field(fieldName, initialValue): object</h2>
      <p>This interface is a set o function to handle fields easily, it more readeable keep our functions by its scope</p>
      <Highlight language="js">
{`
const { field } = useFormless(options)
// or
// const { field } = party.create(options)

//{
//   name,
//   props: () => inputProps(name, initialValue),
//   checkboxProps: () => inputCheckboxProps(name, initialValue),
//   isValid: () => handlers.isValidField(name),
//   getValue: () => handlers.getValue(name),
//   setValue: value => handlers.setValue(name, value),
//   getError: () => handlers.getError(name),
//   setError: error => handlers.setError(name, error),
//   touch: () => handlers.touchField(name),
//   validate: () => handlers.validateField(name)
// },
`}
      </Highlight>
      <strong>Params</strong>
      <ul>
        <li><strong>fieldName:string</strong> name of your field</li>
        <li><strong>initialValue:string</strong> initial value for you field</li>
      </ul>
      <strong>return: an object with functions to handle the data of one field</strong>
      <ul>
        <li><strong>props()</strong> is the same that inputPropsField function</li>
        <li><strong>checkboxProps()</strong> is the same that inputCheckboxProps function</li>
        <li><strong>isValid()</strong> verify if this field is valid</li>
        <li><strong>getValue()</strong> gets value of field</li>
        <li><strong>setValue()</strong> set value of field</li>
        <li><strong>getError()</strong> gets the error for the field</li>
        <li><strong>setError()</strong> just set the error for the field, it didn't trigger anything else</li>
        <li><strong>touch()</strong> marks the field as touch</li>
        <li><strong>validate()</strong> trigger validations for th field then show it</li>
      </ul>
    </>
  );
}
