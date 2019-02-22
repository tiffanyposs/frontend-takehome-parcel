import { combineReducers } from 'redux';
import GemReducer from './reducer_gem';

const rootReducer = combineReducers({
  gems: GemReducer,
});

export default rootReducer;
