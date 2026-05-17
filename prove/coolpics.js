const gallery = document.querySelector('#gallery');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');
const toggleButton = document.querySelector('#toggle-text');
const menu = document.querySelector('nav');

// Event listener for opening the modal
gallery.addEventListener('click', openModal);

function openModal(e) {

const img = e.target.closest('img');
if (!img) return; // Exit if the click was not on an image

const attribute = img.getAttribute('src');
const altText = img.getAttribute('alt');

const fullSizeSrc = attribute.replace('sm', 'lg');

modalImage.src = fullSizeSrc;
modalImage.alt = altText;
modal.showModal();

}

// Close modal on button click
closeButton.addEventListener('click', () => {
    modal.close();
});

// Close modal if clicking outside the image
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});

// Toggle text visibility
toggleButton.addEventListener('click', () => {
    toggleButton.classList.toggle('active');
    menu.classList.toggle('hidden');
});