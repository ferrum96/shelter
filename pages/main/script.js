// Fixed header

const header = document.querySelector('.header'),
	headerHeight = header.offsetHeight;

window.addEventListener('scroll', () => {
	let scrollDistance = window.scrollY;
	console.log(scrollDistance)

	if (scrollDistance >= headerHeight) {
		header.classList.add('header_fixed');
	} else {
		header.classList.remove('header_fixed');
	}
});

// Slider
let position = 0;
const slidesToShow = 3;
const slidesToScroll = 1;
const sliderContainer = document.querySelector('.slider__container');
const sliderTrack = document.querySelector('.slider__track');
const sliderItems = document.querySelectorAll('.slider__item');
const itemsCount = sliderItems.length;
const buttonPrev = document.querySelector('.slider__button_prev');
const buttonNext = document.querySelector('.slider__button_next');
let gap = 90;
const itemWidth = (sliderContainer.clientWidth + gap) / slidesToShow;
console.log(sliderContainer.clientWidth)
const movePosition = slidesToScroll * itemWidth;

sliderItems.forEach((item) => {
	item.style.minWidth = `${itemWidth}px`
})

buttonNext.addEventListener('click', () =>{
	const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
	position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

	setPosition();
	checkBtns();
});

buttonPrev.addEventListener('click', () =>{
	const itemsLeft = Math.abs(position) / itemWidth;
	position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

	setPosition();
	checkBtns();
});

const setPosition = () => {
	sliderTrack.style.transform = `translateX(${position}px)`;
};

const checkBtns = () => {
	buttonPrev.disabled = position === 0;
	buttonNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
};

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