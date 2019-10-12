import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import DrawerLayout from './index';

jest.mock('react-router-dom', () => ({
  Link: () => <div />,
  useLocation: jest.fn(() => 'fake-route'),
}));

jest.mock('../../hooks', () => ({
  useWindowDimensions: jest.fn(() => ({ width: 1024 })),
}));

test('should close the sidebar on menu icon click', () => {
  const { getByTestId, getByAltText } = render(<DrawerLayout><div /></DrawerLayout>);
  expect(getByTestId('sidebar')).toHaveStyle('width: 260px');
  fireEvent.click(getByAltText('Menu').parentNode);
  expect(getByTestId('sidebar')).toHaveStyle('width: 0');
});

test('should match snapshot', () => {
  const { asFragment } = render(<DrawerLayout><div /></DrawerLayout>);
  expect(asFragment()).toMatchSnapshot();
});
