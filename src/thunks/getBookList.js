import { retrieveBookList } from '../actions'

export const getBookList = () => {
  return dispatch => {
    const bookList = JSON.parse(localStorage.getItem('bookList'))
    if (bookList) {
      dispatch(retrieveBookList(bookList))
    }
  }
}