// Fixed header
const header = document.querySelector('.header'),
	headerHeight = header.offsetHeight, 
	pets = document.querySelector('.pets');
	
window.addEventListener('scroll', () => {
	let scrollDistance = window.scrollY;

	if (scrollDistance >= headerHeight) {
		header.classList.add('header_fixed');
		pets.style.marginTop = `+${headerHeight}px`
	} else {
		header.classList.remove('header_fixed');
		pets.style.marginTop = null;
	}
});

// Slider
const counter = document.querySelector('.slider__counter').querySelector('h4');
const prevPage = document.querySelector('#prevPage');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const nextPage = document.querySelector('#nextPage');

const slider = new Swiper(".swiper", {
	speed: 800,
	navigation: {
		nextEl: ".swiper__button_next",
		prevEl: ".swiper__button_prev",
		disabledClass: "button_disabled",
	},
	allowTouchMove: false,
	breakpoints: {
		// desktop >= 1225
		1225: {
			slidesPerView: 4,
			slidesPerGroup: 4,
			spaceBetween: 30,
			grid: {
				rows: 2,
			},
		},
		//700-1224
		700: {
			slidesPerView: 2,
			slidesPerGroup: 2,
			spaceBetween: 30,
			grid: {
				rows: 3,
			},
		},
		// 320-699
		320: {
			slidesPerView: 1,
			slidesPerGroup: 1,
			spaceBetween: 30,
			grid: {
				rows: 3,
			},
		},
	},

	on: {
		slideChange: function () {
			counter.innerHTML = `${Math.ceil((slider.realIndex) / slider.params.slidesPerGroup + 1)}`;
		},
	},
});