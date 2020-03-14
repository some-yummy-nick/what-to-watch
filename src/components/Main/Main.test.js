import React from 'react';
import renderer from 'react-test-renderer';
import {Main} from './Main.jsx';

const films = [
  {
    name: `Macbeth`
  },
];

it(`Main correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<Main
      films={films}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
