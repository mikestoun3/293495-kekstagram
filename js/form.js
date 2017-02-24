'use strict';

var uploadButton = document.querySelector('#upload-select-image');
var uploadFile = uploadButton.querySelector('#upload-file');
var Overlay = document.querySelector('.upload-overlay');
var uploadFormCancel = document.querySelector('.upload-form-cancel');

var ENTER_KEY_CODE = 13;
var ESCAPE_KEY_CODE = 27;

var isActivateEvent = function (evt) {
  return evt.keyCode === ENTER_KEY_CODE;
};

var setupKeydownHandler = function (evt) {
  if (evt.keyCode === ESCAPE_KEY_CODE) {
    closeUploadOverlayElement();
  }
};

var showUploadOverlayElement = function () {
  Overlay.classList.remove('invisible');
  uploadButton.classList.add('invisible');
  toggleAriaHidden(Overlay);

  document.addEventListener('keydown', setupKeydownHandler);
};

var closeUploadOverlayElement = function () {
  Overlay.classList.add('invisible');
  uploadButton.classList.remove('invisible');
  toggleAriaHidden(Overlay);

  document.removeEventListener('keydown', setupKeydownHandler);
};

var toggleFilterAriaPressed = function () {
  var inputs = document.getElementsByName('upload-filter');
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].setAttribute('aria-pressed', inputs[i].checked);
  }
};


var toggleAriaHidden = function (element) {
  if (element.getAttribute('aria-hidden') === 'true') {
    element.setAttribute('aria-hidden', false);
  } else {
    element.setAttribute('aria-hidden', true);
  }
};

uploadFile.addEventListener('change', function () {
  showUploadOverlayElement();
});

uploadFormCancel.addEventListener('click', function () {
  closeUploadOverlayElement();
});



