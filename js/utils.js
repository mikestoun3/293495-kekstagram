'use strict';

window.utils = (function () {
  var ENTER_KEY_CODE = 13;
  var ESCAPE_KEY_CODE = 27;
  var uploadButton = document.querySelector('#upload-select-image');
  var overlay = document.querySelector('.upload-overlay');
  var defaultFilter = document.getElementById('upload-filter-none');
  var controlValue = document.querySelector('.upload-resize-controls-value');
  var preview = document.querySelector('.filter-image-preview');
  var previewSizeDec = document.querySelector('.upload-resize-controls-button-dec');
  var previewSizeInc = document.querySelector('.upload-resize-controls-button-inc');

  var setupKeydownHandler = function (evt) {
    if (evt.keyCode === ESCAPE_KEY_CODE) {
      closeUploadOverlayElement();
    }
  };

  var closeUploadOverlayElement = function () {
    overlay.classList.add('invisible');
    uploadButton.classList.remove('invisible');
    toggleAriaHidden(overlay);

    document.removeEventListener('keydown', setupKeydownHandler);
  };

  var toggleAriaHidden = function (element) {
    if (element.getAttribute('aria-hidden') === 'true') {
      element.setAttribute('aria-hidden', false);
    } else {
      element.setAttribute('aria-hidden', true);
    }
  };

  var toggleFilterAriaPressed = function () {
    var inputs = document.getElementsByName('upload-filter');
    for (var i = 0; i < inputs.length; i++) {
      inputs[i].setAttribute('aria-pressed', inputs[i].checked);
    }
  };

  return {
    isActivateEvent: function (evt) {
      return evt.keyCode === ENTER_KEY_CODE;
    },

    showUploadOverlayElement: function (callback) {
      overlay.classList.remove('invisible');
      uploadButton.classList.add('invisible');
      toggleAriaHidden(overlay);

      document.addEventListener('keydown', setupKeydownHandler);

      if (typeof callback === 'function') {
        callback();
      }
    },

    setDefaultValue: function (defaultValue) {
      preview.className = 'filter-image-preview';
      preview.classList.add('filter-' + defaultFilter.value);
      toggleFilterAriaPressed();
      controlValue.value = defaultValue + '%';
      preview.style.transform = 'scale(' + defaultValue / 100 + ')';
      previewSizeDec.disabled = false;
      previewSizeInc.disabled = true;
    },

    toggleFilterAriaPressed: toggleFilterAriaPressed,
    closeUploadOverlayElement: closeUploadOverlayElement,

    adjustScale: function (value) {
      controlValue.value = value + '%';
      preview.style.transform = 'scale(' + value / 100 + ')';
    },

    applyFilter: function (newFilter) {
      preview.className = 'filter-image-preview';
      preview.classList.add('filter-' + newFilter);
    }

  };
})();
