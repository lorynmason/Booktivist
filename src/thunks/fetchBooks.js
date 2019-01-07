import { key } from '../apikey';
import { addSearchResults, addSearchInfo, addMessage, isLoading } from '../actions'


export const fetchBooks = (search) => {
  return async (dispatch) => {
    try {
      dispatch(isLoading(true))
      dispatch(addMessage('Looking for Similar Books...'))
      const response = await fetch(`https://cors-anywhere.herokuapp.com/https://tastedive.com/api/similar?k=${key}&q=${search}&type=books&verbose=1&wTeaser=item description`)
      if(!response.ok) {
        throw Error(response.statusText)
      }
      const results = await response.json()
      dispatch(isLoading(false))
      if (results.Similar.Results.length) {
        dispatch(addMessage('Found Similar Books!'))
        dispatch(addSearchResults(results.Similar.Results))
        dispatch(addSearchInfo(results.Similar.Info))
      } else {
        dispatch(addSearchResults())
        dispatch(addSearchInfo())
      }
    } catch (err) {
      dispatch(addMessage(err.message))
    }
  }
}