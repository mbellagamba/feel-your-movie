import React from 'react';
import styled from 'styled-components';
import {
  RADIUS_CARD,
  MARGIN_SMALL,
  TEXT_EXTRA_SMALL,
  TEXT_MEDIUM,
  SCREEN_WIDTH_PHONE,
  TEXT_SMALL,
} from '../../resources/dimensions';
import { CARD_BACKGROUND } from '../../resources/colors';
import { useWindowDimensions } from '../../hooks';
import { movieImage, truncate } from '../../utils';
import { MovieProp } from '../../utils/propTypes';

const Card = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: ${RADIUS_CARD};
  overflow: hidden;
  margin: ${MARGIN_SMALL};
  background-color: ${CARD_BACKGROUND};
  @media (min-width: ${SCREEN_WIDTH_PHONE}) {
    height: 280px;
  }
  &:hover{
    transform: scale(1.02);
    transition: all 0.4s;
  }
`;

const Column = styled.div`
  flex: 0.5;
  display: flex;
  min-width: 0;
  flex-direction: column;
  padding-top: ${(props) => props.padding || 0}
  padding-bottom: ${(props) => props.padding || 0}
  padding-left: ${(props) => props.padding || 0}
`;

const CoverImage = styled.div`
  height: 100%;
  background-position: center;
  background-size: cover;
  background-image: linear-gradient(
    to left,
    #ffffff22, 
    ${CARD_BACKGROUND}),
    url(${(props) => props.cover});
`;

const Title = styled.span`
  font-weight: 500;
  font-size: ${TEXT_MEDIUM};
  text-overflow: ellipsis;
  overflow: hidden;
  flex-shrink: 0;
  @media (min-width: 750px) {
    white-space: nowrap;
  }
`;

const Year = styled.span`
  color: grey;
  margin-bottom: ${MARGIN_SMALL};
  font-weight: 300;
  font-size: ${TEXT_EXTRA_SMALL};
`;

const VoteContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

// If the vote is over 5 emphasize color differences
// votes under 5 are all red.
const VoteAverage = styled.span`
  border: 1px solid ${(props) => (props.vote > 5
    ? `hsla(${(props.vote / 1.5) * 10 * 1.45}, 68%, 55%, 1)`
    : 'hsla(0, 68%, 55%, 1)'
  )};
  line-height: 40px;
  width: 40px;
  border-radius: 20px;
  font-weight: 500;
  margin-top: ${MARGIN_SMALL};
  font-size: ${TEXT_SMALL};
  text-align: center;
`;

const Overview = styled.span`
  font-size: ${TEXT_EXTRA_SMALL};
  font-weight: 300;
`;

const MovieCard = ({
  movie: {
    title,
    overview,
    backdrop_path: cover,
    release_date: releaseDate,
    vote_average: voteAverage,
  },
}) => {
  const { width } = useWindowDimensions();
  const description = width > parseInt(SCREEN_WIDTH_PHONE, 10)
    ? truncate(overview, width / 9)
    : truncate(overview, 250);
  return (
    <Card>
      <Column padding={MARGIN_SMALL}>
        <Title>{title}</Title>
        <Year>{releaseDate.split('-')[0]}</Year>
        <Overview>{description}</Overview>
        <VoteContainer>
          <VoteAverage vote={voteAverage}>{voteAverage}</VoteAverage>
        </VoteContainer>
      </Column>
      <Column>
        <CoverImage cover={movieImage(cover)} />
      </Column>
    </Card>
  );
};
MovieCard.propTypes = {
  movie: MovieProp.isRequired,
};

export default MovieCard;
