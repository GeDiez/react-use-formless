import React from 'react';

import { InputIcon, Input } from "../Elements";

export const ProfileForm = ({ party }) => {
  const profile = party.create(
    'Profile',
    {
      validate: (name, value, { values }) => {
        const validations = {
          name: !value ? 'Is required' : '',
          email: !/^[a-z0-9](\.?[a-z0-9_-]){0,}@[a-z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$/g.test(value) ? 'email formatt invalid' : '',
          password: !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(value) ? 'Minimum eight characters, at least one letter, one number and one special character' : '',
          passwordConfirm: value === values['password'] ? '' : 'password confirm does not match'
        }

        return validations[name]
      }})

  return (
    <>
      <InputIcon label="Name" field={profile.field('name', 'Jonh Lenon')} icon="fa-user"></InputIcon>
      <InputIcon label="Email"  field={profile.field('email')}  icon="fa-envelope"></InputIcon>
      <Input label="Passowrd"  field={profile.field('password')} type="password"> </Input>
      <Input label="Password confirm"  field={profile.field('passwordConfirm')} type="password"> </Input>
    </>
  )
}