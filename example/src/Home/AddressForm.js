import React from 'react';
import classnames from "classnames";

export const AddressForm = ({ party }) => {
  // You can do a general validation for each value passing
  const validate = (name, value) => value === '' ? 'Is required' : ''

  // create our party form with the key Address
  const addressForm = party('Address', { validate })

  return (
    <>
      <div className="field">
        <label className='label' htmlFor="street">Street</label>
        <div className="control">
          <input className={classnames("input" ,{'is-danger': addressForm.shouldShowError('street')})} type="text" {...addressForm.inputProps('street')}/>
        </div>
        <p className={classnames('help is-danger', {'is-hidden': !addressForm.shouldShowError('street')})}>
          {addressForm.getError('street')}
        </p>
      </div>
      <div className="field">
        <label className='label' htmlFor="number">Number</label>
        <div className="control">
          <input className={classnames("input" ,{'is-danger': addressForm.shouldShowError('number')})} type="text" {...addressForm.inputProps('number', 0)}/>
        </div>
        <p className={classnames('help is-danger', {'is-hidden': !addressForm.shouldShowError('number')})}>
          {addressForm.getError('number')}
        </p>
      </div>
      <div className="field">
        <label className='label' htmlFor="number">City</label>
        <div className="control">
          <div className="select">
            <select {...addressForm.inputProps('city', 'OAX')}>
              <option value="CQX">Colima</option>
              <option value="CDMX">CDMX</option>
              <option value="GDL">Guadalajara</option>
              <option value="OAX">OAXACA</option>
            </select>
          </div>
        </div>
      </div>
    </>
  )
}