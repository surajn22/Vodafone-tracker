import React from 'react';
import renderer from 'react-test-renderer';
import Activity from './Activity';

it('renders correctly', () => {
  const tree = renderer
    .create(<Activity />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});