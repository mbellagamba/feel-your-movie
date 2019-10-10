import { combineReducers } from 'redux';
import movies from './containers/Movies/reducer';
import movie from './containers/Movie/reducer';
import home from './containers/Home/reducer';
import suggestion from './containers/Suggestion/reducer';
import result from './containers/SuggestResult/reducer';

export default combineReducers({
  home,
  movies,
  movie,
  suggestion,
  result,
});
