import React from 'react';

import { Code as Highlight } from "../../shared/components";

export function PartySection(props) {
  return (
    <>
      <h2 className="title is-2">party:object</h2>
      <p>party function allow you create nested forms into your main form returned by useFormless hook, party.create function will create a new object into your values. `The party.create()` works similary to useFormless hook, it means, you can handle all information inside a nested form with the same API</p>
      <Highlight language="js">
{`
const { party } = useFormless(options)
// sign of function
party: object
//{
//  create,
    isValid,
    reset,
    validate,
// }
`}
      </Highlight>
      <strong>It is an object</strong>
      <ul>
        <li><strong>create(nameParty, options)</strong> create multiples forms, it has the same API than use fomrles hook </li>
        <li><strong>isValid(): boolean</strong> run valdiations and will return true if they pass</li>
        <li><strong>validate()</strong> will validate the full party, even their nested forms</li>
        <li><strong>reset()</strong> reset party to initial state including nested forms</li>
      </ul>
    </>
  );
}
