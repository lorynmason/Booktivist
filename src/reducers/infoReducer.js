export const infoReducer = (state={}, action) => {
  switch(action.type) {
    case 'ADD_INFO':
      const info = action.info.reduce((obj, item) => {
        obj= item
        return obj
      }, {})
      return info
    default:
      return state
  }
}