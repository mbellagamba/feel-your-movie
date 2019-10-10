import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import feelings from '../../resources/feelings';
import * as actions from './actions';

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Suggestion = ({ setSuggestionParams }) => {
  const [word, setWord] = useState('');
  const [feeling, setFeeling] = useState('');
  const [nostalgic, setNostalgic] = useState(false);
  const [toResult, setToResult] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
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
    <Form onSubmit={handleSubmit} target="/movies">
      <label htmlFor="word">
        <div>What are you thinking?</div>
        <input
          name="word"
          type="text"
          value={word}
          placeholder="Write a word or two..."
          onChange={(e) => setWord(e.target.value)}
        />
      </label>
      <label htmlFor="feeling">
        <div>How do you feel?</div>
        <select
          name="feeling"
          value={feeling}
          onChange={(e) => setFeeling(e.target.value)}
        >
          <option value="">Select a feeling</option>
          {Object.keys(feelings).map((key) => (
            <option key={key} value={key}>{feelings[key]}</option>
          ))}
        </select>
      </label>
      <label htmlFor="nostalgic">
        <input name="nostalgic" type="radio" value="false" checked={!nostalgic} onChange={handleRadioClick} />
        I never look back
      </label>
      <label htmlFor="nostalgic">
        <input name="nostalgic" type="radio" value="true" checked={nostalgic} onChange={handleRadioClick} />
        I feel nostalgic
      </label>
      <input type="submit" value="Submit" />
    </Form>
  );
};

Suggestion.propTypes = {
  setSuggestionParams: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  ...actions,
};

export default connect(null, mapDispatchToProps)(Suggestion);
