


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
		trigger: 'click',
		interactive: true,
		theme: 'light',
		onShow(instance) {
 
			setTimeout(() => { 
				const closeBtn = instance.popper.querySelector('.tuppy-close');
				if (closeBtn) {
					closeBtn.addEventListener('click', () => {
						instance.hide(); 
					});
				}
			});
		},
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

	// layout cards 
	const gridColumnBtns = document.querySelectorAll('.grid-column__item');
	const productList = document.querySelector('.product-list');
	gridColumnBtns.forEach((btn) => {
		btn.addEventListener('click', function (e) {
			gridColumnBtns.forEach((item) => item.classList.remove('_active'));
    
			this.classList.add('_active');
			
			if (this.dataset.gridColumn === 'default') {
				productList.classList.remove('product-list--grid');
			} else if (this.dataset.gridColumn === 'fast') {
				productList.classList.add('product-list--grid');
			}
			
		})
	})


	@@include('./blocks/offcanvas.js')
	@@include('./blocks/dynamic.js')
	@@include('./blocks/spoller.js')
	@@include('./blocks/sliders.js')
	@@include('./blocks/functions.js')

});




