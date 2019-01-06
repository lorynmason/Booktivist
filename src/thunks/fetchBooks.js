import { key } from '../apikey';
import { addSearchResults, addSearchInfo, addMessage, isLoading } from '../actions'


export const fetchBooks = (search) => {
  return async (dispatch) => {
    try {
      dispatch(isLoading(true))
      const response = await fetch(`https://cors-anywhere.herokuapp.com/https://tastedive.com/api/similar?k=${key}&q=${search}&type=books&verbose=1&wTeaser=item description`)
      if(!response.ok) {
        throw Error(response.statusText)
      }
      dispatch(isLoading(false))
      const results = await response.json()
      dispatch(addSearchResults(results.Similar.Results))
      dispatch(addSearchInfo(results.Similar.Info))
      if (results.Similar.Results.length) {
        dispatch(addMessage(`Found Similar Books!`))
      }
    } catch (err) {
      dispatch(addMessage(err.message))
    }
  }
}