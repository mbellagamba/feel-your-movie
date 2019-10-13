import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  RADIUS_CARD,
  MARGIN_SMALL,
  TEXT_EXTRA_SMALL,
} from '../../resources/dimensions';
import { BACKGROUND, ACCENT } from '../../resources/colors';
import { movieImage } from '../../utils';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: ${RADIUS_CARD};
  border: 1px solid white;
  height: 180px;
  overflow: hidden;
  margin: ${MARGIN_SMALL};
  &:hover{
    transform: scale(1.02);
    transition: all 0.4s;
  }
`;

const CoverImage = styled.div`
  height: 60%;
  background-image: linear-gradient(#ffffff22, ${BACKGROUND}), url(${(props) => props.cover}) ;
  background-size: cover;
`;

const CardBody = styled.div`
  padding-left: ${MARGIN_SMALL};
  padding-right: ${MARGIN_SMALL};
`;

const Title = styled.h3`
  margin: 0;
  font-weight: 500;
  text-overflow: ellipsis;
`;

const VoteContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${MARGIN_SMALL};
`;

const Date = styled.span`
  color: grey;
  margin: 0px 4px;
  font-size: ${TEXT_EXTRA_SMALL};
`;

const VoteAverage = styled.span`
  border: 1px solid ${ACCENT};
  border-radius: 2px;
  font-weight: 500;
  font-size: ${TEXT_EXTRA_SMALL};
  text-align: center;
  min-width: 20px;
  padding: 2px 0px;
`;

const VoteCount = styled.span`
  color: grey;
  margin: 0px 4px;
  font-size: ${TEXT_EXTRA_SMALL};
`;

const MovieCard = ({
  movie: {
    title,
    backdrop_path: cover,
    release_date: releaseDate,
    vote_average: voteAverage,
    vote_count: voteCount,
  },
}) => (
  <Card>
    <CoverImage cover={movieImage(cover)} />
    <CardBody>
      <Title>{title}</Title>
      <Date>{releaseDate.split('-')[0]}</Date>
      <VoteContainer>
        <VoteAverage>{voteAverage}</VoteAverage>
        <VoteCount>{`(${voteCount})`}</VoteCount>
      </VoteContainer>
    </CardBody>
  </Card>
);

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    vote_count: PropTypes.number.isRequired,
    backdrop_path: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
