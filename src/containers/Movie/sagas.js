import {
  put,
  takeLatest,
} from 'redux-saga/effects';
import { FETCH_MOVIE } from './actionTypes';
import { fetchMovieSuccess } from './actions';
import * as api from '../../api';

export function* fetchMovie(action) {
  const response = yield fetch(api.fetchMovie(action.id))
    .then((res) => res.json());
  yield put(fetchMovieSuccess(response));
}

export function* watchFetchMovie() {
  yield takeLatest(FETCH_MOVIE, fetchMovie);
}
