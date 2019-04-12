import React from 'react';

import { Code as Highlight } from "../../shared/components";

export function SetValueSection(props) {
  return (
    <>
      <h2 className="title is-2">setValue(fieldName:string, value:string)</h2>
      <p>Set the value for the name given in the current form/party</p>
      <Highlight language="js">
{`
const { setValue } = useFormless(options)
// sign of function
setValue(name:string, value: string): void
`}
      </Highlight>
      <strong>Params</strong>
      <ul>
        <li><strong>name:string</strong> name of field</li>
        <li><strong>value: {`{string|boolean|number}`}</strong> new value for the field</li>
      </ul>
    </>
  );
}
