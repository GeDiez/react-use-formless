(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,a,t){},22:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(6),s=t.n(l),c=(t(14),t(2));var i=t(4),o=t(7),u=t.n(o),m=t(3),d=t.n(m);d.a.registerLanguage("scss",t(19)),d.a.registerLanguage("javascript",t(20)),d.a.registerLanguage("shell",t(21));var h=d.a;function E(e){var a=e.children,t=Object(i.a)(e,["children"]);return r.a.createElement(u.a,Object.assign({highlightjs:h},t),a)}var f={1.1:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:"title is-3 is-spaced"},"Introduction"),r.a.createElement("p",{className:"subtitle is-5"},"useFormless the custom hook to handle forms in React ",r.a.createElement("i",{className:"fab fa-react"})),r.a.createElement("div",{className:"content"},"React is the most known library for create UI's but since version 16.8 included a new API called HOOK's that its first concern is separate behavior between JSX structure and behavior. If that words dont make you sense I suggest read it into its ",r.a.createElement("a",{href:"https://reactjs.org/docs/hooks-intro.html"},"official documentation")),r.a.createElement("div",{className:"box"},r.a.createElement("i",null,"Hooks solve a wide variety of seemingly unconnected problems in React that we\u2019ve encountered over five years of writing and maintaining tens of thousands of components. Whether you\u2019re learning React, use it daily, or even prefer a different library with a similar component model, you might recognize some of these problems.")))},1.2:function(e){var a=e.setContent;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"title is2"},"Getting Started"),r.a.createElement("h3",{className:"title is-4"},"Installing"),r.a.createElement("p",null,"Download from npm through either yarn or npx"),r.a.createElement(E,{languages:["shell"]},"$ yarn add --save react-useformless"),"or",r.a.createElement(E,{languages:["shell"]},"$ npx i react-useformless"),r.a.createElement("h3",{className:"title is-4"},"First import it"),r.a.createElement(E,{languages:["javascript"]},'import React from "react";\nimport useFormless from "react-useformless";'),r.a.createElement("h3",{className:"title is-4"},"Create an useFormless object"),r.a.createElement("p",null,"before we create an instance of useFormless, it could take an object of options to initialize the state of the form, all of this options are optionals "),r.a.createElement(E,{languages:["javascript"]},"{\n    initialValues: {...},\n    validate: function(name, value) {...},\n    onSuccess: function(ev) {...},\n    onError: function(ev) {...},\n}"),r.a.createElement("ol",null,r.a.createElement("li",null,r.a.createElement("strong",null,"initialValues")," is an object with the values by default, it will read by all nested forms, for party forms see ",r.a.createElement("a",{href:"#api",onClick:function(){return a("2.10")}},"this section")),r.a.createElement("li",null,r.a.createElement("strong",null,"validate")," is a function to validate an field when it has changed",r.a.createElement("ol",null,r.a.createElement("li",null,r.a.createElement("strong",null,"params")," receives name and new value of an field, which has changed"),r.a.createElement("li",null,r.a.createElement("strong",null,"return")," a string with the error or null/empty string in otherwise"))),r.a.createElement("li",null,r.a.createElement("strong",null,"onSuccess")," it function will be trigger once that form is submitted and the validations are passed"),r.a.createElement("li",null,r.a.createElement("strong",null,"onError")," it function will be trigger if form is invalided. ",r.a.createElement("br",null))),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("i",null,"* onSucces, onError functions both receive as param the Event object, so you can handle it whatever you want"))),r.a.createElement("h3",{className:"title is-4"},"useFormless in action"),r.a.createElement("p",null,"Finally you can use the useFormless to assign common behavior of formularies to your form component, the easy way to start is through of some helpers."),r.a.createElement("ul",null,r.a.createElement("li",null,"inputProps(name, initialValue)"),r.a.createElement("li",null,"inputCheckboxProps(name, initialValue)"),r.a.createElement("li",null,"onSubmit(event)")),r.a.createElement(E,{languages:["javascript"]},'\nfunction MyForm() {\n  const { inputProps, inputCheckboxProps, onSubmit } = useFormless()\n\n  return (\n    <form onSubmit={onSubmit}>\n      <div class="field">\n        <div class="control">\n          <textarea className="textarea" {...inputProps(\'aboutyou\')} placeholder="tell us something interesting about you ^^" cols="80" rows="10"/>\n        </div>\n      </div>\n      <div class="field">\n        <div class="control">\n          <label htmlFor="terms" className="checkbox">\n            <input id="terms" type="checkbox" {...inputCheckboxProps(\'terms\', false)} /> you accept terms and conditions\n          </label>\n        </div>\n      </div>\n      <div className="field">\n        <div class="buttons has-addons">\n          <button className="button is-primary" type="button" onClick={reset}>reset</button>\n          <button className="button is-info" type="submit">Send</button>\n        </div>\n      </div>\n    </form>\n  )\n}\n'))}};function v(e){var a=Object(n.useState)("1.2"),t=Object(c.a)(a,2),l=t[0],s=t[1],i=f[l]||function(){return r.a.createElement("h3",null,"No content found")};return console.log(i),r.a.createElement("section",{id:"api",className:"section"},r.a.createElement("div",{className:"container"},r.a.createElement("h2",{className:"title is-h2"},"API"),r.a.createElement("div",{className:"columns"},r.a.createElement("aside",{className:"menu column is-4"},r.a.createElement("p",{className:"menu-label"},"General"),r.a.createElement("ul",{className:"menu-list"},r.a.createElement("li",null,r.a.createElement("a",{onClick:function(){return s("1.1")}},"Introduction")),r.a.createElement("li",null,r.a.createElement("a",{onClick:function(){return s("1.2")}},"Getting Started"))),r.a.createElement("p",{className:"menu-label"},"Variables and Funtions"),r.a.createElement("ul",{className:"menu-list"},r.a.createElement("li",null,r.a.createElement("a",{onClick:function(){return s("2.1")}},"values, touched and error objects")),r.a.createElement("li",null,r.a.createElement("a",{onClick:function(){return s("2.2")}},"getValue(name)")),r.a.createElement("li",null,r.a.createElement("a",{onClick:function(){return s("2.3")}},"setValue(name, value)")),r.a.createElement("li",null,r.a.createElement("a",{onClick:function(){return s("2.4")}},"setValues(values)")),r.a.createElement("li",null,r.a.createElement("a",{onClick:function(){return s("2.5")}},"touchValue(name)")),r.a.createElement("li",null,r.a.createElement("a",{onClick:function(){return s("2.6")}},"setError(name, value)")),r.a.createElement("li",null,r.a.createElement("a",{onClick:function(){return s("2.7")}},"validateValue(name)")),r.a.createElement("li",null,r.a.createElement("a",{onClick:function(){return s("2.8")}},"reset()")),r.a.createElement("li",null,r.a.createElement("a",{onClick:function(){return s("2.9")}},"isValid")),r.a.createElement("li",null,r.a.createElement("a",{onClick:function(){return s("2.10")}},"party forms"))),r.a.createElement("p",{className:"menu-label"},"Helpers for React"),r.a.createElement("ul",{className:"menu-list"},r.a.createElement("li",null,r.a.createElement("a",null,"inputProps(name, initialValue)")),r.a.createElement("li",null,r.a.createElement("a",null,"inputCheckboxProps(name, initialValue)")),r.a.createElement("li",null,r.a.createElement("a",null,"onSubmit(SyntathicEvent)")))),r.a.createElement("div",{className:"column is-8"},r.a.createElement("div",{className:"content is-scrollable"},r.a.createElement(i,{setContent:s}))))))}var p={name:"",username:"",avatar:"",url:"",bio:""};function b(e){var a=Object(n.useState)(p),t=Object(c.a)(a,2),r=t[0],l=t[1];return Object(n.useEffect)(function(){(function(e){return fetch("https://api.github.com/users/".concat(e)).then(function(e){return e.json()}).then(function(e){return{name:e.name,username:e.login,avatar:e.avatar_url,url:e.html_url,bio:e.bio}})})(e).then(function(e){l(e)})},[e]),r}function g(e){var a=e.profile;return r.a.createElement("div",{className:"box"},r.a.createElement("article",{className:"media"},r.a.createElement("div",{className:"media-left"},r.a.createElement("figure",{className:"image is-64x64"},r.a.createElement("img",{src:a.avatar,alt:"avatar github user"}))),r.a.createElement("div",{className:"media-content"},r.a.createElement("div",{className:"content"},r.a.createElement("p",null,r.a.createElement("strong",null,a.name)," ",r.a.createElement("small",null,a.username),r.a.createElement("br",null),a.bio)),r.a.createElement("nav",{className:"level is-mobile"},r.a.createElement("div",{className:"level-left"},r.a.createElement("a",{className:"level-item","aria-label":"reply",href:a.url},r.a.createElement("span",{className:"icon is-small"},r.a.createElement("i",{className:"fab fa-github","aria-hidden":"true"}))))))))}function N(e){var a=b("GeDiez"),t=b("CrystalStream");return r.a.createElement("section",{className:"section has-background-grey-lighter"},r.a.createElement("div",{className:"container"},r.a.createElement("h2",{className:"title is-2"},"Authors"),r.a.createElement("div",{className:"columns"},r.a.createElement("div",{className:"column is-4"},r.a.createElement(g,{profile:a})),r.a.createElement("div",{className:"column is-4"},r.a.createElement(g,{profile:t})))))}var y=function(){for(var e=arguments.length,a=Array(e),t=0;t<e;t++)a[t]=arguments[t];return function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return a.forEach(function(e){return e.apply(void 0,t)})}},w=function(e,a,t,n,r){var l=n.initialValues,s=void 0===l?{}:l,c=n.validate,i=void 0===c?function(){return""}:c,o=y(function(n,r){return a.dispatchTouched(e.touchField(a.touched,{name:n,path:t}))},function(n,r){return a.dispatchValues(e.setValue(a.values,{name:n,value:r,path:t}))}),u=function(){return a.dispatchTouched(e.touchAllFields(a.values))},m=y(function(){return a.dispatchValues(s)},function(){return a.dispatchErrors({})}),d=e.isValid(a.errors),h=e.isValidParty(a.errors,{path:t});return{getValue:function(n){return e.getValue(a.values,{name:n,path:t})},setValue:o,setValues:function(e){return a.dispatchValues(e)},getError:function(n){return e.getValue(a.errors,{path:t,name:n})},setError:function(n,r){return a.dispatchErrors(e.setError(a.errors,{name:n,error:r,path:t}))},shouldShowError:function(n){return e.getValue(a.touched,{path:t,name:n})&&""!==e.getValue(a.errors,{path:t,name:n})},touchField:function(n){return a.dispatchTouched(e.touchField(a.touched,{name:n,path:t}))},touchAllFields:u,validateField:function(n){return a.dispatchErrors(e.validateField(a.errors,{name:n,value:e.getValue(a.values,{name:n,path:t}),path:t,validate:function(e,t){return i(e,t,{values:a.values,touched:a.touched})}}))},validateForm:function(){var t=r.pipe(a.errors);e.isValid(t)||(u(),a.dispatchErrors(t))},reset:m,isValid:d,isValidParty:h}},k="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},V=function(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e},S=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},j=function(){return function(e,a){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,a){var t=[],n=!0,r=!1,l=void 0;try{for(var s,c=e[Symbol.iterator]();!(n=(s=c.next()).done)&&(t.push(s.value),!a||t.length!==a);n=!0);}catch(i){r=!0,l=i}finally{try{!n&&c.return&&c.return()}finally{if(r)throw l}}return t}(e,a);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),F=function(e){if(Array.isArray(e)){for(var a=0,t=Array(e.length);a<e.length;a++)t[a]=e[a];return t}return Array.from(e)},x=function e(a,t,n){var r=t.values,l=t.errors,s=t.touched;return function(c){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],o=arguments[2],u=c?[].concat(F(i),[c]):[];return o.add(function(e){return a.validateParty(t.values,e,{path:u,validate:n.validate})}),S({values:r,touched:s,errors:l},w(a,t,u,n,o),function(e,a,t,n,r){var l=w(e,a,t,n),s=y(function(n,r){return a.dispatchValues(e.setValue(a.values,{name:n,value:r,path:t}))},function(n,r){return a.dispatchTouched(e.untouchField(a.touched,{name:n,path:t}))},function(e,a){return l.setError(e,"")});return{onSubmit:function(t){var s=r.pipe(a.errors);e.isValid(s)?n.onSuccess(t,{values:a.values}):(l.touchAllFields(),a.dispatchErrors(s),n.onError(t))},inputProps:function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return void 0===l.getValue(e)&&s(e,a),{name:e,value:l.getValue(e),onChange:function(a){var t=a.target.value;return l.setValue(e,t)},onBlur:function(){l.touchField(e),l.validateField(e)}}},inputCheckboxProps:function(e){var a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return void 0===l.getValue(e)&&s(e,!!a),{name:e,checked:l.getValue(e),onChange:function(){return l.setValue(e,!l.getValue(e))},onBlur:function(){l.touchField(e),l.validateField(e)},type:"checkbox"}}}}(a,t,u,n,o),{party:function(r){var l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{validate:function(){return""}};return e(a,t,S({},l,{initialValues:n.initialValues}))(r,u,o)}})}},C=function(e){return"object"===("undefined"===typeof e?"undefined":k(e))&&!Array.isArray(e)},O=function e(a,t){var n,r=t.path,l=void 0===r?[]:r,s=(n=t.path,Array.isArray(n)?n:Array.from(n)),c=s[0],i=s.slice(1),o=t.name,u=t.value;return l.length?S({},a,V({},c,e(a[c]||{},{path:i,name:o,value:u}))):S({},a,V({},o,u))},A=function(e,a){var t=a.path;return(void 0===t?[]:t).reduce(function(e,a){return e[a]},e)},P=function(e,a){var t=a.name,n=a.value,r=a.validate,l=a.path;return O(e,{path:l,name:t,value:r(t,n)||""})},I={getValue:function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=a.path,n=a.name;return t.reduce(function(e,a){return e[a]||{}},e)[n]},setValue:O,setError:function(e,a){var t=a.name,n=a.error,r=a.path;return O(e,{name:t,value:n,path:r})},isValid:function(e){return function e(a,t,n){return Object.values(a).reduce(function(a,n){return C(n)?e(n,t,a):t(a,n)},n)}(e,function(e,a){return e&&""===a},!0)},isValidParty:function(e,a){var t=a.path,n=A(e,{path:t});return!!n&&Object.values(n).reduce(function(e,a){return C(a)?e:""===a&&e},!0)},touchAllFields:function(e){return function e(a,t){return Object.entries(a).reduce(function(a,n){var r=j(n,2),l=r[0],s=r[1];return C(s)?S({},a,V({},l,e(s,t))):S({},a,t([l,s]))},{})}(e,function(e){var a=j(e,2),t=a[0];return a[1],V({},t,!0)})},touchField:function(e,a){var t=a.path,n=void 0===t?[]:t,r=a.name;return O(e,{path:n,name:r,value:!0})},untouchField:function(e,a){var t=a.path,n=void 0===t?[]:t,r=a.name;return O(e,{path:n,name:r,value:!1})},validateField:P,validateParty:function(e,a,t){var n=t.path,r=t.validate,l=A(e,{path:n});return Object.entries(l).reduce(function(e,a){var t=j(a,2),l=t[0],s=t[1];return C(s)?e:P(e,{name:l,value:s,validate:r,path:n})},a)}},G=function(e){var a=Object(n.useState)(e.initialValues||{}),t=j(a,2),r=t[0],l=t[1],s=Object(n.useState)({}),c=j(s,2),i=c[0],o=c[1],u=Object(n.useState)({}),m=j(u,2),d={values:r,touched:i,errors:m[0],dispatchValues:l,dispatchTouched:o,dispatchErrors:m[1]},h=function(){var e=[];return{tasks:e,add:function(a){"function"===typeof a&&(e=[].concat(F(e),[a]))},remove:function(a){e=e.filter(function(e){return a!==e})},pipe:function(a){return e.reduce(function(e,a){return a(e)},a)},run:function(){e.forEach(function(e){e()})}}}();return x(I,d,e)(null,[],h)},T=t(1),D=t.n(T),M=function(e){var a=(0,e.party)("profile",{validate:function(e,a){return{password:/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(a)?"":"Minimum eight characters, at least one letter, one number and one special character",name:a?"":"Is required"}[e]}});return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:"has-text-grey-dark"},"this partyform is: ",a.isValidParty?"valid":"invalid"),r.a.createElement("p",null),r.a.createElement("div",{className:"field"},r.a.createElement("label",{className:"label",htmlFor:"name"},"Name"),r.a.createElement("div",{className:"control has-icons-left"},r.a.createElement("span",{className:"icon is-small is-left"},r.a.createElement("i",{className:"fas fa-user"})),r.a.createElement("input",Object.assign({className:D()("input",{"is-danger":a.shouldShowError("name")})},a.inputProps("name","Gibran")))),r.a.createElement("p",{className:D()("help is-danger",{"is-hidden":!a.shouldShowError("name")})},a.getError("name"))),r.a.createElement("div",{className:"field"},r.a.createElement("label",{className:"label",htmlFor:"password"},"Password"),r.a.createElement("div",{className:"control"},r.a.createElement("input",Object.assign({className:D()("input",{"is-danger":a.shouldShowError("password")}),type:"password"},a.inputProps("password")))),r.a.createElement("p",{className:D()("help is-danger",{"is-hidden":!a.shouldShowError("password")})},a.getError("password"))))},X=function(e){var a=(0,e.party)("Address",{validate:function(e,a){return""===a?"Is required":""}});return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"field"},r.a.createElement("label",{className:"label",htmlFor:"street"},"Street"),r.a.createElement("div",{className:"control"},r.a.createElement("input",Object.assign({className:D()("input",{"is-danger":a.shouldShowError("street")}),type:"text"},a.inputProps("street")))),r.a.createElement("p",{className:D()("help is-danger",{"is-hidden":!a.shouldShowError("street")})},a.getError("street"))),r.a.createElement("div",{className:"field"},r.a.createElement("label",{className:"label",htmlFor:"number"},"Number"),r.a.createElement("div",{className:"control"},r.a.createElement("input",Object.assign({className:D()("input",{"is-danger":a.shouldShowError("number")}),type:"text"},a.inputProps("number",0)))),r.a.createElement("p",{className:D()("help is-danger",{"is-hidden":!a.shouldShowError("number")})},a.getError("number"))),r.a.createElement("div",{className:"field"},r.a.createElement("label",{className:"label",htmlFor:"number"},"City"),r.a.createElement("div",{className:"control"},r.a.createElement("div",{className:"select"},r.a.createElement("select",a.inputProps("city","OAX"),r.a.createElement("option",{value:"CQX"},"Colima"),r.a.createElement("option",{value:"CDMX"},"CDMX"),r.a.createElement("option",{value:"GDL"},"Guadalajara"),r.a.createElement("option",{value:"OAX"},"OAXACA"))))))},z=function(e){var a=e.values,t=e.touched,n=e.errors,l=Object(i.a)(e,["values","touched","errors"]);return r.a.createElement("div",l,r.a.createElement("div",{className:"field"},r.a.createElement("div",{className:"control"},r.a.createElement("div",{className:"tags has-addons"},r.a.createElement("span",{className:"tag is-dark"},"object"),r.a.createElement("span",{className:"tag is-primary"},"values"))),r.a.createElement("div",{className:"control"},r.a.createElement("textarea",{className:"textarea is-primary",name:"",id:"",disabled:!0,cols:"50",rows:"10",value:JSON.stringify(a,null,"\t")}))),r.a.createElement("div",{className:"field"},r.a.createElement("div",{className:"control"},r.a.createElement("div",{className:"tags has-addons"},r.a.createElement("span",{className:"tag is-dark"},"object"),r.a.createElement("span",{className:"tag is-info"},"touched"))),r.a.createElement("div",{className:"control"},r.a.createElement("textarea",{className:"textarea is-info",disabled:!0,name:"",id:"",cols:"50",rows:"10",value:JSON.stringify(t,null,"\t")}))),r.a.createElement("div",{className:"field"},r.a.createElement("div",{className:"control"},r.a.createElement("div",{className:"tags has-addons"},r.a.createElement("span",{className:"tag is-dark"},"object"),r.a.createElement("span",{className:"tag is-danger"},"errors"))),r.a.createElement("div",{className:"control"},r.a.createElement("textarea",{className:"textarea is-danger",disabled:!0,name:"",id:"",cols:"50",rows:"10",value:JSON.stringify(n,null,"\t")}))))},J=function(e){var a=Object(n.useState)(!1),t=Object(c.a)(a,2),l=t[0],s=t[1],i=G({onSuccess:function(e){e.preventDefault(),s(!0)},onError:function(e){e.preventDefault()},validate:function(e,a){return{terms:!1===a&&"you must accept terms!",aboutyou:""===a&&"please tell us a little bit about you"}[e]||""}}),o=i.inputProps,u=i.inputCheckboxProps,m=i.values,d=i.touched,h=i.errors,E=i.isValid,f=i.shouldShowError,v=i.getError,p=i.party,b=i.reset,g=i.onSubmit,N=i.validateForm;return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",Object.assign({onSubmit:g},e),r.a.createElement(M,{party:p}),r.a.createElement(X,{party:p}),r.a.createElement("div",{className:"field"},r.a.createElement("div",{className:"control"},r.a.createElement("textarea",Object.assign({className:D()("textarea",{"is-danger":f("aboutyou")})},o("aboutyou"),{placeholder:"tell us something interesting about you ^^",cols:"80",rows:"10"}))),r.a.createElement("p",{className:D()("help is-danger",{"is-hidden":!f("aboutyou")})},v("aboutyou"))),r.a.createElement("div",{className:"field"},r.a.createElement("div",{className:"control"},r.a.createElement("label",{htmlFor:"terms",className:D()("checkbox",{"is-danger":f("aboutyou")})},r.a.createElement("input",Object.assign({id:"terms",type:"checkbox"},u("terms",!1)))," you accept terms and conditions")),r.a.createElement("p",{className:D()("help is-danger",{"is-hidden":!f("terms")})},v("terms"))),r.a.createElement("p",{className:"has-text-grey-dark"},"this form is: ",E?"valid":"invalid"),r.a.createElement("div",{className:"field"},r.a.createElement("div",{className:"buttons has-addons"},r.a.createElement("button",{className:"button is-primary is-outlined",type:"button",onClick:N},"validate form"),r.a.createElement("button",{className:"button is-dark",type:"button",onClick:b},"reset"),r.a.createElement("button",{className:"button is-success",type:"submit"},"Send")))),r.a.createElement(z,{className:"column",values:m,touched:d,errors:h}),r.a.createElement("div",{class:D()("modal",{"is-active":l})},r.a.createElement("div",{class:"modal-background"}),r.a.createElement("div",{class:"modal-content"},r.a.createElement("div",{className:"box has-text-centered has-text-success"},"Validation has passed!")),r.a.createElement("button",{class:"modal-close is-large",onClick:function(){return s(!1)},"aria-label":"close"})))};function L(e){return r.a.createElement("section",{id:"first-section",className:"section has-background-light"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"columns is-multiline"},r.a.createElement("div",{className:"column is-12"},r.a.createElement("h2",{className:"title"},"The useFormless example")),r.a.createElement(J,{className:"column"}))))}var R=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"hero is-dark is-bold is-fullheight"},r.a.createElement("div",{className:"hero-head"},r.a.createElement("header",{className:"navbar"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"navbar-brand"},r.a.createElement("a",{className:"navbar-item"},r.a.createElement("img",{src:"logo-useformless.png",alt:"Logo",width:"60px"})),r.a.createElement("span",{className:"navbar-burger burger","data-target":"navbarMenuHeroC"},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null))),r.a.createElement("div",{id:"navbarMenuHeroC",className:"navbar-menu"},r.a.createElement("div",{className:"navbar-end"},r.a.createElement("a",{className:"navbar-item",href:"https://www.npmjs.com/package/react-useformless"},r.a.createElement("div",{className:"tags has-addons"},r.a.createElement("span",{className:"tag is-dark"},"npm"),r.a.createElement("span",{className:"tag is-info"},"1.2"))),r.a.createElement("span",{className:"navbar-item"},r.a.createElement("a",{className:"button is-dark is-inverted",href:"https://github.com/GeDiez/react-use-formless"},r.a.createElement("span",{className:"icon"},r.a.createElement("i",{className:"fab fa-github"})),r.a.createElement("span",null,"Github")))))))),r.a.createElement("div",{className:"hero-body"},r.a.createElement("div",{className:"container has-text-centered"},r.a.createElement("p",{className:"title"},r.a.createElement("img",{src:"logo-useformless.png",alt:"Logo",width:"230px"})),r.a.createElement("p",{className:"subtitle"},"useFormless is a custom hook, focused to create simple and fast forms"))),r.a.createElement("div",{className:"hero-foot"},r.a.createElement("div",{className:"content has-text-centered"},r.a.createElement("p",{className:"title is-6"},"Show me how"),r.a.createElement("p",{className:"title is-3"},r.a.createElement("a",{href:"#first-section"},r.a.createElement("span",{className:"icon"},r.a.createElement("i",{className:"fas fa-angle-double-down"})))),r.a.createElement("p",null)))),r.a.createElement(L,null),r.a.createElement(v,null),r.a.createElement(N,null),r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"content has-text-centered"},r.a.createElement("p",null,r.a.createElement("strong",null,"useFormless"),". The source code is licensed ",r.a.createElement("a",{href:"http://opensource.org/licenses/mit-license.php"},"MIT"),"."))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,a,t){e.exports=t(22)}},[[8,2,1]]]);
//# sourceMappingURL=main.ec6f6006.chunk.js.map