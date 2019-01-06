export const bookListReducer = (state=[], action) => {
  switch(action.type) {
    case 'ADD_BOOK':
      return action.bookList
    case 'REMOVE_BOOK':
      return action.bookList
    default:
      return state
  }
}