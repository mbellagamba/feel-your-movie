import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { TEXT_PRIMARY } from '../../resources/colors';
import { useWindowDimensions } from '../../hooks';
import { MARGIN_MEDIUM, TEXT_MEDIUM, SCREEN_WIDTH_PHONE } from '../../resources/dimensions';
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
  overlow-x: hidden;
  flex-direction: column;
  transition: width .25s ease-in-out;
`;

const Main = styled.div`
  width: 100%;
  margin-left: ${MARGIN_MEDIUM};
  margin-right: ${MARGIN_MEDIUM};
  @media (max-width: ${SCREEN_WIDTH_PHONE}) {
    ${(props) => (props.menuOpen ? 'display: none' : '')}
  }
`;

const Title = styled.h2`
  margin: 0px ${MARGIN_MEDIUM};
`;

const DrawerLayout = ({ children }) => {
  const { pathname } = useLocation();
  const { width } = useWindowDimensions();
  const desktop = width > parseInt(SCREEN_WIDTH_PHONE, 10);
  const [menuOpen, setMenuOpen] = useState(desktop);

  const handleClick = (event) => {
    event.preventDefault();
    setMenuOpen(!menuOpen);
  };

  const onMenuItemClick = () => {
    if (!desktop) {
      setMenuOpen(false);
    }
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
          <MenuItem title="Home" path="/" currentPath={pathname} onClick={onMenuItemClick} />
          <MenuItem title="Movies" path="/movies" currentPath={pathname} onClick={onMenuItemClick} />
          <MenuItem title="Suggestion" path="/suggestion" currentPath={pathname} onClick={onMenuItemClick} />
          <MenuItem title="About" path="/about" currentPath={pathname} onClick={onMenuItemClick} />
        </Sidebar>
        <Main menuOpen={menuOpen}>
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
