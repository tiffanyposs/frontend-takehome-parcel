import {
  SEARCH_GEMS,
} from '../actions/types';

const INITIAL_STATE = {
  data: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEARCH_GEMS:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};
