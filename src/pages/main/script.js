// Fixed header
const header = document.querySelector('.header'),
	headerHeight = header.offsetHeight,
	anhors = [document.querySelector("a[href='#about-the-shelter']"),
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

for (let anhor of anhors) {
	anhor.addEventListener('click', () => {
		header.classList.remove('header__burger_open');
		body.style.overflow = (header.classList.contains('header__burger_open')) ? 'hidden' : 'visible';
		burgerOverlay.classList.remove('burger__overlay_visible');
		header.style.overflow = 'hidden';
	});
}

// Slider
const swiper = new Swiper(".swiper", {
	speed: 400,
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

// const swiperWrapper = document.querySelector('.swiper-wrapper');
// let swiperSlide = document.createElement('div');
// swiperSlide.classList.add('swiper-slide');
// console.log(swiperSlide);



// swiperSlide.innerHTML =
// 		'<div class= "pet__card" data-path="pets-katrine">'+
// 			'<div class="pet__image">'+
// 				`<img src="${''}>" alt="pets-katrine">`+
// 			'</div>'+
// 			'<h4 class="pet__name">Katrine</h4>'+
// 			'<button class="pet__button button_secondary">Learn more</button>'+
// 		'</div>';

// console.log(swiperSlide);

// swiperWrapper.append(swiperSlide);