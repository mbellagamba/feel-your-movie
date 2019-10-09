import {
  FETCH_MOVIE,
  FETCH_MOVIE_SUCCESS,
} from './actionTypes';

export const fetchMovie = (id) => ({
  type: FETCH_MOVIE,
  id,
});

export const fetchMovieSuccess = (movie) => ({
  type: FETCH_MOVIE_SUCCESS,
  movie,
});
