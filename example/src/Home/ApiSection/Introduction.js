import React from 'react';

export function Introduction(props) {
  return (
    <>
      <p className="title is-3 is-spaced">Introduction</p>
      <p className="subtitle is-5">useFormless the custom hook to handle forms in React <i className="fab fa-react"></i></p>
      <div className="content">
        React is the most known library for create UI's but since version 16.8 included a new API called HOOK's
        that its first concern is separate behavior between JSX structure and behavior. If that words dont make
        you sense I suggest read it into its <a href="https://reactjs.org/docs/hooks-intro.html">official documentation</a>
      </div>
      <div className="box">
        <i>
          Hooks solve a wide variety of seemingly unconnected problems in React that we’ve encountered over five years of writing and maintaining tens of thousands of components. Whether you’re learning React, use it daily, or even prefer a different library with a similar component model, you might recognize some of these problems.
        </i>
      </div>
    </>)
}