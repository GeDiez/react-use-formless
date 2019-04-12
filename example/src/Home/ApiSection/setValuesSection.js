import React from 'react';

import { Code as Highlight } from "../../shared/components";

export function SetValuesSection(props) {
  return (
    <>
      <h2 className="title is-2">setValues</h2>
      <p>Set all values for the whole form</p>
      <Highlight language="js">
{`
const { setValues } = useFormless(options)
// sign of function
setValues(values: object): void
`}
      </Highlight>
      <strong>Params</strong>
      <ul>
        <li><strong>values: object</strong> an object with new values, if an value of any field not was find then it will be set to empty string by default</li>
      </ul>
    </>
  );
}
