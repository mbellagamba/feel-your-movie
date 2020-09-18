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
  const { getByTestId } = render(<DrawerLayout><div /></DrawerLayout>);
  const sidebar = getByTestId('sidebar');
  expect(sidebar).toHaveStyleRule('width', '260px');
  fireEvent.click(getByTestId('menu-button'));
  expect(sidebar).toHaveStyleRule('width', '0');
});

test('should match snapshot', () => {
  const { asFragment } = render(<DrawerLayout><div /></DrawerLayout>);
  expect(asFragment()).toMatchSnapshot();
});
