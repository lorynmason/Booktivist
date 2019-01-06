import { removeFromBookList } from '../actions'

export const removeBookList = (book) => {
  return dispatch => {
    const oldbookList = JSON.parse(localStorage.getItem('bookList'))
    const updatedList = oldbookList.filter(item => item.Name !== book.Name)
    localStorage.setItem('bookList', JSON.stringify(updatedList))
    dispatch(removeFromBookList(updatedList))
  }
}