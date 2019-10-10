import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import * as actions from './actions';

const Movie = ({ movie, fetchMovie }) => {
  const { id } = useParams();
  useEffect(() => {
    fetchMovie(id);
  }, [fetchMovie, id]);

  if (!movie) return <></>;

  return <div>{movie.title}</div>;
};

Movie.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  movie: PropTypes.object,
  fetchMovie: PropTypes.func.isRequired,
};

Movie.defaultProps = {
  movie: null,
};

const mapStateToProps = (state) => ({
  ...state.movie,
});

const mapDispatchToProps = {
  ...actions,
};

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
