<h1 align="center">
  <img src="/example/public/logo-useformless.png" alt="logo" />
</h1>

# useFormless

> react-useformless is a simple library that allows you to control forms with react-hooks approach

[![Awesome](https://awesome.re/badge.svg)](https://github.com/rehooks/awesome-react-hooks)
[![Build Status](https://travis-ci.org/GeDiez/react-use-formless.svg?branch=master)](https://travis-ci.org/GeDiez/react-use-formless)
[![styled with standard](https://img.shields.io/badge/styled_with-standard-ff69b4.svg)](https://github.com/standard/standard)

# Installing

how to install

```bash
$> yarn add react-useformless

$> npm install react-useformless
```

# Getting Started

## Step 1 Import it 📦

```js
import useFormless from 'react-useformless';
```

## Step 2 State and Options

useFormless hook receives:

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
    // if you decide using onSubmit function provided by formless, this function is fired after submit error
    // It receives DOMevent so you do whatever you want after it ends
  },
  onSuccess: (ev: DOMEvent) => {
    //same as error option but it is fired on success
  }
}
```
## Step 3 Use it 💡

Create an instance of useFormless and render it, easy, isn't it? 💃🏻

```jsx

const { values, errors, inputProps, onSubmit } = useFormeless({ initialValues }, { validate, onSuccess, onError });

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

React hooks already are stables, so what are you waiting for?
useFormless is now updated with React v16.8 and reasy to use

# API

useFormless provides you some methods so you can add them to your Component.

>Notice: use react-hooks into functional components.

Objects returned

| Name              | Description                                                           |
| ----------------- | --------------------------------------------------------------------- |
| values: `Object`  | an Object `{}` contains all values using the key as name, see example above |
| errors: `Object`  | an Object `{}` contains all errors using the key as name              |
| touched: `Object` | an Object `{}` contains all values have been touched/modified         |

common behavior for forms

| Function                                  | Description                                                 |
| ----------------------------------------- | ----------------------------------------------------------- |
| setValue(name: string, value: any) | set a value and validates if it has error                   |
| getValue(name: string)             | get a value given a name                                    |
| setValues({}: values)               | set all values also of party forms but it doesn't fire validations|
| touchValue(name)                    | mark the value passed as touched                            |
| reset()                             | set all values as initialValues Object                      |
| validateForm()                   | Run validations, set errors and mark all objects as touched |
| validateValue()                 | Run validations, set errors and mark all objects as touched |
| validateParty()                  | Run validations only for a nested form, set errors and mark all objects as touched |
| isValid: boolean                          | true: is for a valid form, false: is for a invalid form     |


Helpers

When we created useFormless, we thought about separating behavior and UI, because of it your components are more resuables.

| Function                         | Description |
| -------------------------------- | ----------- |
| inputProps(name: String): Object | This funtion will return custom props `{name, value, onChange, onBlur}`, pass this object to your input component directly, [see example](#Examples) |
| inputCheckboxProps(name: String): Object | The same for inputProps but for checkbox|
| onSubmit(SyntathicEvent): void  | Handle submit event, this will trigger either onSuccess or onError functions|

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
