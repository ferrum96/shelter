

// Slider 

const buttonPrev = document.querySelector('.slider__button_prev');
const buttonNext = document.querySelector('.slider__button_next');
const sliderBox = document.querySelector('.slider__items');
const sliderItems = document.getElementsByClassName('pet__card');
const visibleItemsCount = 3;
const gap = 90;
const itemWidth = sliderItems[0].offsetWidth + gap;
const itemsWidth = itemWidth * sliderItems.length;
let left = 0;

buttonPrev.addEventListener('click', () => {
	const sliderBox = document.querySelector('.slider__items');
	if(sliderItems.length > visibleItemsCount && left < 0) {
		left = left + itemWidth;
	}
	sliderBox.style.left = left + 'px';
});

buttonNext.addEventListener('click', () => {
	const sliderBox = document.querySelector('.slider__items');
	if(sliderItems.length > visibleItemsCount && left > (-itemsWidth + itemWidth * visibleItemsCount)) {
		left = left - itemWidth;
	} else {
		left = 0;
	}
	sliderBox.style.left = left + 'px';
});