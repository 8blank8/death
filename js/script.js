"use strict";

const logoName = document.querySelector('.header-top__logo-name'),
   nameLogoText = logoName.querySelectorAll('span'),
   logoImg = document.querySelector('.header-top__logo-img');


logoImg.addEventListener('mouseenter', (event) => {
   nameLogoText.forEach(letter => {
      if (event.target && !letter.classList.contains('logo__active')) {
         letter.classList.add('logo__active');

         setTimeout(() => {
            letter.classList.remove('logo__active');
            letter.classList.add('logo__clean');
         }, 2500);
         setTimeout(() => {
            letter.classList.remove('logo__clean');
         }, 3500);
      }
   });
});

//Бургер

const menu = document.querySelector('.menu__burger'),
   menuBurger = menu.querySelectorAll('span'),
   menuMax = document.querySelector('.header-top__menu');

function showClassBurger(item) {
   item.classList.toggle('active__burger');
}

menu.addEventListener('click', (event) => {
   menuBurger.forEach(item => {
      showClassBurger(item);
      menu.classList.toggle('active__burger');
      menuMax.classList.toggle('active__burger');
   });
});