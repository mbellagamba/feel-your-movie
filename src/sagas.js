import { fork, all } from 'redux-saga/effects';

import { watchDiscoverMovies } from './containers/Movies/sagas';

export default function* root() {
  yield all([
    fork(watchDiscoverMovies),
  ]);
}
