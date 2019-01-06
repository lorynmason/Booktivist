import { addBookList } from '../actions'

export const addBookList = (book) => {
  return dispatch => {
    const oldbookList = JSON.parse(localStorage.getItem('bookList'))
    if(oldbookList) {
      const updatedList = [...oldbookList, book]
      localStorage.setItem('bookList', JSON.stringify(updatedList))
      dispatch(addBookList(updatedList))
    } else {
      localStorage.setItem('bookList', JSON.stringify([book]))
      dispatch(addBookList([book]))
    }
  }
}