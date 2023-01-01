import randomSequence from "../../js/random-generator.js";

// Fixed header
const header = document.querySelector('.header'),
	headerHeight = header.offsetHeight,
	petsBlock = document.querySelector('.pets'),
	anchors = [document.querySelector("a[href='#contacts']"), document.querySelector("a[href='#our-pets']")];

window.addEventListener('scroll', () => {
	let scrollDistance = window.scrollY;

	if (scrollDistance >= headerHeight) {
		header.classList.add('header_fixed');
		petsBlock.style.marginTop = `+${headerHeight}px`
	} else {
		header.classList.remove('header_fixed');
		petsBlock.style.marginTop = null;
	}
});

for (let anchor of anchors) {
	anchor.addEventListener('click', (event) => {
		event.preventDefault();
		const blockId = anchor.getAttribute('href');
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
	body = document.body,
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

for (let anchor of anchors) {
	anchor.addEventListener('click', () => {
		header.classList.remove('header__burger_open');
		body.style.overflow = (header.classList.contains('header__burger_open')) ? 'hidden' : 'visible';
		burgerOverlay.classList.remove('burger__overlay_visible');
		header.style.overflow = 'hidden';
	});
}

// Slider
const counter = document.querySelector('.slider__counter').querySelector('h4');
const startSlides = document.querySelector('#startSlides');
const endSlides = document.querySelector('#endSlides');

let pets = await fetch('../../pets.json')
	.then((response) => response.json())
	.then((data) => data.pets);

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

const countGroups = 6;
for (let i = 0; i < countGroups; i++) {
	randomSequence(0, 7, 8).forEach((randomNumber) => {
		slider.appendSlide(
			`<div class= "swiper-slide">
				<div class= "pet__card" data-path="${pets[randomNumber].data}">
					<div class="pet__image">
						<img src="${pets[randomNumber].img}" alt="${pets[randomNumber].data}">
					</div>
					<h4 class="pet__name">${pets[randomNumber].name}</h4>
					<button class="pet__button button_secondary">Learn more</button>
				</div>
			</div>`
		);
	});
}

endSlides.addEventListener('click', () => {
	slider.slideTo(slider.slides.length - 1);
});

startSlides.addEventListener('click', () => {
	slider.slideTo(0);
});