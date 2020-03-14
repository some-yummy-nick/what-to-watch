import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {SmallMovieCard} from './SmallMovieCard.jsx';

const film = {name: `some`};

Enzyme.configure({adapter: new Adapter()});

it(`SmallMovieCard is correctly hovered`, () => {
  const onHover = jest.fn();
  const card = shallow(<SmallMovieCard
    film={film}
    onHover={onHover}
  />);
  card.props().onMouseOver();
  expect(onHover.mock.calls.length).toBe(1);
});
