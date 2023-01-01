// Modal window
const modalOverlay = document.querySelector('.modal__overlay');

await fetch('../../pets.json')
	.then((response) => response.json())
	.then((data) => {
		for (const pet of data.pets) {
			const modalWindow = document.createElement('div');
			modalWindow.classList.add('modal');
			modalWindow.setAttribute('data-target', `${pet.data}`);
			modalWindow.innerHTML =
				`<button class="modal__button_close button_round">
					<img src="../../../assets/icons/close.svg" alt="close">
				</button>
				<div class="modal__container">
					<div class="modal__image">
						<img src="${pet.img}" alt="${pet.data}">
					</div>
					<div class="modal__content">
						<h3 class="modal__title">${pet.name}</h3>
						<h4 class="modal__subtitle">${pet.breed}</h4>
						<h5 class="modal__about">${pet.description}</h5>
						<ul class="modal-list">
							<li class="modal-list__item">
								<h5><strong>Age:</strong> ${pet.age}</h5>
							</li>
							<li class="modal-list__item">
								<h5><strong>Inoculations:</strong> ${pet.inoculations}</h5>
							</li>
							<li class="modal-list__item">
								<h5><strong>Diseases:</strong> ${pet.diseases}</h5>
							</li>
							<li class="modal-list__item">
								<h5><strong>Parasites:</strong> ${pet.parasites}</h5>
							</li>
						</ul>
					</div>
				</div>`;
			modalOverlay.appendChild(modalWindow);
		}
	})
	.catch(console.error);


const petCards = document.querySelectorAll('.pet__card'),
	modals = document.querySelectorAll('.modal'),
	modalCloseButtons = document.querySelectorAll('.modal__button_close');
console.log(petCards)

petCards.forEach((el) => {
	el.addEventListener('click', (e) => {
		let path = e.currentTarget.getAttribute('data-path');
		document.body.style.overflow = 'hidden';
		document.querySelector(`[data-target="${path}"]`).classList.add('modal_visible');
		modalOverlay.classList.add('modal__overlay_visible');
	});
});

modalCloseButtons.forEach((el) => {
	el.addEventListener('click', () => {
		modals.forEach((el) => {
			el.classList.remove('modal_visible');
		})
		document.body.style.overflow = 'visible';
		modalOverlay.classList.remove('modal__overlay_visible');
	});
});

modalOverlay.addEventListener('click', (el) => {
	if (el.target === modalOverlay) {
		for (let modal of modals) {
			modal.classList.remove('modal_visible');
		}
		document.body.style.overflow = 'visible';
		modalOverlay.classList.remove('modal__overlay_visible');
	}
});