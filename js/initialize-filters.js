'use strict';

window.initializeFilters = (function () {
  var preview = document.querySelector('.filter-image-preview');
  var uploadFilterControls = document.querySelector('.upload-filter-controls');

  return function () {

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
  };
})();
