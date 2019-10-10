import { fork, all } from 'redux-saga/effects';

import { watchDiscoverMovies } from './containers/Movies/sagas';
import { watchFetchGenres } from './containers/Home/sagas';
import { watchSearchMovies } from './containers/SuggestResult/sagas';
import { watchFetchMovie } from './containers/Movie/sagas';

export default function* root() {
  yield all([
    fork(watchDiscoverMovies),
    fork(watchFetchGenres),
    fork(watchSearchMovies),
    fork(watchFetchMovie),
  ]);
}
