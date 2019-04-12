import React from 'react';

import { Code as Highlight } from "../../shared/components";

export function touchFieldSection(props) {
  return (
    <>
      <h2 className="title is-2">touchField</h2>
      <p>Mark a field as touched, so you can know when show a error message</p>
      <Highlight language="js">
{`
const { touchField } = useFormless(options)
// sign of function
touchField(name:string): void
`}
      </Highlight>
      <strong>Params</strong>
      <ul>
        <li><strong>name:string</strong> name of field</li>
      </ul>
    </>
  );
}
