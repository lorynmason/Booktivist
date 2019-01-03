export const bookReducer = (state=[], action) => {
  switch(action.type) {
    case 'FETCH_SEARCH':
      return action
    default:
      return state
  }
}