import React from 'react';

import { Code as Highlight } from "../../shared/components";

export function PartySection(props) {
  return (
    <>
      <h2 className="title is-2">party(name:string, options?:object):object</h2>
      <p>party function allow you create nested forms into your main form returned by useFormless hook, this will build a new object into your values. The party function works similary to useFormless hook, it means, you can handle all information inside a nested form with the same API</p>
      <Highlight language="js">
{`
const { party } = useFormless(options)
// sign of function
party(partyName:string, options?:object) handlersForPartyForm:object{}
// {
//   getValue,
//   setValue,
//   validateForm,
//   ...
// }
`}
      </Highlight>
      <strong>Params</strong>
      <ul>
        <li><strong>partyName:string</strong> inside your values object the new party form will be store using this name</li>
        <li><strong>options:object</strong> you must validate your party separately</li>
      </ul>
      <strong>return</strong>
      <ul>
        <li><strong>handlersForPartyForm:object</strong> these functions take the same API as useFormless, which just handle the fields for this party, it means you just alter the data for this party as well as validate it</li>
      </ul>
    </>
  );
}
