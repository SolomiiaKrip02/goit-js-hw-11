import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEl = document.getElementById('gallery');
const loaderEl = document.getElementById('loader');
let lightbox;

export function createGallery(images) {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
    <li class="photo-card">
      <a href="${largeImageURL}">
        <img src="${webformatURL}" alt="${tags}" loading="lazy" />
      </a>
      <div class="info">
        <div><b>Likes:</b> ${likes}</div>
        <div><b>Views:</b> ${views}</div>
        <div><b>Comments:</b> ${comments}</div>
        <div><b>Downloads:</b> ${downloads}</div>
      </div>
    </li>
  `
    )
    .join('');

  galleryEl.insertAdjacentHTML('beforeend', markup);

  if (!lightbox) {
    lightbox = new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionDelay: 250,
      showCounter: true,
    });
  } else {
    lightbox.refresh();
  }

  document.querySelectorAll('.photo-card img').forEach(img => {
    img.style.transition = 'transform 0.3s';
    img.addEventListener(
      'mouseenter',
      () => (img.style.transform = 'scale(1.05)')
    );
    img.addEventListener(
      'mouseleave',
      () => (img.style.transform = 'scale(1)')
    );
  });
}

export function clearGallery() {
  galleryEl.innerHTML = '';
}

export function showLoader() {
  loaderEl.classList.remove('is-hidden');
}

export function hideLoader() {
  loaderEl.classList.add('is-hidden');
}
