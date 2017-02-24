'use strict';

var uploadButton = document.querySelector('#upload-select-image');
var uploadFile = uploadButton.querySelector('#upload-file');
var Overlay = document.querySelector('.upload-overlay');
var uploadFormCancel = document.querySelector('.upload-form-cancel');
var previewSizeDec = document.querySelector('.upload-resize-controls-button-dec');
var previewSizeIn = document.querySelector('.upload-resize-controls-button-inc');
var controlValue = document.querySelector('.upload-resize-controls-value');
var preview = document.querySelector('.filter-image-preview');
var uploadFilterControls = document.querySelector('.upload-filter-controls');

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

uploadFilterControls.addEventListener('click', function () {
  var target = event.target;
  if (target.tagName.toLowerCase() !== 'input') {
    return;
  } else {
    preview.className = 'filter-image-preview';
    preview.classList.add('filter-' + target.value);
  }
  toggleFilterAriaPressed();
}, false);

uploadFilterControls.addEventListener('keydown', function (evt) {
  if (isActivateEvent(evt)) {
    if (event.target.tagName.toLowerCase() === 'label') {
      preview.className = 'filter-image-preview';
      var labelFor = event.target.getAttribute('for');
      var input = document.getElementById(labelFor);
      input.checked = true;
      preview.classList.add('filter-' + input.value);
      toggleFilterAriaPressed();
    }
  }
}, true);


var decValue = function (valueControl, min, n) {
  if (valueControl > min) {
    return (valueControl - n);
  } else {
    return valueControl;
  }
};

var incValue = function (valueControl, max, n) {
  if (valueControl < max) {
    return (valueControl + n);
  } else {
    return valueControl;
  }
};

previewSizeDec.addEventListener('click', function () {
  var value = decValue(parseInt(controlValue.value, 10), 25, 25);
  if (value === 25) {
    previewSizeDec.disabled = true;
    previewSizeIn.disabled = false;
  } else {
    previewSizeDec.disabled = false;
    previewSizeIn.disabled = false;
  }
  controlValue.value = value + '%';
  preview.style.transform = 'scale(' + value / 100 + ')';
});

previewSizeIn.addEventListener('click', function () {
  var value = incValue(parseInt(controlValue.value, 10), 100, 25);
  if (value === 100) {
    previewSizeIn.disabled = true;
    previewSizeDec.disabled = false;
  } else {
    previewSizeDec.disabled = false;
    previewSizeIn.disabled = false;
  }
  controlValue.value = value + '%';
  preview.style.transform = 'scale(' + value / 100 + ')';
});
