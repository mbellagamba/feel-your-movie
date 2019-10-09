import React, { useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { useQueryParams } from '../../hooks';
import * as actions from './actions';
import MovieCard from '../../components/MovieCard';

const Grid = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

const Movies = (props) => {
  const {
    discoverMovies,
    movies,
  } = props;
  const query = useQueryParams();
  const genre = query.has('genre') ? query.get('genre') : undefined;

  useEffect(() => {
    discoverMovies(genre);
  }, [discoverMovies, genre]);

  return (
    <Grid>
      {movies && movies.map((movie) => (
        <Link key={movie.id} to={`/movies/${movie.id}`}>
          <MovieCard
            title={movie.title}
            cover={movie.backdrop_path}
            releaseDate={movie.release_date}
            voteAverage={movie.vote_average}
            voteCount={movie.vote_count}
          />
        </Link>
      ))}
    </Grid>
  );
};

Movies.propTypes = {
  discoverMovies: PropTypes.func.isRequired,
  movies: PropTypes.arrayOf(Object).isRequired,
};

const mapStateToProps = (state) => ({
  ...state.movies,
});

const mapDispatchToProps = {
  ...actions,
};

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
