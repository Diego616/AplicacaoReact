import { combineReducers } from 'redux';

import examplerReducer from './example/reducer';

export default combineReducers({
  example: examplerReducer,
});
