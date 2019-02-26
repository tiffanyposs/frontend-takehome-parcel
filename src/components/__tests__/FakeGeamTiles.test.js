import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import FakeGemTiles from '../FakeGemTiles';

configure({ adapter: new Adapter() });

let wrapper = shallow(<FakeGemTiles />);

it('renders', () => {
  expect(wrapper.find('.FakeGemTiles').length).toEqual(1);
});

it('displays 9 faker tiles', () => {
  expect(wrapper.find('.FakeGemTiles-tile').length).toEqual(9);
});
