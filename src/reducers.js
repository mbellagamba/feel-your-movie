import { combineReducers } from 'redux';
import movies from './containers/Movies/reducer';
import home from './containers/Home/reducer';

export default combineReducers({
  home,
  movies,
});
