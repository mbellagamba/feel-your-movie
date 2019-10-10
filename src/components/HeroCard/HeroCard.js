import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { RADIUS_CARD, MARGIN_SMALL } from '../../resources/dimensions';
import { BACKGROUND, ACCENT } from '../../resources/colors';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: ${RADIUS_CARD};
  border: 1px solid white;
  overflow: hidden;
  margin: ${MARGIN_SMALL};
  background-size: cover;
  align-items: flex-end;
  background-image: linear-gradient( #ffffff22, ${BACKGROUND}), url(${(props) => props.image}) ;
`;

const Title = styled.h3`
  flex: 0.5;
  margin: ${MARGIN_SMALL};
`;

const Body = styled.span`
  flex: 0.5;
  margin: ${MARGIN_SMALL};
`;

const Anchor = styled.a`
  width: 200px;
  line-height: 2rem;
  margin: ${MARGIN_SMALL};
  border-radius: ${RADIUS_CARD};
  background-image: linear-gradient(${ACCENT}, black);
`;

const HeroCard = ({
  image, title, body, linkText, linkPath,
}) => (
  <Card image={image}>
    <Title>{title}</Title>
    <Body>{body}</Body>
    <Anchor href={linkPath}>{linkText}</Anchor>
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
