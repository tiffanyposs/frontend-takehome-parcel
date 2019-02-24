import axios from 'axios';

import { SEARCH_GEMS, CLEAR_GEMS, SAVE_GEM } from './types';
import { API_ENDPOINT, LOCAL_STORAGE_KEY } from '../variables';

export const fetchGems = (searchQuery) => {
  return (dispatch) => {
    const query = `${API_ENDPOINT}${searchQuery}`;
    axios.get(query).then(res => {
      dispatch({
        type: SEARCH_GEMS,
        payload: res.data
      });
    });
  }
}

export const clearGems = () => {
  return {
    type: CLEAR_GEMS,
    payload: []
  }
}

export const saveGem = (gemData) => {
  const { name } = gemData;
  let savedGems = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

  // if it already exists in storage, delete it
  if (savedGems && savedGems[name]) {
    delete savedGems[name];
  } else {
    savedGems = savedGems ? { ...savedGems, [name]: gemData } : { [name]: gemData }
  }

  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(savedGems));

  return {
    type: SAVE_GEM,
    payload: savedGems
  }
}
