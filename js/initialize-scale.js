'use strict';

window.initializeScale = (function () {
  var previewSizeDec = document.querySelector('.upload-resize-controls-button-dec');
  var previewSizeInc = document.querySelector('.upload-resize-controls-button-inc');
  var controls = document.querySelector('.upload-resize-controls');

  return function (controlValue, valueScale, step, callback) {

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

    controls.addEventListener('click', function (event) {
      if (event.target === previewSizeDec) {
        valueScale = decValue(parseInt(controlValue.value, 10), 25);
        if (valueScale === 25) {
            previewSizeDec.disabled = true;
            previewSizeInc.disabled = false;
      } else {
            previewSizeDec.disabled = false;
            previewSizeInc.disabled = false;
          }
      }
    
      if (event.target === previewSizeInc) {
      valueScale = incValue(parseInt(controlValue.value, 10), 100);
      if (valueScale === 100) {
        previewSizeInc.disabled = true;
        previewSizeDec.disabled = false;
      } else {
        previewSizeDec.disabled = false;
        previewSizeInc.disabled = false;
      }
    }
      if (typeof callback === 'function') {
        callback(valueScale);
   
      }
    }, false);
  };

})();
