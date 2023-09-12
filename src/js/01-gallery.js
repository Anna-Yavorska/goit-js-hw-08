// Add imports above this line
import { galleryItems } from './gallery-items';

import SimpleLightbox from "simplelightbox";

import 'simplelightbox/dist/simple-lightbox.min.css';

import { createMarkup } from './functions';

// Change code below this line

const container = document.querySelector('.gallery');
const markup = createMarkup(galleryItems);

container.insertAdjacentHTML('beforeend', markup);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionsDelay: 250,
});

console.log(galleryItems);
