import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useLocation, Link } from 'react-router-dom';
import { useWindowDimensions } from '../../hooks';
import {
  TEXT_PRIMARY,
  ACCENT,
  BACKGROUND,
} from '../../resources/colors';
import {
  MARGIN_MEDIUM,
  TEXT_MEDIUM,
  TOOLBAR_HEIGHT,
  SCREEN_WIDTH_PHONE,
  TEXT_SMALL,
} from '../../resources/dimensions';
import menu from '../../../images/menu.svg';
import home from '../../../images/home.svg';
import movie from '../../../images/movie.svg';
import lightbulb from '../../../images/lightbulb.svg';
import info from '../../../images/info.svg';

const menuItems = [
  {
    title: 'Home',
    path: '/',
    icon: home,
  },
  {
    title: 'Movies',
    path: '/movies',
    icon: movie,
  },
  {
    title: 'Suggestion',
    path: '/suggestion',
    icon: lightbulb,
  },
  {
    title: 'About',
    path: '/about',
    icon: info,
  },
];

const Container = styled.div`
  color: ${TEXT_PRIMARY};
`;

const Toolbar = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  height: ${TOOLBAR_HEIGHT};
  border-bottom: 1px solid white;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  background-color: ${BACKGROUND};
  padding-left: ${MARGIN_MEDIUM};
  padding-right: ${MARGIN_MEDIUM};
`;

const Body = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1 1 auto;
  position: relative;
  overflow-y: auto;
  margin-top: ${TOOLBAR_HEIGHT};
`;

const Sidebar = styled.div`
  display: flex;
  font-size: ${TEXT_MEDIUM};
  margin-top: ${MARGIN_MEDIUM};
  width: ${(props) => (props.visible ? '260px' : '0')};
  overlow-x: hidden;
  flex-direction: column;
  transition: width .25s ease-out;
  @media (max-width: ${SCREEN_WIDTH_PHONE}) {
    width: ${(props) => (props.visible ? '80%' : '0')}
  }
`;

const Main = styled.div`
  flex: 1;
  margin-left: ${MARGIN_MEDIUM};
  margin-right: ${MARGIN_MEDIUM};
  @media (max-width: ${SCREEN_WIDTH_PHONE}) {
    display: ${(props) => (props.menuOpen ? 'none' : 'block')}
  }
`;

const Title = styled.h2`
  margin: 0px ${MARGIN_MEDIUM};
`;

const MenuButton = styled.button`
  padding: 0;
`;

const MenuItem = styled.div`
  display: flex;
  flex-direction: row;
  line-height: 3rem;
  font-size: ${TEXT_SMALL}
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

  const isActive = (path, current) => {
    if (!current) return false;
    return pathname === path || (path !== '/' && pathname.startsWith(path));
  };

  return (
    <Container>
      <Toolbar>
        <MenuButton type="button" onClick={handleClick}>
          <img src={menu} alt="Menu" />
        </MenuButton>
        <Title>Feel your movie</Title>
      </Toolbar>
      <Body>
        <Sidebar data-testid="sidebar" visible={menuOpen}>
          {menuItems.map(({ title, path, icon }) => (
            <Link key={title} to={path} onClick={onMenuItemClick}>
              <MenuItem active={isActive(path, pathname)}>
                <Icon src={icon} alt={title} />
                {title}
              </MenuItem>
            </Link>
          ))}
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
