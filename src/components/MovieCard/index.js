import React from 'react';
import styled from 'styled-components';
import {
  RADIUS_CARD,
  MARGIN_SMALL,
  TEXT_EXTRA_SMALL,
  TEXT_MEDIUM,
} from '../../resources/dimensions';
import { movieImage } from '../../utils';
import { MovieProp } from '../../utils/propTypes';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: ${RADIUS_CARD};
  padding: ${MARGIN_SMALL};
  position: relative;
`;

const Poster = styled.img`
  border-radius: ${RADIUS_CARD};
  background-image: url('${(props) => props.src}');
  object-fit: cover;
  height: 300px;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #0006;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: ${MARGIN_SMALL};
  background-color: #0009;
  opacity: 0
  transition: .5s;
  &:hover {
    opacity: 1
  }
`;

const Title = styled.span`
  font-weight: 500;
  font-size: ${TEXT_MEDIUM};
  margin: ${MARGIN_SMALL};
  text-align: center;
`;

const SubTitle = styled.span`
  font-size: ${TEXT_EXTRA_SMALL};
  text-align: center;
`;

// If the vote is over 5 emphasize color differences
// votes under 5 are all red.
const Vote = styled.span`
  background-color: ${(props) => (props.vote > 5
    ? `hsla(${(props.vote / 1.5) * 10 * 1.45}, 68%, 40%, 1)`
    : 'hsla(0, 68%, 55%, 1)'
  )};
  line-height: 20px;
  width: 40px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  font-size: ${TEXT_EXTRA_SMALL};
  margin: ${MARGIN_SMALL};
  text-align: center;
  position: absolute;
  right: 0;
  bottom: ${MARGIN_SMALL};
  color: white;
`;

const MovieCard = ({
  movie: {
    title,
    poster_path: cover,
    release_date: releaseDate,
    vote_average: voteAverage,
  },
}) => (
    <Card>
      <Poster src={movieImage(cover)} />
      <Vote vote={voteAverage}>{voteAverage}</Vote>
      <Overlay>
        <Title>{title}</Title>
        {releaseDate && <SubTitle>{releaseDate.split('-')[0]}</SubTitle>}
      </Overlay>
    </Card>
  );

MovieCard.propTypes = {
  movie: MovieProp.isRequired,
};

export default MovieCard;
