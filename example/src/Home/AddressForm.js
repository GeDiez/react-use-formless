import React from 'react';
import classnames from "classnames";

import { Input, Select } from "../Elements";

export const AddressForm = ({ party }) => {
  // You can do a general validation for each value passing
  const validate = (name, value) => console.log({value}) || value === '' ? 'Is required' : ''

  // create our party form with the key Address
  const addressForm = party.create('Address', { validate })

  return (
    <>
      <Input field={addressForm.field('street')}></Input>
      <Input field={addressForm.field('number', 's/n')}></Input>
      <Select field={addressForm.field('state', 'OAX')}>
        <option value="CQX">Colima</option>
        <option value="CDMX">CDMX</option>
        <option value="GDL">Guadalajara</option>
        <option value="OAX">OAXACA</option>
      </Select>
    </>
  )
}