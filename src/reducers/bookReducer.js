export const bookReducer = (state=[], action) => {
  switch(action.type) {
    case 'ADD_RESULTS':
      console.log(action)
      return [
        ...action.search.Info, ...action.search.Results
      ]
    default:
      return state
  }
}