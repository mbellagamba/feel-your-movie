import {
  DISCOVER_MOVIES,
  DISCOVER_MOVIES_SUCCESS,
} from './actionTypes';

export const discoverMovies = (genre, page) => ({
  type: DISCOVER_MOVIES,
  genre,
  page,
});

export const discoverMoviesSuccess = (movies) => ({
  type: DISCOVER_MOVIES_SUCCESS,
  movies,
});
