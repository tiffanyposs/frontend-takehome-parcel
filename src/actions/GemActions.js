import axios from 'axios';

import { SEARCH_GEMS, SAVE_GEM } from './types';
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

export const saveGem = (gemData) => {
  const { name } = gemData;
  let savedGems = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  savedGems = savedGems ? { ...savedGems, [name]: gemData } : { [name]: gemData }
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(savedGems));
  return {
    type: SAVE_GEM,
    payload: savedGems
  }
}
