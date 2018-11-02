# UseFormless

Formless is a simple library than allow you have form controlled using react-hooks

## Getting Started

Take at glance!

`We are using Bloomer and bulma for this example`
```JS
import React, { useState } from 'react';
import { Field, Input, Label, Control, Select, TextArea, Checkbox, Radio, Button, Help, Notification, Delete } from "bloomer";
import joinString from "classnames";

import { useForm } from "../Hooks";

export const FormExample = ({isHidden}) => {
  const FIELD_REQUIRED = 'This field is required';
  const SELECT_FIELD = 'Please select this field';
  const NOTIFICATION_MESSAGE_SUCCESS = 'Success message here!';
  const NOTIFICATION_MESSAGE_FAILED = 'Validations form has failed, please check the fields again!';
  const validate = ({ values }) => ({
    name: values.name === '' ? FIELD_REQUIRED : '',
    email: values.email  === '' ? FIELD_REQUIRED : '',
    username: values.username === '' ? FIELD_REQUIRED : '',
    select: values.select === '' ? FIELD_REQUIRED : '',
    checkbox: !values.checkbox ? SELECT_FIELD : '',
  });

  const { values, errors, touched, setValue, touchValue, isValid, reset, setAllValues, submitProps, inputFieldProps } = useForm({
    initialValues: {
      name: '',
      email: 'juan@amezQA',
      checkbox: false,
      select: '',
      radioButton: 'yes'
    }
  }, { validate });

  const [showNotification, toggleNotification] = useState(false);

  const onSuccess = () => {
    toggleNotification(true);
  }

  const onError = () => {
    toggleNotification(true);
  }

  const handleInput = ({target: { name, value }}) => {
    setValue(name, value);
    toggleNotification(false);
  }

  const setColorToInput = name =>
    joinString({
      success: errors[name] === '',
      danger: errors[name] && touched[name],
    });

  const getErrorMessageToInput = name =>
    joinString({ [errors[name]]: errors[name] && touched[name] });

  return (
    <>
      <Notification isHidden={!showNotification} isColor={joinString({ success: isValid, danger: !isValid })}>
        <Delete onClick={() => toggleNotification(false)} />
        {isValid ? NOTIFICATION_MESSAGE_SUCCESS : NOTIFICATION_MESSAGE_FAILED}
      </Notification>
      <TextArea rows={10} className={joinString({'is-hidden': isHidden})} value={JSON.stringify({ values, touched, errors }, null, 2)}>
      </TextArea>
      <form action="" {...submitProps({onSuccess, onError})} className={joinString({'is-hidden': isHidden})}>
        <Field>
          <Label>Name</Label>
          <Control>
            <Input
              isColor={setColorToInput('name')}
              type="text"
              placeholder='Your name'
              value={values.name}
              name='name'
              onInput={handleInput}
              onBlur={() => touchValue('name')}
              />
          </Control>
          <Help isColor='danger'>{getErrorMessageToInput('name')}</Help>
        </Field>

        <Field>
          <Label>Username</Label>
          <Control>
            <Input
              isColor={setColorToInput('username')}
              type="text"
              placeholder='Your username'
              {...inputFieldProps('username')}
              />
          </Control>
          <Help isColor='danger'>{getErrorMessageToInput('username')}</Help>
        </Field>

        <Field>
          <Label>Email</Label>
          <Control>
            <Input
              isColor={setColorToInput('email')}
              placeholder='You email'
              value={values.email}
              name='email'
              onInput={handleInput}
              onBlur={() => touchValue('email')}
              />
          </Control>
          <Help isColor='danger'>{getErrorMessageToInput('email')}</Help>
        </Field>

        <Field>
          <Label>Select:</Label>
          <Control>
            <Select
              isColor={setColorToInput('select')}
              {...inputFieldProps('select')}
              >
              <option value=''>Gender</option>
              <option value='M'>Male</option>
              <option value='F'>Female</option>
            </Select>
          </Control>
          <Help isColor='danger'>{getErrorMessageToInput('select')}</Help>
        </Field>

        <Field>
          <Label>Message</Label>
          <Control>
            <TextArea
              {...inputFieldProps('textArea')}
              placeholder={'<TextArea />'}
              />
          </Control>
          <Help isColor='danger'>{getErrorMessageToInput('textArea')}</Help>
        </Field>

        <Field>
          <Control>
            <Checkbox
              onChange={({ target: { name, checked } }) => setValue(name, checked)}
              checked={values.checkbox}
              name='checkbox'
              onBlur={() => touchValue('checkbox')}
              >
              I agree
            </Checkbox>
          </Control>
          <Help isColor='danger'>{getErrorMessageToInput('checkbox')}</Help>
        </Field>

        <Field>
          <Control>
            <Radio
              name="radioButton"
              value="yes"
              checked={values.radioButton === 'yes'}
              onChange={handleInput}
              onBlur={() => touchValue('radioButton')}
              >
              Yes
            </Radio>
            <Radio
              name="radioButton"
              value="no"
              checked={values.radioButton === 'no'}
              onChange={handleInput}
              onBlur={() => touchValue('radioButton')}
              >
              No
            </Radio>
          </Control>
        </Field>

        <Field isGrouped>
          <Control>
            <Button isColor='primary' type="submit">Submit</Button>
          </Control>
          <Control>
            <Button isColor='info' onClick={reset}>Reset</Button>
          </Control>
          <Control>
            <Button
              isColor='link'
              onClick={() => setAllValues({name: 'default name', email: 'default email', checkbox: true, radioButton: 'no', select: 'M', textArea: 'text area example'})}
              >
              set new values
            </Button>
          </Control>
        </Field>
      </form>
    </>
  );
};

```

### Prerequisites

This version of formless is based over "16.7.0-alpha.0", you can use and test but dont use in production enviroments since react-hook are a proposal

### Installing

how to install... (yarn | npm)

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
