import React, { useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import tinyColor from 'tinycolor2';
import * as actions from './actions';
import Rating from '../../components/Rating';
import { BACKGROUND, TEXT_SECONDARY, ACCENT } from '../../resources/colors';
import { movieImage } from '../../utils';
import {
  SCREEN_WIDTH_TABLET,
  MARGIN_MEDIUM,
  MARGIN_SMALL,
  TEXT_EXTRA_SMALL,
  TEXT_SMALL,
} from '../../resources/dimensions';

const Card = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 0.2rem;
  overflow: hidden;
  background-color: ${tinyColor(BACKGROUND).lighten(10).toHexString()};
  margin: ${MARGIN_MEDIUM} 0;
  @media (max-width: ${SCREEN_WIDTH_TABLET}) {
    flex-direction: column;
  }
`;

const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: ${MARGIN_MEDIUM}
`;

const Title = styled.h2`
  font-weight: 500;
  margin-top: 0;
  margin-bottom: ${MARGIN_SMALL};
  text-transform: uppercase;
`;

const SubtitleContent = styled.div`
  display: flex;
  flex-flow: row wrap;
  font-weight: 500;
  font-size: ${TEXT_EXTRA_SMALL};
`;

const SubtitleItem = styled.span`
  flex: 0.25;
`;

const Info = styled.span`
  margin-top: ${MARGIN_SMALL};
  color: ${TEXT_SECONDARY};
  font-size: ${TEXT_EXTRA_SMALL};
`;

const Poster = styled.div`
  flex: 0.4;
  padding-top: 42%;
  background-size: cover;
  background-image: url(${(props) => props.src});
  @media (max-width: ${SCREEN_WIDTH_TABLET}) {
    padding-top: 100%;
  }
`;

const Phrase = styled.span`
  font-style: italic;
  margin-bottom: ${MARGIN_MEDIUM};
  font-size: ${TEXT_SMALL};
  color: ${ACCENT};
`;

const Movie = ({ movie, fetchMovie }) => {
  const { id } = useParams();
  useEffect(() => {
    fetchMovie(id);
  }, [fetchMovie, id]);

  if (!movie) return <></>;

  /* eslint-disable camelcase */
  const {
    title,
    poster_path,
    release_date,
    vote_average,
    runtime,
    vote_count,
    overview,
    tagline,
    production_countries,
    genres,
  } = movie;
  /* eslint-disable camelcase */

  const genre = genres.length > 0 ? genres[0].name : '';
  const countries = production_countries.map((c) => c.name).join(', ');

  return (
    <Card>
      <Poster src={movieImage(poster_path)} alt={title} />
      <Content>
        <Title>{title}</Title>
        <SubtitleContent>
          <SubtitleItem>{release_date.split('-')[0]}</SubtitleItem>
          <SubtitleItem>{`${runtime} min`}</SubtitleItem>
          <SubtitleItem>{genre}</SubtitleItem>
        </SubtitleContent>
        <Info>{countries}</Info>
        {overview && <p>{overview}</p>}
        {tagline && <Phrase>{`“${tagline}„`}</Phrase>}
        <Rating vote={vote_average} />
        <Info>{`${vote_count} votes`}</Info>
      </Content>
    </Card>
  );
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
