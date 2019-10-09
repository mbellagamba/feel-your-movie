import {
  DISCOVER_MOVIES,
  DISCOVER_MOVIES_SUCCESS,
} from './actionTypes';

export const discoverMovies = () => ({
  type: DISCOVER_MOVIES,
});

export const discoverMoviesSuccess = (movies) => ({
  type: DISCOVER_MOVIES_SUCCESS,
  movies,
});
