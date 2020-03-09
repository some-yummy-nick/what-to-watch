import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Main} from './Main.jsx';

Enzyme.configure({adapter: new Adapter()});

it(`Main is correctly clicked`, () => {
  const onTitleClick = jest.fn();
  const main = shallow(<Main
    films={[`один`, `два`, `три`, `четыре`]}
    handleTitleClick={onTitleClick}
  />);
  const title = main.find(`.small-movie-card__title`);
  title.forEach((el) => el.props().onClick());
  expect(onTitleClick.mock.calls.length).toBe(title.length);
});
