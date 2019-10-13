import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import tinycolor from 'tinycolor2';
import { MARGIN_SMALL, MARGIN_MEDIUM } from '../../resources/dimensions';
import { ACCENT } from '../../resources/colors';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0.2rem;
  text-align: center;
  position: relative;
  background-position: right;
  font-weight: 500;
  overflow: hidden;
  margin: ${MARGIN_SMALL};
  padding: 100px ${MARGIN_MEDIUM} 80px ${MARGIN_MEDIUM};
  background-size: cover;
  background-image: url(${(props) => props.image});
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, .3);
`;

const Title = styled.h3`
  margin: ${MARGIN_SMALL};
  z-index: 1;
`;

const Body = styled.span`
  margin: ${MARGIN_SMALL};
  z-index: 1;
`;

const Anchor = styled(Link)`
  width: 200px;
  line-height: 2.4rem;
  margin: ${MARGIN_SMALL};
  text-align: center;
  border-radius: 1.2rem;
  z-index: 1;
  background-image: linear-gradient(
    to left,
    ${ACCENT} 0%,
    ${tinycolor(ACCENT).darken(15).toHexString()} 51%,
    ${tinycolor(ACCENT).darken(25).toHexString()} 100%
  );
`;

const HeroCard = ({
  image, title, body, linkText, linkPath,
}) => (
  <Card image={image}>
    <Overlay />
    <Title>{title.toUpperCase()}</Title>
    <Body>{body}</Body>
    <Anchor to={linkPath}>{linkText}</Anchor>
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
