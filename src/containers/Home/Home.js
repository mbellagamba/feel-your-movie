import React, { useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CategoryItem from '../../components/CategoryItem';
import * as actions from './actions';

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Home = ({ genres, fetchGenres }) => {
  useEffect(() => {
    fetchGenres();
  }, [fetchGenres]);
  return (
    <Grid>
      {genres && genres.map((g) => (
        <Link key={g.id} to={`/movies?genre=${g.id}`}>
          <CategoryItem name={g.name} />
        </Link>
      ))}
    </Grid>
  );
};

Home.propTypes = {
  genres: PropTypes.arrayOf(Object).isRequired,
  fetchGenres: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  ...state.home,
});

const mapDispatchToProps = {
  ...actions,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
