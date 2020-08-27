"use strict";


document.addEventListener('DOMContentLoaded', () => {
   const modalBtn = document.querySelector('.death__modal'),
      modalBlank = document.querySelector('.modal');

   function show() {
      modalBtn.addEventListener('click', () => {
         modalBlank.style.display = "flex";
      });
   }

   function hide() {
      modalBlank.addEventListener('click', (event) => {

         if (event.target === modalBlank) {
            modalBlank.style.display = "none";
         }
      });
   }
   // show();
   // hide();
   const year = getRndInteger(new Date().getFullYear(), 2030),
      month = getRndInteger(new Date().getMonth(), 12),
      days = getRndInteger(new Date().getDay(), 31);

   let deadline = `${year}-${month}-${days}`;

   function getRndInteger(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
   }


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
   function startTimer() {
      const timerButton = document.querySelector('.death__btn');
      timerButton.addEventListener('click', () => {
         setClock('.death__timer', deadline);
         const deathTitle = document.querySelector('.death__title');

         deathTitle.innerHTML = '';
         deathTitle.innerHTML = 'Time has gone...';
      });
   }
   startTimer();
});
