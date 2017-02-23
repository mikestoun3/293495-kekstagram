'use strict';

var uploadPhoto = document.querySelector('#upload-file');
var overlay = document.querySelector('.upload-overlay');
var uploadButton = document.querySelector('#upload-select-image');
var cancelOverlay = document.querySelector('.upload-form-cancel');

var filtersPreview = overlay.querySelector('.filter-image-preview');
var originalFilter = overlay.querySelector('.upload-filter-label');
var chromeFilter = overlay.querySelector('.upload-filter-label-chrome');
var sepiaFilter = overlay.querySelector('.upload-filter-label-sepia');
var marvinFilter = overlay.querySelector('.upload-filter-label-marvin');
var phobosFilter = overlay.querySelector('.upload-filter-label-phobos');
var heatFilter = overlay.querySelector('.upload-filter-label-heat');
var previewSizeDec = overlay.querySelector('.upload-resize-controls-button-dec');
var previewSizeInc = overlay.querySelector('.upload-resize-controls-button-inc');
var resizeValue = overlay.querySelector('.upload-resize-controls-value');

var filtersGroup = overlay.querySelector('.upload-filter-controls');
var resizePercent = 100;

uploadPhoto.addEventListener('change', function () {
  overlay.classList.remove('invisible');
  uploadButton.classList.add('invisible');
});

cancelOverlay.addEventListener('click', function () {
  overlay.classList.add('invisible');
  uploadButton.classList.remove('invisible');
});



previewSizeDec.addEventListener('click', setDecValue);
previewSizeInc.addEventListener('click', setIncValue);

function setDecValue() {
  if (resizePercent === 25) {
    return;
  }
  resizePercent -= 25;
  resizeValue.value = resizePercent + '%';
  resizeImage();
}

function setIncValue() {
  if (resizePercent === 100) {
    return;
  }
  resizePercent += 25;
  resizeValue.value = resizePercent + '%';
  resizeImage();
}

function resizeImage() {
  filtersPreview.style.transform = 'scale(' + resizePercent / 100 + ')';
}


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
filtersGroup.addEventListener('click', function () {
  var target = event.target;
  if (target.tagName.toLowerCase() !== 'input') {
    return;
  } else {
    filtersPreview.className = 'filter-image-preview';
    filtersPreview.classList.add('filter-' + target.value);
  }
  toggleFilterAriaPressed();
}, false);
