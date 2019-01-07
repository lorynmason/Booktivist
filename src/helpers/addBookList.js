import { addToBookList, addMessage } from '../actions'

export const addBookList = (book) => {
  return dispatch => {
    const oldbookList = JSON.parse(localStorage.getItem('bookList'))
    if(oldbookList) {
      const updatedList = [...oldbookList, book]
      localStorage.setItem('bookList', JSON.stringify(updatedList))
      dispatch(addToBookList(updatedList))
      dispatch(addMessage(`${book.Name} was Added to Your Must Read List`))
    } else {
      localStorage.setItem('bookList', JSON.stringify([book]))
      dispatch(addToBookList([book]))
      dispatch(addMessage(`${book.Name} was Added to Your Must Read List`))
    }
  }
}