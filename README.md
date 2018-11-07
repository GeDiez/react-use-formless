<h1 align="center">
  <img src="/example/public/logo-useformless.png" alt="logo" />
</h1>

# useFormless

> react-useformless is a simple library that allows you to control forms with react-hooks approach

[![Build Status](https://travis-ci.org/GeDiez/react-use-formless.svg?branch=master)](https://travis-ci.org/GeDiez/react-use-formless)
[![styled with standard](https://img.shields.io/badge/styled_with-standard-ff69b4.svg)](https://github.com/standard/standard)

[![Awesome](https://awesome.re/badge.svg)](https://github.com/rehooks/awesome-react-hooks)

# Installing

how to install

``` bash
$> yarn add react-useformless

$> npm install react-useformless
```

# Getting Started

Using a form has never been so easy! Try it!

## Step 1 Import it 📦

```js
import { useFormless } from 'react-useformless';
```

## Step2 State and Options

useFormless hook receives two params:

1. **The initial state** so far this hook only receives initialValues as follow;
``` js
{
  initialValues: {
    name: 'Juan Amezcua',
    email: 'juan@email.com',
    // ...others values
  }
}
```

2. **options(optional)** you can validate in just one Object and also add handlers for success or error
```js
{
  validate: ({ values }) => {
    // this must return an Object, it must contain `name: 'string with error or empty string or null'`
    email: validateName(values.email): string
  },
  onError: (ev: DOMEvent) => {
    // if you decide using onSubmit function provided by formless, this function is fired after submit error
    // It receives DOMevent so you do whatever you want after
  },
  onSuccess: (ev: DOMEvent) => {
    //same as error option but it is fired on success
  }
}
```
## Step 3 Use it 💡

Create an instance of useFormless and render it, easy, isn't it? 💃🏻

``` js
// Validate name is a function that receives an Object with values and must return an object that looks like the following:
// Notice: validateName, validateUsername and validateEmail functions must return a string
const validate = ({ values }) => ({
  name: validateName(),
  username: validateUsername(),
  email: validateEmail(),
  //... more validations
});

const { values, errors, inputProps, onSubmit } = useFormeless({ initialValues }, { validate, onSuccess, onError });
```
Finally use it in your Form Component: for instance, we created this component that allow you to see the values, errors and touched values

``` html
return(
  <section>
    {notification && (
      <div>
        <h3>{message}</h3>
        <p style={{color: isValid ? 'green' : 'red'}}>the submit form was {isValid ? 'valid' : 'invalid'}</p>
      </div>
    )}
    <h1>Basic example</h1>
    <form onSubmit={onSubmit}>
      <label htmlFor="name">Name</label>
      <input id="name" type="text" {...inputProps('name')}/>
      <p style={{color: 'red', fontSize: 9}}>{errors.name}</p>
      <label htmlFor="email">email</label>
      <input id="email" type="text" {...inputProps('email')}/>
      <p style={{color: 'red', fontSize: 9}}>{errors.email}</p>
      <input type="submit" value="send"/>
    </form>
    <article style={{border: '1px lightgrey solid', padding: '14px'}}>
      <h2>Values</h2>
      {JSON.stringify(values, null, '\t')}
      <h2>Touched</h2>
      {JSON.stringify(touched, null, '\t')}
      <h2>errors</h2>
      {JSON.stringify(errors, null, '\t')}
    </article>
  </section>
)
```

> if you prefer it, get started 🎮 with this snippet in [CodeSandbox](https://codesandbox.io/s/m7z683235j)

# Prerequisites

This version of formless is based in "16.7.0-alpha.0", you can use it and test it but you must not use it in production environments because react-hooks are still a proposal 👩🏻‍🔬 👨🏻‍🔬 ⚗️

# API

useFormless provides you some methods so you can add them to your Component.

>Notice: use react-hooks into functional components.

Objects returned

| Name              | Description                                                           |
| ----------------- | --------------------------------------------------------------------- |
| values: `Object`  | an Object `{}` contains all values using the key as name, see example above |
| errors: `Object`  | an Object `{}` contains all errors using the key as name              |
| touched: `Object` | an Object `{}` contains all values have been touched/modified         |

Function for handle values

| Function                                  | Description                                                 |
| ----------------------------------------- | ----------------------------------------------------------- |
| setValue(name: string, value: any) : void | set a value and validates if it has errors                  |
| touchValue(name): void                    | mark the value passed as touched                            |
| reset(): void                             | set all values as initialValues Object                      |
| setAllValues({}: values): void            | set all values with the new object of values passed         |
| validateValues(): boolean                 | Run validations, set errors and mark all objects as touched |

Functions for DOM interface

When we created useFormless, we thought about separating logic and DOM logic, because it is more resuable.
we define 2 method in order to handle inputs and form interface directly.

| Function                         | Description |
| -------------------------------- | ----------- |
| inputProps(name: String): Object | This funtion will return custom props `{name, value, onChange, onBlur}`, pass this object to your input component directly, [see example](#Examples) |
| onSubmit(event: DOMEvent): void  | Handle submit event, this will trigger either onSuccess or onError functions|

### Examples

```<input id="my-input" type="text" {...inputProps('email')}>```

```<form id="my-form" onSubmit={onSubmit}>```

# Running the tests

In order to run tests use `jest` and `react-testing-library`

# Built With

* [react16.7-alpha.0](https://reactjs.org/docs/hooks-intro.html) - The web framework used
* [yarn](https://yarnpkg.com/en/) - For dependencies management

# Authors

* **Gibran Lopez** [gediez](https://github.com/GeDiez)
* **Crystal Stream** [CrystalStream](https://github.com/CrystalStream)

# Acknowledgments

* Similar libraries; formik and redux-form
