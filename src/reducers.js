import { combineReducers } from 'redux';
import movies from './containers/Movies/reducer';
import home from './containers/Home/reducer';
import suggestion from './containers/Suggestion/reducer';

export default combineReducers({
  home,
  movies,
  suggestion,
});
