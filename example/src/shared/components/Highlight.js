import React from 'react';
import BareHighlight from 'react-fast-highlight/lib/BareHighlight';
import hljs from '../../config/highligth';

export function Highlight({children, ...props}) {
  return <BareHighlight highlightjs={hljs} {...props}>{children}</BareHighlight>
}
