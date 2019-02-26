import gemReducer from '../reducer_gem';
import { SEARCH_GEMS, CLEAR_GEMS, SAVE_GEM } from '../../actions/types';

describe('SEARCH_GEMS', () => {
  const INITIAL_STATE = {
    queryData: [],
    savedGems: { parser: { name: 'parser' } }
  };

  it('updates queryData to SEARCH_GEMS payload array', () => {
    let action = {
      type: SEARCH_GEMS,
      payload: [ { name: 'parser' }, { name: 'parser2' } ]
    };

    let newState = gemReducer(INITIAL_STATE, action);

    expect(newState).toEqual({
      queryData: [ { name: 'parser' }, { name: 'parser2' } ],
      savedGems: { parser: { name: 'parser' }}
    });
  });

  it('updates queryData to empty payload', () => {
    let action = {
      type: SEARCH_GEMS,
      payload: []
    };

    let newState = gemReducer(INITIAL_STATE, action);

    expect(newState).toEqual({
      queryData: [],
      savedGems: { parser: { name: 'parser' }}
    });
  });
});


describe('CLEAR_GEMS', () => {
  const INITIAL_STATE = {
    queryData: [{ name: 'parse' }, { name: 'parse2' }],
    savedGems: { parser: { name: 'parser' } }
  };

  it('clear queryData to empty payload', () => {
    let action = {
      type: CLEAR_GEMS,
      payload: []
    };

    let newState = gemReducer(INITIAL_STATE, action);

    expect(newState).toEqual({
      queryData: [],
      savedGems: { parser: { name: 'parser' }}
    });
  });
});

describe('SAVE_GEM', () => {
  const INITIAL_STATE = {
    queryData: [],
    savedGems: { parser: { name: 'parser' } }
  };

  it('saves gem to savedGems', () => {
    let action = {
      type: SAVE_GEM,
      payload: {
        parser: { name: 'parser' },
        parser2: { name: 'parser2' }
      }
    };

    let newState = gemReducer(INITIAL_STATE, action);

    expect(newState).toEqual({
      queryData: [],
      savedGems: { parser: { name: 'parser' }, parser2: { name: 'parser2' }}
    });
  });

});
