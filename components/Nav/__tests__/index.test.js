// __tests__/Nav.test.js with hard coded categories
import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

var categories = [{ name: 'portraits', description: 'Portraits of people in my life' }];
var mockCurrentCategory = jest.fn();
var mockSetCurrentCategory = jest.fn();
var mockContactSelected = jest.fn();
var mockSetContactSelected = jest.fn();

afterEach(cleanup);

describe('Nav component', function () {
  it('renders', function () {
    render(React.createElement(Nav, {
      categories: categories,
      setCurrentCategory: mockSetCurrentCategory,
      currentCategory: mockCurrentCategory,
      contactSelected: mockContactSelected,
      setContactSelected: mockSetContactSelected
    }));
  });

  it('matches snapshot DOM node structure', function () {
    var _render = render(React.createElement(Nav, {
      categories: categories,
      setCurrentCategory: mockSetCurrentCategory,
      currentCategory: mockCurrentCategory,
      contactSelected: mockContactSelected,
      setContactSelected: mockSetContactSelected
    })),
        asFragment = _render.asFragment;

    expect(asFragment()).toMatchSnapshot();
  });
});

describe('emoji is visible', function () {
  it('inserts emoji into the h2', function () {
    var _render2 = render(React.createElement(Nav, {
      categories: categories,
      setCurrentCategory: mockSetCurrentCategory,
      currentCategory: mockCurrentCategory,
      contactSelected: mockContactSelected,
      setContactSelected: mockSetContactSelected
    })),
        getByLabelText = _render2.getByLabelText;

    expect(getByLabelText('camera')).toHaveTextContent('📸');
  });
});

describe('links are visible', function () {
  it('inserts text into the home link', function () {
    var _render3 = render(React.createElement(Nav, {
      categories: categories,
      setCurrentCategory: mockSetCurrentCategory,
      currentCategory: mockCurrentCategory,
      contactSelected: mockContactSelected,
      setContactSelected: mockSetContactSelected
    })),
        getByTestId = _render3.getByTestId;

    expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
    expect(getByTestId('about')).toHaveTextContent('About me');
  });
});

describe('onClick events', function () {
  it('calls the click handler when clicked', function () {
    var _render4 = render(React.createElement(Nav, {
      categories: categories,
      setCurrentCategory: mockSetCurrentCategory,
      currentCategory: mockCurrentCategory,
      contactSelected: mockContactSelected,
      setContactSelected: mockSetContactSelected
    })),
        getByText = _render4.getByText;

    fireEvent.click(getByText('About me'));
    fireEvent.click(getByText('Contact'));
    fireEvent.click(getByText('Portraits'));

    expect(mockSetContactSelected).toHaveBeenCalledTimes(3);
  });
});