import React from 'react';

import { Code as Highlight } from "../../shared/components";

export function ResetSection(props) {
  return (
    <>
      <h2 className="title is-2">reset()</h2>
      <p>reset the whole form to the initial state, values state will take the initial values, errors are removed and none field is touched</p>
      <Highlight language="js">
{`
const { reset } = useFormless(options)
// sign of function
reset(): void
`}
      </Highlight>
    </>
  );
}
