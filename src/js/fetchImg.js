import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { rendersImgs, visibilityBntLoadMore } from './renders';
import axios from 'axios';

const perPage = 40;

export async function fetchImg(searchWord, numberPage) {
  try {
    const response = await axios.get('https://pixabay.com/api/', {
      params: {
        key: '32355288-1672c0ed064a454b232c69874',
        q: searchWord,
        image_type: 'photo',
        safesearch: true,
        orientation: 'horizontal',
        per_page: perPage,
        page: numberPage,
      },
    });

    console.log(response.data.hits);
    if (response.data.hits.length) {
      rendersImgs(response.data.hits);

      return;
    }
    visibilityBntLoadMore(false);
    Notify.failure(
      'Sorry, there are no images matching your search query. Please try again.'
    );
  } catch (error) {
    console.error(error);
  }
}
