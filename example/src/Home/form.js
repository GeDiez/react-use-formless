import React, {useState} from 'react';
import useFormless from "react-useformless";
import classnames from "classnames"

import { Textarea, Checkbox } from "../Elements";
import { ProfileForm } from "./ProfileForm";
import { AddressForm } from "./AddressForm";
import { StateDataFormless } from "./StateDataFormless";

export default (props) => {
  const [isOpen, toggle] = useState(false)
  const { values, touched, errors, party, reset, onSubmit, validateForm, field } = useFormless({
    onSuccess: (ev) => {
      ev.preventDefault()
      toggle(true)
    },
    onError: (ev) => {
      ev.preventDefault()
    },
    validate: (name, value) => {
      const validations = {
        terms: value === false && 'you must accept terms!',
        aboutyou: value === '' && 'please tell us a little bit about you',
      }
      return validations[name] || ''
    }
  })

  return (
    <>
      <form onSubmit={onSubmit} {...props}>
        <ProfileForm party={party}/>
        <AddressForm party={party} />
        <Textarea label="About you" field={field('aboutyou')} />
        <Checkbox label="Accept the terms and conditions" field={field('terms', false)}/>

        <div className="field">
          <div className="buttons has-addons">
            <button className="button is-primary is-outlined" type="button" onClick={validateForm}>validate form</button>
            <button className="button is-dark" type="button" onClick={reset}>reset</button>
            <button className="button is-success" type="submit">Send</button>
          </div>
        </div>
      </form>
      <StateDataFormless className="column" values={values} touched={touched} errors={errors}/>
      <div className={classnames("modal", {'is-active': isOpen})}>
        <div className="modal-background"></div>
        <div className="modal-content">
          <div className="box has-text-centered has-text-success">
            Validation has passed!
          </div>
        </div>
        <button className="modal-close is-large" onClick={() => toggle(false)} aria-label="close"></button>
      </div>
    </>)
}