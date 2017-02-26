'use strict';
window.load('https://intensive-javascript-server-myophkugvq.now.sh/kekstagram/data',
    function (evt) {
      var pictures = JSON.parse(evt.target.response);
      var templateElement = document.querySelector('#picture-template');
      var pictureContainer = document.querySelector('.pictures');
      var pictureFrame = templateElement.content.querySelector('.picture');
      var pictureFilters = document.querySelector('.filters');
      var pictureArrCommented = pictures.slice(0);
    
       var sortFunc = function (array) {
        array.sort(function (left, right) {
          return right.comments.length - left.comments.length;
        });
      };

      function getRandomArrFromArr(arr, n) {
        var randomArr = new Array(n);
        var length = arr.length;
        var taken = new Array(length);
        if (n > length) {
          throw new RangeError('getRandom: more elements taken than available');
        }
        while (n--) {
          var x = Math.floor(Math.random() * length);
          randomArr[n] = arr[x in taken ? taken[x] : x];
          taken[x] = --length;
        }
        return randomArr;
      }

      var cleanGallery = function (param) {
        while (param.firstChild) {
          param.removeChild(param.firstChild);
        }
      };

      var renderPictures = function (element) {
        element.forEach(function (pictureItem) {
          var picture = pictureFrame.cloneNode(true);
          var image = picture.querySelector('img');
          var comments = picture.querySelector('.picture-comments');
          var likes = picture.querySelector('.picture-likes');
          image.setAttribute('src', pictureItem.url);
          comments.textContent = pictureItem.comments.length;
          likes.textContent = pictureItem.likes;
          pictureContainer.appendChild(picture);
          picture.setAttribute('tabindex', '0');
          var pictureBlock = {
            link: pictureItem.url,
            likesCount: pictureItem.likes,
            commentsCount: pictureItem.comments.length
          };
          picture.addEventListener('click', function (event) {
            event.preventDefault();
            window.showGallery(pictureBlock);
          });
        });
      };

      function filterToggle(condition) {
        switch (condition) {
          case ('filter-popular'):
            cleanGallery(pictureContainer);
            renderPictures(pictures);
            break;
          case ('filter-new'):
            cleanGallery(pictureContainer);
            renderPictures(getRandomArrFromArr(pictures.slice(0), 10));
            break;
          case ('filter-discussed'):
            cleanGallery(pictureContainer);
            sortFunc(pictureArrCommented);
            renderPictures(pictureArrCommented);
            break;
        }
      }

      pictureFilters.classList.remove('hidden');

      renderPictures(pictures);

      pictureFilters.addEventListener('click', function (event) {
        filterToggle(event.target.htmlFor);
      });

      pictureFilters.addEventListener('keydown', function (event) {
        if (window.utils.isActivateEvent(event)) {
          event.target.control.checked = true;
          filterToggle(event.target.htmlFor);
        }
      });
    });
