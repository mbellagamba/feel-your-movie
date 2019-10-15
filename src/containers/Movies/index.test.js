import React from 'react';
import { Provider } from 'react-redux';
import { render, fireEvent } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import Movies from './index';
import { DISCOVER_MOVIES } from './actionTypes';

function createMovie(id) {
  return {
    id,
    title: `movie ${id}`,
    vote_average: 0,
    vote_count: 0,
    release_date: '2019',
  };
}

jest.mock('react-router-dom', () => ({
  Link: () => <div />,
  useLocation: jest.fn(() => 'fake-route'),
}));

test('should match snapshot without movies', () => {
  const mockStore = configureStore();
  const store = mockStore({
    movies: {
      movies: [],
      loading: false,
    },
  });
  const { asFragment } = render((
    <Provider store={store}>
      <Movies />
    </Provider>
  ));
  expect(asFragment()).toMatchSnapshot();
});

test('should match snapshot', () => {
  const length = 3;
  const movies = [...Array(length).keys()].map(createMovie);
  const mockStore = configureStore();
  const store = mockStore({
    movies: {
      movies,
      loading: false,
    },
  });
  const { asFragment } = render((
    <Provider store={store}>
      <Movies />
    </Provider>
  ));
  expect(asFragment()).toMatchSnapshot();
});

test('should show movies list', () => {
  const length = 3;
  const movies = [...Array(length).keys()].map(createMovie);
  const mockStore = configureStore();
  const store = mockStore({
    movies: {
      movies,
      loading: false,
    },
  });
  const { getByTestId } = render((
    <Provider store={store}>
      <Movies />
    </Provider>
  ));
  expect(getByTestId('movies-grid').children.length).toEqual(length);
});

test('should not show any movie if list is empty', () => {
  const mockStore = configureStore();
  const store = mockStore({
    movies: {
      movies: [],
      loading: false,
    },
  });
  const { getByText } = render((
    <Provider store={store}>
      <Movies />
    </Provider>
  ));
  expect(getByText('No movie found')).toBeInTheDocument();
});

test('should dispatch DISCOVER_MOVIES action on mount', () => {
  const mockStore = configureStore();
  const store = mockStore({
    movies: {
      movies: [],
      loading: false,
    },
  });
  render((
    <Provider store={store}>
      <Movies />
    </Provider>
  ));
  expect(store.getActions()[0].type).toEqual(DISCOVER_MOVIES);
});

test('should show load component if it is loading', () => {
  const mockStore = configureStore();
  const store = mockStore({
    movies: {
      movies: [],
      loading: true,
    },
  });
  const { getByText } = render((
    <Provider store={store}>
      <Movies />
    </Provider>
  ));
  expect(getByText('Loading')).toBeInTheDocument();
});

test('should load more items on button click', () => {
  const mockStore = configureStore();
  const store = mockStore({
    movies: {
      movies: [createMovie(2)],
      loading: false,
    },
  });
  const { getByText } = render((
    <Provider store={store}>
      <Movies />
    </Provider>
  ));
  fireEvent.click(getByText('Load more'));
  // The action DISCOVER_MOVIES should be dispatched 2 times
  // On mount and on load more click
  const actions = store.getActions()
    .filter((a) => a.type === DISCOVER_MOVIES);
  expect(actions).toHaveLength(2);
});
