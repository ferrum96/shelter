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
    el.addEventListener('click', () => {
        modals.forEach((el) => {
            el.classList.remove('modal_visible');
        })
        modalOverlay.classList.remove('modal__overlay_visible');
    });
});