import { combineReducers } from 'redux';
import { resultsReducer } from './resultsReducer';
import { infoReducer } from './infoReducer'

export const rootReducer = combineReducers({
  results: resultsReducer,
  info: infoReducer
})