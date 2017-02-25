'use strict';

var uploadButton = document.querySelector('#upload-select-image');
var uploadFile = uploadButton.querySelector('#upload-file');
var Overlay = document.querySelector('.upload-overlay');
var uploadFormCancel = document.querySelector('.upload-form-cancel');

var ESCAPE_KEY_CODE = 27;

var toggleAriaHidden = function (element) {
  if (element.getAttribute('aria-hidden') === 'true') {
    element.setAttribute('aria-hidden', false);
  } else {
    element.setAttribute('aria-hidden', true);
  }
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

uploadFile.addEventListener('change', function () {
  showUploadOverlayElement();
});

uploadFormCancel.addEventListener('click', function () {
  closeUploadOverlayElement();
});

var scaleTransform = function (scale) {
  preview.style.transform = 'scale(' + value / 100 + ')';
};
var controlValue = value + '%';
var preview = window.querySelector('.filter-image-preview');
var value = decValue(parseInt(controlValue.value, 10), 25);
var labelFor = event.target.getAttribute('for');
var input = document.getElementById(labelFor);
var filterApply = function (preview) {
  preview.classList.add('filter-' + input.value);
};
var decValue = function (valueControl, min, n) {
  if (valueControl > min) {
    return (valueControl - n);
  } else {
    return valueControl;
  }
};

var uploadFilterControls = document.querySelector('.upload-filter-controls');
var scaleElement = document.querySelector('.upload-resize-controls');
var SCALE_STEP = 25;
var INITIAL_SCALE = 100;
window.initializeScale(scaleElement, SCALE_STEP, INITIAL_SCALE, scaleTransform);
window.initializeFilters(uploadFilterControls, filterApply);


