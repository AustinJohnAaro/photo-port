import React from 'react';
import PhotoList from '../PhotoList';
import { capitalizeFirstLetter } from '../../photo-port/components';

function Gallery(props) {
  var currentCategory = props.currentCategory;

  return React.createElement(
    'section',
    null,
    React.createElement(
      'h1',
      { 'data-testid': 'h1tag' },
      capitalizeFirstLetter(currentCategory.name)
    ),
    React.createElement(
      'p',
      null,
      currentCategory.description
    ),
    React.createElement(PhotoList, { category: currentCategory.name })
  );
}
export default Gallery;