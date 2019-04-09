import React, { useState } from "react";

// templates
import { Introduction } from "./Introduction";
import { GettingStarted } from "./GettingStarted";
const routes = {
  '1.1': Introduction,
  '1.2': GettingStarted
}

export function ApiSection(props) {
  const [currentContent, setContent] = useState('1.2')

  const Content = routes[currentContent] || (() => (<h3>No content found</h3>))

  return (
    <section id="api" className="section">
      <div className="container">
        <h2 className="title is-h2">API</h2>
        <div className="columns">
          <aside className="menu column is-4">
            <p className="menu-label">
              General
            </p>
            <ul className="menu-list">
              <li><a onClick={() => setContent('1.1')}>Introduction</a></li>
              <li><a onClick={() => setContent('1.2')}>Getting Started</a></li>
            </ul>
            <p className="menu-label">
              Variables and Funtions
            </p>
            <ul className="menu-list">
              <li><a onClick={() => setContent('2.1')}>values, touched and error objects</a></li>
              <li><a onClick={() => setContent('2.2')}>getValue(name)</a></li>
              <li><a onClick={() => setContent('2.3')}>setValue(name, value)</a></li>
              <li><a onClick={() => setContent('2.4')}>setValues(values)</a></li>
              <li><a onClick={() => setContent('2.5')}>touchValue(name)</a></li>
              <li><a onClick={() => setContent('2.6')}>setError(name, value)</a></li>
              <li><a onClick={() => setContent('2.7')}>validateValue(name)</a></li>
              <li><a onClick={() => setContent('2.8')}>reset()</a></li>
              <li><a onClick={() => setContent('2.9')}>isValid</a></li>
              <li><a onClick={() => setContent('2.10')}>party forms</a></li>
            </ul>
            <p className="menu-label">
              Helpers for React
            </p>
            <ul className="menu-list">
              <li><a>inputProps(name, initialValue)</a></li>
              <li><a>inputCheckboxProps(name, initialValue)</a></li>
              <li><a>onSubmit(SyntathicEvent)</a></li>
            </ul>
          </aside>
          <div className="column is-8">
            <div className="content is-scrollable">
              <Content setContent={setContent}/>
            </div>
          </div>
        </div>
      </div>
    </section>)
}