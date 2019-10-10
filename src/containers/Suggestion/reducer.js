import {
  SET_SUGGESTION_PARAMS,
  CLEAR_SUGGESTION_PARAMS,
} from './actionTypes';

const initialState = {
  params: {},
  movie: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SUGGESTION_PARAMS:
      return {
        ...state,
        params: action.params,
      };
    case CLEAR_SUGGESTION_PARAMS:
      return {
        ...state,
        params: null,
      };
    default:
      return state;
  }
};
