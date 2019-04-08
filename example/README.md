<h1 align="center">
  <img src="/example/public/logo-useformless.png" alt="logo" />
</h1>

# useFormless

This a very simple example, this implments bulma so you can see how errors are shown
Try it!

```jsx
import React, {useState} from 'react';
import useFormless from "react-useformless";
import classnames from 'classnames';


export default (props) => {
  const [isOpen, toggle] = useState(false)
  const { inputProps, inputCheckboxProps, shouldShowError, getError, reset, onSubmit } = useFormless({
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
      <form onSubmit={onSubmit}>
        <div className="field">
          <div className="control">
            <textarea className="textarea" {...inputProps('aboutyou')} placeholder="tell us something interesting about you ^^" cols="80" rows="10"/>
          </div>
          <p className={classnames('help is-danger', {'is-hidden': !shouldShowError('aboutyou')})}>
            {getError('aboutyou')}
          </p>
        </div>
        <div className="field">
          <div className="control">
            <label htmlFor="terms" className="checkbox">
              <input id="terms" type="checkbox" {...inputCheckboxProps('terms', false)} /> you accept terms and conditions
            </label>
          </div>
          <p className={classnames('help is-danger', {'is-hidden': !shouldShowError('terms')})}>
            {getError('terms')}
          </p>
        </div>
        <div className="field">
          <div className="buttons has-addons">
            <button className="button is-dark" type="button" onClick={reset}>reset</button>
            <button className="button is-success" type="submit">Send</button>
          </div>
        </div>
      </form>
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
```
