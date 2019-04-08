import React from 'react';

export const StateDataFormless = ({ values, touched, errors, ...props }) => {
  return (
    <div {...props}>
      <div className="field">
        <div className="control">
          <div className="tags has-addons">
            <span className="tag is-dark">object</span>
            <span className="tag is-primary">values</span>
          </div>
        </div>
        <div className="control">
          <textarea className="textarea is-primary" name="" id="" disabled cols="50" rows="10" value={JSON.stringify(values, null, '\t')} />
        </div>
      </div>
      <div className="field">
        <div className="control">
          <div className="tags has-addons">
            <span className="tag is-dark">object</span>
            <span className="tag is-info">touched</span>
          </div>
        </div>
        <div className="control">
        <textarea className="textarea is-info" disabled name="" id="" cols="50" rows="10" value= {JSON.stringify(touched, null, '\t')} />
        </div>
      </div>
      <div className="field">
        <div className="control">
          <div className="tags has-addons">
            <span className="tag is-dark">object</span>
            <span className="tag is-danger">errors</span>
          </div>
        </div>
        <div className="control">
        <textarea className="textarea is-danger" disabled name="" id="" cols="50" rows="10" value= {JSON.stringify(errors, null, '\t')} />
        </div>
      </div>
    </div>
  )
}