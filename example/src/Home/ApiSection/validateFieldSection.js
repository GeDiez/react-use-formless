import React from 'react';

import { Code as Highlight } from "../../shared/components";

export function ValidateFieldSection(props) {
  return (
    <>
      <h2 className="title is-2">validateField</h2>
      <p>It triggers the validation for the field given then update the error and it set as touched</p>
      <Highlight language="js">
{`
const { validateField } = useFormless(options)
// sign of function
validateField(name: string, error:string): void
`}
      </Highlight>
      <strong>Params</strong>
      <ul>
        <li><strong>name:string</strong> name of field</li>
        <li><strong>error:string</strong> error to be displayed</li>
      </ul>
    </>
  );
}
