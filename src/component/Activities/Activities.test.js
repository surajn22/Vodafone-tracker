import React from 'react';
import renderer from 'react-test-renderer';
import Activities from './Activities';
import data from '../../data.json'

it('renders correctly', () => {
  const tree = renderer
    .create(<Activities data={data} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});