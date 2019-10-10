import {
  put,
  takeLatest,
} from 'redux-saga/effects';
import { SEARCH_MOVIES } from './actionTypes';
import { searchMoviesSuccess, searchMoviesError } from './actions';
import { clearSuggestionParams } from '../Suggestion/actions';
import * as api from '../../api';

export function* searchMovies(action) {
  try {
    const response = yield fetch(api.searchMovies(action.query))
      .then((res) => res.json());
    yield put(searchMoviesSuccess(response.results));
  } catch (err) {
    yield put(searchMoviesError(err));
    yield put(clearSuggestionParams());
  }
}

export function* watchSearchMovies() {
  yield takeLatest(SEARCH_MOVIES, searchMovies);
}
