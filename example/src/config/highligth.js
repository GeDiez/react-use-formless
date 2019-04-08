import hljs from 'highlight.js/lib/highlight';

// Lets only register javascript, scss, html/xml
hljs.registerLanguage('scss', require('highlight.js/lib/languages/scss'));
hljs.registerLanguage('javascript', require('highlight.js/lib/languages/javascript'));
hljs.registerLanguage('shell', require('highlight.js/lib/languages/shell'));

export default hljs;

// more information about highlight: https://reactjsexample.com/a-fast-react-component-wrapper-for-highlight-js/