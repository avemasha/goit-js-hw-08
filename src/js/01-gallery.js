// Add imports above this line
import { galleryItems } from './gallery-items.js';
// Change code below this line



import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryItem(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);
galleryContainer.addEventListener('click', galleryOnClick);

function createGalleryItem(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" title="${description}"/>
    </a>`;
    })
    .join('');
}
let gallery = new SimpleLightbox('.gallery a');
function galleryOnClick(event) {
  event.preventDefault();
  if (!event.target.classList.contains('gallery__image')) {
    return;
  }

  gallery.on('show.simplelightbox', function () {
    gallery.defaultOptions.captionDelay = 250;
  });
}

console.log(galleryItems);
