import {
  // DISCOVER_MOVIES,
  DISCOVER_MOVIES_SUCCESS,
} from './actionTypes';

const initialState = {
  movies: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DISCOVER_MOVIES_SUCCESS:
      return {
        ...state,
        movies: action.movies,
      };
    default:
      return state;
  }
};

export default reducer;
