import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import tinyColor from 'tinycolor2';
import feelings from '../../resources/feelings';
import * as actions from './actions';
import {
  ACCENT,
  BACKGROUND,
  CARD_BACKGROUND,
  ERROR,
  TEXT_PRIMARY,
} from '../../resources/colors';
import formImage from '../../../images/form_image.jpg';
import {
  MARGIN_SMALL,
  MARGIN_MEDIUM,
  TEXT_SMALL,
  TEXT_MEDIUM,
  SCREEN_WIDTH_TABLET,
} from '../../resources/dimensions';

const Container = styled.div`
  display: flex;
  border-radius: 0.2rem;
  overflow: hidden;
  background-color: ${CARD_BACKGROUND};
  margin: ${MARGIN_MEDIUM} 0;
  padding: 0;
  @media (max-width: ${SCREEN_WIDTH_TABLET}) {
    flex-direction: column;
  }
`;

const Image = styled.div`
  flex: 0.5;
  padding-top: 42%;
  background-size: cover;
  background-image: url(${(props) => props.src});
  @media (max-width: ${SCREEN_WIDTH_TABLET}) {
    padding-top: 100%;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: ${MARGIN_MEDIUM};
  flex: 0.5;
`;

const InputError = styled.div`
  color: ${ERROR};
  font-size: 0.8rem;
  font-weight: 500;
`;

const Question = styled.div`
  font-size: ${TEXT_MEDIUM};
  margin-bottom: ${MARGIN_SMALL};
`;

const TextInput = styled.input`
  background: none;
  border: 0;
  color: white;
  border-bottom: 1px solid white;
  font-size: ${TEXT_SMALL};
  width: 100%;
`;

const Space = styled.div`
  height: ${MARGIN_MEDIUM};
`;

const EmotionSelect = styled.select`
  appearance: none;
  outline: 0;
  box-shadow: none;
  position: relative;
  border: 0;
  color: ${TEXT_PRIMARY};
  width: 100%;
  padding: ${MARGIN_SMALL};
  font-size: ${TEXT_SMALL};
  background: ${BACKGROUND};
  border-radius: .25rem;
`;

const Submit = styled.input`
  line-height: 2.4rem;
  margin: ${MARGIN_SMALL};
  text-align: center;
  border-radius: 1.2rem;
  cursor: pointer;
  border: 0;
  color: white;
  font-size: ${TEXT_SMALL};
  background-image: linear-gradient(
    to right,
    ${ACCENT} 0%,
    ${tinyColor(ACCENT).darken(10).toHexString()} 51%,
    ${tinyColor(ACCENT).darken(20).toHexString()} 100%
  );
`;

const Suggestion = ({ setSuggestionParams }) => {
  const [word, setWord] = useState('');
  const [feeling, setFeeling] = useState('');
  const [nostalgic, setNostalgic] = useState(false);
  const [toResult, setToResult] = useState(false);

  const invalidWord = word.length > 40;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (invalidWord) return;
    setSuggestionParams({
      word,
      feeling,
      nostalgic,
    });
    setToResult(true);
  };

  const handleRadioClick = (e) => setNostalgic(e.target.value === 'true');

  if (toResult) {
    return <Redirect to="/suggestion/result" />;
  }

  return (
    <Container>
      <Image src={formImage} alt="cinema" />
      <Form onSubmit={handleSubmit} target="/movies" autoComplete="off">
        <label htmlFor="word">
          <Question>What are you thinking?</Question>
          <TextInput
            name="word"
            type="text"
            value={word}
            placeholder="Write a word or two..."
            onChange={(e) => setWord(e.target.value)}
            required
          />
          {invalidWord && <InputError>The word is too long</InputError>}
        </label>
        <Space />
        <label htmlFor="feeling">
          <Question>How do you feel?</Question>
          <EmotionSelect
            name="feeling"
            value={feeling}
            onChange={(e) => setFeeling(e.target.value)}
            required
          >
            <option value="">Select a feeling</option>
            {Object.keys(feelings).map((key) => (
              <option key={key} value={key}>{feelings[key]}</option>
            ))}
          </EmotionSelect>
        </label>
        <Space />
        <Question>What’s your relationship with time</Question>
        <label htmlFor="nostalgic">
          <input name="nostalgic" type="radio" value="false" checked={!nostalgic} onChange={handleRadioClick} />
          &nbsp; I never look back
        </label>
        <label htmlFor="nostalgic">
          <input name="nostalgic" type="radio" value="true" checked={nostalgic} onChange={handleRadioClick} />
          &nbsp; I feel nostalgic
        </label>
        <Space />
        <Submit type="submit" value="Submit" />
      </Form>
    </Container>
  );
};

Suggestion.propTypes = {
  setSuggestionParams: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  ...actions,
};

export default connect(null, mapDispatchToProps)(Suggestion);
