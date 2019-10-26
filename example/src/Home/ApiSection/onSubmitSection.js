import React from 'react';

import { Code as Highlight } from "../../shared/components";

export function onSubmitSection(props) {
  return (
    <>
      <h2 className="title is-2">onSubmit()</h2>
      <p>pass as prop to the form directly so if form is submitted then triggers either onSuccess or onError functions, and finally you can get the eventSyntathic to prevent default behavior </p>
      <Highlight language="js">
{`
const { onSubmit } = useFormless({
  onSuccess: function(event) {
    // do whatever after form has been sent successfully
  }
})

// sign of function
onSubmit(name, initValue): object

return <form onSubmit>
  ...
</form>
`}
      </Highlight>
    </>
  );
}
