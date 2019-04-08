import React from 'react';

// templates
import FormBasic from './form.js';

export function ExampleSection(props) {
  return (
    <section id="first-section" className="section has-background-light">
      <div className="container">
        <div className="columns is-multiline">
          <div className="column is-12">
            <h2 className="title">The useFormless example</h2>
          </div>
          <FormBasic className="column"/>
        </div>
      </div>
  </section>)
}
