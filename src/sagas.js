import { fork, all } from 'redux-saga/effects';

import { watchDiscoverMovies } from './containers/Movies/sagas';
import { watchFetchGenres } from './containers/Home/sagas';

export default function* root() {
  yield all([
    fork(watchDiscoverMovies),
    fork(watchFetchGenres),
  ]);
}
