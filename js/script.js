"use strict";



// slider

$(document).ready(function () {
   $('.reviews__body-wrapper').slick({
      arrows: false,
      dots: true,
      slidesToShow: 1,
      centerMode: false,
   });

});


const sliderGalery = document.querySelector('.galery__images'),
   slideGalery = sliderGalery.querySelectorAll('.galery__img'),
   galery = document.querySelector('.galery'),
   closeSliderGalery = document.querySelector('.galery__slider-close');


function bodyHiiden() {
   if (galery.classList.contains('show__slider-galery')) {
      body.style.overflow = 'hidden';
   } else {
      body.style.overflow = '';
   }
}

slideGalery.forEach(item => {
   item.addEventListener('click', () => {
      $('.galery__images').slick({
         centerMode: true,
         dots: true,
         slidesToShow: 1,
         speed: 100,

         touchThreshold: 13,
      });
      galery.classList.add('show__slider-galery');
      closeSliderGalery.style.display = 'block';
      bodyHiiden();
   });
});
closeSliderGalery.addEventListener('click', () => {
   galery.classList.remove('show__slider-galery');
   $('.galery__images').slick('unslick');
   closeSliderGalery.style.display = '';
   bodyHiiden();
});


//slider

//burger

const menuBurger = document.querySelector('.menu'),
   menu = document.querySelector('.header__menu'),
   body = document.querySelector('body');

menuBurger.addEventListener('click', () => {
   menu.classList.toggle('menu__active');
   menuBurger.classList.toggle('menu__active');
   if (menu.classList.contains('menu__active')) {
      body.style.overflow = 'hidden';
   } else {
      body.style.overflow = '';
   }
});

//burger

//galery
