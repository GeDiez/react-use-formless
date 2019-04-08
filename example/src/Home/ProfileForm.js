import React from 'react';
import classnames from "classnames";

export const ProfileForm = ({ party }) => {
  const profile = party('profile', { validate: (name, value) => {
    const validations = {
      password: !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(value) ? 'Minimum eight characters, at least one letter, one number and one special character' : '',
      name: !value ? 'Is required' : ''
    }

    return validations[name]
  }})

  return (
    <>
      <p className="has-text-grey-dark">this partyform is: {profile.isValidParty ? 'valid' : 'invalid'}</p>
      <p></p>
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
        <label className='label' htmlFor="password">Password</label>
        <div className="control">
          <input className={classnames("input" ,{'is-danger': profile.shouldShowError('password')})}  type="password" {...profile.inputProps('password')}/>
        </div>
        <p className={classnames('help is-danger', {'is-hidden': !profile.shouldShowError('password')})}>
          {profile.getError('password')}
        </p>
      </div>
    </>
  )
}