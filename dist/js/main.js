


document.addEventListener('DOMContentLoaded', function (event) {


	$('._toggle').on('click', function (e) { 
		e.preventDefault();
		$(this).toggleClass('_active').next().slideToggle();
		$(this).closest('.menu-toggle').find('._toggle').not($(this)).removeClass('_active').next().slideUp();
	})

	const toggleBlock = document.querySelectorAll('._toggle-block')
	
	toggleBlock.forEach(item => {
		item.addEventListener('click', function (e) {
			e.preventDefault();
			item.classList.toggle('_active')
			const data = item.dataset.href
			document.querySelector(`#${data}`).classList.toggle('_show')

		})
	})

	const toggleAction = document.querySelectorAll('._toggle-action')

	toggleAction.forEach(item => {
		item.addEventListener('click', function (e) {
			item.classList.toggle('_active')
		})
	})

	// tabs
	const tabsButtons = document.querySelectorAll('[data-tabs-button]')
	const tabs = document.querySelectorAll('[data-tabs]')

	if (tabs) {
		for (var i = 0; i < tabsButtons.length; i++) {
			const tabsButton = tabsButtons[i]

			tabsButton.addEventListener('click', function (e) {
				const tabsButtonIndex = tabsButton.dataset.tabsButton
				const tabsParent = e.target.closest('[data-tabs]')
				const tabsButtonActive = tabsParent.querySelector('[data-tabs-button]._active');
				const tabsBlockActive = tabsParent.querySelector('[data-tabs-block]._active');
				const tabsBlock = tabsParent.querySelectorAll('[data-tabs-block]');

				if (tabsButtonActive) {
					tabsButtonActive.classList.remove('_active');
				}
				if (tabsBlockActive) {
					tabsBlockActive.classList.remove('_active');
				}
				tabsButton.classList.add('_active')
				tabsBlock[tabsButtonIndex].classList.add('_active')

				e.preventDefault();
			})
		}
	}

	// fixed placeholder


$('.form-input').focus(function () {
	var value = $(this).val();
	if (value == '') {
		$(this).closest('.form-wrapper').addClass('focus')
	} 
}).blur(function () {
	var value = $(this).val();
	if (value == '') {
		$(this).closest('.form-wrapper').removeClass('focus')
	}
});

	// select
	$('.form-select').each(function () {
		$(this).select2({
			minimumResultsForSearch: 10,
			language: {
				"noResults": function(){
						return "Не найдено";
				}	
			},
			dropdownParent: $(this).parent(),
		}).on("select2:select", function () { 
			$(this).closest(".form-wrapper").addClass('focus')
		});
		if ($(this).val()) {
        $(this).closest(".form-wrapper").addClass('focus')
    }
	});
	
	


	// plus minus
	$('[data-counter-minus]').click(function () {
		var $input = $(this).parent().find('[data-counter-val]');
		var count = parseInt($input.text()) - 1;
		count = count < 1 ? 1 : count;
		$input.text(count);

		return false;
	});
	$('[data-counter-plus]').click(function () {
		var $input = $(this).parent().find('[data-counter-val]');
		$input.text(parseInt($input.text()) + 1);

		return false;
	});



	$('#sel-region, #sel-city').on('change', function () { 
		if ($('#sel-region').val() && $('#sel-city').val()) { 
			$('#delivery-info').show()
		}
	})
	
	$('.js-search-input').on('focus', function () { 
		$(this).closest('.search-block').find('.search-block__clear').addClass('is-show');
	})

	$('.js-search-input').on('blur', function () { 
		if ($(this).val() == '') {
			$(this).closest('.search-block').find('.search-block__clear').removeClass('is-show');
		}
	})

	$('.js-search-clear').on('click', function () { 
		$(this).removeClass('is-show');
	})

	$('.js-filter-toggle').on('click', function () { 
		$(this).toggleClass('is-active');
		$('.filter-block').toggleClass('is-show');
	})

	// more text
	$('.js-collapse-text-toggle').on('click', function (e) { 
		e.preventDefault();
		const id = $(this).attr('href');
		$(id).toggleClass('is-open')
		if ($(id).hasClass('is-open')) {
			$(this).text('cкрыть')
		} else { 
			$(this).text('читать полностью')
		}
	})

	// alert
	$('.js-close-alert').on('click', function () { 
		$(this).closest('.alert').hide();
	})

	// Counter
	$('[data-counter-minus]').click(function () {
		var $input = $(this).parent().find('[data-counter-val]');
		var count = parseInt($input.val()) - 1;
		count = count < 1 ? 1 : count;
		$input.val(count);

		return false;
	});

	$('[data-counter-plus]').click(function () {
		var $input = $(this).parent().find('[data-counter-val]');
		$input.val(parseInt($input.val()) + 1);

		return false;
	});

	// Copy text 
	$('._copy').click(function () {
		$(this).closest('._copy-wrapper').find('._copy-show').show();
		$(this).closest('._copy-wrapper').find('._copy-text').hide();
		$(this).hide();
		navigator.clipboard.writeText($(this).closest('._copy-wrapper').find('._copy-text').text());
		return false;
	});

	// Tippy
	tippy('[data-tippy-content]', {
		placement: 'top',
		theme: 'light',
	});
	tippy('[data-tippy-content-popover]', {
		content(reference) {
			const id = reference.getAttribute('data-template');
			const template = document.getElementById(id);
			return template.innerHTML;
		},
		allowHTML: true,
		placement: 'top',
		theme: 'light',
	});


	const $header = $('.header');
	$(window).on('scroll load', function () {
		if ($(this).scrollTop() > 0) {
			$header.addClass("is-sticky");
		} else {
			$header.removeClass("is-sticky");
		}
	});


	var ul = $('.js-list');
	var input = $('.js-sorting-list');
	var li = ul.find('li');

	input.keyup(function(){
		var value = $(this).val().toLowerCase();
		li.filter(function() {
				$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
		});
	})

	$('.js-toggle-search').on('click', function () { 
		$('#toggle-search').toggleClass('is-open')
	})


	//Img zoom

	const zoom = document.querySelectorAll('.zoom');
	zoom.forEach((zoom) => {
		zoom.addEventListener('mousemove', function (e) {
			var zoomer = e.currentTarget;
			offsetX = e.offsetX
			offsetY = e.offsetY
			x = offsetX / zoomer.offsetWidth * 100
			y = offsetY / zoomer.offsetHeight * 100
			zoomer.style.backgroundPosition = x + '% ' + y + '%';
		})
	})


	// offcanvass
// ----------------------------------------------
const offcanvasLinks = document.querySelectorAll('._open-modal');
const offcanvasCloseIcon = document.querySelectorAll('._close-modal');
const body = document.querySelector('body');
const html = document.querySelector('html');
const lockPadding = document.querySelectorAll('.lock-padding');

let unlock = true;

const timeout = 200;

if (offcanvasLinks.length > 0) {
  for (let index = 0; index < offcanvasLinks.length; index++) {
    const offcanvasLink = offcanvasLinks[index];
    offcanvasLink.addEventListener('click', function (e) {
      let offcanvasName;
      if (this.hasAttribute('href')) {
        offcanvasName = offcanvasLink.getAttribute('href').replace('#', '');
      } else {
        offcanvasName = offcanvasLink.getAttribute('data-href').replace('#', '');
      }

      const curentoffcanvas = document.getElementById(offcanvasName);
      offcanvasOpen(curentoffcanvas);
      e.preventDefault();
    });
  }
}

if (offcanvasCloseIcon.length > 0) {
  for (let index = 0; index < offcanvasCloseIcon.length; index++) {
    const el = offcanvasCloseIcon[index];
    el.addEventListener('click', function (e) {
      offcanvasClose(el.closest('._modal'));
      e.preventDefault();
    });
  }
}

function offcanvasOpen(curentoffcanvas) {
  if (curentoffcanvas && unlock) {
    const offcanvasActive = document.querySelector('._modal._open');
    const offcanvasInputFirst = document.querySelector('.search-block__input input');

    if (offcanvasActive) {
      offcanvasClose(offcanvasActive, false);
    } else {
      bodyLock();
    }
    curentoffcanvas.classList.add('_open');
    setTimeout(() => {
      curentoffcanvas.classList.add('_animate');
    }, 50);

    setTimeout(() => {
      if (offcanvasInputFirst) {
        offcanvasInputFirst.focus();
      }
    }, 100);

    curentoffcanvas.addEventListener('click', function (e) {
      if (!e.target.closest('._modal__content')) {
        offcanvasClose(e.target.closest('._modal'));
      }
    });
  }
}

function offcanvasClose(offcanvasActive, doUnlock = true) {
  if (unlock) {
    offcanvasActive.classList.remove('_animate');

    setTimeout(() => {
      offcanvasActive.classList.remove('_open');
    }, 250);
    if (doUnlock) {
      // если открыто фиксированное меню то...
      bodyUnLock();
    }
  }
}

function bodyLock(classEl = 'lock') {
  const lockPaddingValue = window.innerWidth - document.querySelector('.main-wrapper').offsetWidth + 'px';

  if (lockPadding.length > 0) {
    for (let index = 0; index < lockPadding.length; index++) {
      const el = lockPadding[index];
      el.style.paddingRight = lockPaddingValue;
    }
  }
  body.style.paddingRight = lockPaddingValue;
  html.classList.add(classEl);

  unlock = false;
  setTimeout(function () {
    unlock = true;
  }, timeout);
}

function bodyUnLock(classEl = 'lock') {
  setTimeout(function () {
    if (lockPadding.length > 0) {
      for (let index = 0; index < lockPadding.length; index++) {
        const el = lockPadding[index];
        el.style.paddingRight = '0px';
      }
    }
    body.style.paddingRight = '0px';
    html.classList.remove(classEl);
  }, timeout);

  unlock = false;
  setTimeout(function () {
    unlock = true;
  }, timeout);
}

document.addEventListener('keydown', function (e) {
  if (e.which === 27) {
    const offcanvasActive = document.querySelector('._modal._open');
    offcanvasClose(offcanvasActive);
  }
});

(function () {
  // проверяем поддержку
  if (!Element.prototype.closest) {
    // реализуем
    Element.prototype.closest = function (css) {
      var node = this;
      while (node) {
        if (node.matches(css)) return node;
        else node = node.parentElement;
      }
      return null;
    };
  }
})();
(function () {
  // проверяем поддержку
  if (!Element.prototype.matches) {
    // определяем свойство
    Element.prototype.matches =
      Element.prototype.matchesSelector ||
      Element.prototype.webkitMatchesSelector ||
      Element.prototype.mozMatchesSelector ||
      Element.prototype.msMatchesSelector;
  }
})();

	
// Dynamic
// data-da=calss, index(last, first), media
// ---------------------------------------------- 

var originalPositions = [];
var daElements = document.querySelectorAll('[data-da]');
var daElementsArray = [];
var daMatchMedia = [];
//Заполняем массивы
if (daElements.length > 0) {
	var number = 0;
	for (var index = 0; index < daElements.length; index++) {
		var daElement = daElements[index];
		var daMove = daElement.getAttribute('data-da');
		if (daMove != '') {
			var daArray = daMove.split(',');
			var daPlace = daArray[1] ? daArray[1].trim() : 'last';
			var daBreakpoint = daArray[2] ? daArray[2].trim() : '767';
			var daType = daArray[3] === 'min' ? daArray[3].trim() : 'max';
			var daDestination = document.querySelector('.' + daArray[0].trim())
			if (daArray.length > 0 && daDestination) {
				daElement.setAttribute('data-da-index', number);
				//Заполняем массив первоначальных позиций т
				originalPositions[number] = {
					"parent": daElement.parentNode,
					"index": indexInParent(daElement)
				};
				//Заполняем массив элементов 
				daElementsArray[number] = {
					"element": daElement,
					"destination": document.querySelector('.' + daArray[0].trim()),
					"place": daPlace,
					"breakpoint": daBreakpoint,
					"type": daType
				}
				number++;
			}
		}
	}
	dynamicAdaptSort(daElementsArray);

	//Создаем события в точке брейкпоинта
	for (var index = 0; index < daElementsArray.length; index++) {
		var el = daElementsArray[index];
		var daBreakpoint = el.breakpoint;
		var daType = el.type;

		daMatchMedia.push(window.matchMedia("(" + daType + "-width: " + daBreakpoint + "px)"));
		daMatchMedia[index].addListener(dynamicAdapt);
	}
}
//Основная функция
function dynamicAdapt(e) {
	for (var index = 0; index < daElementsArray.length; index++) {
		var el = daElementsArray[index];
		var daElement = el.element;
		var daDestination = el.destination;
		var daPlace = el.place;
		var daBreakpoint = el.breakpoint;
		var daClassname = "_dynamic_adapt_" + daBreakpoint;

		if (daMatchMedia[index].matches) {
			//Перебрасываем элементы
			if (!daElement.classList.contains(daClassname)) {
				var actualIndex = indexOfElements(daDestination)[daPlace];
				if (daPlace === 'first') {
					actualIndex = indexOfElements(daDestination)[0];
				} else if (daPlace === 'last') {
					actualIndex = indexOfElements(daDestination)[indexOfElements(daDestination).length];
				}
				daDestination.insertBefore(daElement, daDestination.children[actualIndex]);
				daElement.classList.add(daClassname);
			}
		} else {
			//Возвращаем на место
			if (daElement.classList.contains(daClassname)) {
				dynamicAdaptBack(daElement);
				daElement.classList.remove(daClassname);
			}
		}
	}

}

//Вызов основной функции
dynamicAdapt();

//Функция возврата на место
function dynamicAdaptBack(el) {
	var daIndex = el.getAttribute('data-da-index');
	var originalPlace = originalPositions[daIndex];
	var parentPlace = originalPlace['parent'];
	var indexPlace = originalPlace['index'];
	var actualIndex = indexOfElements(parentPlace, true)[indexPlace];
	parentPlace.insertBefore(el, parentPlace.children[actualIndex]);
}
//Функция получения индекса внутри родителя
function indexInParent(el) {
	var children = Array.prototype.slice.call(el.parentNode.children);
	return children.indexOf(el);
}
//Функция получения массива индексов элементов внутри родителя 
function indexOfElements(parent, back) {
	var children = parent.children;
	var childrenArray = [];
	for (var i = 0; i < children.length; i++) {
		var childrenElement = children[i];
		if (back) {
			childrenArray.push(i);
		} else {
			//Исключая перенесенный элемент
			if (childrenElement.getAttribute('data-da') == null) {
				childrenArray.push(i);
			}
		}
	}
	return childrenArray;
}
//Сортировка объекта
function dynamicAdaptSort(arr) {
	arr.sort(function (a, b) {
		if (a.breakpoint > b.breakpoint) { return -1 } else { return 1 }
	});
	arr.sort(function (a, b) {
		if (a.place > b.place) { return 1 } else { return -1 }
	});
}

	
const spollers = document.querySelectorAll('[data-spoller]')
if(spollers.length > 0) {
	for(var i = 0; i < spollers.length; i++) {
		const spoller = spollers[i]

		if (!spoller.classList.contains('_active')) {
			spoller.nextElementSibling.hidden = true;
		} else {
			spoller.nextElementSibling.hidden = false;
		}
		spoller.addEventListener('click', function(e){
			const el = e.target;
			if (el.hasAttribute('data-spoller') || el.closest('[data-spoller]')) {
				const spollerTitle = el.hasAttribute('data-spoller') ? el : el.closest('[data-spoller]');
				const spollersBlock = spollerTitle.closest('[data-spollers]');
				const oneSpoller = spollersBlock.hasAttribute('data-one-spollers') ? true : false;

				if (!spollersBlock.querySelectorAll('._slide').length) {
					if(oneSpoller && !spollerTitle.classList.contains('_active')) {
						hideSpollersBody(spollersBlock);
					}
					spollerTitle.classList.toggle('_active');
					_slideToggle(spollerTitle.nextElementSibling, 200)
					
				}
				e.preventDefault();
			}
		})
	}

	function hideSpollersBody(spollersBlock) {
		const spollerActiveTitle = spollersBlock.querySelector('[data-spoller]._active');
		if (spollerActiveTitle) {
			spollerActiveTitle.classList.remove('_active');
			_slideUp(spollerActiveTitle.nextElementSibling, 300)
		}
	}
}
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
  slidesPerView: 'auto',
  spaceBetween: 4,
  slideToClickedSlide: true,
  navigation: {
    nextEl: '.card-thubnails-next',
    prevEl: '.card-thubnails-prev',
  },
});

	
let _slideUp = (target, duration = 500) => {
	if(!target.classList.contains('_slide')){

		target.classList.add('_slide');
		target.style.transitionProperty = 'height, margin, padding';
		target.style.transitionDuration = duration + 'ms';
		target.style.height = target.offsetHeight + 'px';
		target.offsetHeight;
		target.style.overflow = 'hidden';
		target.style.height = 0;
		target.style.paddingTop = 0;
		target.style.paddingBottom = 0;
		target.style.marginTop = 0;
		target.style.marginBottom = 0;
		window.setTimeout(() => {
			target.hidden = true;
			target.style.removeProperty('height');
			target.style.removeProperty('padding-top');
			target.style.removeProperty('padding-bottom');
			target.style.removeProperty('margin-top');
			target.style.removeProperty('margin-bottom');
			target.style.removeProperty('overflow');
			target.style.removeProperty('transition-duration');
			target.style.removeProperty('transition-property');
			target.classList.remove('_slide');
		}, duration);
	}
}

let _slideDown = (target, duration = 500) => {
	if(!target.classList.contains('_slide')){
		target.classList.add('_slide')
		if (target.hidden)
			target.hidden = false;

		
		let height = target.offsetHeight;
		target.style.overflow = 'hidden';
		target.style.height = 0;
		target.style.paddingTop = 0;
		target.style.paddingBottom = 0;
		target.style.marginTop = 0;
		target.style.marginBottom = 0;
		target.offsetHeight;
		target.style.transitionProperty = "height, margin, padding";
		target.style.transitionDuration = duration + 'ms';
		target.style.height = height + 'px';
		target.style.removeProperty('padding-top');
		target.style.removeProperty('padding-bottom');
		target.style.removeProperty('margin-top');
		target.style.removeProperty('margin-bottom');
		window.setTimeout(() => {
			target.style.removeProperty('height');
			target.style.removeProperty('overflow');
			target.style.removeProperty('transition-duration');
			target.style.removeProperty('transition-property');
			target.classList.remove('_slide');
		}, duration);
	}
}
let _slideToggle = (target, duration = 500) => {
	if (target.hidden) {
		return _slideDown(target, duration);
	} else {
		return _slideUp(target, duration);
	}
	
}




});




