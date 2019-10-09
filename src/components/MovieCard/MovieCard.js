import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { RADIUS_CARD, MARGIN_SMALL } from '../../resources/dimensions';
import { IMAGES_URL } from '../../api';
import { BACKGROUND, ACCENT } from '../../resources/colors';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: ${RADIUS_CARD};
  border: 1px solid white;
  height: 225px
  width: 362.5px;
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

const Title = styled.div`
  font-size: 1.2rem;
  font-weight: 500;
  overflow: hidden;
  white-space: nowrap;
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
  font-size: 12px;
`;

const VoteAverage = styled.span`
  border: 1px solid ${ACCENT};
  border-radius: 2px;
  font-weight: 500;
  font-size: 12px;
  text-align: center;
  min-width: 20px;
  padding: 2px 0px;
`;

const VoteCount = styled.span`
  color: grey;
  margin: 0px 4px;
  font-size: 12px;
`;

const MovieCard = ({
  title, cover, releaseDate, voteAverage, voteCount,
}) => (
  <Card cover={`${IMAGES_URL}${cover}`}>
    <CoverImage cover={`${IMAGES_URL}${cover}`} />
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
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  voteAverage: PropTypes.number.isRequired,
  voteCount: PropTypes.number.isRequired,
};

export default MovieCard;
