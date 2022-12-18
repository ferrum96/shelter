// Fixed header
const header = document.querySelector('.header'),
	headerHeight = header.offsetHeight;

window.addEventListener('scroll', () => {
	let scrollDistance = window.scrollY;
	// console.log(scrollDistance)

	if (scrollDistance >= headerHeight) {
		header.classList.add('header_fixed');
	} else {
		header.classList.remove('header_fixed');
	}
});

// Slider
const swiper = new Swiper(".swiper", {
	speed: 600,
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