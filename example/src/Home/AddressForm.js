import React from 'react';

import { Input, Select } from "../Elements";

export const AddressForm = ({ party }) => {
  // You can do a general validation for each value passing
  const validate = (name, value) => value === '' ? 'Is required' : ''

  // create our party form with the key Address
  const addressForm = party.create('Address', { validate })

  return (
    <>
      <Input label="Street" field={addressForm.field('street')}></Input>
      <Input label="Number"  field={addressForm.field('number', 's/n')}></Input>
      <Select label="State"  field={addressForm.field('state', 'OAX')}>
        <option value="CQX">Colima</option>
        <option value="CDMX">CDMX</option>
        <option value="GDL">Guadalajara</option>
        <option value="OAX">OAXACA</option>
      </Select>
    </>
  )
}