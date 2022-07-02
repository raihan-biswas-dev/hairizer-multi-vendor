$(document).ready(function () {

	const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
	const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))




	$('.owl-carousel').owlCarousel({
		loop: true,
		autoplay: true,
		smartSpeed: 400,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		margin: 10,
		nav: true,
		dots: false,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 3
			},
			1000: {
				items: 4
			}
		}
	})

	//  time countDown
	// (function () {
	// 	const second = 1000,
	// 		minute = second * 60,
	// 		hour = minute * 60,
	// 		day = hour * 24;

	// 	//I'm adding this section so I don't have to keep updating this pen every year :-)
	// 	//remove this if you don't need it
	// 	let today = new Date(),
	// 		dd = String(today.getDate()).padStart(2, "0"),
	// 		mm = String(today.getMonth() + 1).padStart(2, "0"),
	// 		yyyy = today.getFullYear(),
	// 		nextYear = yyyy + 1,
	// 		dayMonth = "09/30/",
	// 		birthday = dayMonth + yyyy;

	// 	today = mm + "/" + dd + "/" + yyyy;
	// 	if (today > birthday) {
	// 		birthday = dayMonth + nextYear;
	// 	}
	// 	//end

	// 	const countDown = new Date(birthday).getTime(),
	// 		x = setInterval(function () {

	// 			const now = new Date().getTime(),
	// 				distance = countDown - now;

	// 			document.getElementById("days").innerText = Math.floor(distance / (day)),
	// 				document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
	// 				document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
	// 				document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

	// 			//do something later when date is reached
	// 			if (distance < 0) {
	// 				document.getElementById("headline").innerText = "It's my birthday!";
	// 				document.getElementById("countdown").style.display = "none";
	// 				document.getElementById("content").style.display = "block";
	// 				clearInterval(x);
	// 			}
	// 			//seconds
	// 		}, 0)
	// }());

	// Stikcy Header


	var menubar = $('#menubar');
	var slidebar = $('#product');
	if ($('#menubar').length) {
		var headerHeight = menubar.outerHeight();
		var stickyHeaderTop = menubar.offset().top;
		//menubar.css({"top":stickyHeaderTop});
		//slidebar.css({"margin-top":headerHeight});
		var stickyHeader = function () {
			var scrollTop = $(window).scrollTop();
			if (scrollTop > stickyHeaderTop) {
				menubar.addClass('header-sticky');
				//menubar.css({"top":"0px"});
			} else {
				if (menubar.hasClass('header-sticky')) {
					menubar.removeClass('header-sticky');
					//menubar.css({"top":stickyHeaderTop});
				}
			}
		};
		stickyHeader();
		$(window).scroll(function () {
			stickyHeader();
		});
	}


	//  section scroll

	var btn = $('#scrolltop');

	$(window).scroll(function () {
		if ($(window).scrollTop() > 300) {
			btn.addClass('show');
		} else {
			btn.removeClass('show');
		}
	});


	btn.on('click', function (e) {
		e.preventDefault();
		$('html, body').animate({ scrollTop: 0 }, '300');
	});









	// HTML Range Slider
	(function ($) {
		// Variables
		const $rangeSlider = $('#range-sliders .range-slider');
		const $inputSlider = $('#range-sliders .input-slider');

		// Bg Init
		const bgInit = ($this, val = 0, min = 0, max = 255, color = '#f00') => {
			// Background Change
			const valBg = (val - min) / (max - min) * 100;
			$this.css('background', `linear-gradient(to right, ${color} 0%, ${color} ${valBg}%, #fff ${valBg}%, white 100%)`);
		};

		// Pre Init
		const preInit = () => {
			const rangeSliders = ['range-slider-red', 'range-slider-green', 'range-slider-blue'];
			rangeSliders.forEach(function (key) {
				// Background Change
				const $this = $(`#${key}`);
				const val = Number($this.val());
				const min = Number($this.attr('min'));
				const max = Number($this.attr('max'));
				const color = $this.data('color');
				bgInit($this, val, min, max, color);
			});
		};

		// Toggle Class
		const init = () => {
			// Slider Range Change or Input
			$rangeSlider.off('change input').on('change input', function (e) {
				// Prevent Default
				e.preventDefault();
				e.stopPropagation();

				// Background Change
				const $this = $(this);
				const val = Number($this.val());
				const min = Number($this.attr('min'));
				const max = Number($this.attr('max'));
				const color = $this.data('color');
				bgInit($this, val, min, max, color);

				// Assign value to slider input
				$this.next().val($(this).val());
			});

			// Input Slider Input
			$inputSlider.off('input').on('input', function (e) {
				// Prevent Default
				e.preventDefault();
				e.stopPropagation();

				// Background Change
				const $thisInput = $(this);
				let val = Number($thisInput.val());
				const min = Number($thisInput.attr('min'));
				const max = Number($thisInput.attr('max'));
				//const color = $this.data( 'color' );

				// Max Validation
				if (val > max) {
					val = max;
					$thisInput.val(val);
				}

				// Min Validation
				if (val < min) {
					val = min;
					$thisInput.val(val);
				}

				// Background Change
				const $this = $thisInput.prev();
				const color = $this.data('color');
				bgInit($this, val, min, max, color);

				// Assign value to slider range.
				$this.val(val);
			});
		};

		// Document Ready
		$(function () {
			preInit();
			init();
		});
	}(jQuery));









});
