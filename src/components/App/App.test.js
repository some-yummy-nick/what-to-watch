import React from 'react';
import renderer from 'react-test-renderer';
import {App} from './App.jsx';

const films = [
  {
    name: `Fantastic Beasts`
  },
];

it(`App correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<App films={films}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
