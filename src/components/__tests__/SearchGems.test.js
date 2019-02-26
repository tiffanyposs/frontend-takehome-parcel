import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import thunk from "redux-thunk";
import { Provider } from 'react-redux';
import { mount, configure } from 'enzyme';

import SearchGems from '../SearchGems';

configure({ adapter: new Adapter() });

const mockStore = configureStore([thunk]);
const store = mockStore();
const wrapper = mount(<Provider store={store}><SearchGems /></Provider>);

it('renders', () => {
  expect(wrapper.find('.SearchGems').length).toEqual(1);
});

it('updates the value of the input on typing', () => {
  wrapper.find('.Search-input').simulate('change', {
    target: { value: 'parser' }
  });
  wrapper.update();
  expect(wrapper.find('.Search-input').prop('value')).toEqual('parser');
});
