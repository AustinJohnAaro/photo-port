// __tests__/PhotoList.test.js
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PhotoList from '..';

afterEach(cleanup);

describe('PhotoList component', function () {
  it('renders', function () {
    render(React.createElement(PhotoList, null));
  });

  it('renders', function () {
    var _render = render(React.createElement(PhotoList, null)),
        asFragment = _render.asFragment;

    expect(asFragment()).toMatchSnapshot();
  });
});