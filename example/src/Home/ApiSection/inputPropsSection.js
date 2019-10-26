import React from 'react';

import { Code as Highlight } from "../../shared/components";

export function InputPropsSection(props) {
  return (
    <>
      <h2 className="title is-2">inputProps()</h2>
      <p>an object to handle props for input tags</p>
      <Highlight language="js">
{`
const { input props } = useFormless(options)
// or
const { input props } = party(options)

// sign of function
inputProps(name, initValue): object

return <form ...>
    ...
    <input type="text" {...inputProps(name, initialValue) }/>
</form>
`}
      </Highlight>
      <strong>Return an object as follow</strong>
      <ul>
        <li><strong>value: get the current value</strong></li>
        <li><strong>name: set value of input with the name passed to</strong></li>
        <li><strong>onChange: control when change event is fired</strong></li>
        <li><strong>onBlur: control when blur event is fired</strong></li>
      </ul>
    </>
  );
}
