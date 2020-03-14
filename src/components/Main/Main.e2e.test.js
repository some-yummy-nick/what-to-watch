import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Main} from './Main.jsx';

const films = [
  {
    name: `Macbeth`
  },
];

Enzyme.configure({adapter: new Adapter()});

it(`Main is correctly clicked`, () => {
  const onTitleClick = jest.fn();
  const main = shallow(<Main
    films={films}
    handleTitleClick={onTitleClick}
  />);
  const title = main.find(`.small-movie-card__title`);
  title.forEach((el) => el.props().onClick());
  expect(onTitleClick.mock.calls.length).toBe(title.length);
});
