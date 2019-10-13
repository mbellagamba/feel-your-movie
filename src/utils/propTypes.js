import PropTypes from 'prop-types';

export const MovieProp = PropTypes.shape({
  title: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
  poster_path: PropTypes.string,
  vote_average: PropTypes.number,
  vote_count: PropTypes.number,
  overview: PropTypes.string,
  runtime: PropTypes.number,
  tagline: PropTypes.string,
  production_countries: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  ),
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  ),
});

export default { MovieProp };
