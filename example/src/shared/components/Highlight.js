import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/nightOwl'

export function Code({children, language, ...props}) {
  return (
    <Highlight {...defaultProps} theme={theme} code={children.trim()} language={language}>
    {({ className, style, tokens, getLineProps, getTokenProps }) => (
      <pre className={`code pre ${className}`} style={style}>
        {tokens.map((line, i) => (
          <div {...getLineProps({ line, key: i })}>
            <span className="code lineNo">{i + 1}</span>
            {line.map((token, key) => <span {...getTokenProps({ token, key })} />)}
          </div>
        ))}
      </pre>
    )}
  </Highlight>)
}
