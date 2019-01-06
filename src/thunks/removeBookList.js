import { removeBookList } from '../actions'

export const addBookList = (book) => {
  return dispatch => {
    const oldbookList = JSON.parse(localStorage.getItem('bookList'))
    const updatedList = oldbookList.filter(book => book.Name !== result.Name)
    localStorage.setItem('bookList', JSON.stringify(updatedList))
    dispatch(removeBookList(updatedList))
  }
}