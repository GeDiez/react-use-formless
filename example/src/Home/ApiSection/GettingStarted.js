import React from 'react';
import { Code as Highlight } from "../../shared/components";

export function GettingStarted({ setContent }) {
  return (
      <>
        <h2 className="title is2">Getting Started</h2>
        <h3 className="title is-4">Installing</h3>
        <p>Download from npm through either yarn or npx</p>
        <Highlight language="bash">
          $ yarn add --save react-useformless
        </Highlight>
        or
        <Highlight language="bash">
          $ npx i react-useformless
        </Highlight>

        <h3 className="title is-4">First import it</h3>
        <Highlight language="jsx">
          {
`import React from "react";
import useFormless from "react-useformless";`}
        </Highlight>

        <h3 className="title is-4">Create an useFormless object</h3>
        <p>before we create an instance of useFormless, it could take an object of options to initialize the state of the form, all of this are optionals </p>
        <Highlight language="javascript">
          {
`{
    initialValues: {...},
    validate: function(name, value) {...},
    onSuccess: function(ev) {...},
    onError: function(ev) {...},
}`}
        </Highlight>
        <ol>
          <li>
            <strong>initialValues</strong> is an object with the values by default, it will read by all nested forms,
            for party forms see <a href="#api" onClick={() => setContent('2.10')}>this section</a>
          </li>
          <li>
            <strong>validate</strong> is a function to validate an field when it has changed
            <ol>
              <li>
                <strong>params</strong> receives name and new value of an field, which has changed
              </li>
              <li>
                <strong>return</strong> a string with the error or null/empty string in otherwise
              </li>
            </ol>
          </li>
          <li>
            <strong>onSuccess</strong> it function will be trigger once that form is submitted and the validations are passed
          </li>
          <li>
            <strong>onError</strong> it function will be trigger if form is invalided. <br/>
          </li>
        </ol>
        <ul>
          <li>
            <i>
              * onSucces, onError functions both receive as param the Event object, so you can handle it whatever you want
            </i>
          </li>
        </ul>
        <h3 className="title is-4">useFormless in action</h3>
        <p>Finally you can use the useFormless to assign common behavior of formularies to your form component, the easy way to start is through of some helpers.</p>
        <ul>
          <li>inputProps(name, initialValue)</li>
          <li>inputCheckboxProps(name, initialValue)</li>
          <li>onSubmit(event)</li>
        </ul>

        <Highlight language='jsx'>
{`
function MyForm() {
  const { inputProps, inputCheckboxProps, onSubmit } = useFormless()

  return (
    <form onSubmit={onSubmit}>
      <div className="field">
        <div className="control">
          <textarea
            className="textarea"
            {...inputProps('aboutyou')}
            placeholder="tell us something interesting about you ^^"
            cols="80"
            rows="10"
          />
        </div>
      </div>
      <div className="field">
        <div className="control">
          <label htmlFor="terms" className="checkbox">
            <input
              id="terms"
              type="checkbox"
              {...inputCheckboxProps('terms', false)}
            />
            you accept terms and conditions
          </label>
        </div>
      </div>
      <div className="field">
        <div className="buttons has-addons">
          <button className="button is-primary" type="button" onClick={reset}>reset</button>
          <button className="button is-info" type="submit">Send</button>
        </div>
      </div>
    </form>
  )
}
`}
        </Highlight>
      </>
  )
}