import React, { useState } from "react";
import cn from "classnames";

// templates
import { Introduction } from "./Introduction";
import { GettingStarted } from "./GettingStarted";
import { ValuesTouchedErrorsSection } from "./ValuesTouchedErrorsSection";
import { GetValueSection } from "./getValueSection";
import { SetValueSection } from "./setValueSection";
import { SetValuesSection } from "./setValuesSection";
import { touchFieldSection } from "./touchFieldSection";
import { SetErrorSection } from "./setErrorSection";
import { GetErrorSection } from "./getErrorSection";
import { ValidateFieldSection } from "./validateFieldSection";
import { ResetSection } from "./resetSection";
import { IsValidSection } from "./isValidSection";
import { PartySection } from "./partySection";

const routes = {
  '1.1': Introduction,
  '1.2': GettingStarted,
  '2.1': ValuesTouchedErrorsSection,
  '2.2': GetValueSection,
  '2.3': SetValueSection,
  '2.4': SetValuesSection,
  '2.5': touchFieldSection,
  '2.6': GetErrorSection,
  '2.7': SetErrorSection,
  '2.8': ValidateFieldSection,
  '2.9': ResetSection,
  '2.10': IsValidSection,
  '2.11': PartySection
}

export function ApiSection(props) {
  const [currentContent, setContent] = useState('2.2')

  const Content = routes[currentContent] || (() => (<h3>No content found</h3>))

  return (
    <section className="section" { ...props }>
      <div className="container">
        <h2 className="title is-h2">API</h2>
        <div className="columns">
          <aside className="menu column is-3">
            <p className="menu-label">
              General
            </p>
            <ul className="menu-list">
              <li><a className={cn({'is-active': currentContent === '1.1'})} onClick={() => setContent('1.1')}>Introduction</a></li>
              <li><a className={cn({'is-active': currentContent === '1.2'})} onClick={() => setContent('1.2')}>Getting Started</a></li>
            </ul>
            <p className="menu-label">
              Variables and Funtions
            </p>
            <ul className="menu-list">
              <li><a className={cn({'is-active': currentContent === '2.1'})} onClick={() => setContent('2.1')}>values, touched and error objects</a></li>
              <li><a className={cn({'is-active': currentContent === '2.2'})} onClick={() => setContent('2.2')}>getValue(name)</a></li>
              <li><a className={cn({'is-active': currentContent === '2.3'})} onClick={() => setContent('2.3')}>setValue(name, value)</a></li>
              <li><a className={cn({'is-active': currentContent === '2.4'})} onClick={() => setContent('2.4')}>setValues(values)</a></li>
              <li><a className={cn({'is-active': currentContent === '2.5'})} onClick={() => setContent('2.5')}>touchField(name)</a></li>
              <li><a className={cn({'is-active': currentContent === '2.6'})} onClick={() => setContent('2.6')}>getError(name)</a></li>
              <li><a className={cn({'is-active': currentContent === '2.7'})} onClick={() => setContent('2.7')}>setError(name, value)</a></li>
              <li><a className={cn({'is-active': currentContent === '2.8'})} onClick={() => setContent('2.8')}>validateField(name)</a></li>
              <li><a className={cn({'is-active': currentContent === '2.9'})} onClick={() => setContent('2.9')}>reset()</a></li>
              <li><a className={cn({'is-active': currentContent === '2.10'})} onClick={() => setContent('2.10')}>isValid()</a></li>
              <li><a className={cn({'is-active': currentContent === '2.11'})} onClick={() => setContent('2.11')}>party(name, option)</a></li>
              <li><a className={cn({'is-active': currentContent === '2.12'})} onClick={() => setContent('2.12')}>isValidParty()</a></li>
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