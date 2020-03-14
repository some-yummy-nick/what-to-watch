import React from 'react';
import renderer from 'react-test-renderer';
import {SmallMovieCard} from './SmallMovieCard.jsx';

const film = {name: `some`};

it(`SmallMovieCard correctly renders after relaunch`, () => {
  const handleClick = jest.fn();
  const tree = renderer
    .create(<SmallMovieCard
      film={film}
      onHover={handleClick}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
