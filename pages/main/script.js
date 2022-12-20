// Fixed header
const header = document.querySelector('.header'),
	headerHeight = header.offsetHeight,
	startScreen = document.querySelector('.start-screen'),
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
			spaceBetween: 90,
		},
		//760-1199
		760: {
			slidesPerView: 2,
			spaceBetween: 40,
		},
		// 320-759
		320: {
			slidesPerView: 1,
			spaceBetween: 40,
		},
	}
});