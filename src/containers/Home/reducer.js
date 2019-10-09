import {
  // FETCH_GENRES,
  FETCH_GENRES_SUCCESS,
} from './actionTypes';

const initialState = {
  genres: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GENRES_SUCCESS:
      return {
        ...state,
        genres: action.genres,
      };
    default:
      return state;
  }
};

export default reducer;
