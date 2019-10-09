import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
// import * as actions from './actions';

const Movie = () => {
  const { id } = useParams();
  return <div>{id}</div>;
};

export default connect(null, null)(Movie);
