import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { mount, configure } from 'enzyme';

import Navbar from '../Navbar';
import { saveGem } from '../../actions/GemActions';

configure({ adapter: new Adapter() });

const mockStore = configureStore();

let store = mockStore({
  gems: {
    savedGems: {
      parse: { name: "parse" }
    }
  }
});

let wrapper = mount(
  <Provider store={store}>
    <Router>
      <Navbar />
    </Router>
  </Provider>
);

it('renders', () => {
  expect(wrapper.find('.Navbar').length).toEqual(1);
});

it('shows correct number of saved gems', () => {
  expect(wrapper.find('.Navbar-saved-gems').text()).toContain('1');
});

it('displays the correct links', () => {
  expect(wrapper.find('.Navbar-left Link').props().to).toBe('/');
  expect(wrapper.find('.Navbar-right Link').props().to).toBe('/saved');
});
