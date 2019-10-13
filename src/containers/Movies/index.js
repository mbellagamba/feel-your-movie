import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { useQueryParams } from '../../hooks';
import * as actions from './actions';
import MovieCard from '../../components/MovieCard';
import { SCREEN_WIDTH_PHONE, MARGIN_MEDIUM } from '../../resources/dimensions';
import { ACCENT } from '../../resources/colors';
import { MovieProp } from '../../utils/propTypes';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Grid = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: stretch;
  @media (max-width: ${SCREEN_WIDTH_PHONE}) {
    flex-direction: column;
  }
  justify-content: center;
`;

const LoadMore = styled.button`
  color: white;
  line-height: 1.8rem;
  border-radius: 0.9rem;
  border: 1px solid ${ACCENT};
  margin: ${MARGIN_MEDIUM} 0;
  padding: 0 ${MARGIN_MEDIUM};
`;

const Link = styled(RouterLink)`
  overflow: hidden;
  min-width: 250px;
  flex: 0 0 20%;
`;

const Movies = (props) => {
  const {
    discoverMovies,
    movies,
    loading,
  } = props;
  const [page, setPage] = useState(1);
  const query = useQueryParams();
  const genre = query.has('genre') ? query.get('genre') : undefined;

  useEffect(() => {
    discoverMovies(genre, page);
  }, [discoverMovies, genre, page]);

  return (
    <Container>
      <Grid data-testid="movies-grid">
        {movies.map((movie) => (
          <Link key={movie.id} to={`/movies/${movie.id}`}>
            <MovieCard movie={movie} truncateDescription />
          </Link>
        ))}
      </Grid>
      {!loading && movies.length === 0 && <span>No movie found</span>}
      {loading
        ? <span>Loading...</span>
        : <LoadMore type="button" onClick={() => setPage(page + 1)}>Load more</LoadMore>}
    </Container>
  );
};

Movies.propTypes = {
  discoverMovies: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  movies: PropTypes.arrayOf(MovieProp).isRequired,
};

const mapStateToProps = (state) => ({
  ...state.movies,
});

const mapDispatchToProps = {
  ...actions,
};

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
