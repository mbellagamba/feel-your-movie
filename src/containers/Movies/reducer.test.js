import reducer from './reducer';
import {
  DISCOVER_MOVIES,
  DISCOVER_MOVIES_SUCCESS,
} from './actionTypes';

const prevMovies = [...Array(3).keys()]
  .map((id) => ({ id, title: `movie ${id}` }));

const nextMovies = [...Array(3).keys()]
  .map((id) => ({ id: id + 3, title: `movie ${id + 3}` }));

test('should return initial state', () => {
  const { movies, loading } = reducer(undefined, {});
  expect(movies).toEqual([]);
  expect(loading).toBeFalsy();
});

test('should handle DISCOVER_MOVIES on initial state', () => {
  const { loading } = reducer(undefined, { type: DISCOVER_MOVIES, page: 1 });
  expect(loading).toBeTruthy();
});

test('should handle DISCOVER_MOVIES with some movies and page 1', () => {
  const state = {
    movies: prevMovies,
    loading: false,
  };
  const { movies, loading } = reducer(state, { type: DISCOVER_MOVIES, page: 1 });
  expect(movies).toEqual([]);
  expect(loading).toBeTruthy();
});

test('should handle DISCOVER_MOVIES with some movies and page > 1', () => {
  const state = {
    movies: prevMovies,
    loading: false,
  };
  const { movies, loading } = reducer(state, { type: DISCOVER_MOVIES, page: 2 });
  expect(movies).toEqual(prevMovies);
  expect(loading).toBeTruthy();
});

test('should handle DISCOVER_MOVIES_SUCCESS on initial state', () => {
  const state = { movies: [], loading: true };
  const { movies, loading } = reducer(state, { type: DISCOVER_MOVIES_SUCCESS, movies: nextMovies });
  expect(movies).toEqual(nextMovies);
  expect(loading).toBeFalsy();
});

test('should handle DISCOVER_MOVIES_SUCCESS with previous movies', () => {
  const state = {
    movies: prevMovies,
    loading: true,
  };
  const { movies, loading } = reducer(state, { type: DISCOVER_MOVIES_SUCCESS, movies: nextMovies });
  expect(movies).toEqual([...prevMovies, ...nextMovies]);
  expect(loading).toBeFalsy();
});
