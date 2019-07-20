import React from "react";
import classnames from "classnames";

function BaseInput({ field, label= '', children, controlClass }) {
  return (
    <div className="field">
      <label className='label' htmlFor={field.name}>{label}</label>
      <div className={classnames('control', controlClass)}>
        {children}
      </div>
      <p className={classnames('help is-danger', {'is-hidden': !field.shouldShowError()})}>
        {field.getError()}
      </p>
    </div>
  )
}

export function Input({ field, type, label= '' }) {
  return(
    <BaseInput label={label} field={field}>
      <input className={classnames("input" ,{'is-danger': field.shouldShowError()})}  type={type} {...field.props()}/>
    </BaseInput>

  )
}

export function Textarea({ field, type, label= '' }) {
  return(
    <BaseInput label={label}  field={field}>
      <textarea className={classnames("textarea" ,{'is-danger': field.shouldShowError()})} {...field.props()} placeholder="tell us something interesting about you ^^" cols="80" rows="10"/>
    </BaseInput>

  )
}

export function Select({ field, type, children, label= '' }) {
  return(
    <BaseInput label={label}  field={field}>
      <select {...field.props()}>
        {children}
      </select>
    </BaseInput>

  )
}

export function Checkbox({ field, label= '' }) {
  return(
    <BaseInput label={label}  field={field}>
      <input id="terms" type="checkbox" {...field.checkboxProps()} /> you accept terms and conditions
    </BaseInput>
  )
}

export function InputIcon({ field, icon, type, label= '' }){
  return (
    <BaseInput label={label} field={field} controlClass="has-icons-left">
      <span className="icon is-small is-left">
        <i className={classnames('fas', icon)}></i>
      </span>
      <input id={field.name} type={type} className={classnames("input" ,{'is-danger': field.shouldShowError()})}  {...field.props()}/>
    </BaseInput>
  )
}