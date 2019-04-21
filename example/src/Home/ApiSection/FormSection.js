import React from 'react';

import { Code as Highlight } from "../../shared/components";

export function FormSection(props) {
  return (
    <>
      <h2 className="title is-2">Form object</h2>
      <p>A set of functions to handle the whole form</p>
      <Highlight language="js">
{`
const { form } = useFormless(options)

// {
//   onSubmit,
//   reset,
//   isValid,
//   validate,
// }
`}
      </Highlight>
      <strong>It is an Object</strong>
      <ul>
        <li><strong>onSubmit()</strong> Handle the submit for the form</li>
        <li><strong>reset()</strong> reset the full form to initial state</li>
        <li><strong>isValid()</strong> return a flag to know the current state of form</li>
        <li><strong>validate()</strong> will validate form then show errors</li>
      </ul>
    </>
  );
}
