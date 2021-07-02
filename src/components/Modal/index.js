import React from 'react';

var Modal = function Modal(_ref) {
  var onClose = _ref.onClose,
      currentPhoto = _ref.currentPhoto;
  var name = currentPhoto.name,
      description = currentPhoto.description,
      category = currentPhoto.category,
      index = currentPhoto.index;


  return React.createElement(
    "div",
    { className: "modalBackdrop" },
    React.createElement(
      "div",
      { className: "modalContainer" },
      React.createElement(
        "h3",
        { className: "modalTitle" },
        name,
        " "
      ),
      React.createElement("img", { src: require("../../assets/large/" + category + "/" + index + ".jpg"), alt: "current category" }),
      React.createElement(
        "p",
        null,
        description
      ),
      React.createElement(
        "button",
        { type: "button", onClick: onClose },
        "Close this modal"
      )
    )
  );
};

export default Modal;