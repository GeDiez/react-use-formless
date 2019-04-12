(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,a,t){e.exports=t(19)},17:function(e,a,t){},19:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(8),s=t.n(l),i=(t(17),t(3)),c=t(2),o=t.n(c);var u=t(5),m=t(4),d=t(6),E=t(10),f=t.n(E);function h(e){var a=e.children,t=e.language;Object(m.a)(e,["children","language"]);return r.a.createElement(d.a,Object.assign({},d.b,{theme:f.a,code:a.trim(),language:t}),function(e){var a,t=e.className,n=e.style,l=e.tokens,s=e.getLineProps,i=e.getTokenProps;return r.a.createElement("pre",(a={className:"code pre"},Object(u.a)(a,"className",t),Object(u.a)(a,"style",n),a),l.map(function(e,a){return r.a.createElement("div",s({line:e,key:a}),r.a.createElement("span",{className:"code lineNo"},a+1),e.map(function(e,a){return r.a.createElement("span",i({token:e,key:a}))}))}))})}var p={1.1:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:"title is-3 is-spaced"},"Introduction"),r.a.createElement("p",{className:"subtitle is-5"},"useFormless the custom hook to handle forms in React ",r.a.createElement("i",{className:"fab fa-react"})),r.a.createElement("div",{className:"content"},"React is the most known library for create UI's but since version 16.8 included a new API called HOOK's that its first concern is separate behavior between JSX structure and behavior. If that words dont make you sense I suggest read it into its ",r.a.createElement("a",{href:"https://reactjs.org/docs/hooks-intro.html"},"official documentation")),r.a.createElement("div",{className:"box"},r.a.createElement("i",null,"Hooks solve a wide variety of seemingly unconnected problems in React that we\u2019ve encountered over five years of writing and maintaining tens of thousands of components. Whether you\u2019re learning React, use it daily, or even prefer a different library with a similar component model, you might recognize some of these problems.")))},1.2:function(e){var a=e.setContent;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"title is2"},"Getting Started"),r.a.createElement("h3",{className:"title is-4"},"Installing"),r.a.createElement("p",null,"Download from npm through either yarn or npx"),r.a.createElement(h,{language:"bash"},"$ yarn add --save react-useformless"),"or",r.a.createElement(h,{language:"bash"},"$ npx i react-useformless"),r.a.createElement("h3",{className:"title is-4"},"First import it"),r.a.createElement(h,{language:"jsx"},'import React from "react";\nimport useFormless from "react-useformless";'),r.a.createElement("h3",{className:"title is-4"},"Create an useFormless object"),r.a.createElement("p",null,"before we create an instance of useFormless, it could take an object of options to initialize the state of the form, all of this are optionals "),r.a.createElement(h,{language:"javascript"},"{\n    initialValues: {...},\n    validate: function(name, value) {...},\n    onSuccess: function(ev) {...},\n    onError: function(ev) {...},\n}"),r.a.createElement("ol",null,r.a.createElement("li",null,r.a.createElement("strong",null,"initialValues")," is an object with the values by default, it will read by all nested forms, for party forms see ",r.a.createElement("a",{href:"#api",onClick:function(){return a("2.10")}},"this section")),r.a.createElement("li",null,r.a.createElement("strong",null,"validate")," is a function to validate an field when it has changed",r.a.createElement("ol",null,r.a.createElement("li",null,r.a.createElement("strong",null,"params")," receives name and new value of an field, which has changed"),r.a.createElement("li",null,r.a.createElement("strong",null,"return")," a string with the error or null/empty string in otherwise"))),r.a.createElement("li",null,r.a.createElement("strong",null,"onSuccess")," it function will be trigger once that form is submitted and the validations are passed"),r.a.createElement("li",null,r.a.createElement("strong",null,"onError")," it function will be trigger if form is invalided. ",r.a.createElement("br",null))),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("i",null,"* onSucces, onError functions both receive as param the Event object, so you can handle it whatever you want"))),r.a.createElement("h3",{className:"title is-4"},"useFormless in action"),r.a.createElement("p",null,"Finally you can use the useFormless to assign common behavior of formularies to your form component, the easy way to start is through of some helpers."),r.a.createElement("ul",null,r.a.createElement("li",null,"inputProps(name, initialValue)"),r.a.createElement("li",null,"inputCheckboxProps(name, initialValue)"),r.a.createElement("li",null,"onSubmit(event)")),r.a.createElement(h,{language:"jsx"},'\nfunction MyForm() {\n  const { inputProps, inputCheckboxProps, onSubmit } = useFormless()\n\n  return (\n    <form onSubmit={onSubmit}>\n      <div className="field">\n        <div className="control">\n          <textarea\n            className="textarea"\n            {...inputProps(\'aboutyou\')}\n            placeholder="tell us something interesting about you ^^"\n            cols="80"\n            rows="10"\n          />\n        </div>\n      </div>\n      <div className="field">\n        <div className="control">\n          <label htmlFor="terms" className="checkbox">\n            <input\n              id="terms"\n              type="checkbox"\n              {...inputCheckboxProps(\'terms\', false)}\n            />\n            you accept terms and conditions\n          </label>\n        </div>\n      </div>\n      <div className="field">\n        <div className="buttons has-addons">\n          <button className="button is-primary" type="button" onClick={reset}>reset</button>\n          <button className="button is-info" type="submit">Send</button>\n        </div>\n      </div>\n    </form>\n  )\n}\n'))},2.1:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"title is-h2"},"Values, Touched and Errors Objects"),r.a.createElement("p",null,"useFormless is based mainly in 3 states which store the data for the whole form"),r.a.createElement("div",{className:"contnet"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("strong",null,"Values"),": Are our form structure where the key is the name for each field, and the value is the content"),r.a.createElement("li",null,r.a.createElement("strong",null,"Touched"),": A structure similar to values but to know if a field has been touched."),r.a.createElement("li",null,r.a.createElement("strong",null,"Errors"),": The state error stores a text with an error for each field")),r.a.createElement(h,{language:"js"},"\nconst { values, touched, errors } = useFormless();\n\n// values\n// { [nameOfField]: value: string|boolean|number }\n\n// touched\n// { [nameOfField]: value:boolean }\n\n// errors =\n// { [nameOfField]: value:string }\n// ...\n          "),r.a.createElement("i",null,"* party function adds a new object inside these states to treat with nested data")),r.a.createElement("h3",{className:"title is-4"}))},2.2:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"title is-2"},"getValue(fieldName:string):string"),r.a.createElement("p",null,"Get the value for the name given in the current form/party"),r.a.createElement(h,{language:"js"},"\nconst { getValue } = useFormless(options)\n// sign of function\ngetValue(fieldName:string): string\n"),r.a.createElement("strong",null,"Params"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("strong",null,"fieldName:string")," name of field")),r.a.createElement("strong",null,"return"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("strong",null,"value:string")," current value of field")))},2.3:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"title is-2"},"setValue(fieldName:string, value:string)"),r.a.createElement("p",null,"Set the value for the name given in the current form/party"),r.a.createElement(h,{language:"js"},"\nconst { setValue } = useFormless(options)\n// sign of function\nsetValue(name:string, value: string): void\n"),r.a.createElement("strong",null,"Params"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("strong",null,"name:string")," name of field"),r.a.createElement("li",null,r.a.createElement("strong",null,"value: ","{string|boolean|number}")," new value for the field")))},2.4:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"title is-2"},"setValues"),r.a.createElement("p",null,"Set all values for the whole form"),r.a.createElement(h,{language:"js"},"\nconst { setValues } = useFormless(options)\n// sign of function\nsetValues(values: object): void\n"),r.a.createElement("strong",null,"Params"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("strong",null,"values: object")," an object with new values, if an value of any field not was find then it will be set to empty string by default")))},2.5:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"title is-2"},"touchField"),r.a.createElement("p",null,"Mark a field as touched, so you can know when show a error message"),r.a.createElement(h,{language:"js"},"\nconst { touchField } = useFormless(options)\n// sign of function\ntouchField(name:string): void\n"),r.a.createElement("strong",null,"Params"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("strong",null,"name:string")," name of field")))},2.6:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"title is-2"},"getError(name: string):string"),r.a.createElement("p",null,"Get the error for the field name given in the current form/party"),r.a.createElement(h,{language:"js"},"\nconst { getError } = useFormless(options)\n// sign of function\ngetError(name:string): string\n"),r.a.createElement("strong",null,"Params"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("strong",null,"name:string")," name of field")),r.a.createElement("strong",null,"return"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("strong",null,"error:string")," a string with the error of field or empty string")))},2.7:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"title is-2"},"setError(fieldName: string, error:string)"),r.a.createElement("p",null,"Change the error for a specific field"),r.a.createElement(h,{language:"js"},"\nconst { setError } = useFormless(options)\n// sign of function\nsetError(name:string): void\n"),r.a.createElement("strong",null,"Params"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("strong",null,"name:string")," name of field")))},2.8:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"title is-2"},"validateField"),r.a.createElement("p",null,"It triggers the validation for the field given then update the error and it set as touched"),r.a.createElement(h,{language:"js"},"\nconst { validateField } = useFormless(options)\n// sign of function\nvalidateField(name: string, error:string): void\n"),r.a.createElement("strong",null,"Params"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("strong",null,"name:string")," name of field"),r.a.createElement("li",null,r.a.createElement("strong",null,"error:string")," error to be displayed")))},2.9:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"title is-2"},"reset()"),r.a.createElement("p",null,"reset the whole form to the initial state, values state will take the initial values, errors are removed and none field is touched"),r.a.createElement(h,{language:"js"},"\nconst { reset } = useFormless(options)\n// sign of function\nreset(): void\n"))},"2.10":function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"title is-2"},"isValid()"),r.a.createElement("p",null,"Verify if there is errors on the whole form and return true or false"),r.a.createElement(h,{language:"js"},"\nconst { isValid } = useFormless(options)\n// sign of function\nisValid(): boolean\n"),r.a.createElement("strong",null,"return"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("strong",null,"isValid:boolean"))))},2.11:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"title is-2"},"party(name:string, options?:object):object"),r.a.createElement("p",null,"party function allow you create nested forms into your main form returned by useFormless hook, this will build a new object into your values. The party function works similary to useFormless hook, it means, you can handle all information inside a nested form with the same API"),r.a.createElement(h,{language:"js"},"\nconst { party } = useFormless(options)\n// sign of function\nparty(partyName:string, options?:object) handlersForPartyForm:object{}\n// {\n//   getValue,\n//   setValue,\n//   validateForm,\n//   ...\n// }\n"),r.a.createElement("strong",null,"Params"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("strong",null,"partyName:string")," inside your values object the new party form will be store using this name"),r.a.createElement("li",null,r.a.createElement("strong",null,"options:object")," you must validate your party separately")),r.a.createElement("strong",null,"return"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("strong",null,"handlersForPartyForm:object")," these functions take the same API as useFormless, which just handle the fields for this party, it means you just alter the data for this party as well as validate it")))}};function v(e){var a=Object(n.useState)("2.2"),t=Object(i.a)(a,2),l=t[0],s=t[1],c=p[l]||function(){return r.a.createElement("h3",null,"No content found")};return r.a.createElement("section",Object.assign({className:"section"},e),r.a.createElement("div",{className:"container"},r.a.createElement("h2",{className:"title is-h2"},"API"),r.a.createElement("div",{className:"columns"},r.a.createElement("aside",{className:"menu column is-3"},r.a.createElement("p",{className:"menu-label"},"General"),r.a.createElement("ul",{className:"menu-list"},r.a.createElement("li",null,r.a.createElement("a",{className:o()({"is-active":"1.1"===l}),onClick:function(){return s("1.1")}},"Introduction")),r.a.createElement("li",null,r.a.createElement("a",{className:o()({"is-active":"1.2"===l}),onClick:function(){return s("1.2")}},"Getting Started"))),r.a.createElement("p",{className:"menu-label"},"Variables and Funtions"),r.a.createElement("ul",{className:"menu-list"},r.a.createElement("li",null,r.a.createElement("a",{className:o()({"is-active":"2.1"===l}),onClick:function(){return s("2.1")}},"values, touched and error objects")),r.a.createElement("li",null,r.a.createElement("a",{className:o()({"is-active":"2.2"===l}),onClick:function(){return s("2.2")}},"getValue(name)")),r.a.createElement("li",null,r.a.createElement("a",{className:o()({"is-active":"2.3"===l}),onClick:function(){return s("2.3")}},"setValue(name, value)")),r.a.createElement("li",null,r.a.createElement("a",{className:o()({"is-active":"2.4"===l}),onClick:function(){return s("2.4")}},"setValues(values)")),r.a.createElement("li",null,r.a.createElement("a",{className:o()({"is-active":"2.5"===l}),onClick:function(){return s("2.5")}},"touchField(name)")),r.a.createElement("li",null,r.a.createElement("a",{className:o()({"is-active":"2.6"===l}),onClick:function(){return s("2.6")}},"getError(name)")),r.a.createElement("li",null,r.a.createElement("a",{className:o()({"is-active":"2.7"===l}),onClick:function(){return s("2.7")}},"setError(name, value)")),r.a.createElement("li",null,r.a.createElement("a",{className:o()({"is-active":"2.8"===l}),onClick:function(){return s("2.8")}},"validateField(name)")),r.a.createElement("li",null,r.a.createElement("a",{className:o()({"is-active":"2.9"===l}),onClick:function(){return s("2.9")}},"reset()")),r.a.createElement("li",null,r.a.createElement("a",{className:o()({"is-active":"2.10"===l}),onClick:function(){return s("2.10")}},"isValid()")),r.a.createElement("li",null,r.a.createElement("a",{className:o()({"is-active":"2.11"===l}),onClick:function(){return s("2.11")}},"party(name, option)")),r.a.createElement("li",null,r.a.createElement("a",{className:o()({"is-active":"2.12"===l}),onClick:function(){return s("2.12")}},"isValidParty()"))),r.a.createElement("p",{className:"menu-label"},"Helpers for React"),r.a.createElement("ul",{className:"menu-list"},r.a.createElement("li",null,r.a.createElement("a",null,"inputProps(name, initialValue)")),r.a.createElement("li",null,r.a.createElement("a",null,"inputCheckboxProps(name, initialValue)")),r.a.createElement("li",null,r.a.createElement("a",null,"onSubmit(SyntathicEvent)")))),r.a.createElement("div",{className:"column is-8"},r.a.createElement("div",{className:"content is-scrollable"},r.a.createElement(c,{setContent:s}))))))}var g={name:"",username:"",avatar:"",url:"",bio:""};function b(e){var a=Object(n.useState)(g),t=Object(i.a)(a,2),r=t[0],l=t[1];return Object(n.useEffect)(function(){(function(e){return fetch("https://api.github.com/users/".concat(e)).then(function(e){return e.json()}).then(function(e){return{name:e.name,username:e.login,avatar:e.avatar_url,url:e.html_url,bio:e.bio}})})(e).then(function(e){l(e)})},[e]),r}function N(e){var a=e.profile;return r.a.createElement("div",{className:"box"},r.a.createElement("article",{className:"media"},r.a.createElement("div",{className:"media-left"},r.a.createElement("figure",{className:"image is-64x64"},r.a.createElement("img",{src:a.avatar,alt:"avatar github user"}))),r.a.createElement("div",{className:"media-content"},r.a.createElement("div",{className:"content"},r.a.createElement("p",null,r.a.createElement("strong",null,a.name)," ",r.a.createElement("small",null,a.username),r.a.createElement("br",null),a.bio)),r.a.createElement("nav",{className:"level is-mobile"},r.a.createElement("div",{className:"level-left"},r.a.createElement("a",{className:"level-item","aria-label":"reply",href:a.url},r.a.createElement("span",{className:"icon is-small"},r.a.createElement("i",{className:"fab fa-github","aria-hidden":"true"}))))))))}function y(e){var a=b("GeDiez"),t=b("CrystalStream");return r.a.createElement("section",{className:"section has-background-grey-lighter"},r.a.createElement("div",{className:"container"},r.a.createElement("h2",{className:"title is-2"},"Authors"),r.a.createElement("div",{className:"columns"},r.a.createElement("div",{className:"column is-4"},r.a.createElement(N,{profile:a})),r.a.createElement("div",{className:"column is-4"},r.a.createElement(N,{profile:t})))))}var w=function(){for(var e=arguments.length,a=Array(e),t=0;t<e;t++)a[t]=arguments[t];return function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return a.forEach(function(e){return e.apply(void 0,t)})}},F=function(e,a,t,n,r){var l=n.initialValues,s=void 0===l?{}:l,i=n.validate,c=void 0===i?function(){return""}:i,o=w(function(n,r){return a.dispatchTouched(e.touchField(a.touched,{name:n,path:t}))},function(n,r){return a.dispatchValues(e.setValue(a.values,{name:n,value:r,path:t}))}),u=function(){return a.dispatchTouched(e.touchAllFields(a.values))},m=w(function(){return a.dispatchValues(s)},function(){return a.dispatchErrors({})});return{getValue:function(n){return e.getValue(a.values,{name:n,path:t})},setValue:o,setValues:function(e){return a.dispatchValues(e)},getError:function(n){return e.getValue(a.errors,{path:t,name:n})},setError:function(n,r){return a.dispatchErrors(e.setError(a.errors,{name:n,error:r,path:t}))},shouldShowError:function(n){return e.getValue(a.touched,{path:t,name:n})&&""!==e.getValue(a.errors,{path:t,name:n})},touchField:function(n){return a.dispatchTouched(e.touchField(a.touched,{name:n,path:t}))},touchAllFields:u,validateField:function(n){return a.dispatchErrors(e.validateField(a.errors,{name:n,value:e.getValue(a.values,{name:n,path:t}),path:t,validate:function(n,r){return c(n,r,{values:e.getValuesParty(a.values,{path:t})})}}))},validateForm:function(){var t=r.pipe(a.errors);e.isValid(t)||(u(),a.dispatchErrors(t))},reset:m,isValid:function(){return e.isValid(a.errors)},isValidParty:function(){return e.isValidParty(a.errors,{path:t})}}},j="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},V=function(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e},k=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},S=function(){return function(e,a){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,a){var t=[],n=!0,r=!1,l=void 0;try{for(var s,i=e[Symbol.iterator]();!(n=(s=i.next()).done)&&(t.push(s.value),!a||t.length!==a);n=!0);}catch(c){r=!0,l=c}finally{try{!n&&i.return&&i.return()}finally{if(r)throw l}}return t}(e,a);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),P=function(e){if(Array.isArray(e)){for(var a=0,t=Array(e.length);a<e.length;a++)t[a]=e[a];return t}return Array.from(e)},O=function e(a,t,n){var r=t.values,l=t.errors,s=t.touched;return function(i){var c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],o=arguments[2],u=i?[].concat(P(c),[i]):[];return o.add(function(e){return a.validateParty(t.values,e,{path:u,validate:function(e,r){return n.validate(e,r,{values:a.getValuesParty(t.values,{path:c})})}})}),k({values:r,touched:s,errors:l},F(a,t,u,n,o),function(e,a,t,n,r){var l=F(e,a,t,n),s=w(function(n,r){return a.dispatchValues(e.setValue(a.values,{name:n,value:r,path:t}))},function(n,r){return a.dispatchTouched(e.untouchField(a.touched,{name:n,path:t}))},function(e,a){return l.setError(e,"")});return{onSubmit:function(t){var s=r.pipe(a.errors);e.isValid(s)?n.onSuccess(t,{values:a.values}):(l.touchAllFields(),a.dispatchErrors(s),n.onError(t))},inputProps:function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return void 0===l.getValue(e)&&s(e,a),{name:e,value:l.getValue(e),onChange:function(a){var t=a.target.value;return l.setValue(e,t)},onBlur:function(){l.touchField(e),l.validateField(e)}}},inputCheckboxProps:function(e){var a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return void 0===l.getValue(e)&&s(e,!!a),{name:e,checked:l.getValue(e),onChange:function(){return l.setValue(e,!l.getValue(e))},onBlur:function(){l.touchField(e),l.validateField(e)},type:"checkbox"}}}}(a,t,u,n,o),{party:function(r){var l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{validate:function(){return""}};return e(a,t,k({},l,{initialValues:n.initialValues}))(r,u,o)}})}},C=function(e){return!!e&&"object"===("undefined"===typeof e?"undefined":j(e))&&!Array.isArray(e)},x=function e(a,t){var n,r=t.path,l=void 0===r?[]:r,s=(n=t.path,Array.isArray(n)?n:Array.from(n)),i=s[0],c=s.slice(1),o=t.name,u=t.value;return l.length?k({},a,V({},i,e(a[i]||{},{path:c,name:o,value:u}))):k({},a,V({},o,u))},A=function(e,a){var t=a.path;return(void 0===t?[]:t).reduce(function(e,a){return e[a]},e)},I=function(e,a){var t=a.name,n=a.value,r=a.validate,l=a.path;return x(e,{path:l,name:t,value:function(){if(C(r)){if("function"===typeof r[t])return r[t](n);if("string"===typeof r[t])return r[t]}return"function"===typeof r&&r(t,n)||""}()})},T={getValue:function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=a.path,n=a.name;return t.reduce(function(e,a){return e[a]||{}},e)[n]},setValue:x,setError:function(e,a){var t=a.name,n=a.error,r=a.path;return x(e,{name:t,value:n,path:r})},isValid:function(e){return function e(a,t,n){return Object.values(a).reduce(function(a,n){return C(n)?e(n,t,a):t(a,n)},n)}(e,function(e,a){return e&&""===a},!0)},touchAllFields:function(e){return function e(a,t){return Object.entries(a).reduce(function(a,n){var r=S(n,2),l=r[0],s=r[1];return C(s)?k({},a,V({},l,e(s,t))):k({},a,t([l,s]))},{})}(e,function(e){var a=S(e,2),t=a[0];return a[1],V({},t,!0)})},touchField:function(e,a){var t=a.path,n=void 0===t?[]:t,r=a.name;return x(e,{path:n,name:r,value:!0})},untouchField:function(e,a){var t=a.path,n=void 0===t?[]:t,r=a.name;return x(e,{path:n,name:r,value:!1})},validateField:I,getValuesParty:function(e,a){var t,n,r=a.path;return t=A(e,{path:r}),n=function(e,a){return!C(a)},Object.entries(t).reduce(function(e,a){var t=S(a,2),r=t[0],l=t[1];return n(r,l)?k({},e,V({},r,l)):e},{})},validateParty:function(e,a,t){var n=t.path,r=t.validate,l=A(e,{path:n});return Object.entries(l).reduce(function(e,a){var t=S(a,2),l=t[0],s=t[1];return C(s)?e:I(e,{name:l,value:s,validate:r,path:n})},a)},isValidParty:function(e,a){var t=a.path,n=A(e,{path:t});return!!n&&Object.values(n).reduce(function(e,a){return C(a)?e:""===a&&e},!0)}},G=function(e){var a=Object(n.useState)(e.initialValues||{}),t=S(a,2),r=t[0],l=t[1],s=Object(n.useState)({}),i=S(s,2),c=i[0],o=i[1],u=Object(n.useState)({}),m=S(u,2),d={values:r,touched:c,errors:m[0],dispatchValues:l,dispatchTouched:o,dispatchErrors:m[1]},E=function(){var e=[];return{tasks:e,add:function(a){"function"===typeof a&&(e=[].concat(P(e),[a]))},remove:function(a){e=e.filter(function(e){return a!==e})},pipe:function(a){return e.reduce(function(e,a){return a(e)},a)},run:function(){e.forEach(function(e){e()})}}}();return O(T,d,e)(null,[],E)},D=function(e){var a=(0,e.party)("profile",{validate:function(e,a,t){var n=t.values;return{name:a?"":"Is required",password:/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(a)?"":"Minimum eight characters, at least one letter, one number and one special character",passwordConfirm:a===n.password?"":"password confirm does not match"}[e]}});return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"field"},r.a.createElement("label",{className:"label",htmlFor:"name"},"Name"),r.a.createElement("div",{className:"control has-icons-left"},r.a.createElement("span",{className:"icon is-small is-left"},r.a.createElement("i",{className:"fas fa-user"})),r.a.createElement("input",Object.assign({className:o()("input",{"is-danger":a.shouldShowError("name")})},a.inputProps("name","Gibran")))),r.a.createElement("p",{className:o()("help is-danger",{"is-hidden":!a.shouldShowError("name")})},a.getError("name"))),r.a.createElement("div",{className:"field"},r.a.createElement("label",{className:"label",htmlFor:"name"},"Email"),r.a.createElement("div",{className:"control has-icons-left"},r.a.createElement("span",{className:"icon is-small is-left"},r.a.createElement("i",{className:"fas fa-envelope"})),r.a.createElement("input",Object.assign({className:o()("input",{"is-danger":a.shouldShowError("email")})},a.inputProps("email",""),{placeholder:"email@example.com"}))),r.a.createElement("p",{className:o()("help is-danger",{"is-hidden":!a.shouldShowError("email")})},a.getError("email"))),r.a.createElement("div",{className:"field"},r.a.createElement("label",{className:"label",htmlFor:"password"},"Password"),r.a.createElement("div",{className:"control"},r.a.createElement("input",Object.assign({className:o()("input",{"is-danger":a.shouldShowError("password")}),type:"password"},a.inputProps("password")))),r.a.createElement("p",{className:o()("help is-danger",{"is-hidden":!a.shouldShowError("password")})},a.getError("password"))),r.a.createElement("div",{className:"field"},r.a.createElement("label",{className:"label",htmlFor:"password"},"Password Confirm"),r.a.createElement("div",{className:"control"},r.a.createElement("input",Object.assign({className:o()("input",{"is-danger":a.shouldShowError("passwordConfirm")}),type:"password"},a.inputProps("passwordConfirm")))),r.a.createElement("p",{className:o()("help is-danger",{"is-hidden":!a.shouldShowError("passwordConfirm")})},a.getError("passwordConfirm"))))},M=function(e){var a=(0,e.party)("Address",{validate:function(e,a){return""===a?"Is required":""}});return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"field"},r.a.createElement("label",{className:"label",htmlFor:"street"},"Street"),r.a.createElement("div",{className:"control"},r.a.createElement("input",Object.assign({className:o()("input",{"is-danger":a.shouldShowError("street")}),type:"text"},a.inputProps("street")))),r.a.createElement("p",{className:o()("help is-danger",{"is-hidden":!a.shouldShowError("street")})},a.getError("street"))),r.a.createElement("div",{className:"field"},r.a.createElement("label",{className:"label",htmlFor:"number"},"Number"),r.a.createElement("div",{className:"control"},r.a.createElement("input",Object.assign({className:o()("input",{"is-danger":a.shouldShowError("number")}),type:"text"},a.inputProps("number",0)))),r.a.createElement("p",{className:o()("help is-danger",{"is-hidden":!a.shouldShowError("number")})},a.getError("number"))),r.a.createElement("div",{className:"field"},r.a.createElement("label",{className:"label",htmlFor:"number"},"City"),r.a.createElement("div",{className:"control"},r.a.createElement("div",{className:"select"},r.a.createElement("select",a.inputProps("city","OAX"),r.a.createElement("option",{value:"CQX"},"Colima"),r.a.createElement("option",{value:"CDMX"},"CDMX"),r.a.createElement("option",{value:"GDL"},"Guadalajara"),r.a.createElement("option",{value:"OAX"},"OAXACA"))))))},X=function(e){var a=e.values,t=e.touched,n=e.errors,l=Object(m.a)(e,["values","touched","errors"]);return r.a.createElement("div",l,r.a.createElement("div",{className:"field"},r.a.createElement("div",{className:"control"},r.a.createElement("div",{className:"tags has-addons"},r.a.createElement("span",{className:"tag is-dark"},"object"),r.a.createElement("span",{className:"tag is-primary"},"values"))),r.a.createElement("div",{className:"control"},r.a.createElement("textarea",{className:"textarea is-primary",name:"",id:"",disabled:!0,cols:"50",rows:"10",value:JSON.stringify(a,null,"\t")}))),r.a.createElement("div",{className:"field"},r.a.createElement("div",{className:"control"},r.a.createElement("div",{className:"tags has-addons"},r.a.createElement("span",{className:"tag is-dark"},"object"),r.a.createElement("span",{className:"tag is-info"},"touched"))),r.a.createElement("div",{className:"control"},r.a.createElement("textarea",{className:"textarea is-info",disabled:!0,name:"",id:"",cols:"50",rows:"10",value:JSON.stringify(t,null,"\t")}))),r.a.createElement("div",{className:"field"},r.a.createElement("div",{className:"control"},r.a.createElement("div",{className:"tags has-addons"},r.a.createElement("span",{className:"tag is-dark"},"object"),r.a.createElement("span",{className:"tag is-danger"},"errors"))),r.a.createElement("div",{className:"control"},r.a.createElement("textarea",{className:"textarea is-danger",disabled:!0,name:"",id:"",cols:"50",rows:"10",value:JSON.stringify(n,null,"\t")}))))},z=function(e){var a=Object(n.useState)(!1),t=Object(i.a)(a,2),l=t[0],s=t[1],c=G({onSuccess:function(e){e.preventDefault(),s(!0)},onError:function(e){e.preventDefault()},validate:function(e,a){return{terms:!1===a&&"you must accept terms!",aboutyou:""===a&&"please tell us a little bit about you"}[e]||""}}),u=c.inputProps,m=c.inputCheckboxProps,d=c.values,E=c.touched,f=c.errors,h=c.isValid,p=c.shouldShowError,v=c.getError,g=c.party,b=c.reset,N=c.onSubmit,y=c.validateForm;return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",Object.assign({onSubmit:N},e),r.a.createElement(D,{party:g}),r.a.createElement(M,{party:g}),r.a.createElement("div",{className:"field"},r.a.createElement("div",{className:"control"},r.a.createElement("textarea",Object.assign({className:o()("textarea",{"is-danger":p("aboutyou")})},u("aboutyou"),{placeholder:"tell us something interesting about you ^^",cols:"80",rows:"10"}))),r.a.createElement("p",{className:o()("help is-danger",{"is-hidden":!p("aboutyou")})},v("aboutyou"))),r.a.createElement("div",{className:"field"},r.a.createElement("div",{className:"control"},r.a.createElement("label",{htmlFor:"terms",className:o()("checkbox",{"is-danger":p("aboutyou")})},r.a.createElement("input",Object.assign({id:"terms",type:"checkbox"},m("terms",!1)))," you accept terms and conditions")),r.a.createElement("p",{className:o()("help is-danger",{"is-hidden":!p("terms")})},v("terms"))),r.a.createElement("p",{className:"has-text-grey-dark"},"this form is: ",h()?"valid":"invalid"),r.a.createElement("div",{className:"field"},r.a.createElement("div",{className:"buttons has-addons"},r.a.createElement("button",{className:"button is-primary is-outlined",type:"button",onClick:y},"validate form"),r.a.createElement("button",{className:"button is-dark",type:"button",onClick:b},"reset"),r.a.createElement("button",{className:"button is-success",type:"submit"},"Send")))),r.a.createElement(X,{className:"column",values:d,touched:E,errors:f}),r.a.createElement("div",{className:o()("modal",{"is-active":l})},r.a.createElement("div",{className:"modal-background"}),r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"box has-text-centered has-text-success"},"Validation has passed!")),r.a.createElement("button",{className:"modal-close is-large",onClick:function(){return s(!1)},"aria-label":"close"})))};function J(e){return r.a.createElement("section",{id:"first-section",className:"section has-background-light"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"columns is-multiline"},r.a.createElement("div",{className:"column is-12"},r.a.createElement("h2",{className:"title"},"The useFormless example")),r.a.createElement(z,{className:"column"}))))}var R=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"hero is-dark is-bold is-fullheight"},r.a.createElement("div",{className:"hero-head"},r.a.createElement("header",{className:"navbar"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"navbar-brand"},r.a.createElement("a",{className:"navbar-item"},r.a.createElement("img",{src:"logo-useformless.png",alt:"Logo",width:"60px"})),r.a.createElement("span",{className:"navbar-burger burger","data-target":"navbarMenuHeroC"},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null))),r.a.createElement("div",{id:"navbarMenuHeroC",className:"navbar-menu"},r.a.createElement("div",{className:"navbar-end"},r.a.createElement("a",{className:"navbar-item",href:"#apiSection"},"Docs"),r.a.createElement("a",{className:"navbar-item",href:"https://www.npmjs.com/package/react-useformless"},r.a.createElement("div",{className:"tags has-addons"},r.a.createElement("span",{className:"tag is-dark"},"npm"),r.a.createElement("span",{className:"tag is-info"},"1.2"))),r.a.createElement("span",{className:"navbar-item"},r.a.createElement("a",{className:"button is-dark is-inverted",href:"https://github.com/GeDiez/react-use-formless"},r.a.createElement("span",{className:"icon"},r.a.createElement("i",{className:"fab fa-github"})),r.a.createElement("span",null,"Github")))))))),r.a.createElement("div",{className:"hero-body"},r.a.createElement("div",{className:"container has-text-centered"},r.a.createElement("p",{className:"title"},r.a.createElement("img",{src:"logo-useformless.png",alt:"Logo",width:"230px"})),r.a.createElement("p",{className:"subtitle"},"useFormless is a custom hook, focused to create simple and fast forms"))),r.a.createElement("div",{className:"hero-foot"},r.a.createElement("div",{className:"content has-text-centered"},r.a.createElement("p",{className:"title is-6"},"Show me how"),r.a.createElement("p",{className:"title is-3"},r.a.createElement("a",{href:"#first-section"},r.a.createElement("span",{className:"icon"},r.a.createElement("i",{className:"fas fa-angle-double-down"})))),r.a.createElement("p",null)))),r.a.createElement(J,null),r.a.createElement(v,{id:"apiSection"}),r.a.createElement(y,null),r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"content has-text-centered"},r.a.createElement("p",null,r.a.createElement("strong",null,"useFormless"),". The source code is licensed ",r.a.createElement("a",{href:"http://opensource.org/licenses/mit-license.php"},"MIT"),"."))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[11,2,1]]]);
//# sourceMappingURL=main.3297819a.chunk.js.map