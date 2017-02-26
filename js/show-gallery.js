
'use strict';

window.showGallery = (function () {
  var galleryOverlay = document.querySelector('.gallery-overlay');
  var galleryOverlayClose = galleryOverlay.querySelector('.gallery-overlay-close');
  var galleryImage = galleryOverlay.querySelector('.gallery-overlay-image');
  var galleryLikes = galleryOverlay.querySelector('.likes-count');
  var galleryComments = galleryOverlay.querySelector('.comments-count');

  function closeGallery() {
    galleryOverlayClose.addEventListener('click', function () {
      galleryOverlay.classList.add('invisible');
    });
    galleryOverlay.addEventListener('keydown', function (evt) {
      if (window.utils.isDeactivationEvent(evt)) {
        galleryOverlay.classList.add('invisible');
      }
    });
  }

  return function showGallery(param) {
    galleryOverlay.classList.remove('invisible');
    galleryImage.setAttribute('src', param.link);
    galleryLikes.textContent = param.likesCount;
    galleryComments.textContent = param.commentsCount;
    closeGallery();
  };
})();
