import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux';
import { mount, configure } from 'enzyme';

import GemTile from '../GemTile';

configure({ adapter: new Adapter() });

const mockStore = configureStore();

let store = mockStore({
  gems: {
    savedGems: {
      parse: { name: "parse" }
    }
  }
});

let data = {
  name: "parse",
  info: "Parses things.",
  authors: "Joe Shmo",
  downloads: "4000"
}

let data2 = {
  name: 'parser2',
  info: 'Parses more things.',
  authors: "Suzy Q",
  downloads: "500000"
}

let wrapper = mount(<Provider store={store}><GemTile data={data}/></Provider>);

it('renders', () => {
  expect(wrapper.find('.GemTile').length).toEqual(1);
});

it('renders gem data', () => {
  expect(wrapper.find('.GemTile-name').text()).toContain('parse');
  expect(wrapper.find('.GemTile-info').text()).toContain('Parses things.');
  expect(wrapper.find('.GemTile-authors').text()).toContain('Joe Shmo');
  expect(wrapper.find('.GemTile-downloads').text()).toContain('4,000');
});

it('displays already saved gems as saved', () => {
  expect(wrapper.find('.GemTile-star-saved').length).toEqual(2);
});

it('displays non-saved gems as not saved', () => {
  wrapper = mount(<Provider store={store}><GemTile data={data2}/></Provider>);
  expect(wrapper.find('.GemTile-star-saved').length).toEqual(0);
});
