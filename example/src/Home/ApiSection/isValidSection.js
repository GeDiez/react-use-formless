import React from 'react';

import { Code as Highlight } from "../../shared/components";

export function IsValidSection(props) {
  return (
    <>
      <h2 className="title is-2">isValid()</h2>
      <p>Verify if there is errors on the whole form and return true or false</p>
      <Highlight language="js">
{`
const { isValid } = useFormless(options)
// sign of function
isValid(): boolean
`}
      </Highlight>
      <strong>return</strong>
      <ul>
        <li><strong>isValid:boolean</strong></li>
      </ul>
    </>
  );
}
