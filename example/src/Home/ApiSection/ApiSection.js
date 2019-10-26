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
import { IsValidPartySection } from "./isValidPartySection";
import { FieldSection } from "./FieldSection";
import { FormSection } from "./FormSection";
import { InputPropsSection } from "./inputPropsSection";
import { CheckboxPropsSection } from "./checkboxPropsSection";
import { onSubmitSection } from "./onSubmitSection";

const routes = {
  // section I
  '1.1': {
    id: '1.1',
    component: Introduction,
    name: 'Introduction',
  },
  '1.2': {
    id: '1.2',
    name: 'GettingStarted',
    component: GettingStarted,
  },
  // section II
  '2.1': {
    id: '2.1',
    name: 'Values Touched and Errors',
    component: ValuesTouchedErrorsSection,
  },
  '2.2': {
    id: '2.2',
    name: 'GetValue',
    component: GetValueSection,
  },
  '2.3': {
    id: '2.3',
    name: 'SetValue',
    component: SetValueSection,
  },
  '2.4': {
    id: '2.4',
    name: 'SetValues',
    component: SetValuesSection,
  },
  '2.5': {
    id: '2.5',
    name: 'TouchField',
    component: touchFieldSection,
  },
  '2.6': {
    id: '2.6',
    name: 'GetError',
    component: GetErrorSection,
  },
  '2.7': {
    id: '2.7',
    name: 'SetError',
    component: SetErrorSection,
  },
  '2.8': {
    id: '2.8',
    name: 'ValidateField',
    component: ValidateFieldSection,
  },
  '2.9': {
    id: '2.9',
    name: 'Reset',
    component: ResetSection,
  },
  '2.10': {
    id: '2.10',
    name: 'IsValid',
    component: IsValidSection,
  },
  '2.11': {
    id: '2.11',
    name: 'IsValidParty',
    component: IsValidPartySection,
  },
  // section III
  '3.1': {
    id: '3.1',
    name: 'InputProps',
    component: InputPropsSection,
  },
  '3.2': {
    id: '3.2',
    name: 'CheckboxProps',
    component: CheckboxPropsSection,
  },
  '3.3': {
    id: '3.3',
    name: 'OnSubmit',
    component: onSubmitSection,
  },
  '3.4': {
    id: '3.4',
    name: 'Field',
    component: FieldSection,
  },
  '3.5': {
    id: '3.5',
    name: 'Party',
    component: PartySection,
  },
  '3.6': {
    id: '3.6',
    name: 'Form',
    component: FormSection,
  },
}

function ApiItem({ item: { id, name, component }, currentSectionId, onSelectItem }) {
  return (
    <li><a href="#api-section" className={cn({'is-active': currentSectionId === id})} onClick={() => onSelectItem(id)}>{name}</a></li>
  )
}

export function ApiSection(props) {
  const [currentContent, setContent] = useState('1.1')

  const Content = routes[currentContent].component || (() => (<h3>No content found</h3>))

  return (
    <section id="api-section" className="section" { ...props }>
      <div className="container">
        <h2 className="title is-h2">API</h2>
        <div className="columns">
          <aside className="menu column is-3">
            <p className="menu-label">
              General
            </p>
            <ul className="menu-list">
              <ApiItem currentSectionId={currentContent} item={routes['1.1']} onSelectItem={setContent} />
              <ApiItem currentSectionId={currentContent} item={routes['1.2']} onSelectItem={setContent} />
            </ul>
            <p className="menu-label">
              Variables and Funtions
            </p>
            <ul className="menu-list">
              <ApiItem currentSectionId={currentContent} item={routes['2.1']} onSelectItem={setContent} />
              <ApiItem currentSectionId={currentContent} item={routes['2.2']} onSelectItem={setContent} />
              <ApiItem currentSectionId={currentContent} item={routes['2.3']} onSelectItem={setContent} />
              <ApiItem currentSectionId={currentContent} item={routes['2.4']} onSelectItem={setContent} />
              <ApiItem currentSectionId={currentContent} item={routes['2.5']} onSelectItem={setContent} />
              <ApiItem currentSectionId={currentContent} item={routes['2.6']} onSelectItem={setContent} />
              <ApiItem currentSectionId={currentContent} item={routes['2.7']} onSelectItem={setContent} />
              <ApiItem currentSectionId={currentContent} item={routes['2.8']} onSelectItem={setContent} />
              <ApiItem currentSectionId={currentContent} item={routes['2.9']} onSelectItem={setContent} />
              <ApiItem currentSectionId={currentContent} item={routes['2.10']} onSelectItem={setContent} />
              <ApiItem currentSectionId={currentContent} item={routes['2.11']} onSelectItem={setContent} />
            </ul>
            <p className="menu-label">
              Helpers for React
            </p>
            <ul className="menu-list">
              <ApiItem currentSectionId={currentContent} item={routes['3.1']} onSelectItem={setContent} />
              <ApiItem currentSectionId={currentContent} item={routes['3.2']} onSelectItem={setContent} />
              <ApiItem currentSectionId={currentContent} item={routes['3.3']} onSelectItem={setContent} />
              <ApiItem currentSectionId={currentContent} item={routes['3.4']} onSelectItem={setContent} />
              <ApiItem currentSectionId={currentContent} item={routes['3.5']} onSelectItem={setContent} />
              <ApiItem currentSectionId={currentContent} item={routes['3.6']} onSelectItem={setContent} />
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
