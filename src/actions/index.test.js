import * as actions from './index';

describe('actions', () => { 
  it('should return a type of ADD_RESULTS with an results array', () => {
    const mockBooks = [{ Name: 'Into the Wild' }, { Name: 'Looking for Alaska' }];
    const expected = { type: 'ADD_RESULTS', results: mockBooks };
    const result = actions.addSearchResults(mockBooks);
    expect(result).toEqual(expected);
  })

  it('should return a type of ADD_INFO with an info object', () => {
    const mockBook = { Name: 'Into the Wild' };
    const expected = { type: 'ADD_INFO', info: mockBook };
    const result = actions.addSearchInfo(mockBook);
    expect(result).toEqual(expected);
  })

  it('should return a type of ADD_MESSAGE with a message', () => {
    const mockMessage = 'message'
    const expected = { type: 'ADD_MESSAGE', message: mockMessage };
    const result = actions.addMessage(mockMessage);
    expect(result).toEqual(expected);
  })

  it('should return a type of ADD_BOOK with a bookList array', () => {
    const mockBooks = [{ Name: 'Into the Wild' }, { Name: 'Looking for Alaska' }];
    const expected = { type: 'ADD_BOOK', bookList: mockBooks };
    const result = actions.addToBookList(mockBooks);
    expect(result).toEqual(expected);
  })

  it('should return a type of REMOVE_BOOK with a bookList array', () => {
    const mockBooks = [{ Name: 'Into the Wild' }, { Name: 'Looking for Alaska' }];
    const expected = { type: 'REMOVE_BOOK', bookList: mockBooks };
    const result = actions.removeFromBookList(mockBooks);
    expect(result).toEqual(expected);
  })

  it('should return a type of RETRIEVE_LIST with a bookList array', () => {
    const mockBooks = [{ Name: 'Into the Wild' }, { Name: 'Looking for Alaska' }];
    const expected = { type: 'RETRIEVE_LIST', bookList: mockBooks };
    const result = actions.retrieveBookList(mockBooks);
    expect(result).toEqual(expected);
  })

  it('should return a type of IS Loading with a bool', () => {
    const mockBool = true;
    const expected = { type: 'IS_LOADING', isLoading: mockBool };
    const result = actions.isLoading(mockBool);
    expect(result).toEqual(expected);
  })
})