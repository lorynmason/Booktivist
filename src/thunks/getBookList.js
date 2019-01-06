// import { getBookList } from '../actions'

export const getBookList = (book) => {
  return dispatch => {
    const bookList = JSON.parse(localStorage.getItem('bookList'))
    // dispatch(getBookList(bookList))
  }
}