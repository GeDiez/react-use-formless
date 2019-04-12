import React from 'react';

import { Code as Highlight } from "../../shared/components";

export function GetValueSection(props) {
  return (
    <>
      <h2 className="title is-2">getValue(fieldName:string):string</h2>
      <p>Get the value for the name given in the current form/party</p>
      <Highlight language="js">
{`
const { getValue } = useFormless(options)
// sign of function
getValue(fieldName:string): string
`}
      </Highlight>
      <strong>Params</strong>
      <ul>
        <li><strong>fieldName:string</strong> name of field</li>
      </ul>
      <strong>return</strong>
      <ul>
        <li><strong>value:string</strong> current value of field</li>
      </ul>
    </>
  );
}
