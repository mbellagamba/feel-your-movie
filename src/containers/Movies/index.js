import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from './actions';

const Movies = (props) => {
  const {
    discoverMovies,
    movies,
  } = props;
  useEffect(() => {
    discoverMovies();
  }, [discoverMovies]);

  return (
    <div>
      <ul>
        {movies && movies.map((m) => (
          <Link key={m.id} to={`/movies/${m.id}`}>
            <li>{m.title}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

Movies.propTypes = {
  discoverMovies: PropTypes.func.isRequired,
  movies: PropTypes.arrayOf(Object).isRequired,
};

const mapStateToProps = (state) => ({
  ...state.movies,
});

const mapDispatchToProps = {
  ...actions,
};

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
