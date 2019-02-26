import { saveGem, clearGems } from '../GemActions';
import { SAVE_GEM, CLEAR_GEMS } from '../types';

describe('saveGem', () => {
  it('has the correct type', () => {
    const action = saveGem({ name: 'parse' });
    expect(action.type).toEqual(SAVE_GEM);
    expect(action.payload).toEqual({ parse: { name: 'parse' }});
  });

  it('adds another gem to payload', () => {
    const action = saveGem({ name: 'parse2' });
    expect(action.payload).toEqual({
      parse: { name: 'parse' },
      parse2: { name: 'parse2' }
    })
  });

  it('removes existing gems if passed', () => {
    const action = saveGem({ name: 'parse' });
    expect(action.payload).toEqual({ parse2: { name: 'parse2' } })
  })
});

describe('clearGems', () => {
  it('has the correct type', () => {
    const action = clearGems();
    expect(action.type).toEqual(CLEAR_GEMS);
  });

  it('has the correct payload', () => {
    const action = clearGems('new comment');
    expect(action.payload).toEqual([]);
  });
});
