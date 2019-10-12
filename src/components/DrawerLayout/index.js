import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useLocation, Link } from 'react-router-dom';
import { TEXT_PRIMARY, ACCENT } from '../../resources/colors';
import { useWindowDimensions } from '../../hooks';
import { MARGIN_MEDIUM, TEXT_MEDIUM, SCREEN_WIDTH_PHONE } from '../../resources/dimensions';
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

const MenuButton = styled.button`
  padding: 0;
`;

const MenuItem = styled.div`
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
