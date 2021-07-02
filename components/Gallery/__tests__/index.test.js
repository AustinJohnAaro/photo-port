// __tests__/Gallery.test.js
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Gallery from '..';
var portrait = { name: "portraits", description: "Portraits of people in my life" };

afterEach(cleanup);

describe('Gallery component', function () {

  it('renders', function () {
    render(React.createElement(Gallery, { currentCategory: portrait }));
  });

  it('matches snapshot', function () {
    var _render = render(React.createElement(Gallery, { currentCategory: portrait })),
        asFragment = _render.asFragment;

    expect(asFragment()).toMatchSnapshot();
  });
});

it('displays text', function () {
  var _render2 = render(React.createElement(Gallery, { currentCategory: portrait })),
      getByTestId = _render2.getByTestId;

  expect(getByTestId('h1tag')).toHaveTextContent('Portraits');
});