import React from 'react';
import styled from 'styled-components';
import { ACCENT, CARD_BACKGROUND, TEXT_SECONDARY } from '../../resources/colors';
import {
  MARGIN_MEDIUM,
  SCREEN_WIDTH_TABLET,
  TEXT_MEDIUM,
  TEXT_SMALL,
} from '../../resources/dimensions';
import about from '../../../images/about.jpg';

const Card = styled.div`
  display: flex;
  border-radius: 0.2rem;
  overflow: hidden;
  background-color: ${CARD_BACKGROUND};
  margin: ${MARGIN_MEDIUM};
  @media (max-width: ${SCREEN_WIDTH_TABLET}) {
    flex-direction: column;
  }
`;

const Content = styled.div`
  flex: 0.6;
  display: flex;
  flex-direction: column;
  padding-top: ${MARGIN_MEDIUM};
  padding-bottom: ${MARGIN_MEDIUM};
  padding-left: ${MARGIN_MEDIUM};
`;

const Name = styled.div`
  font-size: ${TEXT_MEDIUM};
`;

const Anchor = styled.a`
  font-size: ${TEXT_SMALL};
  color: ${ACCENT};
`;

const Job = styled.div`
  font-size: ${TEXT_SMALL};
  color: ${TEXT_SECONDARY};
`;

const Cover = styled.div`
  background-image: url(${(props) => props.src});
  background-size: cover;
  flex: 0.4;
  padding-top: 250px;
`;

const Space = styled.div`
  flex-grow: 1;
`;

const About = () => (
  <Card>
    <Content>
      <Name>Mirco Bellagamba</Name>
      <Job>Software engineer</Job>
      <Space />
      <Anchor href="https://github.com/mbellagamba/" target="blanck">GitHub</Anchor>
      <Anchor href="https://www.linkedin.com/in/mirco-bellagamba/" target="blanck">Linkedin</Anchor>
    </Content>
    <Cover src={about} />
  </Card>
);

export default About;
