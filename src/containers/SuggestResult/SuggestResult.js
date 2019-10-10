import React, { useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { mapSuggestionToQuery } from '../../services';
import * as actions from './actions';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const SuggestResult = ({
  searchMovies, params, suggestedMovies, error,
}) => {
  const querystring = params && Object.keys(params).length > 0
    && mapSuggestionToQuery(params);
  useEffect(() => {
    searchMovies(querystring);
  }, [searchMovies, querystring]);

  if (error) {
    return <span>{error}</span>;
  }

  if (suggestedMovies && suggestedMovies.length === 0) {
    return <span>No movie found, try again.</span>;
  }

  return (
    <Container>
      {suggestedMovies && suggestedMovies.map((movie) => (
        <div key={movie.id}>{movie.title}</div>
      ))}
    </Container>
  );
};

SuggestResult.propTypes = {
  searchMovies: PropTypes.func.isRequired,
  suggestedMovies: PropTypes.arrayOf(Object).isRequired,
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
};

const mapStateToProps = (state) => ({
  params: state.suggestion.params,
  ...state.result,
});

const mapDispatchToProps = {
  ...actions,
};

export default connect(mapStateToProps, mapDispatchToProps)(SuggestResult);
