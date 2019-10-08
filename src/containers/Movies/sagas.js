import {
  put,
  call,
  takeEvery,
} from 'redux-saga/effects';
import { DISCOVER_MOVIES, discoverMoviesSuccess } from './reducer';
import { apiKey, language } from '../../constants';

export function* discoverMovies() {
  const response = yield call(fetch({
    url: `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=${language}&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`,
  }));
  yield put(discoverMoviesSuccess(response.movies));
  // const products = yield call(api.getProducts)
  // yield put(actions.receiveProducts(products))
}

export function* watchDiscoverMovies() {
  /*
    takeEvery will fork a new `getAllProducts` task on each GET_ALL_PRODUCTS actions
    i.e. concurrent GET_ALL_PRODUCTS actions are allowed
  */
  yield takeEvery(DISCOVER_MOVIES, discoverMovies);
}
