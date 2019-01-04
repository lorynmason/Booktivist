export const bookListReducer = (state=[], action) => {
  switch(action.type) {
    case 'ADD_BOOK_LIST':
      return action.book.Name
    default:
      return state
  }
}