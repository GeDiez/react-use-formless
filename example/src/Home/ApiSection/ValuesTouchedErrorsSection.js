import React from 'react';

import { Code as Highlight } from "../../shared/components";

export function ValuesTouchedErrorsSection(props) {
  return (
    <>
      <h2 className="title is-h2">Values, Touched and Errors Objects</h2>
      <p>useFormless is based mainly in 3 states which store the data for the whole form</p>
      <div className="contnet">
        <ul>
          <li><strong>Values</strong>: Are our form structure where the key is the name for each field, and the value is the content</li>
          <li><strong>Touched</strong>: A structure similar to values but to know if a field has been touched.</li>
          <li><strong>Errors</strong>: The state error stores a text with an error for each field</li>
        </ul>
        <Highlight language="js">
          {`
const { values, touched, errors } = useFormless();

// values
// { [nameOfField]: value: string|boolean|number }

// touched
// { [nameOfField]: value:boolean }

// errors =
// { [nameOfField]: value:string }
// ...
          `}
        </Highlight>
        <i>
          * party function adds a new object inside these states to treat with nested data
        </i>
      </div>
      <h3 className="title is-4"></h3>
    </>
  )
}
