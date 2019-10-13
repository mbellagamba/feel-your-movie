import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import * as actions from './actions';
import { MovieProp } from '../../utils/propTypes';
import MovieDetail from '../../components/MovieDetail';

const Movie = ({ movie, fetchMovie }) => {
  const { id } = useParams();
  useEffect(() => {
    fetchMovie(id);
  }, [fetchMovie, id]);

  if (!movie) return <></>;

  return <MovieDetail movie={movie} />;
};

Movie.propTypes = {
  movie: MovieProp,
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
