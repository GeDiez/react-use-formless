import React from 'react';

import { Code as Highlight } from "../../shared/components";

export function SetErrorSection(props) {
  return (
    <>
      <h2 className="title is-2">setError(fieldName: string, error:string)</h2>
      <p>Change the error for a specific field</p>
      <Highlight language="js">
{`
const { setError } = useFormless(options)
// sign of function
setError(name:string): void
`}
      </Highlight>
      <strong>Params</strong>
      <ul>
        <li><strong>name:string</strong> name of field</li>
      </ul>
    </>
  );
}
