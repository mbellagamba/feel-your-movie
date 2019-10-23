import {
  put,
  takeLatest,
} from 'redux-saga/effects';
import { FETCH_GENRES } from './actionTypes';
import { fetchGenresSuccess } from './actions';
import * as api from '../../api';

export function* fetchGenres() {
  const response = yield fetch(api.fetchGenres())
    .then((res) => res.json());
  yield put(fetchGenresSuccess(response.genres));
}

export function* watchFetchGenres() {
  yield takeLatest(FETCH_GENRES, fetchGenres);
}
