import {
  SEARCH_MOVIES,
  SEARCH_MOVIES_SUCCESS,
  SEARCH_MOVIES_ERROR,
} from './actionTypes';

const initialState = {
  suggestedMovies: [],
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_MOVIES:
      return {
        suggestedMovies: [],
        error: null,
      };
    case SEARCH_MOVIES_SUCCESS:
      return {
        ...state,
        suggestedMovies: action.movies,
      };
    case SEARCH_MOVIES_ERROR:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};
