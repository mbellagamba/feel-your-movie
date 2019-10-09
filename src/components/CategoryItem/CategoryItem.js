import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { stringToColor } from '../../utils';
import { RADIUS_CARD } from '../../resources/dimensions';

const Container = styled.div`
  width: 10rem;
  height: 3rem;
  background-color: #${(props) => props.color}44;
  margin: 0.5em;
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  border-radius: ${RADIUS_CARD};
`;

const Text = styled.span`
  font-weight: 500;
`;

const CategoryItem = ({ name }) => (
  <Container color={stringToColor(name)}>
    <Text>{name}</Text>
  </Container>
);

CategoryItem.propTypes = {
  name: PropTypes.string.isRequired,
};

export default CategoryItem;
