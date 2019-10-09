import {
  FETCH_GENRES,
  FETCH_GENRES_SUCCESS,
} from './actionTypes';

export const fetchGenres = () => ({
  type: FETCH_GENRES,
});

export const fetchGenresSuccess = (genres) => ({
  type: FETCH_GENRES_SUCCESS,
  genres,
});
