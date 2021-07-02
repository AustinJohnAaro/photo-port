import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
  var _props$categories = props.categories,
      categories = _props$categories === undefined ? [] : _props$categories,
      setCurrentCategory = props.setCurrentCategory,
      contactSelected = props.contactSelected,
      currentCategory = props.currentCategory,
      setContactSelected = props.setContactSelected;


  useEffect(function () {
    document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]);

  return React.createElement(
    'header',
    { className: 'flex-row px-1' },
    React.createElement(
      'h2',
      null,
      React.createElement(
        'a',
        { 'data-testid': 'link', href: '/' },
        React.createElement(
          'span',
          { role: 'img', 'aria-label': 'camera' },
          ' \uD83D\uDCF8'
        ),
        ' Oh Snap!'
      )
    ),
    React.createElement(
      'nav',
      null,
      React.createElement(
        'ul',
        { className: 'flex-row' },
        React.createElement(
          'li',
          { className: 'mx-2' },
          React.createElement(
            'a',
            { 'data-testid': 'about', href: '#about', onClick: function onClick() {
                return setContactSelected(false);
              } },
            'About me'
          )
        ),
        React.createElement(
          'li',
          { className: 'mx-2 ' + (contactSelected && 'navActive') },
          React.createElement(
            'span',
            { onClick: function onClick() {
                return setContactSelected(true);
              } },
            'Contact'
          )
        ),
        categories.map(function (category) {
          return React.createElement(
            'li',
            {
              className: 'mx-1 ' + (currentCategory.name === category.name && !contactSelected && 'navActive'),
              key: category.name
            },
            React.createElement(
              'span',
              {
                onClick: function onClick() {
                  setCurrentCategory(category);
                  setContactSelected(false);
                }
              },
              capitalizeFirstLetter(category.name)
            )
          );
        })
      )
    )
  );
}

export default Nav;