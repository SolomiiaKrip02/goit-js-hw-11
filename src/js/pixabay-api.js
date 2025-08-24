import axios from 'axios';

const API_KEY = '51941180-25d97e4841ef256248244227c';
const BASE_URL = 'https://pixabay.com/api/';

export default function fetchData(query) {
  return axios
    .get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: 40,
      },
    })
    .then(res => res.data)
    .catch(err => {
      console.error(err);
      throw new Error('Error fetching images');
    });
}
