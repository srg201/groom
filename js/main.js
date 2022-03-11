window.onload = function () {
  document.querySelector('.loader').classList.add('is-active');
  setTimeout(function () {
    document.querySelector('.loader').style.display = 'none';
  }, 850);
};

const links = document.querySelectorAll('.header-list__item--adaptive');
const burger = document.querySelector('.header-burger');
const menu = document.querySelector('.header-nav--adaptive')

links.forEach((item) => {
  item.addEventListener('click', () => {
    setTimeout(() => {
      menu.classList.remove('header-nav--adaptive--active');
    burger.classList.remove('header-burger-active')
    burger.classList.remove('rotate')
    }, 300)
  })
})

burger.addEventListener('click', () => {
  menu.classList.toggle('header-nav--adaptive--active');
  burger.classList.toggle('header-burger-active')
  setTimeout(() => {
    burger.classList.toggle('rotate')
  }, 300)
})

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('header-nav--adaptive')) {
    menu.classList.remove('header-nav--adaptive--active');
    burger.classList.remove('header-burger-active')
    burger.classList.remove('rotate');
  }

})

const servicesSwiper = new Swiper('.services-swiper', {
  slidesPerView: 'auto',
  loop: true,
  clickable: true,
  spaceBetween: 30,
  autoplay: {
    delay: 2000
  },
  grabCursor: true,
});

const servicesPageSwiper = new Swiper('.services-page-swiper', {
  slidesPerView: 'auto',
  loop: true,
  clickable: true,
  spaceBetween: 30, 
  grabCursor: true
});


const work1Swiper = new Swiper('.work-swiper-1', {
  slidesPerView: 'auto',
  clickable: true,
  loop: true,
  spaceBetween: 30,
  autoplay: {
    delay: 2000
  },
  grabCursor: true
});


const work2Swiper = new Swiper('.work-swiper-2', {
  navigation: {
    nextEl: '.work-swiper-2-button-next',
    prevEl: '.work-swiper-2-button-prev'
  },
  slidesPerView: 'auto',
  clickable: true,
  loop: true,
  pagination: {
    el: '.work-pag',
    type: 'bullets',
  },
});

ymaps.ready(init);
  function init() {
    var contactsMap = new ymaps.Map("address-left", {
      center: [55.7612915, 37.6194496],
      zoom: 17,
    });
    (myPlacemark = new ymaps.Placemark(
      contactsMap.getCenter(),
      {},
      {
        iconLayout: "default#image",
        iconImageHref: "../img/location.svg",
        iconImageSize: [20, 20],
        iconImageOffset: [-5, -38],
      }
    )),
      contactsMap.geoObjects.add(myPlacemark);
  }

  const heroBtns = document.querySelectorAll('.btn');
  const popup = document.querySelector('.record');
  
  heroBtns.forEach((btn) => {btn.addEventListener('click', () => {popup.classList.add('active-rec');})})
  
  popup.addEventListener('click', (e) => {
    if (e.target.classList.contains('record__body')) {
      popup.classList.remove('active-rec');
    }
  })

  window.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".js-anim");
 
   for (let i = 0; i < links.length; i++) {
     links[i].addEventListener("click", navbarLinkClick);
   }
 
   function navbarLinkClick(event) {
     smoothScroll(event);
   }
 
   function smoothScroll(event) {
     event.preventDefault();
     const targetId =
       event.currentTarget.getAttribute("href") === "#"
         ? "header"
         : event.currentTarget.getAttribute("href");
     const targetPosition = document.querySelector(targetId).offsetTop;
     const startPosition = window.pageYOffset;
     const distance = targetPosition - startPosition;
     const duration = 1000;
     let start = null;
 
     window.requestAnimationFrame(step);
 
     function step(timestamp) {
       if (!start) start = timestamp;
       const progress = timestamp - start;
       window.scrollTo(
         0,
         easeInOutCubic(progress, startPosition, distance, duration)
       );
       if (progress < duration) window.requestAnimationFrame(step);
     }
   }
 
   function easeInOutCubic(t, b, c, d) {
     t /= d / 2;
     if (t < 1) return (c / 2) * t * t * t + b;
     t -= 2;
     return (c / 2) * (t * t * t + 2) + b;
   }
 })


