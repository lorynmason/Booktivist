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

export const addMessage = message => {
  return {
    type: 'ADD_MESSAGE',
    message
  }
}

export const addBookList = bookList => {
  return {
    type: 'ADD_BOOK',
    bookList
  }
}

export const removeBookList = bookList => {
  return {
    type: 'REMOVE_BOOK',
    bookList
  }
}