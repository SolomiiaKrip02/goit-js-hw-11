import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import fetchData from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

const form = document.getElementById('search-form');

form.addEventListener('submit', async e => {
  e.preventDefault();
  const query = e.target.elements['search-text'].value.trim();

  if (!query) {
    iziToast.info({
      title: 'Інформація',
      message: 'Введіть пошуковий запит',
      position: 'topRight',
    });
    return;
  }

  clearGallery();
  showLoader();

  try {
    const data = await fetchData(query);
    if (data.hits.length === 0) {
      iziToast.warning({
        title: 'Увага',
        message: 'No images found. Try another search.',
        position: 'topRight',
      });
    } else {
      createGallery(data.hits);
    }
  } catch (error) {
    iziToast.error({
      title: 'Помилка',
      message: 'Error fetching images',
      position: 'topRight',
    });
    console.error(error);
  } finally {
    hideLoader();
  }
});
