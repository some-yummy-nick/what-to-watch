import React from 'react';
import renderer from 'react-test-renderer';
import {Main} from './Main.jsx';

it(`Main correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<Main
      films={[`один`, `два`, `три`, `четыре`]}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
