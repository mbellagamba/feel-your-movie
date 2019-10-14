import React from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import { MARGIN_MEDIUM } from '../../resources/dimensions';

const BounceAnimation = keyframes`
  0% { margin-bottom: 2px; }
  50% { margin-bottom: 8px }
  100% { margin-bottom: 2px; }
`;
const DotWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin: ${MARGIN_MEDIUM};
`;
const Dot = styled.div`
  background-color: ${(props) => props.color};
  border-radius: 50%;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  margin: 0 ${(props) => props.spacing}px;
  /* Animation */
  animation: ${BounceAnimation} 0.6s ease infinite;
  animation-delay: ${(props) => props.delay};
`;

const LoadingDots = ({ size, spacing, color }) => (
  <DotWrapper>
    Loading
    {[...Array(3).keys()].map((i) => (
      <Dot
        key={i}
        delay={`.${i}s`}
        size={size}
        spacing={spacing}
        color={color}
      />
    ))}
  </DotWrapper>
);

LoadingDots.propTypes = {
  size: PropTypes.number,
  spacing: PropTypes.number,
  color: PropTypes.string,
};

LoadingDots.defaultProps = {
  size: 3,
  spacing: 1,
  color: 'white',
};

export default LoadingDots;
