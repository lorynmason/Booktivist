import { retrieveBookList } from '../actions'

export const getBookList = () => {
  return dispatch => {
    const bookList = JSON.parse(localStorage.getItem('bookList'))
    dispatch(retrieveBookList(bookList))
  }
}