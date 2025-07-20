import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

const lightbox = new SimpleLightbox('.gallery a', {});

export function createGallery(images) {
    const gallery = document.querySelector('.gallery');
  
    const markup = images.map(img => `
      <li class="gallery-item">
        <a href="${img.largeImageURL}">
          <img src="${img.webformatURL}" alt="${img.tags}" />
        </a>
      </li>
    `).join('');
  
    gallery.insertAdjacentHTML('beforeend', markup);
    lightbox.refresh();

  }