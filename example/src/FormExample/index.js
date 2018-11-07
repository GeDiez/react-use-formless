import React, { useState } from 'react';

import useFormless from "../UseFormless";

export const FormExample = () => {
  const validate = ({ values }) => ({
    name: values.name === '' ? 'Name is required' : '',
    email: values.email === '' ? 'Email is required' : '',
  })

  const [notification, toggleNotification] = useState(false);
  let message;

  const onError = (ev) => {
    ev.preventDefault();
    message = 'Ha ocurrido un error'
    toggleNotification(true);
  }

  const onSuccess = (ev) => {
    ev.preventDefault();
    message = 'Ha ocurrido un error'
    toggleNotification(true);
  }

  const { values, touched, errors, inputProps, onSubmit, isValid } = useFormless({
    initialValues: {
      name: 'Gibran',
      email: 'gibran@email.com',
    }
  }, { validate, onSuccess, onError })

  return (
    <section>
      {notification && (
        <div>
          <h3>{message}</h3>
          <p style={{color: isValid ? 'green' : 'red'}}>the submit form was {isValid ? 'valid' : 'invalid'}</p>
        </div>
      )}
      <h1>Basic example</h1>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" {...inputProps('name')}/>
        <p style={{color: 'red', fontSize: 9}}>{errors.name}</p>
        <label htmlFor="email">email</label>
        <input id="email" type="text" {...inputProps('email')}/>
        <p style={{color: 'red', fontSize: 9}}>{errors.email}</p>
        <input type="submit" value="send"/>
      </form>
      <article style={{border: '1px lightgrey solid', padding: '14px'}}>
        <h2>Values</h2>
        {JSON.stringify(values, null, '\t')}
        <h2>Touched</h2>
        {JSON.stringify(touched, null, '\t')}
        <h2>errors</h2>
        {JSON.stringify(errors, null, '\t')}
      </article>
    </section>
  );
};
