"use strict";

//Загрузкa

const load = document.querySelector('.load'),
   loadDiv = load.querySelectorAll('div'),
   insideBox = document.querySelector('.load__inside-box'),
   elementsInsideBox = insideBox.querySelectorAll('div'),
   outsideBox = document.querySelector('.load__outinside-box'),
   elementsOutsideBox = outsideBox.querySelectorAll('div'),
   loadBg = document.querySelector('.load__bg'),
   bodyLoad = document.querySelector('body');


function addClassFon(element) {
   element.forEach(item => {
      item.classList.add('load__fon');
      item.classList.remove('load__clear');
      bodyLoad.classList.add('load__fon');
   });
}
function addClassClear(element) {
   element.forEach(item => {
      item.classList.add('load__clear');
      item.classList.remove('load__fon');
   });
}
function startLoad() {
   addClassFon(elementsInsideBox);
   setTimeout(() => {
      loadBg.classList.add('load__fon');
   }, 400);
   setTimeout(() => {
      addClassFon(elementsOutsideBox);
   }, 800);
   setTimeout(() => {
      addClassClear(loadDiv);

   }, 1200);
   setTimeout(() => {
      loadDiv.forEach(item => {
         item.classList.remove('load__clear');


      });
   }, 1600);

}
startLoad();
const timeLoad = setInterval(startLoad, 2000);
function hideLoad() {
   setTimeout(() => {
      clearInterval(timeLoad);
      bodyLoad.classList.remove('load__fon');
      load.style.display = "none";
   }, 3000);
}
hideLoad();

//Анимация лого

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

// document.addEventListener('DOMContentLoaded', () => {


//    const deadline = '2020-10-3';

//    function getTimeRemaining(endtime) {
//       const t = Date.parse(endtime) - Date.parse(new Date()),
//          days = Math.floor(t / (1000 * 60 * 60 * 24)),
//          hours = Math.floor((t / (1000 * 60 * 60) % 24)),
//          minutes = Math.floor((t / 1000 / 60) % 60),
//          seconds = Math.floor((t / 1000) % 60);

//       return {
//          'total': t,
//          'days': days,
//          'hours': hours,
//          'minutes': minutes,
//          'seconds': seconds
//       };
//    }

//    function getZero(num) {
//       if (num >= 0 && num < 10) {
//          return `0${num}`;
//       } else {
//          return num;
//       }
//    }

//    function setClock(selector, endtime) {
//       const timer = document.querySelector(selector),
//          days = timer.querySelector('.days'),
//          hours = timer.querySelector('.hours'),
//          minutes = timer.querySelector('.minutes'),
//          seconds = timer.querySelector('.seconds'),
//          timeInterval = setInterval(updateClock, 1000);

//       updateClock();

//       function updateClock() {
//          const t = getTimeRemaining(endtime);

//          days.innerHTML = getZero(t.days);
//          hours.innerHTML = getZero(t.hours);
//          minutes.innerHTML = getZero(t.minutes);
//          seconds.innerHTML = getZero(t.seconds);

//          if (t.total <= 0) {
//             clearInterval(timeInterval);
//          }
//       }
//    }

//    setClock('.happy__timer', deadline);

// });

// Анимация др
// const happy = document.querySelector('.happy__text'),
//    happyDiv = happy.querySelectorAll('p'),
//    happyTextOne = document.querySelector('.happy__text-one'),
//    happyTextTwo = document.querySelector('.happy__text-two'),
//    happyTextThree = document.querySelector('.happy__text-three');
// function addClassHappy(e) {
//    e.classList.add('active__active');

// }
// function removeClassAllHappy(e) {
//    e.forEach(item => {
//       item.classList.remove('active__clear');
//    });
// }
// function removeClassHappy(e) {
//    e.classList.remove('active__active');
//    e.classList.add('active__clear');
// }
// function startAnimationHappy() {
//    addClassHappy(happyTextOne);
//    setTimeout(() => {
//       removeClassHappy(happyTextOne);
//       addClassHappy(happyTextTwo);
//    }, 2000);
//    setTimeout(() => {
//       removeClassAllHappy(happyDiv);
//       removeClassHappy(happyTextTwo);
//       addClassHappy(happyTextThree);

//    }, 4000);
//    setTimeout(() => {
//       removeClassAllHappy(happyDiv);
//       removeClassHappy(happyTextThree);
//    }, 6000);
//    setTimeout(() => {
//       removeClassAllHappy(happyDiv);
//    }, 7000);

// }

// startAnimationHappy();
// function stopAnimationHappy() {

//    // for (let i = 0; i >= a; i++) {

//    const setIntervalHappy = setInterval(() => {
//       startAnimationHappy();
//       let a = 0;
//       a++;
//       if (a <= 3) {
//          clearInterval(setIntervalHappy);
//       }
//    }, 7000);

// }
// // }
// stopAnimationHappy();

// bodyLoad.addEventListener('scroll', () => {
//    let scrolli = scroll;
//    console.log(scrolli);
// });
