import React from 'react';
import { render } from '@testing-library/react';
import CategoryItem from './index';

test('should show the given name', () => {
  const name = 'test';
  const { getByText } = render(<CategoryItem index={0} name={name} />);
  expect(getByText(name)).toBeInTheDocument();
});

test('should match snapshot', () => {
  const { asFragment } = render(<CategoryItem index={0} name="test" />);
  expect(asFragment()).toMatchSnapshot();
});
