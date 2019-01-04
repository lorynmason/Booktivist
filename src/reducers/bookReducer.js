export const bookReducer = (state=[], action) => {
  switch(action.type) {
    case 'ADD_RESULTS':
      return action.results
    default:
      return state
  }
}