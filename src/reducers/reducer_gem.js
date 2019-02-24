import { SEARCH_GEMS, CLEAR_GEMS, SAVE_GEM } from '../actions/types';
import { LOCAL_STORAGE_KEY } from '../variables';

const INITIAL_STATE = {
  queryData: [],
  savedGems: JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEARCH_GEMS:
      return { ...state, queryData: action.payload };
    case CLEAR_GEMS:
      return { ...state, queryData: [] }
    case SAVE_GEM:
      return { ...state, savedGems: action.payload };
    default:
      return state;
  }
};
