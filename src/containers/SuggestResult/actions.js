import {
  SEARCH_MOVIES,
  SEARCH_MOVIES_SUCCESS,
  SEARCH_MOVIES_ERROR,
} from './actionTypes';

export const searchMovies = (query) => ({
  type: SEARCH_MOVIES,
  query,
});

export const searchMoviesSuccess = (movies) => ({
  type: SEARCH_MOVIES_SUCCESS,
  movies,
});

export const searchMoviesError = () => ({
  type: SEARCH_MOVIES_ERROR,
});
