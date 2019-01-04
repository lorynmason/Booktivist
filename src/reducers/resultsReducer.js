export const resultsReducer = (state=[], action) => {
  switch(action.type) {
    case 'ADD_RESULTS':
      return action.results
    default:
      return state
  }
}