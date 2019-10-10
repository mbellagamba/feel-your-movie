import {
  SET_SUGGESTION_PARAMS,
  CLEAR_SUGGESTION_PARAMS,
} from './actionTypes';

export const setSuggestionParams = (params) => ({
  type: SET_SUGGESTION_PARAMS,
  params,
});

export const clearSuggestionParams = () => ({
  type: CLEAR_SUGGESTION_PARAMS,
});
