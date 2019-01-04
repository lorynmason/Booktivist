export const messageReducer = (state='', action) => {
  switch(action.type) {
    case 'ADD_Message':
      return action.message
    default:
      return state
  }
}