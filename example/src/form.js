import React from 'react';
import useFormless from "react-useformless";


export default () => {
  const { inputProps, inputCheckboxProps, values, touched, errors, party, reset, isValid, onSubmit, validateParty } = useFormless({
    onSuccess: (ev) => {
      ev.preventDefault()
      console.log('success')
    },
    onError: (ev) => {
      ev.preventDefault()
      console.log('error')
    },
    validate: (key, value) => {
      const validations = {
        terms: value === false && 'you must accept terms!',
        aboutyou: value === '' && 'please tell us a little bit about you',
      }
      return validations[key] || ''
    }
  })
  const addressForm = party('Address', { validate: (key, value) => !value && 'Is required'})
  const profile = party('Profile')

  return (
    <>
      <div>
        isValid: {isValid} <br/>
        values: <br/>
        <textarea disabled name="" id="" cols="50" rows="10" value={JSON.stringify(values, null, '\t')} />
        <br/>touched values: <br/>
        <textarea disabled name="" id="" cols="50" rows="10" value= {JSON.stringify(touched, null, '\t')} />
        <br/>Errors <br/>
        <textarea disabled name="" id="" cols="50" rows="10" value= {JSON.stringify(errors, null, '\t')} />
      </div>
      <form onSubmit={onSubmit}>
        Profile: <br/>
        <input type="text" {...profile.inputProps('name', 'Gibran')}/>
        <input type="text" {...profile.inputProps('password')}/>
        <div>
          Address: <br/>
          <input type="text" {...addressForm.inputProps('street')}/>
          <input type="text" {...addressForm.inputProps('number', 0)}/>
          <br/>city <br/>
          <select {...addressForm.inputProps('city', 'OAX')}>
            <option value="CQX">Colima</option>
            <option value="CDMX">CDMX</option>
            <option value="GDL">Guadalajara</option>
            <option value="OAX">OAXACA</option>
          </select>
        </div>
        <div>
          about you: <br/>
          <textarea {...inputProps('aboutyou')} placeholder="tell us something interesting about you ^^" cols="80" rows="10"></textarea>
          <br/>
          <input type="checkbox" {...inputCheckboxProps('terms', false)} /> you accept terms and conditions <br/>
        </div>
        <button type="button" onClick={reset}>reset</button>
        <button type="submit">Send</button>
        <button type='button' onClick={validateParty}>test validations for this party</button>
      </form>
    </>)
}