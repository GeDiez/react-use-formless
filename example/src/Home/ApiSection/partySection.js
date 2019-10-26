import React from 'react';

import { Code as Highlight } from "../../shared/components";

export function PartySection(props) {
  return (
    <>
      <h2 className="title is-2">party:function</h2>
      <p>you can get another nested forms by using this function, it returns the same functions as useFormless hook does</p>
      <p>Use party recursively in order to create complex structures of data</p>
      <Highlight language="js">
{`
const { party } = useFormless(options)
// sign of function
const {
  field,
  form,
  party,
  resetParty,
  validateParty,
  isValidParty
  ...
} = party('party_name', options)
`}
      </Highlight>
      <strong>options</strong>
      <p><code>{` {validate: validatePartyFunction} `}</code></p>
    </>
  );
}
