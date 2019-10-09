import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import { ACCENT } from '../../resources/colors';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-top-right-radius: 1.5rem;
  border-bottom-right-radius: 1.5rem;
  overflow: hidden;
  ${(props) => (props.active
    ? `background-color: ${ACCENT}40;`
    : ':hover { background-color: #ffffff22; }')}
`;

const Link = styled(RouterLink)`
  text-decoration: none;
  line-height: 3rem;
  padding-left: 1rem;
`;

const MenuItem = ({ title, path, currentPath }) => (
  <Wrapper
    active={path === '/' ? currentPath === path : currentPath.startsWith(path)}
  >
    <Link to={path}>{title}</Link>
  </Wrapper>
);

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  currentPath: PropTypes.string,
};

MenuItem.defaultProps = {
  currentPath: '',
};

export default MenuItem;
