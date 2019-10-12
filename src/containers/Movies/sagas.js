import {
  put,
  takeLatest,
} from 'redux-saga/effects';
import { DISCOVER_MOVIES } from './actionTypes';
import { discoverMoviesSuccess } from './actions';
import * as api from '../../api';

export function* discoverMovies(action) {
  const url = api.discoverMovies(action.genre, action.page);
  const response = yield fetch(url)
    .then((res) => res.json())
    .catch((err) => err);
  yield put(discoverMoviesSuccess(response.results));
}

export function* watchDiscoverMovies() {
  yield takeLatest(DISCOVER_MOVIES, discoverMovies);
}
