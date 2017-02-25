'use strict';

window.initializeScale = (function () {
  var previewSizeDec = document.querySelector('.upload-resize-controls-button-dec');
  var previewSizeInc = document.querySelector('.upload-resize-controls-button-inc');
  var preview = document.querySelector('.filter-image-preview');

  return function (controlValue, valueScale, step) {

    var decValue = function (valueControl, min) {
      if (valueControl > min) {
        return (valueControl - step);
      } else {
        return valueControl;
      }
    };

    var incValue = function (valueControl, max) {
      if (valueControl < max) {
        return (valueControl + step);
      } else {
        return valueControl;
      }
    };

    previewSizeDec.addEventListener('click', function () {
      var value = decValue(parseInt(controlValue.value, 10), 25);
      if (value === 25) {
        previewSizeDec.disabled = true;
        previewSizeInc.disabled = false;
      } else {
        previewSizeDec.disabled = false;
        previewSizeInc.disabled = false;
      }
      controlValue.value = value + '%';
      preview.style.transform = 'scale(' + value / 100 + ')';
    });

    previewSizeInc.addEventListener('click', function () {
      var value = incValue(parseInt(controlValue.value, 10), 100);
      if (value === 100) {
        previewSizeInc.disabled = true;
        previewSizeDec.disabled = false;
      } else {
        previewSizeDec.disabled = false;
        previewSizeInc.disabled = false;
      }
      controlValue.value = value + '%';
      preview.style.transform = 'scale(' + value / 100 + ')';
    });

  };

})();
