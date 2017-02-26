'use strict';

window.initializeFilters = (function () {
  var uploadFilterControls = document.querySelector('.upload-filter-controls');

  return function (callback) {
    uploadFilterControls.addEventListener('keydown', function (evt) {
      if (window.utils.isActivateEvent(evt)) {
        if (evt.target.tagName.toLowerCase() === 'label') {
          var labelFor = evt.target.getAttribute('for');
          var input = document.getElementById(labelFor);
          input.checked = true;
          window.utils.toggleFilterAriaPressed();
        }
      }
      if (typeof callback === 'function') {
        callback(input.value);
      }
    }, true);

    uploadFilterControls.addEventListener('click', function (evt) {
      var target = evt.target;
      if (target.tagName.toLowerCase() !== 'input') {
        return;
      }

      window.utils.toggleFilterAriaPressed();

      if (typeof callback === 'function') {
        callback(target.value);
      }
    }, false);

  };

})();
