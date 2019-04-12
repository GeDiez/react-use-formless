import React from 'react';

import { Code as Highlight } from "../../shared/components";

export function GetErrorSection(props) {
  return (
    <>
      <h2 className="title is-2">getError(name: string):string</h2>
      <p>Get the error for the field name given in the current form/party</p>
      <Highlight language="js">
{`
const { getError } = useFormless(options)
// sign of function
getError(name:string): string
`}
      </Highlight>
      <strong>Params</strong>
      <ul>
        <li><strong>name:string</strong> name of field</li>
      </ul>
      <strong>return</strong>
      <ul>
        <li><strong>error:string</strong> a string with the error of field or empty string</li>
      </ul>
    </>
  );
}
