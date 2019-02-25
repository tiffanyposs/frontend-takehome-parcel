import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux';
import { mount, configure } from 'enzyme';

import DisplayGems from '../DisplayGems';

configure({ adapter: new Adapter() });

const mockStore = configureStore();

let store = mockStore({ gems: { queryData: [ { name: 'parse' }, { name: 'parse2' } ] } });
let wrapper = mount(<Provider store={store}><DisplayGems/></Provider>);

it('renders', () => {
  const wrapper = mount(<Provider store={store}><DisplayGems/></Provider>);
  expect(wrapper.find('.DisplayGems').length).toEqual(1);
});

it('renders appropriate amount of GemTiles', () => {
  expect(wrapper.find('.GemTile').length).toEqual(2);
});

it('renders fake tiles when gems are empty', () => {
  store = mockStore({ gems: { queryData: [] } });
  wrapper = mount(<Provider store={store}><DisplayGems/></Provider>);
  expect(wrapper.find('.FakeGemTiles').length).toEqual(1);
});
