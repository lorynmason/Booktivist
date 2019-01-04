export const addSearchResults = results => {
  return {
    type: 'ADD_RESULTS',
    results,
  }
}

export const addSearchInfo = info => {
  return {
    type: 'ADD_INFO',
    info,
  }
}