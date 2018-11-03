# UseFormless

Formless is a simple library than allow you get form controlled using react-hooks 🧩 🧩 🧩 🧩

## Getting Started

get start with a simple formulary.
### Step 1
first you need [install](#Installing) it
### Step2
useFormless receive two params in order to make easier
1. The initial state, so far only receive initial values inside a object like follow
``` json
{
  initialValues: {
    name: 'Juan Amezcua',
    email: 'juan@email.com',
    ...others values
  }
}
```
2. options; you can provide this hook with some util functions
```json
{
  validate: () => {
    // this must return and object
  },
  onError: (ev) => {
    // if you decide using onSubmit function provided by formless, this function is fired after submit error
    // also it receives the event of submit as param
  },
  onSuccess: () => {
    //same as error function but it is fired on success submit form
  }

}
```
``` html
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
```

### Prerequisites

This version of formless is based over "16.7.0-alpha.0", you can use and test but dont use in production enviroments since react-hook are a proposal

### Installing

how to install... (yarn | npm)

` npm install react-formless `

` yarn add react-formless `


## Running the tests

use jest for unit tests

## Built With

* [react16.7](https://reactjs.org/docs/hooks-intro.html) - The web framework used
* [create-react-app](https://reactjs.org/)
* [yarn](https://yarnpkg.com/en/) - Management of dependecies

## Contributing

Please read [CONTRIBUTING.md]() for details on our code of conduct, and the process for submitting pull requests to us.

## Authors

* **Gibran Lopez** [gediez](https://gist.github.com/GeDiez)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Similars libraries formik and redux-form
