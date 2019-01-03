import { key } from '../apikey';
import { addSearchResults } from '../actions'


export const fetchBooks = (search) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`https://cors-anywhere.herokuapp.com/https://tastedive.com/api/similar?k=${key}&q=${search}&type=books&verbose=1&wTeaser=item description`)
      if(!response.ok) {
      }
      const results = await response.json()
      console.log(results)
      dispatch(addSearchResults(results.Similar))
    } catch (err) {
      console.log(err)
    }
  }
}