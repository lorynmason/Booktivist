import { combineReducers } from 'redux';
import { resultsReducer } from './resultsReducer';
import { infoReducer } from './infoReducer'
import { messageReducer } from './messageReducer';
import { bookListReducer } from './bookListReducer'

export const rootReducer = combineReducers({
  results: resultsReducer,
  info: infoReducer,
  message: messageReducer,
  bookList: bookListReducer
})