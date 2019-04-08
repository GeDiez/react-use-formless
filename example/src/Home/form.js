import React, {useState} from 'react';
import useFormless from "react-useformless";
import classnames from "classnames"

import { ProfileForm } from "./ProfileForm";
import { AddressForm } from "./AddressForm";
import { StateDataFormless } from "./StateDataFormless";

export default (props) => {
  const [isOpen, toggle] = useState(false)
  const { inputProps, inputCheckboxProps, values, touched, errors, isValid, shouldShowError, getError, party, reset, onSubmit, validateForm } = useFormless({
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
        <div className="field">
          <div className="control">
            <textarea className={classnames("textarea" ,{'is-danger': shouldShowError('aboutyou')})} {...inputProps('aboutyou')} placeholder="tell us something interesting about you ^^" cols="80" rows="10"/>
          </div>
          <p className={classnames('help is-danger', {'is-hidden': !shouldShowError('aboutyou')})}>
            {getError('aboutyou')}
          </p>
        </div>
        <div className="field">
          <div className="control">
            <label htmlFor="terms" className={classnames("checkbox" ,{'is-danger': shouldShowError('aboutyou')})}>
              <input id="terms" type="checkbox" {...inputCheckboxProps('terms', false)} /> you accept terms and conditions
            </label>
          </div>
          <p className={classnames('help is-danger', {'is-hidden': !shouldShowError('terms')})}>
            {getError('terms')}
          </p>
        </div>
        <p className="has-text-grey-dark">this form is: {isValid() ? 'valid' : 'invalid'}</p>
        <div className="field">
          <div className="buttons has-addons">
            <button className="button is-primary is-outlined" type="button" onClick={validateForm}>validate form</button>
            <button className="button is-dark" type="button" onClick={reset}>reset</button>
            <button className="button is-success" type="submit">Send</button>
          </div>
        </div>
      </form>
      <StateDataFormless className="column" values={values} touched={touched} errors={errors}/>
      <div class={classnames("modal", {'is-active': isOpen})}>
        <div class="modal-background"></div>
        <div class="modal-content">
          <div className="box has-text-centered has-text-success">
            Validation has passed!
          </div>
        </div>
        <button class="modal-close is-large" onClick={() => toggle(false)} aria-label="close"></button>
      </div>
    </>)
}