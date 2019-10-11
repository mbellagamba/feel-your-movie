import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import tinyColor from 'tinycolor2';
import { RADIUS_CARD } from '../../resources/dimensions';
import { VIBRANT_COLORS } from '../../resources/colors';

const Container = styled.div`
  min-width: 12rem;
  height: 3rem;
  background-image: linear-gradient(
    to right,
    ${(props) => props.color} 0%,
    ${(props) => tinyColor(props.color).darken(8).toHexString()} 51%,
    ${(props) => tinyColor(props.color).darken(16).toHexString()} 100%
  );
  margin: 0.5em;
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  border-radius: ${RADIUS_CARD};
  &:hover{
    transform: scale(1.01);
    transition: all 0.4s;
  }
`;

const Text = styled.h4`
  font-weight: 500;
`;

const CategoryItem = ({ index, name }) => (
  <Container color={VIBRANT_COLORS[index % VIBRANT_COLORS.length]}>
    <Text>{name}</Text>
  </Container>
);

CategoryItem.propTypes = {
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default CategoryItem;
