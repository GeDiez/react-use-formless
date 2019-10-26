import React from 'react';

import { Code as Highlight } from "../../shared/components";

export function CheckboxPropsSection(props) {
  return (
    <>
      <h2 className="title is-2">checkboxProps(name, initialValue)</h2>
      <p>an object to handle props for checkbox tags</p>
      <Highlight language="js">
{`
const { checkboxProps } = useFormless(options)
// or
const { checkboxProps } = party(options)

return <form ...>
    ...
    <input {...checkboxProps(name, initialValue) }/>
</form>
`}
      </Highlight>
      <strong>Return an object as follow</strong>
      <ul>
        <li><strong>value: get the current value</strong></li>
        <li><strong>name: set value of input with the name passed to</strong></li>
        <li><strong>onChange: control when change event is fired</strong></li>
        <li><strong>onBlur: control when blur event is fired</strong></li>
        <li><strong>type: set type to checkbox</strong></li>
        <li><strong>onCheked: control the checkbox's state when is checked</strong></li>
      </ul>
    </>
  );
}
