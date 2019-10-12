import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { RADIUS_CARD, MARGIN_SMALL, MARGIN_MEDIUM } from '../../resources/dimensions';
import {
  BACKGROUND,
  ACCENT,
  ACCENT_DARK,
  PRIMARY,
} from '../../resources/colors';

const Card = styled.div`
  display: flex;
  border-radius: ${RADIUS_CARD};
  border: 1px solid white;
  overflow: hidden;
  margin: ${MARGIN_SMALL};
  padding: ${MARGIN_MEDIUM};
  background-size: cover;
  background-image: linear-gradient( #ffffff22, ${BACKGROUND}), url(${(props) => props.image}) ;
`;

const Title = styled.h3`
  margin: ${MARGIN_SMALL};
`;

const Body = styled.span`
  margin: ${MARGIN_SMALL};
`;

const Anchor = styled(Link)`
  width: 200px;
  line-height: 2.4rem;
  margin: ${MARGIN_SMALL};
  text-align: center;
  border-radius: 1.2rem;
  background-image: linear-gradient(to right, ${ACCENT} 0%, ${ACCENT_DARK} 51%, ${PRIMARY} 100%);
`;

const Column = styled.div`
  flex: 0.5;
  display: flex;
  flex-direction: column;
`;

const HeroCard = ({
  image, title, body, linkText, linkPath,
}) => (
  <Card image={image}>
    <Column />
    <Column>
      <Title>{title.toUpperCase()}</Title>
      <Body>{body}</Body>
      <Anchor to={linkPath}>{linkText}</Anchor>
    </Column>
  </Card>
);

HeroCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  linkPath: PropTypes.string.isRequired,
};

export default HeroCard;
