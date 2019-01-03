export const fetchSearch = search => {
  return {
    type: 'FETCH_SEARCH',
    search: search,
  }
}