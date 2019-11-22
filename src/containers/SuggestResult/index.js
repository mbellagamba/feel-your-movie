import React, { useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { mapSuggestionToQuery } from '../../services';
import * as actions from './actions';
import { fetchMovie as fetchDetail } from '../Movie/actions';
import MovieCard from '../../components/MovieCard';
import MovieDetail from '../../components/MovieDetail';
import LoadingDots from '../../components/LoadingDots';
import { TEXT_MEDIUM } from '../../resources/dimensions';
import { MovieProp } from '../../utils/propTypes';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Heading = styled.h2`
  font-size: ${TEXT_MEDIUM};
`;

const Grid = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const Item = styled.div`
  flex: 0 0 25%;
`;

const SuggestResult = ({
  searchMovies, params, suggestedMovies, error, fetchMovie, movie,
}) => {
  const querystring = params && Object.keys(params).length > 0
    && mapSuggestionToQuery(params);
  useEffect(() => {
    searchMovies(querystring);
  }, [searchMovies, querystring]);

  const hasMovies = suggestedMovies && suggestedMovies.length !== 0;
  const movieId = hasMovies ? suggestedMovies[0].id : 0;

  useEffect(() => {
    if (movieId > 0) {
      fetchMovie(movieId);
    }
  }, [fetchMovie, movieId]);

  if (error) {
    return <span>{error}</span>;
  }

  if (!hasMovies || !movie) {
    return <LoadingDots />;
  }

  return (
    <Container>
      <MovieDetail movie={movie} />
      <Heading>Other suggested movies</Heading>
      <Grid>
        {suggestedMovies.slice(1).map((m) => (
          <Item key={m.id} >
            <MovieCard movie={m} />
          </Item>
        ))}
      </Grid>
    </Container>
  );
};

SuggestResult.propTypes = {
  searchMovies: PropTypes.func.isRequired,
  fetchMovie: PropTypes.func.isRequired,
  movie: MovieProp,
  suggestedMovies: PropTypes.arrayOf(MovieProp).isRequired,
  error: PropTypes.string,
  params: PropTypes.shape({
    feeling: PropTypes.string,
    word: PropTypes.string,
    nostalgic: PropTypes.bool,
  }),
};

SuggestResult.defaultProps = {
  error: null,
  params: null,
  movie: null,
};

const mapStateToProps = (state) => ({
  params: state.suggestion.params,
  movie: state.movie.movie,
  ...state.result,
});

const mapDispatchToProps = {
  fetchMovie: fetchDetail,
  ...actions,
};

export default connect(mapStateToProps, mapDispatchToProps)(SuggestResult);
