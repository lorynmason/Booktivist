export const bookReducer = (state=[], action) => {
  switch(action.type) {
    case 'ADD_RESULTS':
      return [
        ...action.search.Info, ...action.search.Results
      ]
    default:
      return state
  }
}