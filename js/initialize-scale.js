'use strict';

window.initializeScale = (function () {
  var previewSizeDec = document.querySelector('.upload-resize-controls-button-dec');
  var previewSizeIn = document.querySelector('.upload-resize-controls-button-inc');
  var preview = document.querySelector('.filter-image-preview');

  return function (controlValue, valueScale, step) {
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
  };

})();
