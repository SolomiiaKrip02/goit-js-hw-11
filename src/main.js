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
  if (!query) return;

  clearGallery();
  showLoader();

  try {
    const data = await fetchData(query);
    if (data.hits.length === 0) {
      alert('No images found. Try another search.');
    } else {
      createGallery(data.hits);
    }
  } catch (error) {
    alert('Error fetching images');
    console.error(error);
  } finally {
    hideLoader();
  }
});
