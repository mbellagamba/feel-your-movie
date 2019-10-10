import {
  FETCH_MOVIE,
  FETCH_MOVIE_SUCCESS,
} from './actionTypes';

const initialState = {
  movie: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIE:
      return {
        movie: null,
      };
    case FETCH_MOVIE_SUCCESS:
      return {
        movie: action.movie,
      };
    default:
      return state;
  }
};
