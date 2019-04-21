<h1 align="center">
  <img src="/example/public/logo-useformless.png" alt="logo" />
</h1>

# useFormless

> react-useformless is a simple library that allows you to control forms with react-hooks approach

[![Awesome](https://awesome.re/badge.svg)](https://github.com/rehooks/awesome-react-hooks)
[![Build Status](https://travis-ci.org/GeDiez/react-use-formless.svg?branch=master)](https://travis-ci.org/GeDiez/react-use-formless)
[![styled with standard](https://img.shields.io/badge/styled_with-standard-ff69b4.svg)](https://github.com/standard/standard)

# Getting Started

## Step 1: install it

```bash
$> yarn add react-useformless

$> npm install react-useformless
```

## Step 2: import it 📦

```js
import useFormless from 'react-useformless';
```

## Step 3: state and options

useFormless accepts an optional object that let's you add validations handlers

1. **options(optional)**
```js
{
  initialValues: {
    name: '',
    email: '',
  },
  validate: (name, value) => {
    // This function receives name and value as parameters and will return a string given name
    // You can do your valdiations as follow

    // 1.- Define a object with function validations for each name in the form
    // functions receives the value and return a error for it
    const validators = {
      name: validateNameFunction,
      email: validateEmailFuntion
      // ... else function validations for each field
    }

    // 2.- get the function for given `name` and then is called with tha value
    const errorFn = validators[name]
    return errorFn(value)
  },
  onError: (ev: DOMEvent) => {
    ev.preventDefault()
    // if you decide using onSubmit function provided by formless, this function is fired after submit error
    // It receives DOMevent so you do whatever you want after it ends
  },
  onSuccess: (ev: DOMEvent) => {
    ev.preventDefault()
    //same as error option but it is fired on success
  }
}
```
## Step 4: use it! 💡

Create an instance of useFormless and render it, easy, isn't it? 💃🏻

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

> if you prefer it, get started 🎮 with this snippet in [CodeSandbox](https://codesandbox.io/s/m7z683235j)

# Prerequisites

React hooks are live now, so what are you waiting for?
useFormless is now updated with React v16.8 and ready to use

# API

useFormless provides you a clean and easy-to-use api that you can attach to any component.

>Notice: use react-hooks into functional components.

#### Objects returned:

| Name              | Description                                                           |
| ----------------- | --------------------------------------------------------------------- |
| values: `Object`  | contains all values using the key as name, see example above          |
| errors: `Object`  | contains all errors using the key as name                             |
| touched: `Object` | contains all values have been touched/modified                        |

#### Common behavior for forms:

| Function                                  | Description                                                 |
| ----------------------------------------- | ----------------------------------------------------------- |
| setValue(name: string, value: any) | set a value and validates if it has error                   |
| getValue(name: string)             | get a value given a name                                    |
| setValues({}: values)               | set all values also of party forms but it doesn't fire validations|
| touchFieldname)                    | mark the value passed as touched                            |
| reset()                             | set all values as initialValues Object                      |
| party.create(name: string, { validate: function}))                             | you can create nested forms, this function receives a name and validate option that allow you valdiate this party only, also it work like an object returned by useFormless and another party function to continue adding more nested forms                     |
| validateForm()                   | Run validations, set errors and mark all objects as touched |
| validateValue()                 | Run validations, set errors and mark all objects as touched |
| validateParty(                  | Run validations only for a nested form, set errors and mark all objects as touched |
| isValid: boolean                          | true: is for a valid form, false: is for a invalid form     |


#### Helpers

useFormless split the behavior and the UI, so your components become more resuables.

| Function                         | Description |
| -------------------------------- | ----------- |
| inputProps(name: String): Object | This funtion will return custom props `{name, value, onChange, onBlur}`, pass this object to your input component directly, [see example](#Examples) |
| inputCheckboxProps(name: String): Object | The same for inputProps but for checkbox inputs|
| onSubmit(SyntathicEvent): void  | Handle submit event, this will trigger either onSuccess or onError functions|
| field | an object with functions for fields |
| party | an object qith functions for party forms |
| form | an object qith functions for forms |

> see more about it in the docuemntation [official DOCS](https://gediez.github.io/react-use-formless/)


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
