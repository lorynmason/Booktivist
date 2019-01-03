import { key } from '../apikey'

export const fetchBooks = async(search) => {
  try {
    const response = await fetch(`https://tastedive.com/api/similar?k=${key}&q=${search}&type=books&verbose=1&wTeaser=item description`)
    if(!response.ok) {

    }
    const results = await response.json()
  } catch (err) {

  }
}