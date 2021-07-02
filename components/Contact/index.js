var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { useState } from 'react';

import { validateEmail } from '../../utils/helpers';

function ContactForm() {
  var _useState = useState({ name: '', email: '', message: '' }),
      _useState2 = _slicedToArray(_useState, 2),
      formState = _useState2[0],
      setFormState = _useState2[1];

  var _useState3 = useState(''),
      _useState4 = _slicedToArray(_useState3, 2),
      errorMessage = _useState4[0],
      setErrorMessage = _useState4[1];

  var name = formState.name,
      email = formState.email,
      message = formState.message;


  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };

  var handleChange = function handleChange(e) {
    if (e.target.name === 'email') {
      var isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(e.target.name + ' is required.');
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState(Object.assign({}, formState, _defineProperty({}, e.target.name, e.target.value)));
      console.log('Handle Form', formState);
    }
  };

  return React.createElement(
    'section',
    null,
    React.createElement(
      'h1',
      { 'data-testid': 'h1tag' },
      'Contact me'
    ),
    React.createElement(
      'form',
      { id: 'contact-form', onSubmit: handleSubmit },
      React.createElement(
        'div',
        null,
        React.createElement(
          'label',
          { htmlFor: 'name' },
          'Name:'
        ),
        React.createElement('input', { type: 'text', name: 'name', defaultValue: name, onBlur: handleChange })
      ),
      React.createElement(
        'div',
        null,
        React.createElement(
          'label',
          { htmlFor: 'email' },
          'Email address:'
        ),
        React.createElement('input', { type: 'email', name: 'email', defaultValue: email, onBlur: handleChange })
      ),
      React.createElement(
        'div',
        null,
        React.createElement(
          'label',
          { htmlFor: 'message' },
          'Message:'
        ),
        React.createElement('textarea', { name: 'message', rows: '5', defaultValue: message, onBlur: handleChange })
      ),
      errorMessage && React.createElement(
        'div',
        null,
        React.createElement(
          'p',
          { className: 'error-text' },
          errorMessage
        )
      ),
      React.createElement(
        'button',
        { 'data-testid': 'button', type: 'submit' },
        'Submit'
      )
    )
  );
}

export default ContactForm;