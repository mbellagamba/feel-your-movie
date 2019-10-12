import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import star from '../../../images/star.svg';
import empty from '../../../images/staroutline.svg';

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const Rating = ({ vote, max }) => {
  const count = vote > max ? max : Math.round(vote);
  return (
    <Container>
      {[...Array(max).keys()].map((k) => (
        <img key={k + 1} src={k < count ? star : empty} alt="star" />
      ))}
    </Container>
  );
};

Rating.propTypes = {
  vote: PropTypes.number.isRequired,
  max: PropTypes.number,
};

Rating.defaultProps = {
  max: 10,
};

export default Rating;
