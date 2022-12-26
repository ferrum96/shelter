// Modal window
const petCards = document.querySelectorAll('.pet__card'),
	modalCloseButtons = document.querySelectorAll('.modal__button_close'),
	modalOverlay = document.querySelector('.modal__overlay'),
	modals = document.querySelectorAll('.modal');

petCards.forEach((el) => {
	el.addEventListener('click', (e) => {
		let path = e.currentTarget.getAttribute('data-path');
		body.style.overflow = 'hidden';
		document.querySelector(`[data-target="${path}"]`).classList.add('modal_visible');
		modalOverlay.classList.add('modal__overlay_visible');
	});
});

modalCloseButtons.forEach((el) => {
	el.addEventListener('click', () => {
		modals.forEach((el) => {
			el.classList.remove('modal_visible');
		})
		body.style.overflow = 'visible';
		modalOverlay.classList.remove('modal__overlay_visible');
	});
});

modalOverlay.addEventListener('click', (el) => {
	if(el.target == modalOverlay) {
		for(let modal of modals) {
			modal.classList.remove('modal_visible');
		}
		body.style.overflow = 'visible';
		modalOverlay.classList.remove('modal__overlay_visible');
	}
});