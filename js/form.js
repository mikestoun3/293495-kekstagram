'use strict';

var uploadPhoto = document.querySelector('#upload-file');
var overlay = document.querySelector('.upload-overlay');
var uploadButton = document.querySelector('#upload-select-image');
var cancelOverlay = document.querySelector('.upload-form-cancel');
var filtersPreview = overlay.querySelector('.upload-form-preview');
var originalFilter = overlay.querySelector('.upload-filter-label');
var chromeFilter = overlay.querySelector('.upload-filter-label-chrome');
var sepiaFilter = overlay.querySelector('.upload-filter-label-sepia');
var marvinFilter = overlay.querySelector('.upload-filter-label-marvin');
var phobosFilter = overlay.querySelector('.upload-filter-label-phobos');
var heatFilter = overlay.querySelector('.upload-filter-label-heat');
var previewSizeDec = overlay.querySelector('.upload-resize-controls-button-dec');
var previewSizeInc = overlay.querySelector('.upload-resize-controls-button-inc');
var resizeValue = overlay.querySelector('.upload-resize-controls-value');
var resizePercent = 100;

uploadPhoto.addEventListener('change', function () {
  overlay.classList.remove('invisible');
  uploadButton.classList.add('invisible');
});

cancelOverlay.addEventListener('click', function () {
  overlay.classList.add('invisible');
  uploadButton.classList.remove('invisible');
});


originalFilter.addEventListener('click', function () {
  filtersPreview.className = 'filter-image-preview';
});
chromeFilter.addEventListener('click', function () {
  filtersPreview.className = 'filter-image-preview filter-chrome';
});
sepiaFilter.addEventListener('click', function () {
  filtersPreview.className = 'filter-image-preview filter-sepia';
});
marvinFilter.addEventListener('click', function () {
  filtersPreview.className = 'filter-image-preview filter-marvin';
});
phobosFilter.addEventListener('click', function () {
  filtersPreview.className = 'filter-image-preview filter-phobos';
});
heatFilter.addEventListener('click', function () {
  filtersPreview.className = 'filter-image-preview filter-heat';
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
