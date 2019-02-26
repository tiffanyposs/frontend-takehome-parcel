import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Hero from '../Hero';

configure({ adapter: new Adapter() });

let wrapper = shallow(<Hero />);

it('renders', () => {
  expect(wrapper.find('.Hero').length).toEqual(1);
});
