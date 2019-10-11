import {
  DISCOVER_MOVIES,
  DISCOVER_MOVIES_SUCCESS,
} from './actionTypes';

const initialState = {
  loading: false,
  movies: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DISCOVER_MOVIES:
      return {
        ...state,
        loading: true,
        movies: action.page > 1 ? state.movies : [],
      };
    case DISCOVER_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        movies: [
          ...state.movies,
          ...action.movies,
        ],
      };
    default:
      return state;
  }
};

export default reducer;
