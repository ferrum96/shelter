import randomSequence from "../../js/random-generator.js";

// Fixed header
const header = document.querySelector('.header'),
	headerHeight = header.offsetHeight,
	anchors = [document.querySelector("a[href='#about-the-shelter']"),
	document.querySelector("a[href='#help-the-shelter']"),
	document.querySelector("a[href='#contacts']"),
	document.querySelector("a[href='#make-a-friend']")];

window.addEventListener('scroll', () => {
	let scrollDistance = window.scrollY;

	if (scrollDistance >= headerHeight) {
		header.classList.add('header_fixed');
	} else {
		header.classList.remove('header_fixed');
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
	burgerOverlay = document.querySelector('.burger__overlay');

headerBurgerBtn.addEventListener('click', () => {
	header.classList.toggle('header__burger_open');
	if (header.classList.contains('header__burger_open')) {
		document.body.style.overflow = 'hidden';
		header.style.overflow = 'visible';
		burgerOverlay.classList.add('burger__overlay_visible')
	} else {
		document.body.style.overflow = 'visible';
		header.style.overflow = 'hidden';
		burgerOverlay.classList.remove('burger__overlay_visible');
	}
});

burgerOverlay.addEventListener('click', () => {
	burgerOverlay.classList.remove('burger__overlay_visible');
	header.classList.remove('header__burger_open');
	document.body.style.overflow = 'visible';
	header.style.overflow = 'hidden';
});

for (let anchor of anchors) {
	anchor.addEventListener('click', () => {
		header.classList.remove('header__burger_open');
		document.body.style.overflow = (header.classList.contains('header__burger_open')) ? 'hidden' : 'visible';
		burgerOverlay.classList.remove('burger__overlay_visible');
		header.style.overflow = 'hidden';
	});
}

// Slider
const swiper = new Swiper(".swiper", {
	speed: 800,
	allowTouchMove: false,
	spaceBetween: 30,
	loop: true,
	onlyExternal: true,

	navigation: {
		nextEl: ".swiper__button_next",
		prevEl: ".swiper__button_prev",
	},

	breakpoints: {
		// desktop >= 1200
		1201: {
			slidesPerView: 3,
			slidesPerGroup: 3,
			spaceBetween: 90,
		},
		//760-1199
		760: {
			slidesPerView: 2,
			slidesPerGroup: 2,
			spaceBetween: 40,
		},
		// 320-759
		320: {
			slidesPerView: 1,
			slidesPerGroup: 1,
			spaceBetween: 40,
		},
	}
});

let pets = await fetch('../../pets.json')
	.then((response) => response.json())
	.then((data) => data.pets);

randomSequence(0, 7, 6).forEach((randomNumber) => {
	swiper.appendSlide(
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