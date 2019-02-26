import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux';
import { mount, configure } from 'enzyme';

import SavedGemPage from '../SavedGemPage';

configure({ adapter: new Adapter() });

const mockStore = configureStore();

let store = mockStore({
  gems: {
    savedGems: {
      parse: { name: "parse" },
      parse2: { name: "parse2" }
    }
  }
});

let store2 = mockStore({
  gems: {
    savedGems: {}
  }
});

let wrapper = mount(<Provider store={store}><SavedGemPage /></Provider>);

it('renders', () => {
  expect(wrapper.find('.SavedGemPage').length).toEqual(1);
});

it('shows appropriate amount of gem tiles', () => {
  expect(wrapper.find('.GemTile').length).toEqual(2);
});

it('shows faker tiles when there are no saved gems', () => {
  wrapper = mount(<Provider store={store2}><SavedGemPage /></Provider>);
  expect(wrapper.find('.FakeGemTiles').length).toEqual(1);
});
