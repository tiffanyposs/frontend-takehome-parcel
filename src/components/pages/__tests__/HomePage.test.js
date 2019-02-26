import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import HomePage from '../HomePage';

configure({ adapter: new Adapter() });

let wrapper = shallow(<HomePage />);

it('renders', () => {
  expect(wrapper.find('.HomePage').length).toEqual(1);
});
