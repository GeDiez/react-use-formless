import React from 'react';

// utilities, hooks
import { useProfile } from "../shared/statefulLogic/ProfileGithub";
// templates
import { BoxProfile } from "./BoxProfile";

export function AuthorsSection(props) {
  const gediez = useProfile('GeDiez')
  const crystal = useProfile('CrystalStream')

  return (
    <section className="section has-background-grey-lighter">
      <div className="container">
        <h2 className="title is-2">
          Authors
        </h2>
        <div className="columns">
          <div className="column is-4">
            <BoxProfile profile={gediez}></BoxProfile>
          </div>
          <div className="column is-4">
            <BoxProfile profile={crystal}></BoxProfile>
          </div>
        </div>
      </div>
    </section>)
}