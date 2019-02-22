import axios from 'axios';

import { SEARCH_GEMS } from './types';

const API_ENDPOINT = 'http://localhost:3000/api/v1/search.json?query=';

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
