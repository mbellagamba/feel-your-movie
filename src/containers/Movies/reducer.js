export const DISCOVER_MOVIES = 'DISCOVER_MOVIES';
export const DISCOVER_MOVIES_SUCCESS = 'DISCOVER_MOVIES_SUCCESS';

export const discoverMovies = () => ({
  type: DISCOVER_MOVIES,
});

export const discoverMoviesSuccess = (movies) => ({
  type: DISCOVER_MOVIES_SUCCESS,
  movies,
});

const reducer = (state = {}, action) => {
  const { type } = action;
  switch (type) {
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
