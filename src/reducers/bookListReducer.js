export const bookListReducer = (state=[], action) => {
  switch(action.type) {
    case 'ADD_BOOK_LIST':
      return [...state, action.book]
    default:
      return state
  }
}