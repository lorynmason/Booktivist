import { combineReducers } from 'redux';
import { bookReducer } from './bookReducer';
import { infoReducer } from './infoReducer'

export const rootReducer = combineReducers({
  books: bookReducer,
  info: infoReducer
})