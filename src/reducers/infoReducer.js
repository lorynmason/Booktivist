export const infoReducer = (state={}, action) => {
  switch(action.type) {
    case 'ADD_INFO':
      return action.info
    default:
      return state
  }
}