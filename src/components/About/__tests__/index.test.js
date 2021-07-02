// __tests__/About.test.js
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

afterEach(cleanup);

describe('About component', function () {
  it('renders', function () {
    render(React.createElement(About, null));
  });

  it('matches snapshot', function () {
    var _render = render(React.createElement(About, null)),
        asFragment = _render.asFragment;

    expect(asFragment()).toMatchSnapshot();
  });
});