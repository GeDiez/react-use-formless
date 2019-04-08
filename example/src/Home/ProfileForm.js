import React from 'react';
import classnames from "classnames";

export const ProfileForm = ({ party }) => {
  const profile = party('profile', { validate: (name, value, { values }) => {
    const validations = {
      name: !value ? 'Is required' : '',
      password: !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(value) ? 'Minimum eight characters, at least one letter, one number and one special character' : '',
      passwordConfirm: value === values['password'] ? '' : 'password confirm does not match'
    }

    return validations[name]
  }})

  return (
    <>
      <div className="field">
        <label className='label' htmlFor="name">Name</label>
        <div className="control has-icons-left">
          <span className="icon is-small is-left">
            <i className="fas fa-user"></i>
          </span>
          <input className={classnames("input" ,{'is-danger': profile.shouldShowError('name')})}  {...profile.inputProps('name', 'Gibran')}/>
        </div>
        <p className={classnames('help is-danger', {'is-hidden': !profile.shouldShowError('name')})}>
          {profile.getError('name')}
        </p>
      </div>
      <div className="field">
        <label className='label' htmlFor="name">Email</label>
        <div className="control has-icons-left">
          <span className="icon is-small is-left">
            <i className="fas fa-envelope"></i>
          </span>
          <input className={classnames("input" ,{'is-danger': profile.shouldShowError('email')})}  {...profile.inputProps('email', '')} placeholder="email@example.com"/>
        </div>
        <p className={classnames('help is-danger', {'is-hidden': !profile.shouldShowError('email')})}>
          {profile.getError('email')}
        </p>
      </div>
      <div className="field">
        <label className='label' htmlFor="password">Password</label>
        <div className="control">
          <input className={classnames("input" ,{'is-danger': profile.shouldShowError('password')})}  type="password" {...profile.inputProps('password')}/>
        </div>
        <p className={classnames('help is-danger', {'is-hidden': !profile.shouldShowError('password')})}>
          {profile.getError('password')}
        </p>
      </div>
      <div className="field">
        <label className='label' htmlFor="password">Password Confirm</label>
        <div className="control">
          <input className={classnames("input" ,{'is-danger': profile.shouldShowError('passwordConfirm')})}  type="password" {...profile.inputProps('passwordConfirm')}/>
        </div>
        <p className={classnames('help is-danger', {'is-hidden': !profile.shouldShowError('passwordConfirm')})}>
          {profile.getError('passwordConfirm')}
        </p>
      </div>
    </>
  )
}