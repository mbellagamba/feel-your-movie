import {
  put,
  takeLatest,
} from 'redux-saga/effects';
import { DISCOVER_MOVIES } from './actionTypes';
import { discoverMoviesSuccess } from './actions';
import {
  API_URL,
  API_KEY,
  LANGUAGE,
  DISCOVER_MOVIES_ROUTE,
} from '../../api';

export function* discoverMovies() {
  const response = yield fetch(`${API_URL}${DISCOVER_MOVIES_ROUTE}?api_key=${API_KEY}&language=${LANGUAGE}&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`)
    .then((res) => res.json());
  yield put(discoverMoviesSuccess(response.results));
}

export function* watchDiscoverMovies() {
  yield takeLatest(DISCOVER_MOVIES, discoverMovies);
}
