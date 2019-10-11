import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ACCENT } from '../../resources/colors';
import { MARGIN_MEDIUM } from '../../resources/dimensions';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  line-height: 3rem;
  border-top-right-radius: 1.5rem;
  border-bottom-right-radius: 1.5rem;
  overflow: hidden;
  ${(props) => (props.active
    ? `background-color: ${ACCENT}40;`
    : ':hover { background-color: #ffffff22; }')}
`;

const Icon = styled.img`
  margin: 0 ${MARGIN_MEDIUM};
`;

const MenuItem = ({
  title, icon, path, currentPath, onClick,
}) => (
  <Wrapper
    active={path === '/' ? currentPath === path : currentPath.startsWith(path)}
  >
    {icon && <Icon src={icon} alt={title} />}
    <Link style={{ flex: 1 }} to={path} onClick={onClick}>{title}</Link>
  </Wrapper>
);

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
  path: PropTypes.string.isRequired,
  currentPath: PropTypes.string,
  onClick: PropTypes.func,
};

MenuItem.defaultProps = {
  currentPath: '',
  icon: undefined,
  onClick: undefined,
};

export default MenuItem;
