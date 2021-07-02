var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

import React, { useState } from 'react';
import Modal from '../Modal';

var PhotoList = function PhotoList(_ref) {
  var category = _ref.category;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isModalOpen = _useState2[0],
      setIsModalOpen = _useState2[1];

  var _useState3 = useState(),
      _useState4 = _slicedToArray(_useState3, 2),
      currentPhoto = _useState4[0],
      setCurrentPhoto = _useState4[1];

  var _useState5 = useState([{
    name: 'Grocery aisle',
    category: 'commercial',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
  }, {
    name: 'Grocery booth',
    category: 'commercial',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
  }, {
    name: 'Building exterior',
    category: 'commercial',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
  }, {
    name: 'Restaurant table',
    category: 'commercial',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
  }, {
    name: 'Cafe interior',
    category: 'commercial',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
  }, {
    name: 'Cat green eyes',
    category: 'portraits',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
  }, {
    name: 'Green parrot',
    category: 'portraits',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
  }, {
    name: 'Yellow macaw',
    category: 'portraits',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
  }, {
    name: 'Pug smile',
    category: 'portraits',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
  }, {
    name: 'Pancakes',
    category: 'food',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
  }, {
    name: 'Burrito',
    category: 'food',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
  }, {
    name: 'Scallop pasta',
    category: 'food',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
  }, {
    name: 'Burger',
    category: 'food',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
  }, {
    name: 'Fruit bowl',
    category: 'food',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
  }, {
    name: 'Green river',
    category: 'landscape',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
  }, {
    name: 'Docks',
    category: 'landscape',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
  }, {
    name: 'Panoramic village by sea',
    category: 'landscape',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
  }, {
    name: 'Domestic landscape',
    category: 'landscape',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
  }, {
    name: 'Park bench',
    category: 'landscape',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
  }]),
      _useState6 = _slicedToArray(_useState5, 1),
      photos = _useState6[0];

  var currentPhotos = photos.filter(function (photo) {
    return photo.category === category;
  });

  var toggleModal = function toggleModal(image, i) {
    setCurrentPhoto(Object.assign({}, image, { index: i }));
    setIsModalOpen(!isModalOpen);
  };

  return React.createElement(
    'div',
    null,
    isModalOpen && React.createElement(Modal, { onClose: toggleModal, currentPhoto: currentPhoto }),
    React.createElement(
      'div',
      { className: 'flex-row' },
      currentPhotos.map(function (image, i) {
        return React.createElement('img', {
          src: require('../../assets/small/' + category + '/' + i + '.jpg'),
          alt: image.name,
          className: 'img-thumbnail mx-1',
          onClick: function onClick() {
            return toggleModal(image, i);
          },
          key: image.name
        });
      })
    )
  );
};

export default PhotoList;