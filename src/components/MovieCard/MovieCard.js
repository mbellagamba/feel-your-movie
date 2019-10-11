import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  RADIUS_CARD,
  MARGIN_SMALL,
  TEXT_EXTRA_SMALL,
  SCREEN_WIDTH_PHONE,
} from '../../resources/dimensions';
import { IMAGES_URL } from '../../api';
import { BACKGROUND, ACCENT } from '../../resources/colors';
import camera from '../../../images/camera.jpg';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: ${RADIUS_CARD};
  border: 1px solid white;
  height: 180px;
  width: 260px;
  overflow: hidden;
  margin: ${MARGIN_SMALL};
  &:hover{
    transform: scale(1.02);
    transition: all 0.4s;
  }
  @media only screen (min-width: ${SCREEN_WIDTH_PHONE}) {
    height: 225px
    width: 362.5px;
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
  title, cover, releaseDate, voteAverage, voteCount,
}) => (
  <Card>
    <CoverImage cover={cover ? `${IMAGES_URL}${cover}` : camera} />
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
  cover: PropTypes.string,
  releaseDate: PropTypes.string.isRequired,
  voteAverage: PropTypes.number.isRequired,
  voteCount: PropTypes.number.isRequired,
};

MovieCard.defaultProps = {
  cover: null,
};

export default MovieCard;
