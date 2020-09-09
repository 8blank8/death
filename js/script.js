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

//Таймер

document.addEventListener('DOMContentLoaded', () => {


   const deadline = '2020-10-03';

   function getTimeRemaining(endtime) {
      const t = Date.parse(endtime) - Date.parse(new Date()),
         days = Math.floor(t / (1000 * 60 * 60 * 24)),
         hours = Math.floor((t / (1000 * 60 * 60) % 24)),
         minutes = Math.floor((t / 1000 / 60) % 60),
         seconds = Math.floor((t / 1000) % 60);

      return {
         'total': t,
         'days': days,
         'hours': hours,
         'minutes': minutes,
         'seconds': seconds
      };
   }

   function getZero(num) {
      if (num >= 0 && num < 10) {
         return `0${num}`;
      } else {
         return num;
      }
   }

   function setClock(selector, endtime) {
      const timer = document.querySelector(selector),
         days = timer.querySelector('.days'),
         hours = timer.querySelector('.hours'),
         minutes = timer.querySelector('.minutes'),
         seconds = timer.querySelector('.seconds'),
         timeInterval = setInterval(updateClock, 1000);

      updateClock();

      function updateClock() {
         const t = getTimeRemaining(endtime);

         days.innerHTML = getZero(t.days);
         hours.innerHTML = getZero(t.hours);
         minutes.innerHTML = getZero(t.minutes);
         seconds.innerHTML = getZero(t.seconds);

         if (t.total <= 0) {
            clearInterval(timeInterval);
         }
      }
   }

   setClock('.happy__timer', deadline);

});
