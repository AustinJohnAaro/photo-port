// __tests__/Modal.test.js with hard coded categories
import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Modal from '..';

var mockToggleModal = jest.fn();
var currentPhoto = {
  name: 'Park bench',
  category: 'landscape',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
  index: 1
};

afterEach(cleanup);

describe('Modal component', function () {
  it('renders', function () {
    render(React.createElement(Modal, {
      onClose: mockToggleModal,
      currentPhoto: currentPhoto
    }));
  });

  it('matches snapshot DOM node structure', function () {
    var _render = render(React.createElement(Modal, {
      onClose: mockToggleModal,
      currentPhoto: currentPhoto
    })),
        asFragment = _render.asFragment;

    expect(asFragment()).toMatchSnapshot();
  });
});

describe('Click Event', function () {
  it('calls onClose handler', function () {
    var _render2 = render(React.createElement(Modal, {
      onClose: mockToggleModal,
      currentPhoto: currentPhoto
    })),
        getByText = _render2.getByText;

    fireEvent.click(getByText('Close this modal'));

    expect(mockToggleModal).toHaveBeenCalledTimes(1);
  });
});