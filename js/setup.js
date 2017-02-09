'use strict';

// Попап
var offInvisible = document.querySelector('.setup-open');
var onInvisible = document.querySelector('.setup-close');
var setup = document.querySelector('.setup');

offInvisible.addEventListener('click', function () {
  setup.classList.remove('invisible');
});
onInvisible.addEventListener('click', function () {
  setup.classList.add('invisible');
});

// стилизация пендальфа

var wizard = document.querySelector('#wizard');
var wizardCoat = wizard.querySelector('#wizard-coat');
var wizardEyes = wizard.querySelector('#wizard-eyes');
var fireballColor = document.querySelector('.setup-fireball-wrap');
var wizardCoatColors = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];
var wizardEyesColors = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];
var fireballColors = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];


wizardCoat.addEventListener('click', function () {
  var colorNum = Math.floor(Math.random() * wizardCoatColors.length);
  wizardCoat.style.fill = wizardCoatColors [colorNum];
});


wizardEyes.addEventListener('click', function () {
  var colorNum;
  colorNum = Math.floor(Math.random() * wizardEyesColors.length);
  wizardEyes.style.fill = wizardCoatColors [colorNum];
});

fireballColor.addEventListener('click', function () {
  var colorNum;
  colorNum = Math.floor(Math.random() * fireballColors.length);
  fireballColor.style.background = fireballColors [colorNum];
});

