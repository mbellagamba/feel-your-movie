import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  text-decoration: none;
  display: flex;
  flex-direction: column;
`;
export default () => (
  <Container>
    <Link to="/">Home</Link>
    <Link to="/movies">Movies</Link>
    <Link to="/about">About</Link>
  </Container>
);
