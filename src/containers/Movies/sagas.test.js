import { put, takeLatest } from 'redux-saga/effects';
import { discoverMovies, watchDiscoverMovies } from './sagas';
import { DISCOVER_MOVIES, DISCOVER_MOVIES_SUCCESS } from './actionTypes';

test('should dispatch action "DISCOVER_MOVIES"', () => {
  const generator = watchDiscoverMovies();
  expect(generator.next().value)
    .toEqual(takeLatest(DISCOVER_MOVIES, discoverMovies));
  expect(generator.next().done).toBeTruthy();
});

test('should dispatch action "DISCOVER_MOVIES_SUCCESS" with result from fetch', () => {
  const mockResponse = { results: [1, 2, 3] };
  const generator = discoverMovies({});
  generator.next();
  expect(generator.next(mockResponse).value)
    .toEqual(put({ type: DISCOVER_MOVIES_SUCCESS, movies: mockResponse.results }));
  expect(generator.next().done).toBeTruthy();
});
