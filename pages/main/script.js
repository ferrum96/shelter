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
var swiper = new Swiper(".swiper", {
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

// Modal window
const petButtons = document.querySelectorAll('.pet__button');
const modalCloseButtons = document.querySelectorAll('.modal__button_close');
const modalOverlay = document.querySelector('.modal__overlay');
const modals = document.querySelectorAll('.modal');

petButtons.forEach((el) => {
	el.addEventListener('click', (e) => {
		let path = e.currentTarget.getAttribute('data-path');

		document.querySelector(`[data-target="${path}"]`).classList.add('modal_visible');
		modalOverlay.classList.add('modal__overlay_visible');
	});
});

modalCloseButtons.forEach((el) => {
	el.addEventListener('click', (e) => {
		modals.forEach((el) => {
			el.classList.remove('modal_visible');
		})
		modalOverlay.classList.remove('modal__overlay_visible');
	});
});