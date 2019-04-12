import React from 'react';

import { Code as Highlight } from "../../shared/components";

export function IsValidPartySection(props) {
  return (
    <>
      <h2 className="title is-2">isValidParty()</h2>
      <p>Verify if there is errors at this party form and return true or false</p>
      <Highlight language="js">
{`
const { isValidParty } = useFormless(options)
// sign of function
isValidParty(): boolean
`}
      </Highlight>
      <strong>return</strong>
      <ul>
        <li><strong>isValid:boolean</strong></li>
      </ul>
    </>
  );
}
