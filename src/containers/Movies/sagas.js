import {
  put,
  takeLatest,
} from 'redux-saga/effects';
import { DISCOVER_MOVIES } from './actionTypes';
import { discoverMoviesSuccess } from './actions';
import * as api from '../../api';

export function* discoverMovies(action) {
  const response = yield fetch(api.discoverMovies(action.genre, action.page))
    .then((res) => res.json());
  yield put(discoverMoviesSuccess(response.results));
}

export function* watchDiscoverMovies() {
  yield takeLatest(DISCOVER_MOVIES, discoverMovies);
}
