import { SEARCH_GEMS, SAVE_GEM } from '../actions/types';
import { LOCAL_STORAGE_KEY } from '../variables';

const INITIAL_STATE = {
  data: [],
  savedGems: JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEARCH_GEMS:
      return { ...state, data: action.payload };
    case SAVE_GEM:
      return { ...state, savedGems: action.payload };
    default:
      return state;
  }
};
