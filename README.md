<h1 align="center">
  <img src="/example/public/logo-useformless.png" alt="logo" />
</h1>

# useFormless

> react-useformless is a simple library that allows you to control forms with react-hooks approach

[![Awesome](https://awesome.re/badge.svg)](https://github.com/rehooks/awesome-react-hooks)
[![Build Status](https://travis-ci.org/GeDiez/react-use-formless.svg?branch=master)](https://travis-ci.org/GeDiez/react-use-formless)
[![styled with standard](https://img.shields.io/badge/styled_with-standard-ff69b4.svg)](https://github.com/standard/standard)


Why useFormless?

- Works with nested forms 🎉
- Zero dependencies 🆓
- Includes helpers for field and form tags, it makes a easy for use

# Getting Started

## Step 1: Install it

```bash
$ yarn add react-useformless

$ npm install react-useformless
```

## Step 2: Import it 📦

```js
import useFormless from 'react-useformless';
```

## Step 3: Set state and options

useFormless accepts an optional object that lets you add validations handlers

1. **Options(optional)**
```js
{
 initialValues: {
   name: '',
   email: '',
 },
 validate: (name, value) => {
   // This function receives [name and value] as parameters and will return either a string with the error or an empty string.
   // You can do your validations as follow

   // 1.- Define an object with function validations for each name in the form,
   // functions receive the value and return an error for the field
   const validators = {
     name: validateNameFunction,
     email: validateEmailFunction
     // ... else function validations for each field
   }

   // 2.- Get the function for the given `name` and then call it with the passed value
   const errorFn = validators[name]
   return errorFn(value)
 },
 onError: (ev: DOMEvent, { values, errors }) => {
   ev.preventDefault()
   // If you decide using onSubmit function provided by formless, this function will be fired after the submit error
   // It receives DOMevent so you do whatever you want after it ends
 },
 onSuccess: (ev: DOMEvent, { values }) => {
   ev.preventDefault()
   //Same as error option, but this one is fired on success
 }
}
```
## Step 4: Use it! 💡

Create an instance of useFormless and render it. Easy, isn't it? 💃🏻

```jsx

const { values, errors, inputProps, onSubmit } = useFormless({ initialValues, validate, onSuccess, onError });

return(
 <section>
   <h1>Basic example</h1>
   <form onSubmit={onSubmit}>
     <label htmlFor="name">Name</label>
     <input id="name" type="text" {...inputProps('name', 'armando')}/>
     <p style={{color: 'red', fontSize: 9}}>{errors.name}</p>
     <label htmlFor="email">email</label>
     <input id="email" type="password" {...inputProps('password')}/>
     <p style={{color: 'red', fontSize: 9}}>{errors.email}</p>
     <input type="submit" value="Login"/>
   </form>
 </section>
)
```

> if you prefer it, get started 🎮 with this snippet in [CodeSandbox](https://codesandbox.io/s/vyw7k42o87)

# Prerequisites

React hooks are live now, so what are you waiting for?
useFormless is now updated with React v16.8 and ready to use

# API

useFormless provides you a clean and easy-to-use API that you can attach to any component.

>Notice: Use react-hooks into functional components.

#### Objects returned:

| Name              | Description                                                           |
| ----------------- | --------------------------------------------------------------------- |
| values: `Object`  | contains all values using the key as name, see example above          |
| errors: `Object`  | contains all errors using the key as name                             |
| touched: `Object` | contains all values that have been touched/modified                        |

#### Common behavior for forms:

| Function                                  | Description                                                 |
| ----------------------------------------- | ----------------------------------------------------------- |
| setValue(name: string, value: any) | set a value and validate it                   |
| getValue(name: string)             | get a value given a name                                    |
| setValues({}: values)               | set all values (including party forms) but it doesn't trogger validations|
| touchFieldname)                    | mark the passed value as touched                            |
| reset()                             | set all values as initialValues Object                      |
| party.create(name: string, { validate: function}))                             | you can create nested forms, this function receives a name and validates option that allows you to validate this party only, also it works like an object returned by useFormless and another party function to continue adding more nested forms                     |
| validateForm()                   | Run validations, set errors and mark all objects as touched |
| validateValue()                 | Run validations, set errors and mark all objects as touched |
| validateParty(                  | Run validations only for a nested form, set errors and mark all objects as touched |
| isValid: boolean                          | true: is for a valid form, false: is for an invalid form     |


#### Helpers

useFormless splits the behavior and the UI, so your components become more reusables.

| Function                         | Description |
| -------------------------------- | ----------- |
| inputProps(name: String): Object | This function will return custom props `{name, value, onChange, onBlur}`, pass this object to your input component directly, [see example](#Examples) |
| inputCheckboxProps(name: String): Object | Same as inputProps but for checkbox inputs|
| onSubmit(SyntacticEvent): void  | Handle submit event, this will trigger either onSuccess or onError functions|
| field | an object with functions for fields |
| party | an object with functions for party forms |
| form | an object with functions for forms |

> See more about it in the documentation [official DOCS](https://gediez.github.io/react-use-formless/)


### Examples

```<form id="my-form" onSubmit={onSubmit}>```

```<input id="my-input" type="text" {...inputProps('email')}>```

# Contribute

## Running the tests

useFormless uses `jest` and `react-testing-library`

# Built With

* [react16.8](https://reactjs.org/docs/hooks-intro.html) - The web framework used
* [yarn](https://yarnpkg.com/en/) - For dependencies management

# Authors

* **Gibran Lopez** [gediez](https://github.com/GeDiez)
* **Crystal Stream** [CrystalStream](https://github.com/CrystalStream)

# Acknowledgments

* Similar libraries; [formik](https://jaredpalmer.com/formik/) and [redux-form](https://redux-form.com/8.1.0/)

# License

useFormless is [MIT licensed](https://github.com/facebook/react/blob/master/LICENSE)
