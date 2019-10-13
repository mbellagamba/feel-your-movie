import React from 'react';
import styled from 'styled-components';
import tinyColor from 'tinycolor2';
import Rating from '../Rating';
import { BACKGROUND, TEXT_SECONDARY, ACCENT } from '../../resources/colors';
import { movieImage } from '../../utils';
import { MovieProp } from '../../utils/propTypes';
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

const Movie = ({ movie }) => {
  const {
    title,
    poster_path: posterPath,
    release_date: releaseDate,
    vote_average: voteAverage,
    runtime = 0,
    vote_count: voteCount,
    overview,
    tagline,
    production_countries: productionCountries = [],
    genres = [],
  } = movie;
  const genre = genres.length > 0 ? genres[0].name : '';
  const countries = productionCountries.map((c) => c.name).join(', ');

  return (
    <Card>
      <Poster src={movieImage(posterPath)} alt={title} />
      <Content>
        <Title>{title}</Title>
        <SubtitleContent>
          <SubtitleItem>{releaseDate.split('-')[0]}</SubtitleItem>
          <SubtitleItem>{`${runtime} min`}</SubtitleItem>
          <SubtitleItem>{genre}</SubtitleItem>
        </SubtitleContent>
        <Info>{countries}</Info>
        {overview && <p>{overview}</p>}
        {tagline && <Phrase>{`“${tagline}„`}</Phrase>}
        <Rating vote={voteAverage} />
        <Info>{`${voteCount} votes`}</Info>
      </Content>
    </Card>
  );
};

Movie.propTypes = {
  movie: MovieProp.isRequired,
};

export default Movie;
