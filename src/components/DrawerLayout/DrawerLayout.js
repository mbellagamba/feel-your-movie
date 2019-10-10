import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { TEXT_PRIMARY } from '../../resources/colors';
import { MARGIN_MEDIUM, TEXT_MEDIUM } from '../../resources/dimensions';
import MenuIcon from '../../../images/menu.svg';

import MenuItem from '../MenuItem';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  color: ${TEXT_PRIMARY};
`;

const Toolbar = styled.header`
  height: 4rem;
  border-bottom: 1px solid white;
  display: flex;
  flex: 0 0 auto;
  flex-flow: row nowrap;
  align-items: center;
  padding-left: ${MARGIN_MEDIUM};
  padding-right: ${MARGIN_MEDIUM};
`;

const Body = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1 1 auto;
  position: relative;
  overflow-y: auto;
  margin-top: ${MARGIN_MEDIUM};
`;

const Sidebar = styled.div`
  display: flex;
  font-size: ${TEXT_MEDIUM};
  width: ${(props) => (props.visible ? '360px' : '0')};
  flex-direction: column;
  transition: width .25s ease-in-out;
`;

const Main = styled.div`
  width: 100%;
  margin-left: ${MARGIN_MEDIUM};
  margin-right: ${MARGIN_MEDIUM};
`;

const Title = styled.h2`
  margin: 0px ${MARGIN_MEDIUM};
`;

const DrawerLayout = ({ children }) => {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(true);

  const handleClick = (event) => {
    event.preventDefault();
    setMenuOpen(!menuOpen);
  };

  return (
    <Container>
      <Toolbar>
        <button type="button" onClick={handleClick}>
          <img src={MenuIcon} alt="Menu" />
        </button>
        <Title>Feel your movie</Title>
      </Toolbar>
      <Body>
        <Sidebar visible={menuOpen}>
          <MenuItem title="Home" path="/" currentPath={pathname} />
          <MenuItem title="Movies" path="/movies" currentPath={pathname} />
          <MenuItem title="Suggestion" path="/suggestion" currentPath={pathname} />
          <MenuItem title="About" path="/about" currentPath={pathname} />
        </Sidebar>
        <Main>
          {children}
        </Main>
      </Body>
    </Container>
  );
};

DrawerLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DrawerLayout;
