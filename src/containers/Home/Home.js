import React, { useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import camera from '../../../images/camera.jpg';
import CategoryItem from '../../components/CategoryItem';
import HeroCard from '../../components/HeroCard';
import * as actions from './actions';
import { MARGIN_SMALL } from '../../resources/dimensions';

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
`;

const SectionTitle = styled.h3`
  margin-left: ${MARGIN_SMALL};
  margin-right: ${MARGIN_SMALL};

`;
const Home = ({ genres, fetchGenres }) => {
  useEffect(() => {
    fetchGenres();
  }, [fetchGenres]);
  return (
    <Main>
      <HeroCard
        title="Suggest me a movie"
        body="Tell me how you feel and I'll tell you the right movie for you!"
        image={camera}
        linkText="Start"
        linkPath="/suggestion"
      />
      <SectionTitle>Categories</SectionTitle>
      <Grid>
        {genres && genres.map((g) => (
          <Link key={g.id} to={`/movies?genre=${g.id}`}>
            <CategoryItem name={g.name} />
          </Link>
        ))}
      </Grid>
    </Main>
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
