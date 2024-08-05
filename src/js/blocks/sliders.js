// Swiper Slider
// ----------------------------------------------

if (document.querySelector('.reviews-swiper')) {
  new Swiper('.reviews-swiper ', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    watchOverflow: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    navigation: {
      nextEl: '.reviews-swiper-next',
      prevEl: '.reviews-swiper-prev',
    },
    pagination: {
      el: '.reviews-swiper-pagination',
    },
    on: {
      slideChangeTransitionStart: function (swiper) {
        if (document.querySelector('.reviews-swiper').querySelector('.js-collapse-text.is-open')) {
          const collapseBlock = document.querySelector('.reviews-swiper').querySelector('.js-collapse-text.is-open');
          collapseBlock.classList.remove('is-open');
          document.querySelector(`a[href="#${collapseBlock.id}"]`).innerText = 'читать полностью';
        }
      },
    },
    breakpoints: {
      100: {
        slidesPerView: 1.1,
      },
      370: {
        slidesPerView: 1.33,
      },
      576: {
        slidesPerView: 1,
      },
    },
  });
}

const popupSwiperThumbs = new Swiper('.popup-swiper-thumbs', {
  // Optional parameters
  loop: false,
  direction: 'vertical',
  slidesPerView: 7,
  spaceBetween: 10,
  observer: true,
  observeParents: true,
  observeSlideChildren: true,
  watchOverflow: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  slideToClickedSlide: true,
  breakpoints: {
    100: {
      slidesPerView: 'auto',
      direction: 'horizontal',
    },

    992: {
      slidesPerView: 7,
      direction: 'vertical',
    },
  },
});

const popupSwiper = new Swiper('.popup-swiper .swiper', {
  // Optional parameters
  loop: false,
  slidesPerView: 1,
  spaceBetween: 0,
  observer: true,
  observeParents: true,
  observeSlideChildren: true,
  watchOverflow: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  thumbs: {
    swiper: popupSwiperThumbs,
  },
  navigation: {
    nextEl: '.popup-swiper__next',
    prevEl: '.popup-swiper__prev',
  },

  on: {
    transitionStart: function () {
      var videos = document.querySelectorAll('.popup-swiper video');
      videos.forEach((videos) => {
        videos.pause();
      });
    },

    transitionEnd: function () {
      var video = document.querySelector('.popup-swiper .swiper-slide-active video');
      if (video) {
        video.play();
      }
    },
  },
});

// const swiperSlides = document.querySelector('.card-swiper').querySelectorAll('.swiper-slide');
$('.js-gallery-item').on('click', function () {
  const index = $(this).index();
  popupSwiper.slideTo(index, 0, false);
});

const cardSwiperThumbs = new Swiper('.card-thubnails', {
  // Optional parameters
  loop: false,
  slidesPerView: 4,
  spaceBetween: 4,
  watchSlidesProgress: true,
  slideToClickedSlide: true,
  breakpoints: {
    100: {
      slidesPerView: 3.5,
    },

    380: {
      slidesPerView: 4.5,
    },
    768: {
      slidesPerView: 3.5,
    },

    1550: {
      slidesPerView: 4,
    },
  },
});
