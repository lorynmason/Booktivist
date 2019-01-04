import { combineReducers } from 'redux';
import { resultsReducer } from './resultsReducer';
import { infoReducer } from './infoReducer'
import { messageReducer } from './messageReducer';

export const rootReducer = combineReducers({
  results: resultsReducer,
  info: infoReducer,
  message: messageReducer
})