// Fixed header
const header = document.querySelector('.header'),
	headerHeight = header.offsetHeight,
	pets = document.querySelector('.pets'),
	anhors = [document.querySelector("a[href='#contacts']"), document.querySelector("a[href='#our-pets']")];

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

for (let anhor of anhors) {
	anhor.addEventListener('click', (event) => {
		event.preventDefault();
		const blockId = anhor.getAttribute('href');
		const scrollTarget = document.querySelector('' + blockId);
		const topOffset = 100;
		const elementPosition = scrollTarget.getBoundingClientRect().top;
		const offsetPosition = elementPosition - topOffset;

		window.scrollBy({
			top: offsetPosition,
			behavior: 'smooth'
		});
	});
}

// Burger menu
const headerBurgerBtn = document.querySelector('.header__burger'),
	body = document.querySelector('body'),
	burgerOverlay = document.querySelector('.burger__overlay');

headerBurgerBtn.addEventListener('click', () => {
	header.classList.toggle('header__burger_open');
	if (header.classList.contains('header__burger_open')) {
		body.style.overflow = 'hidden';
		header.style.overflow = 'visible';
		burgerOverlay.classList.add('burger__overlay_visible')
	} else {
		body.style.overflow = 'visible';
		header.style.overflow = 'hidden';
		burgerOverlay.classList.remove('burger__overlay_visible');
	}
});

burgerOverlay.addEventListener('click', () => {
	burgerOverlay.classList.remove('burger__overlay_visible');
	header.classList.remove('header__burger_open');
	body.style.overflow = 'visible';
	header.style.overflow = 'hidden';
});

for (let anhor of anhors) {
	anhor.addEventListener('click', () => {
		header.classList.remove('header__burger_open');
		body.style.overflow = (header.classList.contains('header__burger_open')) ? 'hidden' : 'visible';
		burgerOverlay.classList.remove('burger__overlay_visible');
		header.style.overflow = 'hidden';
	});
}

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