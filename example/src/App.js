import React from 'react';
import { hot } from 'react-hot-loader';

import FormBasic from './form.js';

const App = () => {
  return (
    <section className="section">
      <h1>Form example basic</h1>
      <FormBasic/>
    </section>
  );
}

export default hot(module)(App);