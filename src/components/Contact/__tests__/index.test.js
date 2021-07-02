// __tests__/Contact.test.js
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';

afterEach(cleanup);

describe('Contact component', function () {
  it('renders', function () {
    render(React.createElement(Contact, null));
  });

  

    
  });
;

it('renders', function () {
  var _render2 = render(React.createElement(Contact, null)),
      getByTestId = _render2.getByTestId;

  expect(getByTestId('h1tag')).toHaveTextContent('Contact me');
});


     
;